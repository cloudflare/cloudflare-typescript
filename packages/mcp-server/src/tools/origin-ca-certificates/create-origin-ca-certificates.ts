// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_ca_certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/certificates',
  operationId: 'origin-ca-create-certificate',
};

export const tool: Tool = {
  name: 'create_origin_ca_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an Origin CA certificate. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/origin_ca_certificate',\n  $defs: {\n    origin_ca_certificate: {\n      type: 'object',\n      properties: {\n        csr: {\n          type: 'string',\n          description: 'The Certificate Signing Request (CSR). Must be newline-encoded.'\n        },\n        hostnames: {\n          type: 'array',\n          description: 'Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate.',\n          items: {\n            type: 'string'\n          }\n        },\n        request_type: {\n          $ref: '#/$defs/certificate_request_type'\n        },\n        requested_validity: {\n          $ref: '#/$defs/request_validity'\n        },\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The Origin CA certificate. Will be newline-encoded.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the certificate will expire.'\n        }\n      },\n      required: [        'csr',\n        'hostnames',\n        'request_type',\n        'requested_validity'\n      ]\n    },\n    certificate_request_type: {\n      type: 'string',\n      description: 'Signature type desired on certificate (\"origin-rsa\" (rsa), \"origin-ecc\" (ecdsa), or \"keyless-certificate\" (for Keyless SSL servers).',\n      enum: [        'origin-rsa',\n        'origin-ecc',\n        'keyless-certificate'\n      ]\n    },\n    request_validity: {\n      type: 'string',\n      description: 'The number of days for which the certificate should be valid.',\n      enum: [        7,\n        30,\n        90,\n        365,\n        730,\n        1095,\n        5475\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      csr: {
        type: 'string',
        description: 'The Certificate Signing Request (CSR). Must be newline-encoded.',
      },
      hostnames: {
        type: 'array',
        description: 'Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate.',
        items: {
          type: 'string',
        },
      },
      request_type: {
        $ref: '#/$defs/certificate_request_type',
      },
      requested_validity: {
        $ref: '#/$defs/request_validity',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['csr', 'hostnames', 'request_type'],
    $defs: {
      certificate_request_type: {
        type: 'string',
        description:
          'Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).',
        enum: ['origin-rsa', 'origin-ecc', 'keyless-certificate'],
      },
      request_validity: {
        type: 'string',
        description: 'The number of days for which the certificate should be valid.',
        enum: [7, 30, 90, 365, 730, 1095, 5475],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.originCACertificates.create(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
