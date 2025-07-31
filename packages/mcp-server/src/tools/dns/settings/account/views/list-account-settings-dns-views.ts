// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dns_settings/views',
  operationId: 'dns-views-for-an-account-list-internal-dns-views',
};

export const tool: Tool = {
  name: 'list_account_settings_dns_views',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList DNS Internal Views for an Account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Identifier.'\n          },\n          created_time: {\n            type: 'string',\n            description: 'When the view was created.',\n            format: 'date-time'\n          },\n          modified_time: {\n            type: 'string',\n            description: 'When the view was last modified.',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the view.'\n          },\n          zones: {\n            type: 'array',\n            description: 'The list of zones linked to this view.',\n            items: {\n              type: 'string',\n              description: 'zone id'\n            }\n          }\n        },\n        required: [          'id',\n          'created_time',\n          'modified_time',\n          'name',\n          'zones'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      direction: {
        type: 'string',
        description: 'Direction to order DNS views in.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.',
        enum: ['any', 'all'],
      },
      name: {
        type: 'object',
        properties: {
          contains: {
            type: 'string',
            description: 'Substring of the DNS view name.\n',
          },
          endswith: {
            type: 'string',
            description: 'Suffix of the DNS view name.\n',
          },
          exact: {
            type: 'string',
            description: 'Exact value of the DNS view name.\n',
          },
          startswith: {
            type: 'string',
            description: 'Prefix of the DNS view name.\n',
          },
        },
      },
      order: {
        type: 'string',
        description: 'Field to order DNS views by.',
        enum: ['name', 'created_on', 'modified_on'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of DNS views per page.',
      },
      zone_id: {
        type: 'string',
        description: 'A zone ID that exists in the zones list for the view.\n',
      },
      zone_name: {
        type: 'string',
        description: 'A zone name that exists in the zones list for the view.\n',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.dns.settings.account.views.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
