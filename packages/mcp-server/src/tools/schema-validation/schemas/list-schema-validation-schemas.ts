// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.schemas',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_schema_validation_schemas',
  description: 'List all uploaded schemas',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      omit_source: {
        type: 'boolean',
        description: 'Omit the source-files of schemas and only retrieve their meta-data.',
      },
      page: {
        type: 'integer',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of results per page.',
      },
      validation_enabled: {
        type: 'boolean',
        description: 'Filter for enabled schemas',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.schemaValidation.schemas.list(body);
};

export default { metadata, tool, handler };
