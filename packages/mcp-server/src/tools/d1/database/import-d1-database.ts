// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'd1.database',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'import_d1_database',
  description:
    'Generates a temporary URL for uploading an SQL file to, then instructing the D1 to import it\nand polling it for status updates. Imports block the D1 for their duration.\n',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account identifier tag.',
          },
          database_id: {
            type: 'string',
            description: 'D1 database identifier (UUID).',
          },
          action: {
            type: 'string',
            description: 'Indicates you have a new SQL file to upload.',
            enum: ['init'],
          },
          etag: {
            type: 'string',
            description:
              "Required when action is 'init' or 'ingest'. An md5 hash of the file you're uploading. Used to check if it already exists, and validate its contents before ingesting.",
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account identifier tag.',
          },
          database_id: {
            type: 'string',
            description: 'D1 database identifier (UUID).',
          },
          action: {
            type: 'string',
            description: "Indicates you've finished uploading to tell the D1 to start consuming it",
            enum: ['ingest'],
          },
          etag: {
            type: 'string',
            description:
              "An md5 hash of the file you're uploading. Used to check if it already exists, and validate its contents before ingesting.",
          },
          filename: {
            type: 'string',
            description: 'The filename you have successfully uploaded.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account identifier tag.',
          },
          database_id: {
            type: 'string',
            description: 'D1 database identifier (UUID).',
          },
          action: {
            type: 'string',
            description: "Indicates you've finished uploading to tell the D1 to start consuming it",
            enum: ['poll'],
          },
          current_bookmark: {
            type: 'string',
            description: 'This identifies the currently-running import, checking its status.',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { database_id, ...body } = args;
  return client.d1.database.import(database_id, body);
};

export default { metadata, tool, handler };
