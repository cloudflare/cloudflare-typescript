// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/custom_certificates',
  operationId: 'custom-ssl-for-a-zone-create-ssl-configuration',
};

export const tool: Tool = {
  name: 'create_custom_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a new SSL certificate for a zone.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate: {
        type: 'string',
        description: "The zone's SSL certificate or certificate and the intermediate(s).",
      },
      private_key: {
        type: 'string',
        description: "The zone's private key.",
      },
      bundle_method: {
        $ref: '#/$defs/bundle_method',
      },
      geo_restrictions: {
        $ref: '#/$defs/geo_restrictions',
      },
      policy: {
        type: 'string',
        description:
          "Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.",
      },
      type: {
        type: 'string',
        description:
          "The type 'legacy_custom' enables support for legacy clients which do not include SNI in the TLS handshake.",
        enum: ['legacy_custom', 'sni_custom'],
      },
    },
    required: ['zone_id', 'certificate', 'private_key'],
    $defs: {
      bundle_method: {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        enum: ['ubiquitous', 'optimal', 'force'],
      },
      geo_restrictions: {
        type: 'object',
        description:
          'Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.',
        properties: {
          label: {
            type: 'string',
            enum: ['us', 'eu', 'highest_security'],
          },
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.customCertificates.create(body));
};

export default { metadata, tool, handler };
