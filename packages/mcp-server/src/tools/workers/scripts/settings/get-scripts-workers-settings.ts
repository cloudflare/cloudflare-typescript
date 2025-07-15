// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/script-settings',
  operationId: 'worker-script-settings-get-settings',
};

export const tool: Tool = {
  name: 'get_scripts_workers_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Includes Logpush and Tail Consumers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      $ref: '#/$defs/script_setting'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    script_setting: {\n      type: 'object',\n      properties: {\n        logpush: {\n          type: 'boolean',\n          description: 'Whether Logpush is turned on for the Worker.'\n        },\n        observability: {\n          type: 'object',\n          description: 'Observability settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether observability is enabled for the Worker.'\n            },\n            head_sampling_rate: {\n              type: 'number',\n              description: 'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.'\n            },\n            logs: {\n              type: 'object',\n              description: 'Log settings for the Worker.',\n              properties: {\n                enabled: {\n                  type: 'boolean',\n                  description: 'Whether logs are enabled for the Worker.'\n                },\n                invocation_logs: {\n                  type: 'boolean',\n                  description: 'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.'\n                },\n                head_sampling_rate: {\n                  type: 'number',\n                  description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.'\n                }\n              },\n              required: [                'enabled',\n                'invocation_logs'\n              ]\n            }\n          },\n          required: [            'enabled'\n          ]\n        },\n        tail_consumers: {\n          type: 'array',\n          description: 'List of Workers that will consume logs from the attached Worker.',\n          items: {\n            $ref: '#/$defs/consumer_script'\n          }\n        }\n      },\n      required: []\n    },\n    consumer_script: {\n      type: 'object',\n      description: 'A reference to a script that will consume logs from the attached Worker.',\n      properties: {\n        service: {\n          type: 'string',\n          description: 'Name of Worker that is to be the consumer.'\n        },\n        environment: {\n          type: 'string',\n          description: 'Optional environment if the Worker utilizes one.'\n        },\n        namespace: {\n          type: 'string',\n          description: 'Optional dispatch namespace the script belongs to.'\n        }\n      },\n      required: [        'service'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.workers.scripts.settings.get(script_name, body)),
  );
};

export default { metadata, tool, handler };
