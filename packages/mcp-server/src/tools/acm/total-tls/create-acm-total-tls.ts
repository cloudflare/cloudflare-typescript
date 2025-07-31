// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'acm.total_tls',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/acm/total_tls',
  operationId: 'total-tls-enable-or-disable-total-tls',
};

export const tool: Tool = {
  name: 'create_acm_total_tls',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet Total TLS Settings or disable the feature for a Zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        certificate_authority: {\n          $ref: '#/$defs/certificate_authority'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.'\n        },\n        validity_period: {\n          type: 'string',\n          description: 'The validity period in days for the certificates ordered via Total TLS.',\n          enum: [            90\n          ]\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    certificate_authority: {\n      type: 'string',\n      description: 'The Certificate Authority that Total TLS certificates will be issued through.',\n      enum: [        'google',\n        'lets_encrypt',\n        'ssl_com'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      enabled: {
        type: 'boolean',
        description:
          'If enabled, Total TLS will order a hostname specific TLS certificate for any proxied A, AAAA, or CNAME record in your zone.',
      },
      certificate_authority: {
        $ref: '#/$defs/certificate_authority',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'enabled'],
    $defs: {
      certificate_authority: {
        type: 'string',
        description: 'The Certificate Authority that Total TLS certificates will be issued through.',
        enum: ['google', 'lets_encrypt', 'ssl_com'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.acm.totalTLS.create(body)));
};

export default { metadata, tool, handler };
