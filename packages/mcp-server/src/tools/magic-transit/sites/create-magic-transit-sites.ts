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
  name: 'create_magic_transit_sites',
  description: 'Creates a new Site',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
        description: 'The name of the site.',
      },
      connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag.',
      },
      description: {
        type: 'string',
      },
      ha_mode: {
        type: 'boolean',
        description:
          'Site high availability mode. If set to true, the site can have two connectors and runs in high availability mode.',
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
      secondary_connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag. Used when high availability mode is on.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicTransit.sites.create(body);
};

export default { metadata, tool, handler };
