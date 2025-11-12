// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.proxy_endpoints',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/proxy_endpoints',
  operationId: 'zero-trust-gateway-proxy-endpoints-create-proxy-endpoint',
};

export const tool: Tool = {
  name: 'create_gateway_zero_trust_proxy_endpoints',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Zero Trust Gateway proxy endpoint.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/proxy_endpoint',\n  $defs: {\n    proxy_endpoint: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            ips: {\n              type: 'array',\n              description: 'Specify the list of CIDRs to restrict ingress connections.',\n              items: {\n                $ref: '#/$defs/gateway_ips'\n              }\n            },\n            name: {\n              type: 'string',\n              description: 'Specify the name of the proxy endpoint.'\n            },\n            id: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            kind: {\n              type: 'string',\n              description: 'The proxy endpoint kind',\n              enum: [                'ip'\n              ]\n            },\n            subdomain: {\n              type: 'string',\n              description: 'Specify the subdomain to use as the destination in the proxy client.'\n            },\n            updated_at: {\n              type: 'string',\n              format: 'date-time'\n            }\n          },\n          required: [            'ips',\n            'name'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            kind: {\n              type: 'string',\n              description: 'The proxy endpoint kind',\n              enum: [                'identity'\n              ]\n            },\n            name: {\n              type: 'string',\n              description: 'Specify the name of the proxy endpoint.'\n            },\n            id: {\n              type: 'string'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            subdomain: {\n              type: 'string',\n              description: 'Specify the subdomain to use as the destination in the proxy client.'\n            },\n            updated_at: {\n              type: 'string',\n              format: 'date-time'\n            }\n          },\n          required: [            'kind',\n            'name'\n          ]\n        }\n      ]\n    },\n    gateway_ips: {\n      type: 'string',\n      description: 'Specify an IPv4 or IPv6 CIDR. Limit IPv6 to a maximum of /109 and IPv4 to a maximum of /25.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          name: {
            type: 'string',
            description: 'Specify the name of the proxy endpoint.',
          },
          kind: {
            type: 'string',
            description: 'The proxy endpoint kind',
            enum: ['ip'],
          },
        },
        required: ['account_id', 'name'],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          kind: {
            type: 'string',
            description: 'The proxy endpoint kind',
            enum: ['identity'],
          },
          name: {
            type: 'string',
            description: 'Specify the name of the proxy endpoint.',
          },
        },
        required: ['account_id', 'kind', 'name'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.gateway.proxyEndpoints.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
