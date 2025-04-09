// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.networks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_devices_zero_trust_networks',
  description: 'Creates a new device managed network.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      config: {
        type: 'object',
        description:
          'The configuration object containing information for the WARP client to detect the managed network.',
        properties: {
          tls_sockaddr: {
            type: 'string',
            description:
              'A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.',
          },
          sha256: {
            type: 'string',
            description:
              'The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.',
          },
        },
        required: ['tls_sockaddr'],
      },
      name: {
        type: 'string',
        description: 'The name of the device managed network. This name must be unique.',
      },
      type: {
        type: 'string',
        description: 'The type of device managed network.',
        enum: ['tls'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.networks.create(body);
};

export default { metadata, tool, handler };
