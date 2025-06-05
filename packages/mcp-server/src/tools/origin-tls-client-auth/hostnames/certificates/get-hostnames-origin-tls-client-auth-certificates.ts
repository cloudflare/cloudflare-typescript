// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames.certificates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}',
  operationId: 'per-hostname-authenticated-origin-pull-get-the-hostname-client-certificate',
};

export const tool: Tool = {
  name: 'get_hostnames_origin_tls_client_auth_certificates',
  description: 'Get the certificate by ID to be used for client authentication on a hostname.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return asTextContentResult(
    await client.originTLSClientAuth.hostnames.certificates.get(certificate_id, body),
  );
};

export default { metadata, tool, handler };
