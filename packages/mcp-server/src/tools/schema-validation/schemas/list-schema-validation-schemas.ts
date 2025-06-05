// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.schemas',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/schema_validation/schemas',
  operationId: 'schema-validation-list-schemas-paginated',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.schemaValidation.schemas.list(body));
};

export default { metadata, tool, handler };
