// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.regional_hostnames',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/addressing/regional_hostnames',
  operationId: 'dls-account-regional-hostnames-account-list-hostnames',
};

export const tool: Tool = {
  name: 'list_addressing_regional_hostnames',
  description: 'List all Regional Hostnames within a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.addressing.regionalHostnames.list(body);
};

export default { metadata, tool, handler };
