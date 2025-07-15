// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/configuration',
  operationId: 'api-shield-settings-retrieve-information-about-specific-configuration-properties',
};

export const tool: Tool = {
  name: 'get_api_gateway_configurations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about specific configuration properties\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      $ref: '#/$defs/message'\n    },\n    messages: {\n      $ref: '#/$defs/message'\n    },\n    result: {\n      $ref: '#/$defs/configuration'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    message: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    configuration: {\n      type: 'object',\n      properties: {\n        auth_id_characteristics: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                type: 'object',\n                description: 'Auth ID Characteristic',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'The name of the characteristic field, i.e., the header or cookie name.'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'The type of characteristic.',\n                    enum: [                      'header',\n                      'cookie'\n                    ]\n                  }\n                },\n                required: [                  'name',\n                  'type'\n                ]\n              },\n              {\n                type: 'object',\n                description: 'Auth ID Characteristic extracted from JWT Token Claims',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'Claim location expressed as `$(token_config_id):$(json_path)`, where `token_config_id` \\nis the ID of the token configuration used in validating the JWT, and `json_path` is a RFC 9535 \\nJSONPath (https://goessner.net/articles/JsonPath/, https://www.rfc-editor.org/rfc/rfc9535.html).\\nThe JSONPath expression may be in dot or bracket notation, may only specify literal keys\\nor array indexes, and must return a singleton value, which will be interpreted as a string.\\n'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'The type of characteristic.',\n                    enum: [                      'jwt'\n                    ]\n                  }\n                },\n                required: [                  'name',\n                  'type'\n                ]\n              }\n            ],\n            description: 'Auth ID Characteristic'\n          }\n        }\n      },\n      required: [        'auth_id_characteristics'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      properties: {
        type: 'array',
        description: 'Requests information about certain properties.',
        items: {
          type: 'string',
          enum: ['auth_id_characteristics'],
        },
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
  return asTextContentResult(await maybeFilter(args, await client.apiGateway.configurations.get(body)));
};

export default { metadata, tool, handler };
