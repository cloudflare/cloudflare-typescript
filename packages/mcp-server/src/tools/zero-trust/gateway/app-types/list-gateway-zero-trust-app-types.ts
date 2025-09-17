// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.app_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/app_types',
  operationId:
    'zero-trust-gateway-application-and-application-type-mappings-list-application-and-application-type-mappings',
};

export const tool: Tool = {
  name: 'list_gateway_zero_trust_app_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all application and application type mappings.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicate whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/app_type'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Indicate the total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Indicate the current page within a paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Indicate the number of results per page.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Indicate the total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    app_type: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Identify this application. Only one application per ID.'\n            },\n            application_type_id: {\n              type: 'integer',\n              description: 'Identify the type of this application. Multiple applications can share the same type. Refers to the `id` of a returned application type.'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            name: {\n              type: 'string',\n              description: 'Specify the name of the application or application type.'\n            }\n          }\n        },\n        {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'integer',\n              description: 'Identify the type of this application. Multiple applications can share the same type. Refers to the `id` of a returned application type.'\n            },\n            created_at: {\n              type: 'string',\n              format: 'date-time'\n            },\n            description: {\n              type: 'string',\n              description: 'Provide a short summary of applications with this type.'\n            },\n            name: {\n              type: 'string',\n              description: 'Specify the name of the application or application type.'\n            }\n          }\n        }\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Provide the identifier string.',
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
  const response = await client.zeroTrust.gateway.appTypes.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
