// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_firewall_lockdowns',
  description: 'Creates a new Zone Lockdown rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      configurations: {
        type: 'array',
        description:
          'A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations.',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'An IP address configuration.',
              properties: {
                target: {
                  type: 'string',
                  description:
                    'The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.',
                  enum: ['ip'],
                },
                value: {
                  type: 'string',
                  description:
                    'The IP address to match. This address will be compared to the IP address of incoming requests.',
                },
              },
              required: [],
            },
            {
              type: 'object',
              title: 'An IP address range configuration.',
              properties: {
                target: {
                  type: 'string',
                  description:
                    'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the Zone Lockdown rule.',
                  enum: ['ip_range'],
                },
                value: {
                  type: 'string',
                  description:
                    'The IP address range to match. You can only use prefix lengths `/16` and `/24`.',
                },
              },
              required: [],
            },
          ],
        },
      },
      urls: {
        type: 'array',
        description:
          'The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.lockdowns.create(body);
};

export default { metadata, tool, handler };
