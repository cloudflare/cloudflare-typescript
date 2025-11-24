// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}',
  operationId: 'certificate-packs-get-certificate-pack',
};

export const tool: Tool = {
  name: 'get_ssl_certificate_packs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFor a given zone, get a certificate pack.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/certificate_pack_get_response',\n  $defs: {\n    certificate_pack_get_response: {\n      type: 'object',\n      description: 'A certificate pack with all its properties.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificates: {\n          type: 'array',\n          description: 'Array of certificates in this pack.',\n          items: {\n            type: 'object',\n            description: 'An individual certificate within a certificate pack.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Certificate identifier.'\n              },\n              hosts: {\n                type: 'array',\n                description: 'Hostnames covered by this certificate.',\n                items: {\n                  type: 'string'\n                }\n              },\n              status: {\n                type: 'string',\n                description: 'Certificate status.'\n              },\n              bundle_method: {\n                type: 'string',\n                description: 'Certificate bundle method.'\n              },\n              expires_on: {\n                type: 'string',\n                description: 'When the certificate from the authority expires.',\n                format: 'date-time'\n              },\n              geo_restrictions: {\n                type: 'object',\n                description: 'Specify the region where your private key can be held locally.',\n                properties: {\n                  label: {\n                    type: 'string',\n                    enum: [                      'us',\n                      'eu',\n                      'highest_security'\n                    ]\n                  }\n                }\n              },\n              issuer: {\n                type: 'string',\n                description: 'The certificate authority that issued the certificate.'\n              },\n              modified_on: {\n                type: 'string',\n                description: 'When the certificate was last modified.',\n                format: 'date-time'\n              },\n              priority: {\n                type: 'number',\n                description: 'The order/priority in which the certificate will be used.'\n              },\n              signature: {\n                type: 'string',\n                description: 'The type of hash used for the certificate.'\n              },\n              uploaded_on: {\n                type: 'string',\n                description: 'When the certificate was uploaded to Cloudflare.',\n                format: 'date-time'\n              },\n              zone_id: {\n                type: 'string',\n                description: 'Identifier.'\n              }\n            },\n            required: [              'id',\n              'hosts',\n              'status'\n            ]\n          }\n        },\n        hosts: {\n          type: 'array',\n          description: 'Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.',\n          items: {\n            $ref: '#/$defs/host'\n          }\n        },\n        status: {\n          $ref: '#/$defs/status'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of certificate pack.',\n          enum: [            'mh_custom',\n            'managed_hostname',\n            'sni_custom',\n            'universal',\n            'advanced',\n            'total_tls',\n            'keyless',\n            'legacy_custom'\n          ]\n        },\n        certificate_authority: {\n          type: 'string',\n          description: 'Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)',\n          enum: [            'google',\n            'lets_encrypt',\n            'ssl_com'\n          ]\n        },\n        cloudflare_branding: {\n          type: 'boolean',\n          description: 'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.'\n        },\n        primary_certificate: {\n          type: 'string',\n          description: 'Identifier of the primary certificate in a pack.'\n        },\n        validation_errors: {\n          type: 'array',\n          description: 'Domain validation errors that have been received by the certificate authority (CA).',\n          items: {\n            type: 'object',\n            properties: {\n              message: {\n                type: 'string',\n                description: 'A domain validation error.'\n              }\n            }\n          }\n        },\n        validation_method: {\n          type: 'string',\n          description: 'Validation Method selected for the order.',\n          enum: [            'txt',\n            'http',\n            'email'\n          ]\n        },\n        validation_records: {\n          type: 'array',\n          description: 'Certificates\\' validation records.',\n          items: {\n            type: 'object',\n            description: 'Certificate\\'s required validation record.',\n            properties: {\n              emails: {\n                type: 'array',\n                description: 'The set of email addresses that the certificate authority (CA) will use to complete domain validation.',\n                items: {\n                  type: 'string'\n                }\n              },\n              http_body: {\n                type: 'string',\n                description: 'The content that the certificate authority (CA) will expect to find at the http_url during the domain validation.'\n              },\n              http_url: {\n                type: 'string',\n                description: 'The url that will be checked during domain validation.'\n              },\n              txt_name: {\n                type: 'string',\n                description: 'The hostname that the certificate authority (CA) will check for a TXT record during domain validation .'\n              },\n              txt_value: {\n                type: 'string',\n                description: 'The TXT record that the certificate authority (CA) will check during domain validation.'\n              }\n            }\n          }\n        },\n        validity_days: {\n          type: 'string',\n          description: 'Validity Days selected for the order.',\n          enum: [            14,\n            30,\n            90,\n            365\n          ]\n        }\n      },\n      required: [        'id',\n        'certificates',\n        'hosts',\n        'status',\n        'type'\n      ]\n    },\n    host: {\n      type: 'string'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of certificate pack.',\n      enum: [        'initializing',\n        'pending_validation',\n        'deleted',\n        'pending_issuance',\n        'pending_deployment',\n        'pending_deletion',\n        'pending_expiration',\n        'expired',\n        'active',\n        'initializing_timed_out',\n        'validation_timed_out',\n        'issuance_timed_out',\n        'deployment_timed_out',\n        'deletion_timed_out',\n        'pending_cleanup',\n        'staging_deployment',\n        'staging_active',\n        'deactivating',\n        'inactive',\n        'backup_issued',\n        'holding_deployment'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'certificate_pack_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_pack_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.ssl.certificatePacks.get(certificate_pack_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
