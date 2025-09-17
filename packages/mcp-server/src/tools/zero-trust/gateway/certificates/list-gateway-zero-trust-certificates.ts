// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.certificates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/certificates',
  operationId: 'zero-trust-certificates-list-zero-trust-certificates',
};

export const tool: Tool = {
  name: 'list_gateway_zero_trust_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Zero Trust certificates for an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicate whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Identify the certificate with a UUID.'\n          },\n          binding_status: {\n            type: 'string',\n            description: 'Indicate the read-only deployment status of the certificate on Cloudflare\\'s edge. Gateway TLS interception can use certificates in the \\'available\\' (previously called \\'active\\') state.',\n            enum: [              'pending_deployment',\n              'available',\n              'pending_deletion',\n              'inactive'\n            ]\n          },\n          certificate: {\n            type: 'string',\n            description: 'Provide the CA certificate (read-only).'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          expires_on: {\n            type: 'string',\n            format: 'date-time'\n          },\n          fingerprint: {\n            type: 'string',\n            description: 'Provide the SHA256 fingerprint of the certificate (read-only).'\n          },\n          in_use: {\n            type: 'boolean',\n            description: 'Indicate whether Gateway TLS interception uses this certificate (read-only). You cannot set this value directly. To configure interception, use the Gateway configuration setting named `certificate` (read-only).'\n          },\n          issuer_org: {\n            type: 'string',\n            description: 'Indicate the organization that issued the certificate (read-only).'\n          },\n          issuer_raw: {\n            type: 'string',\n            description: 'Provide the entire issuer field of the certificate (read-only).'\n          },\n          type: {\n            type: 'string',\n            description: 'Indicate the read-only certificate type, BYO-PKI (custom) or Gateway-managed.',\n            enum: [              'custom',\n              'gateway_managed'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          uploaded_on: {\n            type: 'string',\n            format: 'date-time'\n          }\n        }\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Indicate the total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Indicate the current page within a paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Indicate the number of results per page.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Indicate the total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.zeroTrust.gateway.certificates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
