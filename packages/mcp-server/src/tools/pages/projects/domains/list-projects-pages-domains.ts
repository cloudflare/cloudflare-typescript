// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a list of all domains associated with a Pages project.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/domain_list_response'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    domain_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        certificate_authority: {\n          type: 'string',\n          enum: [            'google',\n            'lets_encrypt'\n          ]\n        },\n        created_on: {\n          type: 'string'\n        },\n        domain_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string',\n          description: 'The domain name.'\n        },\n        status: {\n          type: 'string',\n          enum: [            'initializing',\n            'pending',\n            'active',\n            'deactivated',\n            'blocked',\n            'error'\n          ]\n        },\n        validation_data: {\n          type: 'object',\n          properties: {\n            method: {\n              type: 'string',\n              enum: [                'http',\n                'txt'\n              ]\n            },\n            status: {\n              type: 'string',\n              enum: [                'initializing',\n                'pending',\n                'active',\n                'deactivated',\n                'error'\n              ]\n            },\n            error_message: {\n              type: 'string'\n            },\n            txt_name: {\n              type: 'string'\n            },\n            txt_value: {\n              type: 'string'\n            }\n          },\n          required: [            'method',\n            'status'\n          ]\n        },\n        verification_data: {\n          type: 'object',\n          properties: {\n            status: {\n              type: 'string',\n              enum: [                'pending',\n                'active',\n                'deactivated',\n                'blocked',\n                'error'\n              ]\n            },\n            error_message: {\n              type: 'string'\n            }\n          },\n          required: [            'status'\n          ]\n        },\n        zone_tag: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'certificate_authority',\n        'created_on',\n        'domain_id',\n        'name',\n        'status',\n        'validation_data',\n        'verification_data',\n        'zone_tag'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
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
  const { project_name, jq_filter, ...body } = args as any;
  const response = await client.pages.projects.domains.list(project_name, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
