// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates',
  operationId: 'per-hostname-authenticated-origin-pull-upload-a-hostname-client-certificate',
};

export const tool: Tool = {
  name: 'create_hostnames_origin_tls_client_auth_certificates',
  description:
    'Upload a certificate to be used for client authentication on a hostname. 10 hostname certificates per zone are allowed.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate: {
        type: 'string',
        description: 'The hostname certificate.',
      },
      private_key: {
        type: 'string',
        description: "The hostname certificate's private key.",
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.originTLSClientAuth.hostnames.certificates.create(body));
};

export default { metadata, tool, handler };
