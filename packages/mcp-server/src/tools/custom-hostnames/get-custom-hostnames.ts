// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/custom_hostnames/{custom_hostname_id}',
  operationId: 'custom-hostname-for-a-zone-custom-hostname-details',
};

export const tool: Tool = {
  name: 'get_custom_hostnames',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCustom Hostname Details",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      custom_hostname_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
    required: ['zone_id', 'custom_hostname_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { custom_hostname_id, ...body } = args as any;
  return asTextContentResult(await client.customHostnames.get(custom_hostname_id, body));
};

export default { metadata, tool, handler };
