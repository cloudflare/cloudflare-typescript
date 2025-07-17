// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/teamnet/virtual_networks',
  operationId: 'tunnel-virtual-network-list-virtual-networks',
};

export const tool: Tool = {
  name: 'list_networks_zero_trust_virtual_networks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists and filters virtual networks in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/virtual_network'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    virtual_network: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the virtual network.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Optional remark describing the virtual network.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        is_default_network: {\n          type: 'boolean',\n          description: 'If `true`, this virtual network is the default for the account.'\n        },\n        name: {\n          type: 'string',\n          description: 'A user-friendly name for the virtual network.'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'comment',\n        'created_at',\n        'is_default_network',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
      is_default: {
        type: 'boolean',
        description:
          'If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted virtual networks. If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.networks.virtualNetworks.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
