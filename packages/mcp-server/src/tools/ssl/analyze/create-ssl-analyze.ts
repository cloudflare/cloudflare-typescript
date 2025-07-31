// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.analyze',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/ssl/analyze',
  operationId: 'analyze-certificate-analyze-certificate',
};

export const tool: Tool = {
  name: 'create_ssl_analyze',
  description:
    'Returns the set of hostnames, the signature algorithm, and the expiration date of the certificate.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      bundle_method: {
        $ref: '#/$defs/bundle_method',
      },
      certificate: {
        type: 'string',
        description: "The zone's SSL certificate or certificate and the intermediate(s).",
      },
    },
    required: ['zone_id'],
    $defs: {
      bundle_method: {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        enum: ['ubiquitous', 'optimal', 'force'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.ssl.analyze.create(body)) as object);
};

export default { metadata, tool, handler };
