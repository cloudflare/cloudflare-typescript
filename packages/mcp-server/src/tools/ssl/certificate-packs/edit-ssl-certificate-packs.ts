// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}',
  operationId: 'certificate-packs-restart-validation-for-advanced-certificate-manager-certificate-pack',
};

export const tool: Tool = {
  name: 'edit_ssl_certificate_packs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFor a given zone, restart validation or add cloudflare branding for an advanced certificate pack.  The former is only a validation operation for a Certificate Pack in a validation_timed_out status.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificate_authority: {\n          type: 'string',\n          description: 'Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)',\n          enum: [            'google',\n            'lets_encrypt',\n            'ssl_com'\n          ]\n        },\n        cloudflare_branding: {\n          type: 'boolean',\n          description: 'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.'\n        },\n        hosts: {\n          type: 'array',\n          description: 'Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.',\n          items: {\n            $ref: '#/$defs/host'\n          }\n        },\n        status: {\n          $ref: '#/$defs/status'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of certificate pack.',\n          enum: [            'advanced'\n          ]\n        },\n        validation_method: {\n          type: 'string',\n          description: 'Validation Method selected for the order.',\n          enum: [            'txt',\n            'http',\n            'email'\n          ]\n        },\n        validity_days: {\n          type: 'string',\n          description: 'Validity Days selected for the order.',\n          enum: [            14,\n            30,\n            90,\n            365\n          ]\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    host: {\n      type: 'string'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of certificate pack.',\n      enum: [        'initializing',\n        'pending_validation',\n        'deleted',\n        'pending_issuance',\n        'pending_deployment',\n        'pending_deletion',\n        'pending_expiration',\n        'expired',\n        'active',\n        'initializing_timed_out',\n        'validation_timed_out',\n        'issuance_timed_out',\n        'deployment_timed_out',\n        'deletion_timed_out',\n        'pending_cleanup',\n        'staging_deployment',\n        'staging_active',\n        'deactivating',\n        'inactive',\n        'backup_issued',\n        'holding_deployment'\n      ]\n    }\n  }\n}\n```",
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
      cloudflare_branding: {
        type: 'boolean',
        description:
          'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_pack_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.ssl.certificatePacks.edit(certificate_pack_id, body)),
  );
};

export default { metadata, tool, handler };
