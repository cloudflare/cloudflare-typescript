// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.ai_controls.mcp.servers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync',
  operationId: 'mcp-portals-api-sync-server',
};

export const tool: Tool = {
  name: 'sync_mcp_ai_controls_access_zero_trust_servers',
  description: 'Sync MCP Server Capabilities',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'portal id',
      },
    },
    required: ['account_id', 'id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.access.aiControls.mcp.servers.sync(id, body)) as object);
};

export default { metadata, tool, handler };
