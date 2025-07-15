// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/rules/lists/{list_id}/items',
  operationId: 'lists-update-all-list-items',
};

export const tool: Tool = {
  name: 'update_lists_rules_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemoves all existing items from the list and adds the provided items to the list.\n\nThis operation is asynchronous. To get current the operation status, invoke the `Get bulk operation status` endpoint with the returned `operation_id`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        operation_id: {\n          type: 'string',\n          description: 'The unique operation ID of the asynchronous action.'\n        }\n      },\n      required: []\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            asn: {
              type: 'integer',
              description: 'Defines a non-negative 32 bit integer.',
            },
            comment: {
              type: 'string',
              description: 'Defines an informative summary of the list item.',
            },
            hostname: {
              $ref: '#/$defs/hostname',
            },
            ip: {
              type: 'string',
              description: 'An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.',
            },
            redirect: {
              $ref: '#/$defs/redirect',
            },
          },
          required: [],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      hostname: {
        type: 'object',
        description:
          'Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).',
        properties: {
          url_hostname: {
            type: 'string',
          },
        },
        required: ['url_hostname'],
      },
      redirect: {
        type: 'object',
        description: 'The definition of the redirect.',
        properties: {
          source_url: {
            type: 'string',
          },
          target_url: {
            type: 'string',
          },
          include_subdomains: {
            type: 'boolean',
          },
          preserve_path_suffix: {
            type: 'boolean',
          },
          preserve_query_string: {
            type: 'boolean',
          },
          status_code: {
            type: 'string',
            enum: [301, 302, 307, 308],
          },
          subpath_matching: {
            type: 'boolean',
          },
        },
        required: ['source_url', 'target_url'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.rules.lists.items.update(list_id, body)));
};

export default { metadata, tool, handler };
