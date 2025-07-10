// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.dex_tests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dex/devices/dex_tests',
  operationId: 'device-dex-test-create-device-dex-test',
};

export const tool: Tool = {
  name: 'create_devices_zero_trust_dex_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a DEX test.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          description: 'The configuration object which contains the details for the WARP client to conduct the test.',\n          properties: {\n            host: {\n              type: 'string',\n              description: 'The desired endpoint to test.'\n            },\n            kind: {\n              type: 'string',\n              description: 'The type of test.'\n            },\n            method: {\n              type: 'string',\n              description: 'The HTTP request method type.'\n            }\n          },\n          required: []\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Determines whether or not the test is active.'\n        },\n        interval: {\n          type: 'string',\n          description: 'How often the test will run.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the DEX test. Must be unique.'\n        },\n        description: {\n          type: 'string',\n          description: 'Additional details about the test.'\n        },\n        target_policies: {\n          type: 'array',\n          description: 'DEX rules targeted by this test',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The id of the DEX rule'\n              },\n              default: {\n                type: 'boolean',\n                description: 'Whether the DEX rule is the account default'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the DEX rule'\n              }\n            },\n            required: []\n          }\n        },\n        targeted: {\n          type: 'boolean'\n        },\n        test_id: {\n          type: 'string',\n          description: 'The unique identifier for the test.'\n        }\n      },\n      required: [        'data',\n        'enabled',\n        'interval',\n        'name'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      data: {
        type: 'object',
        description:
          'The configuration object which contains the details for the WARP client to conduct the test.',
        properties: {
          host: {
            type: 'string',
            description: 'The desired endpoint to test.',
          },
          kind: {
            type: 'string',
            description: 'The type of test.',
          },
          method: {
            type: 'string',
            description: 'The HTTP request method type.',
          },
        },
        required: [],
      },
      enabled: {
        type: 'boolean',
        description: 'Determines whether or not the test is active.',
      },
      interval: {
        type: 'string',
        description: 'How often the test will run.',
      },
      name: {
        type: 'string',
        description: 'The name of the DEX test. Must be unique.',
      },
      description: {
        type: 'string',
        description: 'Additional details about the test.',
      },
      target_policies: {
        type: 'array',
        description: 'DEX rules targeted by this test',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The id of the DEX rule',
            },
            default: {
              type: 'boolean',
              description: 'Whether the DEX rule is the account default',
            },
            name: {
              type: 'string',
              description: 'The name of the DEX rule',
            },
          },
          required: [],
        },
      },
      targeted: {
        type: 'boolean',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zeroTrust.devices.dexTests.create(body)));
};

export default { metadata, tool, handler };
