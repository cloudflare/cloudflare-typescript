// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_custom_certificates',
  description:
    'Upload a new private key and/or PEM/CRT for the SSL certificate. Note: PATCHing a configuration for sni_custom certificates will result in a new resource id being returned, and the previous one being deleted.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      custom_certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
      bundle_method: {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        enum: ['ubiquitous', 'optimal', 'force'],
      },
      certificate: {
        type: 'string',
        description: "The zone's SSL certificate or certificate and the intermediate(s).",
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
        required: [],
      },
      policy: {
        type: 'string',
        description:
          "Specify the policy that determines the region where your private key will be held locally. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Any combination of countries, specified by their two letter country code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) can be chosen, such as 'country: IN', as well as 'region: EU' which refers to the EU region. If there are too few data centers satisfying the policy, it will be rejected.",
      },
      private_key: {
        type: 'string',
        description: "The zone's private key.",
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { custom_certificate_id, ...body } = args;
  return client.customCertificates.edit(custom_certificate_id, body);
};

export default { metadata, tool, handler };
