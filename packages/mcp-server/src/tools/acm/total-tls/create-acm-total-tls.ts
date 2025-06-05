// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'acm.total_tls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/acm/total_tls',
  operationId: 'total-tls-enable-or-disable-total-tls',
};

export const tool: Tool = {
  name: 'create_acm_total_tls',
  description: 'Set Total TLS Settings or disable the feature for a Zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      enabled: {
        type: 'boolean',
        description:
          'If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.',
      },
      certificate_authority: {
        $ref: '#/$defs/certificate_authority',
      },
    },
    $defs: {
      certificate_authority: {
        type: 'string',
        description: 'The Certificate Authority that Total TLS certificates will be issued through.',
        enum: ['google', 'lets_encrypt', 'ssl_com'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.acm.totalTLS.create(body));
};

export default { metadata, tool, handler };
