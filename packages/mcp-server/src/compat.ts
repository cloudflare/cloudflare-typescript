import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import { Endpoint } from './tools';

export interface ClientCapabilities {
  topLevelUnions: boolean;
  validJson: boolean;
  refs: boolean;
  unions: boolean;
  formats: boolean;
  toolNameLength: number | undefined;
}

export const defaultClientCapabilities: ClientCapabilities = {
  topLevelUnions: true,
  validJson: true,
  refs: true,
  unions: true,
  formats: true,
  toolNameLength: undefined,
};

export const ClientType = z.enum(['openai-agents', 'claude', 'claude-code', 'cursor', 'infer']);
export type ClientType = z.infer<typeof ClientType>;

// Client presets for compatibility
// Note that these could change over time as models get better, so this is
// a best effort.
export const knownClients: Record<Exclude<ClientType, 'infer'>, ClientCapabilities> = {
  'openai-agents': {
    topLevelUnions: false,
    validJson: true,
    refs: true,
    unions: true,
    formats: true,
    toolNameLength: undefined,
  },
  claude: {
    topLevelUnions: true,
    validJson: false,
    refs: true,
    unions: true,
    formats: true,
    toolNameLength: undefined,
  },
  'claude-code': {
    topLevelUnions: false,
    validJson: true,
    refs: true,
    unions: true,
    formats: true,
    toolNameLength: undefined,
  },
  cursor: {
    topLevelUnions: false,
    validJson: true,
    refs: false,
    unions: false,
    formats: false,
    toolNameLength: 50,
  },
};

/**
 * Attempts to parse strings into JSON objects
 */
export function parseEmbeddedJSON(args: Record<string, unknown>, schema: Record<string, unknown>) {
  let updated = false;
  const newArgs: Record<string, unknown> = Object.assign({}, args);

  for (const [key, value] of Object.entries(newArgs)) {
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        // Only parse if result is a plain object (not array, null, or primitive)
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          newArgs[key] = parsed;
          updated = true;
        }
      } catch (e) {
        // Not valid JSON, leave as is
      }
    }
  }

  if (updated) {
    return newArgs;
  }

  return args;
}

export type JSONSchema = {
  type?: string;
  properties?: Record<string, JSONSchema>;
  required?: string[];
  anyOf?: JSONSchema[];
  $ref?: string;
  $defs?: Record<string, JSONSchema>;
  [key: string]: any;
};

/**
 * Truncates tool names to the specified length while ensuring uniqueness.
 * If truncation would cause duplicate names, appends a number to make them unique.
 */
export function truncateToolNames(names: string[], maxLength: number): Map<string, string> {
  if (maxLength <= 0) {
    return new Map();
  }

  const renameMap = new Map<string, string>();
  const usedNames = new Set<string>();

  const toTruncate = names.filter((name) => name.length > maxLength);

  if (toTruncate.length === 0) {
    return renameMap;
  }

  const willCollide =
    new Set(toTruncate.map((name) => name.slice(0, maxLength - 1))).size < toTruncate.length;

  if (!willCollide) {
    for (const name of toTruncate) {
      const truncatedName = name.slice(0, maxLength);
      renameMap.set(name, truncatedName);
    }
  } else {
    const baseLength = maxLength - 1;

    for (const name of toTruncate) {
      const baseName = name.slice(0, baseLength);
      let counter = 1;

      while (usedNames.has(baseName + counter)) {
        counter++;
      }

      const finalName = baseName + counter;
      renameMap.set(name, finalName);
      usedNames.add(finalName);
    }
  }

  return renameMap;
}

/**
 * Removes top-level unions from a tool by splitting it into multiple tools,
 * one for each variant in the union.
 */
export function removeTopLevelUnions(tool: Tool): Tool[] {
  const inputSchema = tool.inputSchema as JSONSchema;
  const variants = inputSchema.anyOf;

  if (!variants || !Array.isArray(variants) || variants.length === 0) {
    return [tool];
  }

  const defs = inputSchema.$defs || {};

  return variants.map((variant, index) => {
    const variantSchema: JSONSchema = {
      ...inputSchema,
      ...variant,
      type: 'object',
      properties: {
        ...(inputSchema.properties || {}),
        ...(variant.properties || {}),
      },
    };

    delete variantSchema.anyOf;

    if (!variantSchema['description']) {
      variantSchema['description'] = tool.description;
    }

    const usedDefs = findUsedDefs(variant, defs);
    if (Object.keys(usedDefs).length > 0) {
      variantSchema.$defs = usedDefs;
    } else {
      delete variantSchema.$defs;
    }

    return {
      ...tool,
      name: `${tool.name}_${toSnakeCase(variant['title'] || `variant${index + 1}`)}`,
      description: variant['description'] || tool.description,
      inputSchema: variantSchema,
    } as Tool;
  });
}

function findUsedDefs(
  schema: JSONSchema,
  defs: Record<string, JSONSchema>,
  visited: Set<string> = new Set(),
): Record<string, JSONSchema> {
  const usedDefs: Record<string, JSONSchema> = {};

  if (typeof schema !== 'object' || schema === null) {
    return usedDefs;
  }

  if (schema.$ref) {
    const refParts = schema.$ref.split('/');
    if (refParts[0] === '#' && refParts[1] === '$defs' && refParts[2]) {
      const defName = refParts[2];
      const def = defs[defName];
      if (def && !visited.has(schema.$ref)) {
        usedDefs[defName] = def;
        visited.add(schema.$ref);
        Object.assign(usedDefs, findUsedDefs(def, defs, visited));
        visited.delete(schema.$ref);
      }
    }
    return usedDefs;
  }

  for (const key in schema) {
    if (key !== '$defs' && typeof schema[key] === 'object' && schema[key] !== null) {
      Object.assign(usedDefs, findUsedDefs(schema[key] as JSONSchema, defs, visited));
    }
  }

  return usedDefs;
}

// Export for testing
export { findUsedDefs };

/**
 * Inlines all $refs in a schema, eliminating $defs.
 * If a circular reference is detected, the circular property is removed.
 */
export function inlineRefs(schema: JSONSchema): JSONSchema {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }

  const clonedSchema = { ...schema };
  const defs: Record<string, JSONSchema> = schema.$defs || {};

  delete clonedSchema.$defs;

  const result = inlineRefsRecursive(clonedSchema, defs, new Set<string>());
  // The top level can never be null
  return result === null ? {} : result;
}

function inlineRefsRecursive(
  schema: JSONSchema,
  defs: Record<string, JSONSchema>,
  refPath: Set<string>,
): JSONSchema | null {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }

  if (Array.isArray(schema)) {
    return schema.map((item) => {
      const processed = inlineRefsRecursive(item, defs, refPath);
      return processed === null ? {} : processed;
    }) as JSONSchema;
  }

  const result = { ...schema };

  if ('$ref' in result && typeof result.$ref === 'string') {
    if (result.$ref.startsWith('#/$defs/')) {
      const refName = result.$ref.split('/').pop() as string;
      const def = defs[refName];

      // If we've already seen this ref in our path, we have a circular reference
      if (refPath.has(result.$ref)) {
        // For circular references, we completely remove the property
        // by returning null. The parent will remove it.
        return null;
      }

      if (def) {
        const newRefPath = new Set(refPath);
        newRefPath.add(result.$ref);

        const inlinedDef = inlineRefsRecursive({ ...def }, defs, newRefPath);

        if (inlinedDef === null) {
          return { ...result };
        }

        // Merge the inlined definition with the original schema's properties
        // but preserve things like description, etc.
        const { $ref, ...rest } = result;
        return { ...inlinedDef, ...rest };
      }
    }

    // Keep external refs as-is
    return result;
  }

  for (const key in result) {
    if (result[key] && typeof result[key] === 'object') {
      const processed = inlineRefsRecursive(result[key] as JSONSchema, defs, refPath);
      if (processed === null) {
        // Remove properties that would cause circular references
        delete result[key];
      } else {
        result[key] = processed;
      }
    }
  }

  return result;
}

/**
 * Removes anyOf fields from a schema, using only the first variant.
 */
export function removeAnyOf(schema: JSONSchema): JSONSchema {
  if (!schema || typeof schema !== 'object') {
    return schema;
  }

  if (Array.isArray(schema)) {
    return schema.map((item) => removeAnyOf(item)) as JSONSchema;
  }

  const result = { ...schema };

  if ('anyOf' in result && Array.isArray(result.anyOf) && result.anyOf.length > 0) {
    const firstVariant = result.anyOf[0];

    if (firstVariant && typeof firstVariant === 'object') {
      // Special handling for properties to ensure deep merge
      if (firstVariant.properties && result.properties) {
        result.properties = {
          ...result.properties,
          ...(firstVariant.properties as Record<string, JSONSchema>),
        };
      } else if (firstVariant.properties) {
        result.properties = { ...firstVariant.properties };
      }

      for (const key in firstVariant) {
        if (key !== 'properties') {
          result[key] = firstVariant[key];
        }
      }
    }

    delete result.anyOf;
  }

  for (const key in result) {
    if (result[key] && typeof result[key] === 'object') {
      result[key] = removeAnyOf(result[key] as JSONSchema);
    }
  }

  return result;
}

/**
 * Removes format fields from a schema and appends them to the description.
 */
export function removeFormats(schema: JSONSchema, formatsCapability: boolean): JSONSchema {
  if (formatsCapability) {
    return schema;
  }

  if (!schema || typeof schema !== 'object') {
    return schema;
  }

  if (Array.isArray(schema)) {
    return schema.map((item) => removeFormats(item, formatsCapability)) as JSONSchema;
  }

  const result = { ...schema };

  if ('format' in result && typeof result['format'] === 'string') {
    const formatStr = `(format: "${result['format']}")`;

    if ('description' in result && typeof result['description'] === 'string') {
      result['description'] = `${result['description']} ${formatStr}`;
    } else {
      result['description'] = formatStr;
    }

    delete result['format'];
  }

  for (const key in result) {
    if (result[key] && typeof result[key] === 'object') {
      result[key] = removeFormats(result[key] as JSONSchema, formatsCapability);
    }
  }

  return result;
}

/**
 * Applies all compatibility transformations to the endpoints based on the provided capabilities.
 */
export function applyCompatibilityTransformations(
  endpoints: Endpoint[],
  capabilities: ClientCapabilities,
): Endpoint[] {
  let transformedEndpoints = [...endpoints];

  // Handle top-level unions first as this changes tool names
  if (!capabilities.topLevelUnions) {
    const newEndpoints: Endpoint[] = [];

    for (const endpoint of transformedEndpoints) {
      const variantTools = removeTopLevelUnions(endpoint.tool);

      if (variantTools.length === 1) {
        newEndpoints.push(endpoint);
      } else {
        for (const variantTool of variantTools) {
          newEndpoints.push({
            ...endpoint,
            tool: variantTool,
          });
        }
      }
    }

    transformedEndpoints = newEndpoints;
  }

  if (capabilities.toolNameLength) {
    const toolNames = transformedEndpoints.map((endpoint) => endpoint.tool.name);
    const renameMap = truncateToolNames(toolNames, capabilities.toolNameLength);

    transformedEndpoints = transformedEndpoints.map((endpoint) => ({
      ...endpoint,
      tool: {
        ...endpoint.tool,
        name: renameMap.get(endpoint.tool.name) ?? endpoint.tool.name,
      },
    }));
  }

  if (!capabilities.refs || !capabilities.unions || !capabilities.formats) {
    transformedEndpoints = transformedEndpoints.map((endpoint) => {
      let schema = endpoint.tool.inputSchema as JSONSchema;

      if (!capabilities.refs) {
        schema = inlineRefs(schema);
      }

      if (!capabilities.unions) {
        schema = removeAnyOf(schema);
      }

      if (!capabilities.formats) {
        schema = removeFormats(schema, capabilities.formats);
      }

      return {
        ...endpoint,
        tool: {
          ...endpoint.tool,
          inputSchema: schema as typeof endpoint.tool.inputSchema,
        },
      };
    });
  }

  return transformedEndpoints;
}

function toSnakeCase(str: string): string {
  return str
    .replace(/\s+/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase();
}
