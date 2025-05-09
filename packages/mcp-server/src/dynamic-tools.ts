import Cloudflare from 'cloudflare';
import { Endpoint } from './tools';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { z } from 'zod';
import { Cabidela } from '@cloudflare/cabidela';

function zodToInputSchema(schema: z.ZodSchema) {
  return {
    type: 'object' as const,
    ...(zodToJsonSchema(schema) as any),
  };
}

/**
 * A list of tools that expose all the endpoints in the API dynamically.
 *
 * Instead of exposing every endpoint as it's own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param endpoints - The endpoints to include in the list.
 */
export function dynamicTools(endpoints: Endpoint[]): Endpoint[] {
  const listEndpointsSchema = z.object({
    search_query: z
      .string()
      .optional()
      .describe(
        'An optional search query to filter the endpoints by. Provide a partial name, resource, operation, or tag to filter the endpoints returned.',
      ),
  });

  const listEndpointsTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'read' as const,
      tags: [],
    },
    tool: {
      name: 'list_api_endpoints',
      description: 'List or search for all endpoints in the Cloudflare TypeScript API',
      inputSchema: zodToInputSchema(listEndpointsSchema),
    },
    handler: async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
      const query = args && listEndpointsSchema.parse(args).search_query?.trim();

      const filteredEndpoints =
        query && query.length > 0 ?
          endpoints.filter((endpoint) => {
            const fieldsToMatch = [
              endpoint.tool.name,
              endpoint.metadata.resource,
              endpoint.metadata.operation,
              ...endpoint.metadata.tags,
            ];
            return fieldsToMatch.some((field) => field.toLowerCase().includes(query.toLowerCase()));
          })
        : endpoints;

      return {
        tools: filteredEndpoints.map(({ tool, metadata }) => ({
          name: tool.name,
          description: tool.description,
          resource: metadata.resource,
          operation: metadata.operation,
          tags: metadata.tags,
        })),
      };
    },
  };

  const getEndpointSchema = z.object({
    endpoint: z.string().describe('The name of the endpoint to get the schema for.'),
  });
  const getEndpointTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'read' as const,
      tags: [],
    },
    tool: {
      name: 'get_api_endpoint_schema',
      description:
        'Get the schema for an endpoint in the Cloudflare TypeScript API. You can use the schema returned by this tool to invoke an endpoint with the `invoke_api_endpoint` tool.',
      inputSchema: zodToInputSchema(getEndpointSchema),
    },
    handler: async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
      if (!args) {
        throw new Error('No endpoint provided');
      }
      const endpointName = getEndpointSchema.parse(args).endpoint;

      const endpoint = endpoints.find((e) => e.tool.name === endpointName);
      if (!endpoint) {
        throw new Error(`Endpoint ${endpointName} not found`);
      }
      return endpoint.tool;
    },
  };

  const invokeEndpointSchema = z.object({
    endpoint_name: z.string().describe('The name of the endpoint to invoke.'),
    args: z
      .record(z.string(), z.any())
      .describe(
        'The arguments to pass to the endpoint. This must match the schema returned by the `get_api_endpoint_schema` tool.',
      ),
  });

  const invokeEndpointTool = {
    metadata: {
      resource: 'dynamic_tools',
      operation: 'write' as const,
      tags: [],
    },
    tool: {
      name: 'invoke_api_endpoint',
      description:
        'Invoke an endpoint in the Cloudflare TypeScript API. Note: use the `list_api_endpoints` tool to get the list of endpoints and `get_api_endpoint_schema` tool to get the schema for an endpoint.',
      inputSchema: zodToInputSchema(invokeEndpointSchema),
    },
    handler: async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
      if (!args) {
        throw new Error('No endpoint provided');
      }
      const { success, data, error } = invokeEndpointSchema.safeParse(args);
      if (!success) {
        throw new Error(`Invalid arguments for endpoint. ${error?.format()}`);
      }
      const { endpoint_name, args: endpointArgs } = data;

      const endpoint = endpoints.find((e) => e.tool.name === endpoint_name);
      if (!endpoint) {
        throw new Error(
          `Endpoint ${endpoint_name} not found. Use the \`list_api_endpoints\` tool to get the list of available endpoints.`,
        );
      }

      try {
        // Try to validate the arguments for a better error message
        const cabidela = new Cabidela(endpoint.tool.inputSchema, { fullErrors: true });
        cabidela.validate(endpointArgs);
      } catch (error) {
        throw new Error(`Invalid arguments for endpoint ${endpoint_name}:\n${error}`);
      }

      return endpoint.handler(client, endpointArgs);
    },
  };

  return [getEndpointTool, listEndpointsTool, invokeEndpointTool];
}
