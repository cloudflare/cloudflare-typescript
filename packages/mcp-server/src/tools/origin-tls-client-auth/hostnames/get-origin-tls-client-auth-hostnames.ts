// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_origin_tls_client_auth_hostnames',
  description: 'Get the Hostname Status for Client Authentication',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      hostname: {
        type: 'string',
        description: 'The hostname on the origin for which the client certificate uploaded will be used.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { hostname, ...body } = args;
  return client.originTLSClientAuth.hostnames.get(hostname, body);
};

export default { metadata, tool, handler };
