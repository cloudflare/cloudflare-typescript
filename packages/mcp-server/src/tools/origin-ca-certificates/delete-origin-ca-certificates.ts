// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_ca_certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_origin_ca_certificates',
  description:
    'Revoke an existing Origin CA certificate by its serial number. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).',
  inputSchema: {
    type: 'object',
    properties: {
      certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_id } = args;
  return client.originCACertificates.delete(certificate_id);
};

export default { metadata, tool, handler };
