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
  httpPath: '/zones/{zone_id}/api_gateway/user_schemas/{schema_id}',
  operationId: 'api-shield-schema-validation-retrieve-information-about-specific-schema',
};

export const tool: Tool = {
  name: 'get_api_gateway_user_schemas',
  description: 'Retrieve information about a specific schema on a zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      schema_id: {
        type: 'string',
      },
      omit_source: {
        type: 'boolean',
        description: 'Omit the source-files of schemas and only retrieve their meta-data.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { schema_id, ...body } = args as any;
  return asTextContentResult(await client.apiGateway.userSchemas.get(schema_id, body));
};

export default { metadata, tool, handler };
