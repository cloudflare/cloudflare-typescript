// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/user_schemas',
  operationId: 'api-shield-schema-validation-retrieve-information-about-all-schemas',
};

export const tool: Tool = {
  name: 'list_api_gateway_user_schemas',
  description: 'Retrieve information about all schemas on a zone',
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
        description: 'Flag whether schema is enabled for validation.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.apiGateway.userSchemas.list(body));
};

export default { metadata, tool, handler };
