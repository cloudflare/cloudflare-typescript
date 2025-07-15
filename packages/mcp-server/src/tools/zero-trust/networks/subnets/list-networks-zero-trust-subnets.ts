// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.subnets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/zerotrust/subnets',
  operationId: 'zero-trust-networks-subnets-list',
};

export const tool: Tool = {
  name: 'list_networks_zero_trust_subnets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists and filters subnets in an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The UUID of the subnet.'\n          },\n          comment: {\n            type: 'string',\n            description: 'An optional description of the subnet.'\n          },\n          created_at: {\n            type: 'string',\n            description: 'Timestamp of when the resource was created.',\n            format: 'date-time'\n          },\n          deleted_at: {\n            type: 'string',\n            description: 'Timestamp of when the resource was deleted. If `null`, the resource has not been deleted.',\n            format: 'date-time'\n          },\n          is_default_network: {\n            type: 'boolean',\n            description: 'If `true`, this is the default subnet for the account. There can only be one default subnet per account.'\n          },\n          name: {\n            type: 'string',\n            description: 'A user-friendly name for the subnet.'\n          },\n          network: {\n            type: 'string',\n            description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.'\n          },\n          subnet_type: {\n            type: 'string',\n            description: 'The type of subnet.',\n            enum: [              'cloudflare_source'\n            ]\n          }\n        },\n        required: []\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      address_family: {
        type: 'string',
        description: 'If set, only include subnets in the given address family - `v4` or `v6`',
        enum: ['v4', 'v6'],
      },
      comment: {
        type: 'string',
        description: 'If set, only list subnets with the given comment.',
      },
      existed_at: {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
      },
      is_default_network: {
        type: 'boolean',
        description:
          'If `true`, only include default subnets. If `false`, exclude default subnets subnets. If not set, all subnets will be included.',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted subnets. If `false`, exclude deleted subnets. If not set, all subnets will be included.',
      },
      name: {
        type: 'string',
        description: 'If set, only list subnets with the given name',
      },
      network: {
        type: 'string',
        description: 'If set, only list the subnet whose network exactly matches the given CIDR.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results to display.',
      },
      sort_order: {
        type: 'string',
        description:
          'Sort order of the results. `asc` means oldest to newest, `desc` means newest to oldest. If not set, they will not be in any particular order.',
        enum: ['asc', 'desc'],
      },
      subnet_types: {
        type: 'string',
        description: 'If set, the types of subnets to include, separated by comma.',
        enum: ['cloudflare_source', 'warp'],
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
  const body = args as any;
  const response = await client.zeroTrust.networks.subnets.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
