// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.posture.integrations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_posture_devices_zero_trust_integrations',
  description: 'Updates a configured device posture integration.',
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
                  'If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`',
              },
              access_client_secret: {
                type: 'string',
                description:
                  'If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`',
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
                  'This id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`',
              },
              access_client_secret: {
                type: 'string',
                description:
                  'This secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`',
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
          'tanium',
          'sentinelone_s2s',
          'custom_s2s',
        ],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { integration_id, ...body } = args;
  return client.zeroTrust.devices.posture.integrations.edit(integration_id, body);
};

export default { metadata, tool, handler };
