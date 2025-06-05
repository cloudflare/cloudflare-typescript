// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.regions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/regions/{region_id}',
  operationId: 'load-balancer-regions-get-region',
};

export const tool: Tool = {
  name: 'get_load_balancers_regions',
  description: 'Get a single region mapping.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      region_id: {
        type: 'string',
        description:
          'A list of Cloudflare regions. WNAM: Western North America, ENAM: Eastern North America, WEU: Western Europe, EEU: Eastern Europe, NSAM: Northern South America, SSAM: Southern South America, OC: Oceania, ME: Middle East, NAF: North Africa, SAF: South Africa, SAS: Southern Asia, SEAS: South East Asia, NEAS: North East Asia).',
        enum: ['WNAM', 'ENAM', 'WEU', 'EEU', 'NSAM', 'SSAM', 'OC', 'ME', 'NAF', 'SAF', 'SAS', 'SEAS', 'NEAS'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { region_id, ...body } = args as any;
  return asTextContentResult(await client.loadBalancers.regions.get(region_id, body));
};

export default { metadata, tool, handler };
