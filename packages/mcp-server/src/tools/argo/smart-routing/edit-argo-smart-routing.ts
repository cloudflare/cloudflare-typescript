// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description: 'Configures the value of the Argo Smart Routing enablement setting.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Specifies the zone associated with the API call.',
      },
      value: {
        type: 'string',
        description: 'Enables Argo Smart Routing.',
        enum: ['on', 'off'],
      },
    },
    required: ['zone_id', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.argo.smartRouting.edit(body)) as object);
};

export default { metadata, tool, handler };
