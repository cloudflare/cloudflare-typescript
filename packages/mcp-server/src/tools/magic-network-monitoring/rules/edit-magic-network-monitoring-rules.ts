// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_magic_network_monitoring_rules',
  description: 'Update a network monitoring rule for account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'The id of the rule. Must be unique.',
      },
      automatic_advertisement: {
        type: 'boolean',
        description:
          'Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.',
      },
      bandwidth: {
        type: 'number',
        description:
          'The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.',
      },
      duration: {
        type: 'string',
        description:
          'The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].',
        enum: ['1m', '5m', '10m', '15m', '20m', '30m', '45m', '60m'],
      },
      name: {
        type: 'string',
        description:
          'The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.',
      },
      packet_threshold: {
        type: 'number',
        description:
          'The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.',
      },
      prefixes: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'The IP prefixes that are monitored for this rule. Must be a CIDR range like 203.0.113.0/24. Max 5000 different CIDR ranges.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.magicNetworkMonitoring.rules.edit(rule_id, body);
};

export default { metadata, tool, handler };
