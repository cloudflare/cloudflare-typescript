// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/custom_hostnames',
  operationId: 'custom-hostname-for-a-zone-list-custom-hostnames',
};

export const tool: Tool = {
  name: 'list_custom_hostnames',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList, search, sort, and filter all of your custom hostnames.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      id: {
        type: 'string',
        description:
          "Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.",
      },
      direction: {
        type: 'string',
        description: 'Direction to order hostnames.',
        enum: ['asc', 'desc'],
      },
      hostname: {
        type: 'string',
        description:
          "Fully qualified domain name to match against. This parameter cannot be used with the 'id' parameter.",
      },
      order: {
        type: 'string',
        description: 'Field to order hostnames by.',
        enum: ['ssl', 'ssl_status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of hostnames per page.',
      },
      ssl: {
        type: 'string',
        description: 'Whether to filter hostnames based on if they have SSL enabled.',
        enum: [0, 1],
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.customHostnames.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
