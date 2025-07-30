// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/settings/{setting_id}',
  operationId: 'zone-settings-get-single-setting',
};

export const tool: Tool = {
  name: 'get_zones_settings',
  description: 'Fetch a single zone setting by name',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      setting_id: {
        type: 'string',
        description: 'Setting name',
      },
    },
    required: ['zone_id', 'setting_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { setting_id, ...body } = args as any;
  return asTextContentResult(await client.zones.settings.get(setting_id, body));
};

export default { metadata, tool, handler };
