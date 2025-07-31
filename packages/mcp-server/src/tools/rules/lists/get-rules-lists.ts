// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rules/lists/{list_id}',
  operationId: 'lists-get-a-list',
};

export const tool: Tool = {
  name: 'get_rules_lists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the details of a list.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique ID of the list.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp of when the list was created.'\n        },\n        kind: {\n          type: 'string',\n          description: 'The type of the list. Each type supports specific list items (IP addresses, ASNs, hostnames or redirects).',\n          enum: [            'ip',\n            'redirect',\n            'hostname',\n            'asn'\n          ]\n        },\n        modified_on: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp of when the list was last modified.'\n        },\n        name: {\n          type: 'string',\n          description: 'An informative name for the list. Use this name in filter and rule expressions.'\n        },\n        num_items: {\n          type: 'number',\n          description: 'The number of items in the list.'\n        },\n        num_referencing_filters: {\n          type: 'number',\n          description: 'The number of [filters](/api/resources/filters/) referencing the list.'\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the list.'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'kind',\n        'modified_on',\n        'name',\n        'num_items',\n        'num_referencing_filters'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID for this resource.',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'list_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.rules.lists.get(list_id, body)));
};

export default { metadata, tool, handler };
