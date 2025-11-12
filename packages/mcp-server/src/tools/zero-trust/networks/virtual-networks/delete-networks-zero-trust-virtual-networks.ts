// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}',
  operationId: 'tunnel-virtual-network-delete',
};

export const tool: Tool = {
  name: 'delete_networks_zero_trust_virtual_networks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes an existing virtual network.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/virtual_network',\n  $defs: {\n    virtual_network: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the virtual network.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Optional remark describing the virtual network.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        is_default_network: {\n          type: 'boolean',\n          description: 'If `true`, this virtual network is the default for the account.'\n        },\n        name: {\n          type: 'string',\n          description: 'A user-friendly name for the virtual network.'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'comment',\n        'created_at',\n        'is_default_network',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'virtual_network_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { virtual_network_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.zeroTrust.networks.virtualNetworks.delete(virtual_network_id, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
