// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.hostname_routes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/zerotrust/routes/hostname',
  operationId: 'zero-trust-networks-route-hostname-create',
};

export const tool: Tool = {
  name: 'create_networks_zero_trust_hostname_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a hostname route.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/hostname_route',\n  $defs: {\n    hostname_route: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The hostname route ID.'\n        },\n        comment: {\n          type: 'string',\n          description: 'An optional description of the hostname route.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        },\n        hostname: {\n          type: 'string',\n          description: 'The hostname of the route.'\n        },\n        tunnel_id: {\n          type: 'string',\n          description: 'UUID of the tunnel.'\n        },\n        tunnel_name: {\n          type: 'string',\n          description: 'A user-friendly name for a tunnel.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      comment: {
        type: 'string',
        description: 'An optional description of the hostname route.',
      },
      hostname: {
        type: 'string',
        description: 'The hostname of the route.',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.networks.hostnameRoutes.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
