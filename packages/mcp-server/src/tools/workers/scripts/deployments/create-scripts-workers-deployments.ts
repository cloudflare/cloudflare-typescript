// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.deployments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/deployments',
  operationId: 'worker-deployments-create-deployment',
};

export const tool: Tool = {
  name: 'create_scripts_workers_deployments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeployments configure how [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions) are deployed to traffic. A deployment can consist of one or two versions of a Worker.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        source: {\n          type: 'string'\n        },\n        strategy: {\n          type: 'string',\n          enum: [            'percentage'\n          ]\n        },\n        versions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              percentage: {\n                type: 'number'\n              },\n              version_id: {\n                type: 'string'\n              }\n            },\n            required: [              'percentage',\n              'version_id'\n            ]\n          }\n        },\n        annotations: {\n          type: 'object',\n          properties: {\n            'workers/message': {\n              type: 'string',\n              description: 'Human-readable message about the deployment. Truncated to 100 bytes.'\n            },\n            'workers/triggered_by': {\n              type: 'string',\n              description: 'Operation that triggered the creation of the deployment.'\n            }\n          }\n        },\n        author_email: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'source',\n        'strategy',\n        'versions'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
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
      strategy: {
        type: 'string',
        enum: ['percentage'],
      },
      versions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            percentage: {
              type: 'number',
            },
            version_id: {
              type: 'string',
            },
          },
          required: ['percentage', 'version_id'],
        },
      },
      force: {
        type: 'boolean',
        description:
          'If set to true, the deployment will be created even if normally blocked by something such rolling back to an older version when a secret has changed.',
      },
      annotations: {
        type: 'object',
        properties: {
          'workers/message': {
            type: 'string',
            description: 'Human-readable message about the deployment. Truncated to 100 bytes.',
          },
          'workers/triggered_by': {
            type: 'string',
            description: 'Operation that triggered the creation of the deployment.',
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'script_name', 'strategy', 'versions'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.workers.scripts.deployments.create(script_name, body)),
  );
};

export default { metadata, tool, handler };
