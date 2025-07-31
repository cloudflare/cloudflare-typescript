// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'argo.smart_routing',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/argo/smart_routing',
  operationId: 'argo-smart-routing-get-argo-smart-routing-setting',
};

export const tool: Tool = {
  name: 'get_argo_smart_routing',
  description: 'Retrieves the value of Argo Smart Routing enablement setting.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Specifies the zone associated with the API call.',
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
  return asTextContentResult((await client.argo.smartRouting.get(body)) as object);
};

export default { metadata, tool, handler };
