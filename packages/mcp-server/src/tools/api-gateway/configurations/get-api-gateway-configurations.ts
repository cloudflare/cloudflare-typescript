// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about specific configuration properties\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/configuration',\n  $defs: {\n    configuration: {\n      type: 'object',\n      properties: {\n        auth_id_characteristics: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                type: 'object',\n                description: 'Auth ID Characteristic',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'The name of the characteristic field, i.e., the header or cookie name.'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'The type of characteristic.',\n                    enum: [                      'header',\n                      'cookie'\n                    ]\n                  }\n                },\n                required: [                  'name',\n                  'type'\n                ]\n              },\n              {\n                type: 'object',\n                description: 'Auth ID Characteristic extracted from JWT Token Claims',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'Claim location expressed as `$(token_config_id):$(json_path)`, where `token_config_id` \\nis the ID of the token configuration used in validating the JWT, and `json_path` is a RFC 9535 \\nJSONPath (https://goessner.net/articles/JsonPath/, https://www.rfc-editor.org/rfc/rfc9535.html).\\nThe JSONPath expression may be in dot or bracket notation, may only specify literal keys\\nor array indexes, and must return a singleton value, which will be interpreted as a string.\\n'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'The type of characteristic.',\n                    enum: [                      'jwt'\n                    ]\n                  }\n                },\n                required: [                  'name',\n                  'type'\n                ]\n              }\n            ],\n            description: 'Auth ID Characteristic'\n          }\n        }\n      },\n      required: [        'auth_id_characteristics'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      normalize: {
        type: 'boolean',
        description: 'Ensures that the configuration is written or retrieved in normalized fashion',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.apiGateway.configurations.get(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
