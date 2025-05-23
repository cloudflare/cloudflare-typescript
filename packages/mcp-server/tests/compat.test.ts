import {
  truncateToolNames,
  removeTopLevelUnions,
  removeAnyOf,
  inlineRefs,
  applyCompatibilityTransformations,
  removeFormats,
  findUsedDefs,
} from '../src/compat';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { JSONSchema } from '../src/compat';
import { Endpoint } from '../src/tools';

describe('truncateToolNames', () => {
  it('should return original names when maxLength is 0 or negative', () => {
    const names = ['tool1', 'tool2', 'tool3'];
    expect(truncateToolNames(names, 0)).toEqual(new Map());
    expect(truncateToolNames(names, -1)).toEqual(new Map());
  });

  it('should return original names when all names are shorter than maxLength', () => {
    const names = ['tool1', 'tool2', 'tool3'];
    expect(truncateToolNames(names, 10)).toEqual(new Map());
  });

  it('should truncate names longer than maxLength', () => {
    const names = ['very-long-tool-name', 'another-long-tool-name', 'short'];
    expect(truncateToolNames(names, 10)).toEqual(
      new Map([
        ['very-long-tool-name', 'very-long-'],
        ['another-long-tool-name', 'another-lo'],
      ]),
    );
  });

  it('should handle duplicate truncated names by appending numbers', () => {
    const names = ['tool-name-a', 'tool-name-b', 'tool-name-c'];
    expect(truncateToolNames(names, 8)).toEqual(
      new Map([
        ['tool-name-a', 'tool-na1'],
        ['tool-name-b', 'tool-na2'],
        ['tool-name-c', 'tool-na3'],
      ]),
    );
  });
});

describe('removeTopLevelUnions', () => {
  const createTestTool = (overrides = {}): Tool => ({
    name: 'test-tool',
    description: 'Test tool',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    ...overrides,
  });

  it('should return the original tool if it has no anyOf at the top level', () => {
    const tool = createTestTool({
      inputSchema: {
        type: 'object',
        properties: {
          foo: { type: 'string' },
        },
      },
    });

    expect(removeTopLevelUnions(tool)).toEqual([tool]);
  });

  it('should split a tool with top-level anyOf into multiple tools', () => {
    const tool = createTestTool({
      name: 'union-tool',
      description: 'A tool with unions',
      inputSchema: {
        type: 'object',
        properties: {
          common: { type: 'string' },
        },
        anyOf: [
          {
            title: 'first variant',
            description: 'Its the first variant',
            properties: {
              variant1: { type: 'string' },
            },
            required: ['variant1'],
          },
          {
            title: 'second variant',
            properties: {
              variant2: { type: 'number' },
            },
            required: ['variant2'],
          },
        ],
      },
    });

    const result = removeTopLevelUnions(tool);

    expect(result).toEqual([
      {
        name: 'union-tool_first_variant',
        description: 'Its the first variant',
        inputSchema: {
          type: 'object',
          title: 'first variant',
          description: 'Its the first variant',
          properties: {
            common: { type: 'string' },
            variant1: { type: 'string' },
          },
          required: ['variant1'],
        },
      },
      {
        name: 'union-tool_second_variant',
        description: 'A tool with unions',
        inputSchema: {
          type: 'object',
          title: 'second variant',
          description: 'A tool with unions',
          properties: {
            common: { type: 'string' },
            variant2: { type: 'number' },
          },
          required: ['variant2'],
        },
      },
    ]);
  });

  it('should handle $defs and only include those used by the variant', () => {
    const tool = createTestTool({
      name: 'defs-tool',
      description: 'A tool with $defs',
      inputSchema: {
        type: 'object',
        properties: {
          common: { type: 'string' },
        },
        $defs: {
          def1: { type: 'string', format: 'email' },
          def2: { type: 'number', minimum: 0 },
          unused: { type: 'boolean' },
        },
        anyOf: [
          {
            properties: {
              email: { $ref: '#/$defs/def1' },
            },
          },
          {
            properties: {
              count: { $ref: '#/$defs/def2' },
            },
          },
        ],
      },
    });

    const result = removeTopLevelUnions(tool);

    expect(result).toEqual([
      {
        name: 'defs-tool_variant1',
        description: 'A tool with $defs',
        inputSchema: {
          type: 'object',
          description: 'A tool with $defs',
          properties: {
            common: { type: 'string' },
            email: { $ref: '#/$defs/def1' },
          },
          $defs: {
            def1: { type: 'string', format: 'email' },
          },
        },
      },
      {
        name: 'defs-tool_variant2',
        description: 'A tool with $defs',
        inputSchema: {
          type: 'object',
          description: 'A tool with $defs',
          properties: {
            common: { type: 'string' },
            count: { $ref: '#/$defs/def2' },
          },
          $defs: {
            def2: { type: 'number', minimum: 0 },
          },
        },
      },
    ]);
  });
});

describe('removeAnyOf', () => {
  it('should return original schema if it has no anyOf', () => {
    const schema = {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        bar: { type: 'number' },
      },
    };

    expect(removeAnyOf(schema)).toEqual(schema);
  });

  it('should remove anyOf field and use the first variant', () => {
    const schema = {
      type: 'object',
      properties: {
        common: { type: 'string' },
      },
      anyOf: [
        {
          properties: {
            variant1: { type: 'string' },
          },
          required: ['variant1'],
        },
        {
          properties: {
            variant2: { type: 'number' },
          },
          required: ['variant2'],
        },
      ],
    };

    const expected = {
      type: 'object',
      properties: {
        common: { type: 'string' },
        variant1: { type: 'string' },
      },
      required: ['variant1'],
    };

    expect(removeAnyOf(schema)).toEqual(expected);
  });

  it('should recursively remove anyOf fields from nested properties', () => {
    const schema = {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        nested: {
          type: 'object',
          properties: {
            bar: { type: 'number' },
          },
          anyOf: [
            {
              properties: {
                option1: { type: 'boolean' },
              },
            },
            {
              properties: {
                option2: { type: 'array' },
              },
            },
          ],
        },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        foo: { type: 'string' },
        nested: {
          type: 'object',
          properties: {
            bar: { type: 'number' },
            option1: { type: 'boolean' },
          },
        },
      },
    };

    expect(removeAnyOf(schema)).toEqual(expected);
  });

  it('should handle arrays', () => {
    const schema = {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            anyOf: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        items: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
    };

    expect(removeAnyOf(schema)).toEqual(expected);
  });
});

describe('findUsedDefs', () => {
  it('should handle circular references without stack overflow', () => {
    const defs = {
      person: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          friend: { $ref: '#/$defs/person' }, // Circular reference
        },
      },
    };

    const schema = {
      type: 'object',
      properties: {
        user: { $ref: '#/$defs/person' },
      },
    };

    // This should not throw a stack overflow error
    expect(() => {
      const result = findUsedDefs(schema, defs);
      expect(result).toHaveProperty('person');
    }).not.toThrow();
  });

  it('should handle indirect circular references without stack overflow', () => {
    const defs = {
      node: {
        type: 'object',
        properties: {
          value: { type: 'string' },
          child: { $ref: '#/$defs/childNode' },
        },
      },
      childNode: {
        type: 'object',
        properties: {
          value: { type: 'string' },
          parent: { $ref: '#/$defs/node' }, // Indirect circular reference
        },
      },
    };

    const schema = {
      type: 'object',
      properties: {
        root: { $ref: '#/$defs/node' },
      },
    };

    // This should not throw a stack overflow error
    expect(() => {
      const result = findUsedDefs(schema, defs);
      expect(result).toHaveProperty('node');
      expect(result).toHaveProperty('childNode');
    }).not.toThrow();
  });

  it('should find all used definitions in non-circular schemas', () => {
    const defs = {
      user: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          address: { $ref: '#/$defs/address' },
        },
      },
      address: {
        type: 'object',
        properties: {
          street: { type: 'string' },
          city: { type: 'string' },
        },
      },
      unused: {
        type: 'object',
        properties: {
          data: { type: 'string' },
        },
      },
    };

    const schema = {
      type: 'object',
      properties: {
        person: { $ref: '#/$defs/user' },
      },
    };

    const result = findUsedDefs(schema, defs);
    expect(result).toHaveProperty('user');
    expect(result).toHaveProperty('address');
    expect(result).not.toHaveProperty('unused');
  });
});

describe('inlineRefs', () => {
  it('should return the original schema if it does not contain $refs', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'number' },
      },
    };

    expect(inlineRefs(schema)).toEqual(schema);
  });

  it('should inline simple $refs', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        user: { $ref: '#/$defs/user' },
      },
      $defs: {
        user: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    };

    const expected: JSONSchema = {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
          },
        },
      },
    };

    expect(inlineRefs(schema)).toEqual(expected);
  });

  it('should inline nested $refs', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        order: { $ref: '#/$defs/order' },
      },
      $defs: {
        order: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            items: { type: 'array', items: { $ref: '#/$defs/item' } },
          },
        },
        item: {
          type: 'object',
          properties: {
            product: { type: 'string' },
            quantity: { type: 'integer' },
          },
        },
      },
    };

    const expected: JSONSchema = {
      type: 'object',
      properties: {
        order: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  product: { type: 'string' },
                  quantity: { type: 'integer' },
                },
              },
            },
          },
        },
      },
    };

    expect(inlineRefs(schema)).toEqual(expected);
  });

  it('should handle circular references by removing the circular part', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        person: { $ref: '#/$defs/person' },
      },
      $defs: {
        person: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            friend: { $ref: '#/$defs/person' }, // Circular reference
          },
        },
      },
    };

    const expected: JSONSchema = {
      type: 'object',
      properties: {
        person: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            // friend property is removed to break the circular reference
          },
        },
      },
    };

    expect(inlineRefs(schema)).toEqual(expected);
  });

  it('should handle indirect circular references', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        node: { $ref: '#/$defs/node' },
      },
      $defs: {
        node: {
          type: 'object',
          properties: {
            value: { type: 'string' },
            child: { $ref: '#/$defs/childNode' },
          },
        },
        childNode: {
          type: 'object',
          properties: {
            value: { type: 'string' },
            parent: { $ref: '#/$defs/node' }, // Circular reference through childNode
          },
        },
      },
    };

    const expected: JSONSchema = {
      type: 'object',
      properties: {
        node: {
          type: 'object',
          properties: {
            value: { type: 'string' },
            child: {
              type: 'object',
              properties: {
                value: { type: 'string' },
                // parent property is removed to break the circular reference
              },
            },
          },
        },
      },
    };

    expect(inlineRefs(schema)).toEqual(expected);
  });

  it('should preserve other properties when inlining references', () => {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        address: { $ref: '#/$defs/address', description: 'User address' },
      },
      $defs: {
        address: {
          type: 'object',
          properties: {
            street: { type: 'string' },
            city: { type: 'string' },
          },
          required: ['street'],
        },
      },
    };

    const expected: JSONSchema = {
      type: 'object',
      properties: {
        address: {
          type: 'object',
          description: 'User address',
          properties: {
            street: { type: 'string' },
            city: { type: 'string' },
          },
          required: ['street'],
        },
      },
    };

    expect(inlineRefs(schema)).toEqual(expected);
  });
});

describe('removeFormats', () => {
  it('should return original schema if formats capability is true', () => {
    const schema = {
      type: 'object',
      properties: {
        date: { type: 'string', description: 'A date field', format: 'date' },
        email: { type: 'string', description: 'An email field', format: 'email' },
      },
    };

    expect(removeFormats(schema, true)).toEqual(schema);
  });

  it('should move format to description when formats capability is false', () => {
    const schema = {
      type: 'object',
      properties: {
        date: { type: 'string', description: 'A date field', format: 'date' },
        email: { type: 'string', description: 'An email field', format: 'email' },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        date: { type: 'string', description: 'A date field (format: "date")' },
        email: { type: 'string', description: 'An email field (format: "email")' },
      },
    };

    expect(removeFormats(schema, false)).toEqual(expected);
  });

  it('should handle properties without description', () => {
    const schema = {
      type: 'object',
      properties: {
        date: { type: 'string', format: 'date' },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        date: { type: 'string', description: '(format: "date")' },
      },
    };

    expect(removeFormats(schema, false)).toEqual(expected);
  });

  it('should handle nested properties', () => {
    const schema = {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            created_at: { type: 'string', description: 'Creation date', format: 'date-time' },
          },
        },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: {
            created_at: { type: 'string', description: 'Creation date (format: "date-time")' },
          },
        },
      },
    };

    expect(removeFormats(schema, false)).toEqual(expected);
  });

  it('should handle arrays of objects', () => {
    const schema = {
      type: 'object',
      properties: {
        dates: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              start: { type: 'string', description: 'Start date', format: 'date' },
              end: { type: 'string', description: 'End date', format: 'date' },
            },
          },
        },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        dates: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              start: { type: 'string', description: 'Start date (format: "date")' },
              end: { type: 'string', description: 'End date (format: "date")' },
            },
          },
        },
      },
    };

    expect(removeFormats(schema, false)).toEqual(expected);
  });

  it('should handle schemas with $defs', () => {
    const schema = {
      type: 'object',
      properties: {
        date: { type: 'string', description: 'A date field', format: 'date' },
      },
      $defs: {
        timestamp: {
          type: 'string',
          description: 'A timestamp field',
          format: 'date-time',
        },
      },
    };

    const expected = {
      type: 'object',
      properties: {
        date: { type: 'string', description: 'A date field (format: "date")' },
      },
      $defs: {
        timestamp: {
          type: 'string',
          description: 'A timestamp field (format: "date-time")',
        },
      },
    };

    expect(removeFormats(schema, false)).toEqual(expected);
  });
});

describe('applyCompatibilityTransformations', () => {
  const createTestTool = (name: string, overrides = {}): Tool => ({
    name,
    description: 'Test tool',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    ...overrides,
  });

  const createTestEndpoint = (tool: Tool): Endpoint => ({
    tool,
    handler: jest.fn(),
    metadata: {
      resource: 'test',
      operation: 'read' as const,
      tags: [],
    },
  });

  it('should not modify endpoints when all capabilities are enabled', () => {
    const tool = createTestTool('test-tool');
    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    expect(transformed).toEqual(endpoints);
  });

  it('should split tools with top-level unions when topLevelUnions is disabled', () => {
    const tool = createTestTool('union-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          common: { type: 'string' },
        },
        anyOf: [
          {
            title: 'first variant',
            properties: {
              variant1: { type: 'string' },
            },
          },
          {
            title: 'second variant',
            properties: {
              variant2: { type: 'number' },
            },
          },
        ],
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: false,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    expect(transformed.length).toBe(2);
    expect(transformed[0]!.tool.name).toBe('union-tool_first_variant');
    expect(transformed[1]!.tool.name).toBe('union-tool_second_variant');
  });

  it('should handle variants without titles in removeTopLevelUnions', () => {
    const tool = createTestTool('union-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          common: { type: 'string' },
        },
        anyOf: [
          {
            properties: {
              variant1: { type: 'string' },
            },
          },
          {
            properties: {
              variant2: { type: 'number' },
            },
          },
        ],
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: false,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    expect(transformed.length).toBe(2);
    expect(transformed[0]!.tool.name).toBe('union-tool_variant1');
    expect(transformed[1]!.tool.name).toBe('union-tool_variant2');
  });

  it('should truncate tool names when toolNameLength is set', () => {
    const tools = [
      createTestTool('very-long-tool-name-that-exceeds-limit'),
      createTestTool('another-long-tool-name-to-truncate'),
      createTestTool('short-name'),
    ];

    const endpoints = tools.map(createTestEndpoint);

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: 20,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    expect(transformed[0]!.tool.name).toBe('very-long-tool-name-');
    expect(transformed[1]!.tool.name).toBe('another-long-tool-na');
    expect(transformed[2]!.tool.name).toBe('short-name');
  });

  it('should inline refs when refs capability is disabled', () => {
    const tool = createTestTool('ref-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          user: { $ref: '#/$defs/user' },
        },
        $defs: {
          user: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              email: { type: 'string' },
            },
          },
        },
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: false,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    const schema = transformed[0]!.tool.inputSchema as JSONSchema;
    expect(schema.$defs).toBeUndefined();

    if (schema.properties) {
      expect(schema.properties['user']).toEqual({
        type: 'object',
        properties: {
          name: { type: 'string' },
          email: { type: 'string' },
        },
      });
    }
  });

  it('should preserve external refs when inlining', () => {
    const tool = createTestTool('ref-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          internal: { $ref: '#/$defs/internal' },
          external: { $ref: 'https://example.com/schemas/external.json' },
        },
        $defs: {
          internal: {
            type: 'object',
            properties: {
              name: { type: 'string' },
            },
          },
        },
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: false,
      unions: true,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    const schema = transformed[0]!.tool.inputSchema as JSONSchema;

    if (schema.properties) {
      expect(schema.properties['internal']).toEqual({
        type: 'object',
        properties: {
          name: { type: 'string' },
        },
      });
      expect(schema.properties['external']).toEqual({
        $ref: 'https://example.com/schemas/external.json',
      });
    }
  });

  it('should remove anyOf fields when unions capability is disabled', () => {
    const tool = createTestTool('union-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          field: {
            anyOf: [{ type: 'string' }, { type: 'number' }],
          },
        },
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: false,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    const schema = transformed[0]!.tool.inputSchema as JSONSchema;

    if (schema.properties && schema.properties['field']) {
      const field = schema.properties['field'];
      expect(field.anyOf).toBeUndefined();
      expect(field.type).toBe('string');
    }
  });

  it('should correctly combine topLevelUnions and toolNameLength transformations', () => {
    const tool = createTestTool('very-long-union-tool-name', {
      inputSchema: {
        type: 'object',
        properties: {
          common: { type: 'string' },
        },
        anyOf: [
          {
            title: 'first variant',
            properties: {
              variant1: { type: 'string' },
            },
          },
          {
            title: 'second variant',
            properties: {
              variant2: { type: 'number' },
            },
          },
        ],
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: false,
      validJson: true,
      refs: true,
      unions: true,
      formats: true,
      toolNameLength: 20,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    expect(transformed.length).toBe(2);

    // Both names should be truncated because they exceed 20 characters
    expect(transformed[0]!.tool.name).toBe('very-long-union-too1');
    expect(transformed[1]!.tool.name).toBe('very-long-union-too2');
  });

  it('should correctly combine refs and unions transformations', () => {
    const tool = createTestTool('complex-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          user: { $ref: '#/$defs/user' },
        },
        $defs: {
          user: {
            type: 'object',
            properties: {
              preference: {
                anyOf: [{ type: 'string' }, { type: 'number' }],
              },
            },
          },
        },
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: false,
      unions: false,
      formats: true,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    const schema = transformed[0]!.tool.inputSchema as JSONSchema;

    // Refs should be inlined
    expect(schema.$defs).toBeUndefined();

    // Safely access nested properties
    if (schema.properties && schema.properties['user']) {
      const user = schema.properties['user'];
      // User should be inlined
      expect(user.type).toBe('object');

      // AnyOf in the inlined user.preference should be removed
      if (user.properties && user.properties['preference']) {
        const preference = user.properties['preference'];
        expect(preference.anyOf).toBeUndefined();
        expect(preference.type).toBe('string');
      }
    }
  });

  it('should handle formats capability being false', () => {
    const tool = createTestTool('format-tool', {
      inputSchema: {
        type: 'object',
        properties: {
          date: { type: 'string', description: 'A date', format: 'date' },
        },
      },
    });

    const endpoints = [createTestEndpoint(tool)];

    const capabilities = {
      topLevelUnions: true,
      validJson: true,
      refs: true,
      unions: true,
      formats: false,
      toolNameLength: undefined,
    };

    const transformed = applyCompatibilityTransformations(endpoints, capabilities);
    const schema = transformed[0]!.tool.inputSchema as JSONSchema;

    if (schema.properties && schema.properties['date']) {
      const dateField = schema.properties['date'];
      expect(dateField['format']).toBeUndefined();
      expect(dateField['description']).toBe('A date (format: "date")');
    }
  });
});
