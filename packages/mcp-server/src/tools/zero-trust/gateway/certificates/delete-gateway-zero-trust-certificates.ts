// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/gateway/certificates/{certificate_id}',
  operationId: 'zero-trust-certificates-delete-zero-trust-certificate',
};

export const tool: Tool = {
  name: 'delete_gateway_zero_trust_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a gateway-managed Zero Trust certificate. A certificate must be deactivated from the edge (inactive) before it is deleted.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Certificate UUID tag.'\n        },\n        binding_status: {\n          type: 'string',\n          description: 'The read only deployment status of the certificate on Cloudflare\\'s edge. Certificates in the \\'available\\' (previously called \\'active\\') state may be used for Gateway TLS interception.',\n          enum: [            'pending_deployment',\n            'available',\n            'pending_deletion',\n            'inactive'\n          ]\n        },\n        certificate: {\n          type: 'string',\n          description: 'The CA certificate(read only).'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        expires_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        fingerprint: {\n          type: 'string',\n          description: 'The SHA256 fingerprint of the certificate(read only).'\n        },\n        in_use: {\n          type: 'boolean',\n          description: 'Read-only field that shows whether Gateway TLS interception is using this certificate. This value cannot be set directly. To configure the certificate for interception, use the Gateway configuration setting named certificate.'\n        },\n        issuer_org: {\n          type: 'string',\n          description: 'The organization that issued the certificate(read only).'\n        },\n        issuer_raw: {\n          type: 'string',\n          description: 'The entire issuer field of the certificate(read only).'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of certificate, either BYO-PKI (custom) or Gateway-managed(read only).',\n          enum: [            'custom',\n            'gateway_managed'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        uploaded_on: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      certificate_id: {
        type: 'string',
        description: 'Certificate UUID tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'certificate_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.gateway.certificates.delete(certificate_id, body)),
  );
};

export default { metadata, tool, handler };
