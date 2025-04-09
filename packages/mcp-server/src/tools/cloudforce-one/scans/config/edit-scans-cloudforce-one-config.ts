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
  name: 'edit_scans_cloudforce_one_config',
  description: 'Update an existing Scan Config',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
      config_id: {
        type: 'string',
        description: 'Config ID',
      },
      frequency: {
        type: 'number',
        title: 'Frequency',
        description: 'The number of days between each scan (0 = no recurring scans).',
      },
      ips: {
        type: 'array',
        title: 'IP List',
        description:
          'A list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.',
        items: {
          type: 'string',
          description:
            'A list of IP addresses or CIDR blocks to scan. The maximum number of total IP addresses allowed is 5000.',
        },
      },
      ports: {
        type: 'array',
        title: 'Port List',
        description:
          'A list of ports to scan. Allowed values:"default", "all", or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). Default will scan the 100 most commonly open ports.',
        items: {
          type: 'string',
          description:
            'A list of ports to scan. Allowed values:"default", "all", or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). Default will scan the 100 most commonly open ports.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { config_id, ...body } = args;
  return client.cloudforceOne.scans.config.edit(config_id, body);
};

export default { metadata, tool, handler };
