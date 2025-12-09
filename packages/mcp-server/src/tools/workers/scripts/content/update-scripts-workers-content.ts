// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.content',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/content',
  operationId: 'worker-script-put-content',
};

export const tool: Tool = {
  name: 'update_scripts_workers_content',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPut script content without touching config or metadata.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/script',\n  $defs: {\n    script: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The name used to identify the script.'\n        },\n        compatibility_date: {\n          type: 'string',\n          description: 'Date indicating targeted support in the Workers runtime. Backwards incompatible fixes to the runtime following this date will not affect this Worker.'\n        },\n        compatibility_flags: {\n          type: 'array',\n          description: 'Flags that enable or disable certain features in the Workers runtime. Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.',\n          items: {\n            type: 'string',\n            description: 'Flag that enables or disables a specific feature in the Workers runtime.'\n          }\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the script was created.',\n          format: 'date-time'\n        },\n        etag: {\n          type: 'string',\n          description: 'Hashed script content, can be used in a If-None-Match header when updating.'\n        },\n        handlers: {\n          type: 'array',\n          description: 'The names of handlers exported as part of the default export.',\n          items: {\n            type: 'string'\n          }\n        },\n        has_assets: {\n          type: 'boolean',\n          description: 'Whether a Worker contains assets.'\n        },\n        has_modules: {\n          type: 'boolean',\n          description: 'Whether a Worker contains modules.'\n        },\n        last_deployed_from: {\n          type: 'string',\n          description: 'The client most recently used to deploy this Worker.'\n        },\n        logpush: {\n          type: 'boolean',\n          description: 'Whether Logpush is turned on for the Worker.'\n        },\n        migration_tag: {\n          type: 'string',\n          description: 'The tag of the Durable Object migration that was most recently applied for this Worker.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the script was last modified.',\n          format: 'date-time'\n        },\n        named_handlers: {\n          type: 'array',\n          description: 'Named exports, such as Durable Object class implementations and named entrypoints.',\n          items: {\n            type: 'object',\n            properties: {\n              handlers: {\n                type: 'array',\n                description: 'The names of handlers exported as part of the named export.',\n                items: {\n                  type: 'string'\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the export.'\n              }\n            }\n          }\n        },\n        observability: {\n          type: 'object',\n          description: 'Observability settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether observability is enabled for the Worker.'\n            },\n            head_sampling_rate: {\n              type: 'number',\n              description: 'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.'\n            },\n            logs: {\n              type: 'object',\n              description: 'Log settings for the Worker.',\n              properties: {\n                enabled: {\n                  type: 'boolean',\n                  description: 'Whether logs are enabled for the Worker.'\n                },\n                invocation_logs: {\n                  type: 'boolean',\n                  description: 'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.'\n                },\n                destinations: {\n                  type: 'array',\n                  description: 'A list of destinations where logs will be exported to.',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                head_sampling_rate: {\n                  type: 'number',\n                  description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.'\n                },\n                persist: {\n                  type: 'boolean',\n                  description: 'Whether log persistence is enabled for the Worker.'\n                }\n              },\n              required: [                'enabled',\n                'invocation_logs'\n              ]\n            }\n          },\n          required: [            'enabled'\n          ]\n        },\n        placement: {\n          type: 'object',\n          description: 'Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n          properties: {\n            last_analyzed_at: {\n              type: 'string',\n              description: 'The last time the script was analyzed for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n              format: 'date-time'\n            },\n            mode: {\n              type: 'string',\n              description: 'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n              enum: [                'smart'\n              ]\n            },\n            status: {\n              type: 'string',\n              description: 'Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n              enum: [                'SUCCESS',\n                'UNSUPPORTED_APPLICATION',\n                'INSUFFICIENT_INVOCATIONS'\n              ]\n            }\n          }\n        },\n        placement_mode: {\n          type: 'string',\n          description: 'Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n          enum: [            'smart'\n          ]\n        },\n        placement_status: {\n          type: 'string',\n          description: 'Status of [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).',\n          enum: [            'SUCCESS',\n            'UNSUPPORTED_APPLICATION',\n            'INSUFFICIENT_INVOCATIONS'\n          ]\n        },\n        tag: {\n          type: 'string',\n          description: 'The immutable ID of the script.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the Worker.',\n          items: {\n            type: 'string'\n          }\n        },\n        tail_consumers: {\n          type: 'array',\n          description: 'List of Workers that will consume logs from the attached Worker.',\n          items: {\n            $ref: '#/$defs/consumer_script'\n          }\n        },\n        usage_model: {\n          type: 'string',\n          description: 'Usage model for the Worker invocations.',\n          enum: [            'standard',\n            'bundled',\n            'unbound'\n          ]\n        }\n      }\n    },\n    consumer_script: {\n      type: 'object',\n      description: 'A reference to a script that will consume logs from the attached Worker.',\n      properties: {\n        service: {\n          type: 'string',\n          description: 'Name of Worker that is to be the consumer.'\n        },\n        environment: {\n          type: 'string',\n          description: 'Optional environment if the Worker utilizes one.'\n        },\n        namespace: {\n          type: 'string',\n          description: 'Optional dispatch namespace the script belongs to.'\n        }\n      },\n      required: [        'service'\n      ]\n    }\n  }\n}\n```",
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
      metadata: {
        type: 'object',
        description: 'JSON-encoded metadata about the uploaded parts and Worker configuration.',
        properties: {
          body_part: {
            type: 'string',
            description:
              'Name of the uploaded file that contains the Worker script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.',
          },
          main_module: {
            type: 'string',
            description:
              'Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.',
          },
        },
      },
      files: {
        type: 'array',
        description:
          'An array of modules (often JavaScript files) comprising a Worker script. At least one module must be present and referenced in the metadata as `main_module` or `body_part` by filename.<br/>Possible Content-Type(s) are: `application/javascript+module`, `text/javascript+module`, `application/javascript`, `text/javascript`, `text/x-python`, `text/x-python-requirement`, `application/wasm`, `text/plain`, `application/octet-stream`, `application/source-map`.',
        items: {
          type: 'string',
        },
      },
      'CF-WORKER-BODY-PART': {
        type: 'string',
      },
      'CF-WORKER-MAIN-MODULE-PART': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'script_name', 'metadata'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workers.scripts.content.update(script_name, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
