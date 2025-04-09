// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_custom_hostnames',
  description:
    "Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation).  Enable bundling of certificates using the custom_cert_bundle field. The bundling process requires the following condition One certificate in the bundle must use an RSA, and the other must use an ECDSA.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      hostname: {
        type: 'string',
        description: 'The custom hostname that will point to your hostname via CNAME.',
      },
      ssl: {
        type: 'object',
        description: 'SSL properties used when creating the custom hostname.',
        properties: {
          bundle_method: {
            type: 'string',
            description:
              'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
            enum: ['ubiquitous', 'optimal', 'force'],
          },
          certificate_authority: {
            type: 'string',
            description: 'The Certificate Authority that will issue the certificate',
            enum: ['digicert', 'google', 'lets_encrypt', 'ssl_com'],
          },
          cloudflare_branding: {
            type: 'boolean',
            description:
              'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true',
          },
          custom_cert_bundle: {
            type: 'array',
            description: 'Array of custom certificate and key pairs (1 or 2 pairs allowed)',
            items: {
              type: 'object',
              properties: {
                custom_certificate: {
                  type: 'string',
                  description: 'If a custom uploaded certificate is used.',
                },
                custom_key: {
                  type: 'string',
                  description: 'The key for a custom uploaded certificate.',
                },
              },
              required: ['custom_certificate', 'custom_key'],
            },
          },
          custom_certificate: {
            type: 'string',
            description: 'If a custom uploaded certificate is used.',
          },
          custom_key: {
            type: 'string',
            description: 'The key for a custom uploaded certificate.',
          },
          method: {
            type: 'string',
            description: 'Domain control validation (DCV) method used for this hostname.',
            enum: ['http', 'txt', 'email'],
          },
          settings: {
            type: 'object',
            description: 'SSL specific settings.',
            properties: {
              ciphers: {
                type: 'array',
                description:
                  'An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.',
                items: {
                  type: 'string',
                },
              },
              early_hints: {
                type: 'string',
                description: 'Whether or not Early Hints is enabled.',
                enum: ['on', 'off'],
              },
              http2: {
                type: 'string',
                description: 'Whether or not HTTP2 is enabled.',
                enum: ['on', 'off'],
              },
              min_tls_version: {
                type: 'string',
                description: 'The minimum TLS version supported.',
                enum: ['1.0', '1.1', '1.2', '1.3'],
              },
              tls_1_3: {
                type: 'string',
                description: 'Whether or not TLS 1.3 is enabled.',
                enum: ['on', 'off'],
              },
            },
            required: [],
          },
          type: {
            type: 'string',
            description:
              'Level of validation to be used for this hostname. Domain validation (dv) must be used.',
            enum: ['dv'],
          },
          wildcard: {
            type: 'boolean',
            description: 'Indicates whether the certificate covers a wildcard.',
          },
        },
        required: [],
      },
      custom_metadata: {
        type: 'object',
        description:
          'Unique key/value metadata for this hostname. These are per-hostname (customer) settings.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customHostnames.create(body);
};

export default { metadata, tool, handler };
