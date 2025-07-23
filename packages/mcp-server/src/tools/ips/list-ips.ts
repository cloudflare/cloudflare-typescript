// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ips',
  operationId: 'cloudflare-ips-cloudflare-ip-details',
};

export const tool: Tool = {
  name: 'list_ips',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            etag: {\n              type: 'string',\n              description: 'A digest of the IP data. Useful for determining if the data has changed.'\n            },\n            ipv4_cidrs: {\n              type: 'array',\n              description: 'List of Cloudflare IPv4 CIDR addresses.',\n              items: {\n                type: 'string',\n                description: 'IPv4 CIDR.'\n              }\n            },\n            ipv6_cidrs: {\n              type: 'array',\n              description: 'List of Cloudflare IPv6 CIDR addresses.',\n              items: {\n                type: 'string',\n                description: 'IPv6 CIDR.'\n              }\n            }\n          }\n        },\n        {\n          type: 'object',\n          properties: {\n            etag: {\n              type: 'string',\n              description: 'A digest of the IP data. Useful for determining if the data has changed.'\n            },\n            ipv4_cidrs: {\n              type: 'array',\n              description: 'List of Cloudflare IPv4 CIDR addresses.',\n              items: {\n                type: 'string',\n                description: 'IPv4 CIDR.'\n              }\n            },\n            ipv6_cidrs: {\n              type: 'array',\n              description: 'List of Cloudflare IPv6 CIDR addresses.',\n              items: {\n                type: 'string',\n                description: 'IPv6 CIDR.'\n              }\n            },\n            jdcloud_cidrs: {\n              type: 'array',\n              description: 'List IPv4 and IPv6 CIDRs, only populated if `?networks=jdcloud` is used.',\n              items: {\n                type: 'string',\n                description: 'IPv4 or IPv6 CIDR.'\n              }\n            }\n          }\n        }\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      networks: {
        type: 'string',
        description: 'Specified as `jdcloud` to list IPs used by JD Cloud data centers.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.ips.list(body)));
};

export default { metadata, tool, handler };
