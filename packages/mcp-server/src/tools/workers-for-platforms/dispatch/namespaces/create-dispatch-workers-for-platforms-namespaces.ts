// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/dispatch/namespaces',
  operationId: 'namespace-worker-create',
};

export const tool: Tool = {
  name: 'create_dispatch_workers_for_platforms_namespaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Workers for Platforms namespace.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/namespace_create_response',\n  $defs: {\n    namespace_create_response: {\n      type: 'object',\n      properties: {\n        created_by: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the script was created.',\n          format: 'date-time'\n        },\n        modified_by: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the script was last modified.',\n          format: 'date-time'\n        },\n        namespace_id: {\n          type: 'string',\n          description: 'API Resource UUID tag.'\n        },\n        namespace_name: {\n          type: 'string',\n          description: 'Name of the Workers for Platforms dispatch namespace.'\n        },\n        script_count: {\n          type: 'integer',\n          description: 'The current number of scripts in this Dispatch Namespace.'\n        },\n        trusted_workers: {\n          type: 'boolean',\n          description: 'Whether the Workers in the namespace are executed in a \"trusted\" manner. When a Worker is trusted, it has access to the shared caches for the zone in the Cache API, and has access to the `request.cf` object on incoming Requests. When a Worker is untrusted, caches are not shared across the zone, and `request.cf` is undefined. By default, Workers in a namespace are \"untrusted\".'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      name: {
        type: 'string',
        description: 'The name of the dispatch namespace.',
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workersForPlatforms.dispatch.namespaces.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
