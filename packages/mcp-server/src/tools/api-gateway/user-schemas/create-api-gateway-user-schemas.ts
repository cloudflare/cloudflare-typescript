// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/api_gateway/user_schemas',
  operationId: 'api-shield-schema-validation-post-schema',
};

export const tool: Tool = {
  name: 'create_api_gateway_user_schemas',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a schema to a zone\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_schema_create_response',\n  $defs: {\n    user_schema_create_response: {\n      type: 'object',\n      properties: {\n        schema: {\n          $ref: '#/$defs/old_public_schema'\n        },\n        upload_details: {\n          type: 'object',\n          properties: {\n            warnings: {\n              type: 'array',\n              description: 'Diagnostic warning events that occurred during processing. These events are non-critical errors found within the schema.',\n              items: {\n                type: 'object',\n                properties: {\n                  code: {\n                    type: 'integer',\n                    description: 'Code that identifies the event that occurred.'\n                  },\n                  locations: {\n                    type: 'array',\n                    description: 'JSONPath location(s) in the schema where these events were encountered.  See [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/) for JSONPath specification.',\n                    items: {\n                      type: 'string',\n                      description: 'JSONPath location in the schema where these events were encountered.  See [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/) for JSONPath specification.'\n                    }\n                  },\n                  message: {\n                    type: 'string',\n                    description: 'Diagnostic message that describes the event.'\n                  }\n                },\n                required: [                  'code'\n                ]\n              }\n            }\n          }\n        }\n      },\n      required: [        'schema'\n      ]\n    },\n    old_public_schema: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        kind: {\n          type: 'string',\n          description: 'Kind of schema',\n          enum: [            'openapi_v3'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the schema'\n        },\n        schema_id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        source: {\n          type: 'string',\n          description: 'Source of the schema'\n        },\n        validation_enabled: {\n          type: 'boolean',\n          description: 'Flag whether schema is enabled for validation.'\n        }\n      },\n      required: [        'created_at',\n        'kind',\n        'name',\n        'schema_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      file: {
        type: 'string',
        description: 'Schema file bytes',
      },
      kind: {
        type: 'string',
        description: 'Kind of schema',
        enum: ['openapi_v3'],
      },
      name: {
        type: 'string',
        description: 'Name of the schema',
      },
      validation_enabled: {
        type: 'string',
        description: 'Flag whether schema is enabled for validation.',
        enum: ['true', 'false'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'file', 'kind'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.apiGateway.userSchemas.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
