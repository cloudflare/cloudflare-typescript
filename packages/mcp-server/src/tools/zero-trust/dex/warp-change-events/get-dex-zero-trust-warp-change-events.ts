// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.warp_change_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/warp-change-events',
  operationId: 'list-warp-change-events',
};

export const tool: Tool = {
  name: 'get_dex_zero_trust_warp_change_events',
  description: 'List WARP configuration and enablement toggle change events by device.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Start time for the query in ISO (RFC3339 - ISO 8601) format',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page',
      },
      to: {
        type: 'string',
        description: 'End time for the query in ISO (RFC3339 - ISO 8601) format',
      },
      account_name: {
        type: 'string',
        description: 'Filter events by account name.',
      },
      config_name: {
        type: 'string',
        description:
          "Filter events by WARP configuration name changed from or to. Applicable to type='config' events only.",
      },
      sort_order: {
        type: 'string',
        description: 'Sort response by event timestamp.',
        enum: ['ASC', 'DESC'],
      },
      toggle: {
        type: 'string',
        description: "Filter events by type toggle value. Applicable to type='toggle' events only.",
        enum: ['on', 'off'],
      },
      type: {
        type: 'string',
        description: "Filter events by type 'config' or 'toggle'",
        enum: ['config', 'toggle'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.dex.warpChangeEvents.get(body);
};

export default { metadata, tool, handler };
