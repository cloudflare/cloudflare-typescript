// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.connectors.snapshots.latest',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/latest',
  operationId: 'mconn-connector-telemetry-snapshots-listLatest',
};

export const tool: Tool = {
  name: 'list_snapshots_connectors_magic_transit_latest',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet latest Snapshots",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier',
      },
      connector_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'connector_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { connector_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.connectors.snapshots.latest.list(connector_id, body));
};

export default { metadata, tool, handler };
