// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/custom_certificates/{custom_certificate_id}',
  operationId: 'custom-ssl-for-a-zone-delete-ssl-configuration',
};

export const tool: Tool = {
  name: 'delete_custom_certificates',
  description: 'Remove a SSL certificate from a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_certificate_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { custom_certificate_id, ...body } = args as any;
  return asTextContentResult(await client.customCertificates.delete(custom_certificate_id, body));
};

export default { metadata, tool, handler };
