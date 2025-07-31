// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/ssl/certificate_packs',
  operationId: 'certificate-packs-list-certificate-packs',
};

export const tool: Tool = {
  name: 'list_ssl_certificate_packs',
  description: 'For a given zone, list all active certificate packs.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      status: {
        type: 'string',
        description: 'Include Certificate Packs of all statuses, not just active ones.',
        enum: ['all'],
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.ssl.certificatePacks.list(body)) as object);
};

export default { metadata, tool, handler };
