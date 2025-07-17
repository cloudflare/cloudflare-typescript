// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rules/lists/{list_id}/items/{item_id}',
  operationId: 'lists-get-a-list-item',
};

export const tool: Tool = {
  name: 'get_lists_rules_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list item in the list.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique ID of the list.'\n        },\n        asn: {\n          type: 'integer',\n          description: 'Defines a non-negative 32 bit integer.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Defines an informative summary of the list item.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp of when the item was created.'\n        },\n        hostname: {\n          $ref: '#/$defs/hostname'\n        },\n        ip: {\n          type: 'string',\n          description: 'An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp of when the item was last modified.'\n        },\n        redirect: {\n          $ref: '#/$defs/redirect'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    hostname: {\n      type: 'object',\n      description: 'Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).',\n      properties: {\n        url_hostname: {\n          type: 'string'\n        }\n      },\n      required: [        'url_hostname'\n      ]\n    },\n    redirect: {\n      type: 'object',\n      description: 'The definition of the redirect.',\n      properties: {\n        source_url: {\n          type: 'string'\n        },\n        target_url: {\n          type: 'string'\n        },\n        include_subdomains: {\n          type: 'boolean'\n        },\n        preserve_path_suffix: {\n          type: 'boolean'\n        },\n        preserve_query_string: {\n          type: 'boolean'\n        },\n        status_code: {\n          type: 'string',\n          enum: [            301,\n            302,\n            307,\n            308\n          ]\n        },\n        subpath_matching: {\n          type: 'boolean'\n        }\n      },\n      required: [        'source_url',\n        'target_url'\n      ]\n    }\n  }\n}\n```",
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
      item_id: {
        type: 'string',
        description: 'Defines the unique ID of the item in the List.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'list_id', 'item_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { item_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.rules.lists.items.get(item_id, body)));
};

export default { metadata, tool, handler };
