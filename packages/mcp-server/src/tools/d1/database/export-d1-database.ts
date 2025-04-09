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
  name: 'export_d1_database',
  description:
    'Returns a URL where the SQL contents of your D1 can be downloaded. Note: this process may take\nsome time for larger DBs, during which your D1 will be unavailable to serve queries. To avoid\nblocking your DB unnecessarily, an in-progress export must be continually polled or will automatically cancel.\n',
  inputSchema: {
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
      output_format: {
        type: 'string',
        description: 'Specifies that you will poll this endpoint until the export completes',
        enum: ['polling'],
      },
      current_bookmark: {
        type: 'string',
        description:
          'To poll an in-progress export, provide the current bookmark (returned by your first polling response)',
      },
      dump_options: {
        type: 'object',
        properties: {
          no_data: {
            type: 'boolean',
            description: 'Export only the table definitions, not their contents',
          },
          no_schema: {
            type: 'boolean',
            description: "Export only each table's contents, not its definition",
          },
          tables: {
            type: 'array',
            description:
              'Filter the export to just one or more tables. Passing an empty array is the same as not passing anything and means: export all tables.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { database_id, ...body } = args;
  return client.d1.database.export(database_id, body);
};

export default { metadata, tool, handler };
