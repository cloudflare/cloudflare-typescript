// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_infrastructure_access_zero_trust_targets',
  description: 'Update target',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      target_id: {
        type: 'string',
        title: 'target_id',
        description: 'Target identifier',
      },
      hostname: {
        type: 'string',
        description:
          'A non-unique field that refers to a target. Case insensitive, maximum\nlength of 255 characters, supports the use of special characters dash\nand period, does not support spaces, and must start and end with an\nalphanumeric character.',
      },
      ip: {
        type: 'object',
        description: 'The IPv4/IPv6 address that identifies where to reach a target',
        properties: {
          ipv4: {
            type: 'object',
            description: "The target's IPv4 address",
            properties: {
              ip_addr: {
                type: 'string',
                description: 'IP address of the target',
              },
              virtual_network_id: {
                type: 'string',
                description:
                  '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.',
              },
            },
            required: [],
          },
          ipv6: {
            type: 'object',
            description: "The target's IPv6 address",
            properties: {
              ip_addr: {
                type: 'string',
                description: 'IP address of the target',
              },
              virtual_network_id: {
                type: 'string',
                description:
                  '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.',
              },
            },
            required: [],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { target_id, ...body } = args;
  return client.zeroTrust.access.infrastructure.targets.update(target_id, body);
};

export default { metadata, tool, handler };
