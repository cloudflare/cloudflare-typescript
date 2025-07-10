// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture.integrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/posture/integration/{integration_id}',
  operationId: 'device-posture-integrations-device-posture-integration-details',
};

export const tool: Tool = {
  name: 'get_posture_devices_zero_trust_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches details for a single device posture integration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/integration'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    integration: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API UUID.'\n        },\n        config: {\n          type: 'object',\n          description: 'The configuration object containing third-party integration information.',\n          properties: {\n            api_url: {\n              type: 'string',\n              description: 'The Workspace One API URL provided in the Workspace One Admin Dashboard.'\n            },\n            auth_url: {\n              type: 'string',\n              description: 'The Workspace One Authorization URL depending on your region.'\n            },\n            client_id: {\n              type: 'string',\n              description: 'The Workspace One client ID provided in the Workspace One Admin Dashboard.'\n            }\n          },\n          required: [            'api_url',\n            'auth_url',\n            'client_id'\n          ]\n        },\n        interval: {\n          type: 'string',\n          description: 'The interval between each posture check with the third-party API. Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the device posture integration.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of device posture integration.',\n          enum: [            'workspace_one',\n            'crowdstrike_s2s',\n            'uptycs',\n            'intune',\n            'kolide',\n            'tanium_s2s',\n            'sentinelone_s2s',\n            'custom_s2s'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      integration_id: {
        type: 'string',
        description: 'API UUID.',
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
  const { integration_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.devices.posture.integrations.get(integration_id, body)),
  );
};

export default { metadata, tool, handler };
