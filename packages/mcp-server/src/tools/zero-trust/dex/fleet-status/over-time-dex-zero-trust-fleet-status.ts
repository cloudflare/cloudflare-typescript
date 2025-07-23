// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.fleet_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/fleet-status/over-time',
  operationId: 'dex-fleet-status-over-time',
};

export const tool: Tool = {
  name: 'over_time_dex_zero_trust_fleet_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList details for devices using WARP, up to 7 days\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Time range beginning in ISO format',
      },
      to: {
        type: 'string',
        description: 'Time range end in ISO format',
      },
      colo: {
        type: 'string',
        description: 'Cloudflare colo',
      },
      device_id: {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'from', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.dex.fleetStatus.overTime(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
