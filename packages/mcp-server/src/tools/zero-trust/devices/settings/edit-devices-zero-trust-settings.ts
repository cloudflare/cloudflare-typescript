// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/devices/settings',
  operationId: 'zero-trust-accounts-patch-device-settings-for-the-zero-trust-account',
};

export const tool: Tool = {
  name: 'edit_devices_zero_trust_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatches the current device settings for a Zero Trust account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/device_settings'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    device_settings: {\n      type: 'object',\n      properties: {\n        disable_for_time: {\n          type: 'number',\n          description: 'Sets the time limit, in seconds, that a user can use an override code to bypass WARP.'\n        },\n        gateway_proxy_enabled: {\n          type: 'boolean',\n          description: 'Enable gateway proxy filtering on TCP.'\n        },\n        gateway_udp_proxy_enabled: {\n          type: 'boolean',\n          description: 'Enable gateway proxy filtering on UDP.'\n        },\n        root_certificate_installation_enabled: {\n          type: 'boolean',\n          description: 'Enable installation of cloudflare managed root certificate.'\n        },\n        use_zt_virtual_ip: {\n          type: 'boolean',\n          description: 'Enable using CGNAT virtual IPv4.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      disable_for_time: {
        type: 'number',
        description: 'Sets the time limit, in seconds, that a user can use an override code to bypass WARP.',
      },
      gateway_proxy_enabled: {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on TCP.',
      },
      gateway_udp_proxy_enabled: {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on UDP.',
      },
      root_certificate_installation_enabled: {
        type: 'boolean',
        description: 'Enable installation of cloudflare managed root certificate.',
      },
      use_zt_virtual_ip: {
        type: 'boolean',
        description: 'Enable using CGNAT virtual IPv4.',
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zeroTrust.devices.settings.edit(body)));
};

export default { metadata, tool, handler };
