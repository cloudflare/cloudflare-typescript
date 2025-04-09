// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'keyless_certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_keyless_certificates',
  description: 'Create Keyless SSL Configuration',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate: {
        type: 'string',
        description: "The zone's SSL certificate or SSL certificate and intermediate(s).",
      },
      host: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      port: {
        type: 'number',
        description:
          "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
      },
      bundle_method: {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        enum: ['ubiquitous', 'optimal', 'force'],
      },
      name: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      tunnel: {
        type: 'object',
        description: 'Configuration for using Keyless SSL through a Cloudflare Tunnel',
        properties: {
          private_ip: {
            type: 'string',
            description: 'Private IP of the Key Server Host',
          },
          vnet_id: {
            type: 'string',
            description: 'Cloudflare Tunnel Virtual Network ID',
          },
        },
        required: ['private_ip', 'vnet_id'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.keylessCertificates.create(body);
};

export default { metadata, tool, handler };
