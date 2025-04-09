// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.dex_tests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_devices_zero_trust_dex_tests',
  description: 'Create a DEX test.',
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
        description: 'Device settings profiles targeted by this test',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The id of the device settings profile',
            },
            default: {
              type: 'boolean',
              description: 'Whether the profile is the account default',
            },
            name: {
              type: 'string',
              description: 'The name of the device settings profile',
            },
          },
          required: [],
        },
      },
      targeted: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.dexTests.create(body);
};

export default { metadata, tool, handler };
