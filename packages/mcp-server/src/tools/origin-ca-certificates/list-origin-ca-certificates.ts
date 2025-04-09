// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_ca_certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_origin_ca_certificates',
  description:
    'List all existing Origin CA certificates for a given zone. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.originCACertificates.list(body);
};

export default { metadata, tool, handler };
