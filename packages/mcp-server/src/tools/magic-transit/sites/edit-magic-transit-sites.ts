// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_magic_transit_sites',
  description: 'Patch a specific Site.',
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
      name: {
        type: 'string',
        description: 'The name of the site.',
      },
      secondary_connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag. Used when high availability mode is on.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { site_id, ...body } = args;
  return client.magicTransit.sites.edit(site_id, body);
};

export default { metadata, tool, handler };
