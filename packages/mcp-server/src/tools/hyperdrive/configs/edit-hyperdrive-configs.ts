// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hyperdrive.configs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}',
  operationId: 'patch-hyperdrive',
};

export const tool: Tool = {
  name: 'edit_hyperdrive_configs',
  description:
    'Patches and returns the specified Hyperdrive configuration. Custom caching settings are not kept if caching is disabled.',
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
                  'Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified.',
              },
              stale_while_revalidate: {
                type: 'integer',
                description:
                  'Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified.',
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
      name: {
        type: 'string',
        description:
          'The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.',
      },
      origin: {
        anyOf: [
          {
            type: 'object',
            title: 'Connection Options',
            properties: {
              database: {
                type: 'string',
                description: 'Set the name of your origin database.',
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
          },
          {
            type: 'object',
            title: 'Public Database',
            properties: {
              host: {
                type: 'string',
                description: 'Defines the host (hostname or IP) of your origin database.',
              },
              port: {
                type: 'integer',
                description:
                  'Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified.',
              },
            },
            required: ['host', 'port'],
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
              host: {
                type: 'string',
                description: 'Defines the host (hostname or IP) of your origin database.',
              },
            },
            required: ['access_client_id', 'access_client_secret', 'host'],
          },
        ],
      },
      origin_connection_limit: {
        type: 'integer',
        description:
          'The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.',
      },
    },
    required: ['account_id', 'hyperdrive_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hyperdrive_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.hyperdrive.configs.edit(hyperdrive_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
