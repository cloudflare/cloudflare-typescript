// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hostnames.settings.tls',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}',
  operationId: 'per-hostname-tls-settings-delete',
};

export const tool: Tool = {
  name: 'delete_settings_hostnames_tls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete the tls setting value for the hostname.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'This is the time the tls setting was originally created for this hostname.',\n          format: 'date-time'\n        },\n        hostname: {\n          type: 'string',\n          description: 'The hostname for which the tls settings are set.'\n        },\n        status: {\n          type: 'string',\n          description: 'Deployment status for the given tls setting.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'This is the time the tls setting was updated.',\n          format: 'date-time'\n        },\n        value: {\n          $ref: '#/$defs/setting_value'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    setting_value: {\n      anyOf: [        {\n          type: 'number'\n        },\n        {\n          type: 'string'\n        },\n        {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        }\n      ],\n      description: 'The tls setting value.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      setting_id: {
        type: 'string',
        description: 'The TLS Setting name.',
        enum: ['ciphers', 'min_tls_version', 'http2'],
      },
      hostname: {
        type: 'string',
        description: 'The hostname for which the tls settings are set.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'setting_id', 'hostname'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hostname, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.hostnames.settings.tls.delete(hostname, body)),
  );
};

export default { metadata, tool, handler };
