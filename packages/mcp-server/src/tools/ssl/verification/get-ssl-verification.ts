// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.verification',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/ssl/verification',
  operationId: 'ssl-verification-ssl-verification-details',
};

export const tool: Tool = {
  name: 'get_ssl_verification',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet SSL Verification Info for a Zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/verification'\n      }\n    }\n  },\n  $defs: {\n    verification: {\n      type: 'object',\n      properties: {\n        certificate_status: {\n          type: 'string',\n          description: 'Current status of certificate.',\n          enum: [            'initializing',\n            'authorizing',\n            'active',\n            'expired',\n            'issuing',\n            'timing_out',\n            'pending_deployment'\n          ]\n        },\n        brand_check: {\n          type: 'boolean',\n          description: 'Certificate Authority is manually reviewing the order.'\n        },\n        cert_pack_uuid: {\n          type: 'string',\n          description: 'Certificate Pack UUID.'\n        },\n        signature: {\n          type: 'string',\n          description: 'Certificate\\'s signature algorithm.',\n          enum: [            'ECDSAWithSHA256',\n            'SHA1WithRSA',\n            'SHA256WithRSA'\n          ]\n        },\n        validation_method: {\n          $ref: '#/$defs/validation_method'\n        },\n        verification_info: {\n          type: 'object',\n          description: 'Certificate\\'s required verification information.',\n          properties: {\n            record_name: {\n              type: 'string',\n              description: 'Name of CNAME record.',\n              enum: [                'record_name',\n                'http_url',\n                'cname',\n                'txt_name'\n              ]\n            },\n            record_target: {\n              type: 'string',\n              description: 'Target of CNAME record.',\n              enum: [                'record_value',\n                'http_body',\n                'cname_target',\n                'txt_value'\n              ]\n            }\n          }\n        },\n        verification_status: {\n          type: 'boolean',\n          description: 'Status of the required verification information, omitted if verification status is unknown.'\n        },\n        verification_type: {\n          type: 'string',\n          description: 'Method of verification.',\n          enum: [            'cname',\n            'meta tag'\n          ]\n        }\n      },\n      required: [        'certificate_status'\n      ]\n    },\n    validation_method: {\n      type: 'string',\n      description: 'Validation method in use for a certificate pack order.',\n      enum: [        'http',\n        'cname',\n        'txt'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      retry: {
        type: 'string',
        description: 'Immediately retry SSL Verification.',
        enum: [true],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.ssl.verification.get(body)));
};

export default { metadata, tool, handler };
