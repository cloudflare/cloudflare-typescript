// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/ip',
  operationId: 'ip-intelligence-get-ip-overview',
};

export const tool: Tool = {
  name: 'get_intel_ips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets the geolocation, ASN, infrastructure type of the ASN, and any security threat categories of an IP address. **Must provide ip query parameters.** For example, `/intel/ip?ipv4=1.1.1.1` or `/intel/ip?ipv6=2001:db8::1`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ip_get_response',\n  $defs: {\n    ip_get_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/ip'\n      }\n    },\n    ip: {\n      type: 'object',\n      properties: {\n        belongs_to_ref: {\n          type: 'object',\n          description: 'Specifies a reference to the autonomous systems (AS) that the IP address belongs to.',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            country: {\n              type: 'string'\n            },\n            description: {\n              type: 'string'\n            },\n            type: {\n              type: 'string',\n              description: 'Infrastructure type of this ASN.',\n              enum: [                'hosting_provider',\n                'isp',\n                'organization'\n              ]\n            },\n            value: {\n              type: 'string'\n            }\n          }\n        },\n        ip: {\n          type: 'string'\n        },\n        risk_types: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'number'\n              },\n              name: {\n                type: 'string'\n              },\n              super_category_id: {\n                type: 'number'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      ipv4: {
        type: 'string',
      },
      ipv6: {
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.intel.ips.get(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
