// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.fleet_status.devices',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_fleet_status_dex_zero_trust_devices',
  description: 'List details for devices using WARP',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Time range beginning in ISO format',
      },
      page: {
        type: 'number',
        description: 'Page number',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
      },
      to: {
        type: 'string',
        description: 'Time range end in ISO format',
      },
      colo: {
        type: 'string',
        description: 'Cloudflare colo',
      },
      device_id: {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
      },
      mode: {
        type: 'string',
        description: 'The mode under which the WARP client is run',
      },
      platform: {
        type: 'string',
        description: 'Operating system',
      },
      sort_by: {
        type: 'string',
        description: 'Dimension to sort results by',
        enum: ['colo', 'device_id', 'mode', 'platform', 'status', 'timestamp', 'version'],
      },
      source: {
        type: 'string',
        description:
          'Source:\n  * `hourly` - device details aggregated hourly, up to 7 days prior\n  * `last_seen` - device details, up to 24 hours prior\n  * `raw` - device details, up to 7 days prior',
        enum: ['last_seen', 'hourly', 'raw'],
      },
      status: {
        type: 'string',
        description: 'Network status',
      },
      version: {
        type: 'string',
        description: 'WARP client version',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dex.fleetStatus.devices.list(body);
};

export default { metadata, tool, handler };
