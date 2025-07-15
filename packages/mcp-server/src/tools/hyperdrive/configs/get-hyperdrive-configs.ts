// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hyperdrive.configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}',
  operationId: 'get-hyperdrive',
};

export const tool: Tool = {
  name: 'get_hyperdrive_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the specified Hyperdrive configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/hyperdrive'\n    },\n    success: {\n      type: 'string',\n      description: 'Return the status of the API call success.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    hyperdrive: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Define configurations using a unique string identifier.'\n        },\n        name: {\n          type: 'string'\n        },\n        origin: {\n          anyOf: [            {\n              type: 'object',\n              title: 'Public Database',\n              properties: {\n                database: {\n                  type: 'string',\n                  description: 'Set the name of your origin database.'\n                },\n                host: {\n                  type: 'string',\n                  description: 'Defines the host (hostname or IP) of your origin database.'\n                },\n                password: {\n                  type: 'string',\n                  description: 'Set the password needed to access your origin database. The API never returns this write-only value.'\n                },\n                port: {\n                  type: 'integer',\n                  description: 'Defines the port (default: 5432 for Postgres) of your origin database.'\n                },\n                scheme: {\n                  type: 'string',\n                  description: 'Specifies the URL scheme used to connect to your origin database.',\n                  enum: [                    'postgres',\n                    'postgresql',\n                    'mysql'\n                  ]\n                },\n                user: {\n                  type: 'string',\n                  description: 'Set the user of your origin database.'\n                }\n              },\n              required: [                'database',\n                'host',\n                'password',\n                'port',\n                'scheme',\n                'user'\n              ]\n            },\n            {\n              type: 'object',\n              title: 'Access-protected Database behind Cloudflare Tunnel',\n              properties: {\n                access_client_id: {\n                  type: 'string',\n                  description: 'Defines the Client ID of the Access token to use when connecting to the origin database.'\n                },\n                access_client_secret: {\n                  type: 'string',\n                  description: 'Defines the Client Secret of the Access Token to use when connecting to the origin database. The API never returns this write-only value.'\n                },\n                database: {\n                  type: 'string',\n                  description: 'Set the name of your origin database.'\n                },\n                host: {\n                  type: 'string',\n                  description: 'Defines the host (hostname or IP) of your origin database.'\n                },\n                password: {\n                  type: 'string',\n                  description: 'Set the password needed to access your origin database. The API never returns this write-only value.'\n                },\n                scheme: {\n                  type: 'string',\n                  description: 'Specifies the URL scheme used to connect to your origin database.',\n                  enum: [                    'postgres',\n                    'postgresql',\n                    'mysql'\n                  ]\n                },\n                user: {\n                  type: 'string',\n                  description: 'Set the user of your origin database.'\n                }\n              },\n              required: [                'access_client_id',\n                'access_client_secret',\n                'database',\n                'host',\n                'password',\n                'scheme',\n                'user'\n              ]\n            }\n          ]\n        },\n        caching: {\n          anyOf: [            {\n              type: 'object',\n              properties: {\n                disabled: {\n                  type: 'boolean',\n                  description: 'Set to true to disable caching of SQL responses. Default is false.'\n                }\n              },\n              required: []\n            },\n            {\n              type: 'object',\n              properties: {\n                disabled: {\n                  type: 'boolean',\n                  description: 'Set to true to disable caching of SQL responses. Default is false.'\n                },\n                max_age: {\n                  type: 'integer',\n                  description: 'Specify the maximum duration items should persist in the cache. Not returned if set to the default (60).'\n                },\n                stale_while_revalidate: {\n                  type: 'integer',\n                  description: 'Specify the number of seconds the cache may serve a stale response. Omitted if set to the default (15).'\n                }\n              },\n              required: []\n            }\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'Defines the creation time of the Hyperdrive configuration.',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Defines the last modified time of the Hyperdrive configuration.',\n          format: 'date-time'\n        },\n        mtls: {\n          type: 'object',\n          title: 'mTLS',\n          properties: {\n            ca_certificate_id: {\n              type: 'string',\n              description: 'Define CA certificate ID obtained after uploading CA cert.'\n            },\n            mtls_certificate_id: {\n              type: 'string',\n              description: 'Define mTLS certificate ID obtained after uploading client cert.'\n            },\n            sslmode: {\n              type: 'string',\n              description: 'Set SSL mode to \\'require\\', \\'verify-ca\\', or \\'verify-full\\' to verify the CA.'\n            }\n          },\n          required: []\n        },\n        origin_connection_limit: {\n          type: 'integer',\n          description: 'The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.'\n        }\n      },\n      required: [        'id',\n        'name',\n        'origin'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Define configurations using a unique string identifier.',
      },
      hyperdrive_id: {
        type: 'string',
        description: 'Define configurations using a unique string identifier.',
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
  const { hyperdrive_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.hyperdrive.configs.get(hyperdrive_id, body)),
  );
};

export default { metadata, tool, handler };
