// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hyperdrive.configs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/hyperdrive/configs',
  operationId: 'create-hyperdrive',
};

export const tool: Tool = {
  name: 'create_hyperdrive_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates and returns a new Hyperdrive configuration.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Define configurations using a unique string identifier.',
      },
      name: {
        type: 'string',
      },
      origin: {
        anyOf: [
          {
            type: 'object',
            title: 'Public Database',
            properties: {
              database: {
                type: 'string',
                description: 'Set the name of your origin database.',
              },
              host: {
                type: 'string',
                description: 'Defines the host (hostname or IP) of your origin database.',
              },
              password: {
                type: 'string',
                description:
                  'Set the password needed to access your origin database. The API never returns this write-only value.',
              },
              port: {
                type: 'integer',
                description: 'Defines the port (default: 5432 for Postgres) of your origin database.',
              },
              scheme: {
                type: 'string',
                description: 'Specifies the URL scheme used to connect to your origin database.',
                enum: ['postgres', 'postgresql', 'mysql'],
              },
              user: {
                type: 'string',
                description: 'Set the user of your origin database.',
              },
            },
            required: ['database', 'host', 'password', 'port', 'scheme', 'user'],
          },
          {
            type: 'object',
            title: 'Access-protected Database behind Cloudflare Tunnel',
            properties: {
              access_client_id: {
                type: 'string',
                description:
                  'Defines the Client ID of the Access token to use when connecting to the origin database.',
              },
              access_client_secret: {
                type: 'string',
                description:
                  'Defines the Client Secret of the Access Token to use when connecting to the origin database. The API never returns this write-only value.',
              },
              database: {
                type: 'string',
                description: 'Set the name of your origin database.',
              },
              host: {
                type: 'string',
                description: 'Defines the host (hostname or IP) of your origin database.',
              },
              password: {
                type: 'string',
                description:
                  'Set the password needed to access your origin database. The API never returns this write-only value.',
              },
              scheme: {
                type: 'string',
                description: 'Specifies the URL scheme used to connect to your origin database.',
                enum: ['postgres', 'postgresql', 'mysql'],
              },
              user: {
                type: 'string',
                description: 'Set the user of your origin database.',
              },
            },
            required: [
              'access_client_id',
              'access_client_secret',
              'database',
              'host',
              'password',
              'scheme',
              'user',
            ],
          },
        ],
      },
      caching: {
        anyOf: [
          {
            type: 'object',
            properties: {
              disabled: {
                type: 'boolean',
                description: 'Set to true to disable caching of SQL responses. Default is false.',
              },
            },
          },
          {
            type: 'object',
            properties: {
              disabled: {
                type: 'boolean',
                description: 'Set to true to disable caching of SQL responses. Default is false.',
              },
              max_age: {
                type: 'integer',
                description:
                  'Specify the maximum duration items should persist in the cache. Not returned if set to the default (60).',
              },
              stale_while_revalidate: {
                type: 'integer',
                description:
                  'Specify the number of seconds the cache may serve a stale response. Omitted if set to the default (15).',
              },
            },
          },
        ],
      },
      mtls: {
        type: 'object',
        title: 'mTLS',
        properties: {
          ca_certificate_id: {
            type: 'string',
            description: 'Define CA certificate ID obtained after uploading CA cert.',
          },
          mtls_certificate_id: {
            type: 'string',
            description: 'Define mTLS certificate ID obtained after uploading client cert.',
          },
          sslmode: {
            type: 'string',
            description: "Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.",
          },
        },
      },
      origin_connection_limit: {
        type: 'integer',
        description:
          'The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.',
      },
    },
    required: ['account_id', 'name', 'origin'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.hyperdrive.configs.create(body));
};

export default { metadata, tool, handler };
