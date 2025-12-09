// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts-search',
  operationId: 'worker-script-search-workers',
};

export const tool: Tool = {
  name: 'search_workers_scripts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for Workers in an account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/script_search_response',\n  $defs: {\n    script_search_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          created_on: {\n            type: 'string',\n            description: 'When the script was created.',\n            format: 'date-time'\n          },\n          modified_on: {\n            type: 'string',\n            description: 'When the script was last modified.',\n            format: 'date-time'\n          },\n          script_name: {\n            type: 'string',\n            description: 'Name of the script, used in URLs and route configuration.'\n          },\n          script_tag: {\n            type: 'string',\n            description: 'Identifier.'\n          },\n          environment_is_default: {\n            type: 'boolean',\n            description: 'Whether the environment is the default environment.'\n          },\n          environment_name: {\n            type: 'string',\n            description: 'Name of the environment.'\n          },\n          service_name: {\n            type: 'string',\n            description: 'Name of the service.'\n          }\n        },\n        required: [          'created_on',\n          'modified_on',\n          'script_name',\n          'script_tag'\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      id: {
        type: 'string',
        description: 'Worker ID (also called tag) to search for. Only exact matches are returned.',
      },
      name: {
        type: 'string',
        description: 'Worker name to search for. Both exact and partial matches are returned.',
      },
      order_by: {
        type: 'string',
        description: 'Property to sort results by. Results are sorted in ascending order.',
        enum: ['created_on', 'modified_on', 'name'],
      },
      page: {
        type: 'integer',
        description: 'Current page.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.workers.scripts.search(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
