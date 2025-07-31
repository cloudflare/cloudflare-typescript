// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.deployments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/deployments',
  operationId: 'worker-deployments-list-deployments',
};

export const tool: Tool = {
  name: 'list_scripts_workers_deployments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList of Worker Deployments. The first deployment in the list is the latest deployment actively serving traffic.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        deployments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              created_on: {\n                type: 'string',\n                format: 'date-time'\n              },\n              source: {\n                type: 'string'\n              },\n              strategy: {\n                type: 'string',\n                enum: [                  'percentage'\n                ]\n              },\n              versions: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    percentage: {\n                      type: 'number'\n                    },\n                    version_id: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'percentage',\n                    'version_id'\n                  ]\n                }\n              },\n              annotations: {\n                type: 'object',\n                properties: {\n                  'workers/message': {\n                    type: 'string',\n                    description: 'Human-readable message about the deployment. Truncated to 100 bytes.'\n                  },\n                  'workers/triggered_by': {\n                    type: 'string',\n                    description: 'Operation that triggered the creation of the deployment.'\n                  }\n                }\n              },\n              author_email: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'created_on',\n              'source',\n              'strategy',\n              'versions'\n            ]\n          }\n        }\n      },\n      required: [        'deployments'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'script_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.workers.scripts.deployments.list(script_name, body)),
  );
};

export default { metadata, tool, handler };
