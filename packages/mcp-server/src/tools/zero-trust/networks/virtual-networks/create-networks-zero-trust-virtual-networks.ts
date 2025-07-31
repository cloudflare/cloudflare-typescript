// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/teamnet/virtual_networks',
  operationId: 'tunnel-virtual-network-create-a-virtual-network',
};

export const tool: Tool = {
  name: 'create_networks_zero_trust_virtual_networks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdds a new virtual network to an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/virtual_network'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    virtual_network: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID of the virtual network.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Optional remark describing the virtual network.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        is_default_network: {\n          type: 'boolean',\n          description: 'If `true`, this virtual network is the default for the account.'\n        },\n        name: {\n          type: 'string',\n          description: 'A user-friendly name for the virtual network.'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'comment',\n        'created_at',\n        'is_default_network',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
      },
      comment: {
        type: 'string',
        description: 'Optional remark describing the virtual network.',
      },
      is_default: {
        type: 'boolean',
        description: 'If `true`, this virtual network is the default for the account.',
      },
      is_default_network: {
        type: 'boolean',
        description: 'If `true`, this virtual network is the default for the account.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.networks.virtualNetworks.create(body)),
  );
};

export default { metadata, tool, handler };
