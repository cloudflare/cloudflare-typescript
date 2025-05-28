// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas.hosts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/user_schemas/hosts',
  operationId: 'api-shield-schema-validation-retrieve-user-schema-hosts',
};

export const tool: Tool = {
  name: 'list_user_schemas_api_gateway_hosts',
  description: 'Retrieve schema hosts in a zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      page: {
        type: 'integer',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of results per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.apiGateway.userSchemas.hosts.list(body);
};

export default { metadata, tool, handler };
