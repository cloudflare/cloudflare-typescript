// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}',
  operationId: 'per-hostname-authenticated-origin-pull-delete-hostname-client-certificate',
};

export const tool: Tool = {
  name: 'delete_hostnames_origin_tls_client_auth_certificates',
  description: 'Delete Hostname Client Certificate',
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
    await client.originTLSClientAuth.hostnames.certificates.delete(certificate_id, body),
  );
};

export default { metadata, tool, handler };
