// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_origin_tls_client_auth_hostnames',
  description:
    'Associate a hostname to a certificate and enable, disable or invalidate the association. If disabled, client certificate will not be sent to the hostname even if activated at the zone level. 100 maximum associations on a single certificate are allowed. Note: Use a null value for parameter *enabled* to invalidate the association.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      config: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            cert_id: {
              type: 'string',
              description: 'Certificate identifier tag.',
            },
            enabled: {
              type: 'boolean',
              description:
                'Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.',
            },
            hostname: {
              type: 'string',
              description:
                'The hostname on the origin for which the client certificate uploaded will be used.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.originTLSClientAuth.hostnames.update(body);
};

export default { metadata, tool, handler };
