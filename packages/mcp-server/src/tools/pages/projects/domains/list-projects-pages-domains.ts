// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.domains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/domains',
  operationId: 'pages-domains-get-domains',
};

export const tool: Tool = {
  name: 'list_projects_pages_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a list of all domains associated with a Pages project.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          certificate_authority: {\n            type: 'string',\n            enum: [              'google',\n              'lets_encrypt'\n            ]\n          },\n          created_on: {\n            type: 'string'\n          },\n          domain_id: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          status: {\n            type: 'string',\n            enum: [              'initializing',\n              'pending',\n              'active',\n              'deactivated',\n              'blocked',\n              'error'\n            ]\n          },\n          validation_data: {\n            type: 'object',\n            properties: {\n              error_message: {\n                type: 'string'\n              },\n              method: {\n                type: 'string',\n                enum: [                  'http',\n                  'txt'\n                ]\n              },\n              status: {\n                type: 'string',\n                enum: [                  'initializing',\n                  'pending',\n                  'active',\n                  'deactivated',\n                  'error'\n                ]\n              },\n              txt_name: {\n                type: 'string'\n              },\n              txt_value: {\n                type: 'string'\n              }\n            }\n          },\n          verification_data: {\n            type: 'object',\n            properties: {\n              error_message: {\n                type: 'string'\n              },\n              status: {\n                type: 'string',\n                enum: [                  'pending',\n                  'active',\n                  'deactivated',\n                  'blocked',\n                  'error'\n                ]\n              }\n            }\n          },\n          zone_tag: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        false,\n        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'The number of items on the current page.'\n        },\n        page: {\n          type: 'integer',\n          description: 'The page currently being requested.'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'The number of items per page being returned.'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'The total count of items.'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'The total count of pages.'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      project_name: {
        type: 'string',
        description: 'Name of the project.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'project_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { project_name, ...body } = args as any;
  const response = await client.pages.projects.domains.list(project_name, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
