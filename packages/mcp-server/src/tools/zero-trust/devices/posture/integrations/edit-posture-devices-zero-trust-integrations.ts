// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture.integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/devices/posture/integration/{integration_id}',
  operationId: 'device-posture-integrations-update-device-posture-integration',
};

export const tool: Tool = {
  name: 'edit_posture_devices_zero_trust_integrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a configured device posture integration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/integration'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    integration: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API UUID.'\n        },\n        config: {\n          type: 'object',\n          description: 'The configuration object containing third-party integration information.',\n          properties: {\n            api_url: {\n              type: 'string',\n              description: 'The Workspace One API URL provided in the Workspace One Admin Dashboard.'\n            },\n            auth_url: {\n              type: 'string',\n              description: 'The Workspace One Authorization URL depending on your region.'\n            },\n            client_id: {\n              type: 'string',\n              description: 'The Workspace One client ID provided in the Workspace One Admin Dashboard.'\n            }\n          },\n          required: [            'api_url',\n            'auth_url',\n            'client_id'\n          ]\n        },\n        interval: {\n          type: 'string',\n          description: 'The interval between each posture check with the third-party API. Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the device posture integration.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of device posture integration.',\n          enum: [            'workspace_one',\n            'crowdstrike_s2s',\n            'uptycs',\n            'intune',\n            'kolide',\n            'tanium_s2s',\n            'sentinelone_s2s',\n            'custom_s2s'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      config: {
        anyOf: [
          {
            type: 'object',
            title: 'Workspace One Config',
            properties: {
              api_url: {
                type: 'string',
                description: 'The Workspace One API URL provided in the Workspace One Admin Dashboard.',
              },
              auth_url: {
                type: 'string',
                description: 'The Workspace One Authorization URL depending on your region.',
              },
              client_id: {
                type: 'string',
                description: 'The Workspace One client ID provided in the Workspace One Admin Dashboard.',
              },
              client_secret: {
                type: 'string',
                description: 'The Workspace One client secret provided in the Workspace One Admin Dashboard.',
              },
            },
            required: ['api_url', 'auth_url', 'client_id', 'client_secret'],
          },
          {
            type: 'object',
            title: 'Crowdstrike Config',
            properties: {
              api_url: {
                type: 'string',
                description: 'The Crowdstrike API URL.',
              },
              client_id: {
                type: 'string',
                description: 'The Crowdstrike client ID.',
              },
              client_secret: {
                type: 'string',
                description: 'The Crowdstrike client secret.',
              },
              customer_id: {
                type: 'string',
                description: 'The Crowdstrike customer ID.',
              },
            },
            required: ['api_url', 'client_id', 'client_secret', 'customer_id'],
          },
          {
            type: 'object',
            title: 'Uptycs Config',
            properties: {
              api_url: {
                type: 'string',
                description: 'The Uptycs API URL.',
              },
              client_key: {
                type: 'string',
                description: 'The Uptycs client secret.',
              },
              client_secret: {
                type: 'string',
                description: 'The Uptycs client secret.',
              },
              customer_id: {
                type: 'string',
                description: 'The Uptycs customer ID.',
              },
            },
            required: ['api_url', 'client_key', 'client_secret', 'customer_id'],
          },
          {
            type: 'object',
            title: 'Intune Config',
            properties: {
              client_id: {
                type: 'string',
                description: 'The Intune client ID.',
              },
              client_secret: {
                type: 'string',
                description: 'The Intune client secret.',
              },
              customer_id: {
                type: 'string',
                description: 'The Intune customer ID.',
              },
            },
            required: ['client_id', 'client_secret', 'customer_id'],
          },
          {
            type: 'object',
            title: 'Kolide Config',
            properties: {
              client_id: {
                type: 'string',
                description: 'The Kolide client ID.',
              },
              client_secret: {
                type: 'string',
                description: 'The Kolide client secret.',
              },
            },
            required: ['client_id', 'client_secret'],
          },
          {
            type: 'object',
            title: 'Tanium Config',
            properties: {
              api_url: {
                type: 'string',
                description: 'The Tanium API URL.',
              },
              client_secret: {
                type: 'string',
                description: 'The Tanium client secret.',
              },
              access_client_id: {
                type: 'string',
                description:
                  'If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`.',
              },
              access_client_secret: {
                type: 'string',
                description:
                  'If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`.',
              },
            },
            required: ['api_url', 'client_secret'],
          },
          {
            type: 'object',
            title: 'SentinelOne S2S Config',
            properties: {
              api_url: {
                type: 'string',
                description: 'The SentinelOne S2S API URL.',
              },
              client_secret: {
                type: 'string',
                description: 'The SentinelOne S2S client secret.',
              },
            },
            required: ['api_url', 'client_secret'],
          },
          {
            type: 'object',
            title: 'Custom Device Posture Integration Config',
            properties: {
              access_client_id: {
                type: 'string',
                description:
                  'This id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`.',
              },
              access_client_secret: {
                type: 'string',
                description:
                  'This secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`.',
              },
              api_url: {
                type: 'string',
                description: 'The Custom Device Posture Integration  API URL.',
              },
            },
            required: ['access_client_id', 'access_client_secret', 'api_url'],
          },
        ],
        description: 'The configuration object containing third-party integration information.',
      },
      interval: {
        type: 'string',
        description:
          'The interval between each posture check with the third-party API. Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).',
      },
      name: {
        type: 'string',
        description: 'The name of the device posture integration.',
      },
      type: {
        type: 'string',
        description: 'The type of device posture integration.',
        enum: [
          'workspace_one',
          'crowdstrike_s2s',
          'uptycs',
          'intune',
          'kolide',
          'tanium_s2s',
          'sentinelone_s2s',
          'custom_s2s',
        ],
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
    await maybeFilter(args, await client.zeroTrust.devices.posture.integrations.edit(integration_id, body)),
  );
};

export default { metadata, tool, handler };
