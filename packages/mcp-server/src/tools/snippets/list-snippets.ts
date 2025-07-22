// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/snippets',
  operationId: 'listZoneSnippets',
};

export const tool: Tool = {
  name: 'list_snippets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches all snippets belonging to the zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response',\n  description: 'A response object.',\n  properties: {\n    errors: {\n      type: 'array',\n      title: 'Errors',\n      description: 'A list of error messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      description: 'A list of warning messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      title: 'Snippets',\n      description: 'A list of snippets.',\n      items: {\n        type: 'object',\n        title: 'Snippet',\n        description: 'A snippet object.',\n        properties: {\n          created_on: {\n            type: 'string',\n            title: 'Created On',\n            description: 'The timestamp of when the snippet was created.',\n            format: 'date-time'\n          },\n          snippet_name: {\n            type: 'string',\n            title: 'Snippet Name',\n            description: 'The identifying name of the snippet.'\n          },\n          modified_on: {\n            type: 'string',\n            title: 'Modified On',\n            description: 'The timestamp of when the snippet was last modified.',\n            format: 'date-time'\n          }\n        },\n        required: [          'created_on',\n          'snippet_name'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      title: 'Success',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      title: 'Result Info',\n      description: 'Additional information to navigate the results.',\n      properties: {\n        count: {\n          type: 'integer',\n          title: 'Count',\n          description: 'The number of results in the current page.'\n        },\n        page: {\n          type: 'integer',\n          title: 'Page',\n          description: 'The current page number.'\n        },\n        per_page: {\n          type: 'integer',\n          title: 'Per Page',\n          description: 'The number of results to return per page.'\n        },\n        total_count: {\n          type: 'integer',\n          title: 'Total Count',\n          description: 'The total number of results.'\n        },\n        total_pages: {\n          type: 'integer',\n          title: 'Total Pages',\n          description: 'The total number of pages.'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count',\n        'total_pages'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
      page: {
        type: 'integer',
        title: 'Page',
        description: 'The current page number.',
      },
      per_page: {
        type: 'integer',
        title: 'Per Page',
        description: 'The number of results to return per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.snippets.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
