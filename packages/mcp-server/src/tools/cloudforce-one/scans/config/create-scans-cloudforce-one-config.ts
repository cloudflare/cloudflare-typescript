// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.config',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_scans_cloudforce_one_config',
  description: 'Create a new Scan Config',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines the Account ID.',
      },
      ips: {
        type: 'array',
        title: 'IP List',
        description:
          'Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.',
        items: {
          type: 'string',
          description:
            'Defines a list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.',
        },
      },
      frequency: {
        type: 'number',
        title: 'Frequency',
        description: 'Defines the number of days between each scan (0 = One-off scan).',
      },
      ports: {
        type: 'array',
        title: 'Port List',
        description:
          'Defines a list of ports to scan. Valid values are:"default", "all", or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). "default" scans the 100 most commonly open ports.',
        items: {
          type: 'string',
          description:
            'Defines a list of ports to scan. Valid values are:"default", "all", or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). "default" scans the 100 most commonly open ports.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cloudforceOne.scans.config.create(body);
};

export default { metadata, tool, handler };
