// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_network_interconnects_interconnects',
  description: 'Create a new interconnect',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Customer account tag',
          },
          account: {
            type: 'string',
          },
          slot_id: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          speed: {
            type: 'string',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Customer account tag',
          },
          account: {
            type: 'string',
          },
          bandwidth: {
            type: 'string',
            description: 'Bandwidth structure as visible through the customer-facing API.',
            enum: ['50M', '100M', '200M', '300M', '400M', '500M', '1G', '2G', '5G', '10G', '20G', '50G'],
          },
          pairing_key: {
            type: 'string',
            description: 'Pairing key provided by GCP',
          },
          type: {
            type: 'string',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.interconnects.create(body);
};

export default { metadata, tool, handler };
