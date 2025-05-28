// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.scans.config',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/cloudforce-one/scans/config/{config_id}',
  operationId: 'post_ConfigUpdate',
};

export const tool: Tool = {
  name: 'edit_scans_cloudforce_one_config',
  description: 'Update an existing Scan Config',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines the Account ID.',
      },
      config_id: {
        type: 'string',
        description: 'Defines the Config ID.',
      },
      frequency: {
        type: 'number',
        title: 'Frequency',
        description: 'Defines the number of days between each scan (0 = One-off scan).',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { config_id, ...body } = args as any;
  return client.cloudforceOne.scans.config.edit(config_id, body);
};

export default { metadata, tool, handler };
