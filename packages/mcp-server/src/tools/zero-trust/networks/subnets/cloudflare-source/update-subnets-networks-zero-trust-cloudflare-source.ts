// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.subnets.cloudflare_source',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/zerotrust/subnets/cloudflare_source/{address_family}',
  operationId: 'zero-trust-networks-subnet-update-cloudflare-source',
};

export const tool: Tool = {
  name: 'update_subnets_networks_zero_trust_cloudflare_source',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the Cloudflare Source subnet of the given address family\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The UUID of the subnet.'\n        },\n        comment: {\n          type: 'string',\n          description: 'An optional description of the subnet.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was created.',\n          format: 'date-time'\n        },\n        deleted_at: {\n          type: 'string',\n          description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n          format: 'date-time'\n        },\n        is_default_network: {\n          type: 'boolean',\n          description: 'If `true`, this is the default subnet for the account. There can only be one default subnet per account.'\n        },\n        name: {\n          type: 'string',\n          description: 'A user-friendly name for the subnet.'\n        },\n        network: {\n          type: 'string',\n          description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.'\n        },\n        subnet_type: {\n          type: 'string',\n          description: 'The type of subnet.',\n          enum: [            'cloudflare_source'\n          ]\n        }\n      },\n      required: []\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      address_family: {
        type: 'string',
        description: 'IP address family, either `v4` (IPv4) or `v6` (IPv6)',
        enum: ['v4', 'v6'],
      },
      comment: {
        type: 'string',
        description: 'An optional description of the subnet.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the subnet.',
      },
      network: {
        type: 'string',
        description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { address_family, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.zeroTrust.networks.subnets.cloudflareSource.update(address_family, body),
    ),
  );
};

export default { metadata, tool, handler };
