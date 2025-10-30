// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.connectivity.directory.services',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/connectivity/directory/services',
  operationId: 'connectivity-services-post',
};

export const tool: Tool = {
  name: 'create_directory_connectivity_zero_trust_services',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate connectivity service\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        host: {\n          anyOf: [            {\n              type: 'object',\n              properties: {\n                ipv4: {\n                  type: 'string'\n                },\n                network: {\n                  type: 'object',\n                  properties: {\n                    tunnel_id: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'tunnel_id'\n                  ]\n                }\n              },\n              required: [                'ipv4',\n                'network'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                ipv6: {\n                  type: 'string'\n                },\n                network: {\n                  type: 'object',\n                  properties: {\n                    tunnel_id: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'tunnel_id'\n                  ]\n                }\n              },\n              required: [                'ipv6',\n                'network'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                ipv4: {\n                  type: 'string'\n                },\n                ipv6: {\n                  type: 'string'\n                },\n                network: {\n                  type: 'object',\n                  properties: {\n                    tunnel_id: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    'tunnel_id'\n                  ]\n                }\n              },\n              required: [                'ipv4',\n                'ipv6',\n                'network'\n              ]\n            },\n            {\n              type: 'object',\n              properties: {\n                hostname: {\n                  type: 'string'\n                },\n                resolver_network: {\n                  type: 'object',\n                  properties: {\n                    tunnel_id: {\n                      type: 'string'\n                    },\n                    resolver_ips: {\n                      type: 'array',\n                      items: {\n                        type: 'string'\n                      }\n                    }\n                  },\n                  required: [                    'tunnel_id'\n                  ]\n                }\n              },\n              required: [                'hostname',\n                'resolver_network'\n              ]\n            }\n          ]\n        },\n        name: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'http'\n          ]\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        http_port: {\n          type: 'integer'\n        },\n        https_port: {\n          type: 'integer'\n        },\n        service_id: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'host',\n        'name',\n        'type'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      host: {
        anyOf: [
          {
            type: 'object',
            properties: {
              ipv4: {
                type: 'string',
              },
              network: {
                type: 'object',
                properties: {
                  tunnel_id: {
                    type: 'string',
                  },
                },
                required: ['tunnel_id'],
              },
            },
            required: ['ipv4', 'network'],
          },
          {
            type: 'object',
            properties: {
              ipv6: {
                type: 'string',
              },
              network: {
                type: 'object',
                properties: {
                  tunnel_id: {
                    type: 'string',
                  },
                },
                required: ['tunnel_id'],
              },
            },
            required: ['ipv6', 'network'],
          },
          {
            type: 'object',
            properties: {
              ipv4: {
                type: 'string',
              },
              ipv6: {
                type: 'string',
              },
              network: {
                type: 'object',
                properties: {
                  tunnel_id: {
                    type: 'string',
                  },
                },
                required: ['tunnel_id'],
              },
            },
            required: ['ipv4', 'ipv6', 'network'],
          },
          {
            type: 'object',
            properties: {
              hostname: {
                type: 'string',
              },
              resolver_network: {
                type: 'object',
                properties: {
                  tunnel_id: {
                    type: 'string',
                  },
                  resolver_ips: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },
                },
                required: ['tunnel_id'],
              },
            },
            required: ['hostname', 'resolver_network'],
          },
        ],
      },
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['http'],
      },
      http_port: {
        type: 'integer',
      },
      https_port: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'host', 'name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.connectivity.directory.services.create(body)),
  );
};

export default { metadata, tool, handler };
