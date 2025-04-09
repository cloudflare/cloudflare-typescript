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
  name: 'edit_keyless_certificates',
  description:
    'This will update attributes of a Keyless SSL. Consists of one or more of the following:  host,name,port.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      keyless_certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether or not the Keyless SSL is on or off.',
      },
      host: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      name: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      port: {
        type: 'number',
        description:
          "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
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
  const { keyless_certificate_id, ...body } = args;
  return client.keylessCertificates.edit(keyless_certificate_id, body);
};

export default { metadata, tool, handler };
