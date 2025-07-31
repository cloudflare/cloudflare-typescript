// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts',
  operationId: 'worker-script-list-workers',
};

export const tool: Tool = {
  name: 'list_workers_scripts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a list of uploaded workers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/script'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    script: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The id of the script in the Workers system. Usually the script name.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the script was created.',\n          format: 'date-time'\n        },\n        etag: {\n          type: 'string',\n          description: 'Hashed script content, can be used in a If-None-Match header when updating.'\n        },\n        has_assets: {\n          type: 'boolean',\n          description: 'Whether a Worker contains assets.'\n        },\n        has_modules: {\n          type: 'boolean',\n          description: 'Whether a Worker contains modules.'\n        },\n        logpush: {\n          type: 'boolean',\n          description: 'Whether Logpush is turned on for the Worker.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the script was last modified.',\n          format: 'date-time'\n        },\n        placement: {\n          type: 'object',\n          description: 'Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n          properties: {\n            last_analyzed_at: {\n              type: 'string',\n              description: 'The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n              format: 'date-time'\n            },\n            mode: {\n              type: 'string',\n              description: 'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n              enum: [                'smart'\n              ]\n            },\n            status: {\n              type: 'string',\n              description: 'Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n              enum: [                'SUCCESS',\n                'UNSUPPORTED_APPLICATION',\n                'INSUFFICIENT_INVOCATIONS'\n              ]\n            }\n          }\n        },\n        placement_mode: {\n          type: 'string',\n          description: 'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n          enum: [            'smart'\n          ]\n        },\n        placement_status: {\n          type: 'string',\n          description: 'Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n          enum: [            'SUCCESS',\n            'UNSUPPORTED_APPLICATION',\n            'INSUFFICIENT_INVOCATIONS'\n          ]\n        },\n        tail_consumers: {\n          type: 'array',\n          description: 'List of Workers that will consume logs from the attached Worker.',\n          items: {\n            $ref: '#/$defs/consumer_script'\n          }\n        },\n        usage_model: {\n          type: 'string',\n          description: 'Usage model for the Worker invocations.',\n          enum: [            'standard'\n          ]\n        }\n      }\n    },\n    consumer_script: {\n      type: 'object',\n      description: 'A reference to a script that will consume logs from the attached Worker.',\n      properties: {\n        service: {\n          type: 'string',\n          description: 'Name of Worker that is to be the consumer.'\n        },\n        environment: {\n          type: 'string',\n          description: 'Optional environment if the Worker utilizes one.'\n        },\n        namespace: {\n          type: 'string',\n          description: 'Optional dispatch namespace the script belongs to.'\n        }\n      },\n      required: [        'service'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
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
  const response = await client.workers.scripts.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
