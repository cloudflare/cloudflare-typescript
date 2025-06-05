// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}',
  operationId: 'magic-sites-update-site',
};

export const tool: Tool = {
  name: 'update_magic_transit_sites',
  description: 'Update a specific Site.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
      connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag.',
      },
      description: {
        type: 'string',
      },
      location: {
        $ref: '#/$defs/site_location',
      },
      name: {
        type: 'string',
        description: 'The name of the site.',
      },
      secondary_connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag. Used when high availability mode is on.',
      },
    },
    $defs: {
      site_location: {
        type: 'object',
        description: 'Location of site in latitude and longitude.',
        properties: {
          lat: {
            type: 'string',
            description: 'Latitude',
          },
          lon: {
            type: 'string',
            description: 'Longitude',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { site_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.sites.update(site_id, body));
};

export default { metadata, tool, handler };
