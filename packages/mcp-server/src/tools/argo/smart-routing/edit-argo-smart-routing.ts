// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'argo.smart_routing',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/argo/smart_routing',
  operationId: 'argo-smart-routing-patch-argo-smart-routing-setting',
};

export const tool: Tool = {
  name: 'edit_argo_smart_routing',
  description: 'Updates enablement of Argo Smart Routing.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      value: {
        type: 'string',
        description: 'Enables Argo Smart Routing.',
        enum: ['on', 'off'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.argo.smartRouting.edit(body));
};

export default { metadata, tool, handler };
