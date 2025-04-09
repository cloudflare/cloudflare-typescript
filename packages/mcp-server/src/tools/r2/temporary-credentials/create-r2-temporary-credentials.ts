// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.temporary_credentials',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_r2_temporary_credentials',
  description:
    'Creates temporary access credentials on a bucket that can be optionally scoped to prefixes or objects.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
      bucket: {
        type: 'string',
        description: 'Name of the R2 bucket',
      },
      parentAccessKeyId: {
        type: 'string',
        description: 'The parent access key id to use for signing',
      },
      permission: {
        type: 'string',
        description: 'Permissions allowed on the credentials',
        enum: ['admin-read-write', 'admin-read-only', 'object-read-write', 'object-read-only'],
      },
      ttlSeconds: {
        type: 'number',
        description: 'How long the credentials will live for in seconds',
      },
      objects: {
        type: 'array',
        description: 'Optional object paths to scope the credentials to',
        items: {
          type: 'string',
        },
      },
      prefixes: {
        type: 'array',
        description: 'Optional prefix paths to scope the credentials to',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.r2.temporaryCredentials.create(body);
};

export default { metadata, tool, handler };
