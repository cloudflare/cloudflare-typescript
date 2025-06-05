// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/custom_hostnames/{custom_hostname_id}',
  operationId: 'custom-hostname-for-a-zone-delete-custom-hostname-(-and-any-issued-ssl-certificates)',
};

export const tool: Tool = {
  name: 'delete_custom_hostnames',
  description: 'Delete Custom Hostname (and any issued SSL certificates)',
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { custom_hostname_id, ...body } = args as any;
  return asTextContentResult(await client.customHostnames.delete(custom_hostname_id, body));
};

export default { metadata, tool, handler };
