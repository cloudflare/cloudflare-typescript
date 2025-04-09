// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_dex_zero_trust_commands',
  description: 'Initiate commands for up to 10 devices per account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      commands: {
        type: 'array',
        description: 'List of device-level commands to execute',
        items: {
          type: 'object',
          properties: {
            command_type: {
              type: 'string',
              description: 'Type of command to execute on the device',
              enum: ['pcap', 'warp-diag'],
            },
            device_id: {
              type: 'string',
              description: 'Unique identifier for the device',
            },
            user_email: {
              type: 'string',
              description: 'Email tied to the device',
            },
            command_args: {
              type: 'object',
              properties: {
                interfaces: {
                  type: 'array',
                  description: 'List of interfaces to capture packets on',
                  items: {
                    type: 'string',
                    enum: ['default', 'tunnel'],
                  },
                },
                'max-file-size-mb': {
                  type: 'number',
                  description:
                    'Maximum file size (in MB) for the capture file. Specifies the maximum file size of the warp-diag zip artifact that can be uploaded. If the zip artifact exceeds the specified max file size, it will NOT be uploaded',
                },
                'packet-size-bytes': {
                  type: 'number',
                  description: 'Maximum number of bytes to save for each packet',
                },
                'test-all-routes': {
                  type: 'boolean',
                  description:
                    "Test an IP address from all included or excluded ranges. Tests an IP address from all included or excluded ranges. Essentially the same as running 'route get <ip>'' and collecting the results. This option may increase the time taken to collect the warp-diag",
                },
                'time-limit-min': {
                  type: 'number',
                  description: 'Limit on capture duration (in minutes)',
                },
              },
              required: [],
            },
          },
          required: ['command_type', 'device_id', 'user_email'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dex.commands.create(body);
};

export default { metadata, tool, handler };
