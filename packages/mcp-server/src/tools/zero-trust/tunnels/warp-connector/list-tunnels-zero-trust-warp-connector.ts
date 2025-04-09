// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.warp_connector',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_tunnels_zero_trust_warp_connector',
  description: 'Lists and filters Warp Connector Tunnels in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      exclude_prefix: {
        type: 'string',
      },
      existed_at: {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
      },
      include_prefix: {
        type: 'string',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the tunnel.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results to display.',
      },
      status: {
        type: 'string',
        description:
          'The status of the tunnel. Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).',
        enum: ['inactive', 'degraded', 'healthy', 'down'],
      },
      uuid: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      was_active_at: {
        type: 'string',
        format: 'date-time',
      },
      was_inactive_at: {
        type: 'string',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.tunnels.warpConnector.list(body);
};

export default { metadata, tool, handler };
