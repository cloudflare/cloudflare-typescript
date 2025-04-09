// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'hyperdrive.configs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_hyperdrive_configs',
  description: 'Creates and returns a new Hyperdrive configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
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
                description: 'The name of your origin database.',
              },
              host: {
                type: 'string',
                description: 'The host (hostname or IP) of your origin database.',
              },
              password: {
                type: 'string',
                description:
                  'The password required to access your origin database. This value is write-only and never returned by the API.',
              },
              port: {
                type: 'integer',
                description: 'The port (default: 5432 for Postgres) of your origin database.',
              },
              scheme: {
                type: 'string',
                description: 'Specifies the URL scheme used to connect to your origin database.',
                enum: ['postgres', 'postgresql'],
              },
              user: {
                type: 'string',
                description: 'The user of your origin database.',
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
                  'The Client ID of the Access token to use when connecting to the origin database.',
              },
              access_client_secret: {
                type: 'string',
                description:
                  'The Client Secret of the Access token to use when connecting to the origin database. This value is write-only and never returned by the API.',
              },
              database: {
                type: 'string',
                description: 'The name of your origin database.',
              },
              host: {
                type: 'string',
                description: 'The host (hostname or IP) of your origin database.',
              },
              password: {
                type: 'string',
                description:
                  'The password required to access your origin database. This value is write-only and never returned by the API.',
              },
              scheme: {
                type: 'string',
                description: 'Specifies the URL scheme used to connect to your origin database.',
                enum: ['postgres', 'postgresql'],
              },
              user: {
                type: 'string',
                description: 'The user of your origin database.',
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
                description: 'When set to true, disables the caching of SQL responses. (Default: false)',
              },
            },
            required: [],
          },
          {
            type: 'object',
            properties: {
              disabled: {
                type: 'boolean',
                description: 'When set to true, disables the caching of SQL responses. (Default: false)',
              },
              max_age: {
                type: 'integer',
                description:
                  'When present, specifies max duration for which items should persist in the cache. Not returned if set to default. (Default: 60)',
              },
              stale_while_revalidate: {
                type: 'integer',
                description:
                  'When present, indicates the number of seconds cache may serve the response after it becomes stale. Not returned if set to default. (Default: 15)',
              },
            },
            required: [],
          },
        ],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.hyperdrive.configs.create(body);
};

export default { metadata, tool, handler };
