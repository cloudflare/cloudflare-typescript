// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.schemas',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/schema_validation/schemas',
  operationId: 'schema-validation-create-schema',
};

export const tool: Tool = {
  name: 'create_schema_validation_schemas',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a schema\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer',\n            description: 'A unique error code that describes the kind of issue with the schema'\n          },\n          message: {\n            type: 'string',\n            description: 'A short text explaining the issue with the schema'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              locations: {\n                type: 'array',\n                description: 'A list of JSON path expression(s) that describe the location(s) of the issue within the provided resource. See [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/) for JSONPath specification.',\n                items: {\n                  type: 'string'\n                }\n              },\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer',\n            description: 'A unique error code that describes the kind of issue with the schema'\n          },\n          message: {\n            type: 'string',\n            description: 'A short text explaining the issue with the schema'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              locations: {\n                type: 'array',\n                description: 'A list of JSON path expression(s) that describe the location(s) of the issue within the provided resource. See [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/) for JSONPath specification.',\n                items: {\n                  type: 'string'\n                }\n              },\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'A schema used in schema validation',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        kind: {\n          type: 'string',\n          description: 'The kind of the schema',\n          enum: [            'openapi_v3'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for the schema'\n        },\n        schema_id: {\n          type: 'string',\n          description: 'A unique identifier of this schema'\n        },\n        source: {\n          type: 'string',\n          description: 'The raw schema, e.g., the OpenAPI schema, either as JSON or YAML'\n        },\n        validation_enabled: {\n          type: 'boolean',\n          description: 'An indicator if this schema is enabled'\n        }\n      },\n      required: [        'created_at',\n        'kind',\n        'name',\n        'schema_id',\n        'source'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      kind: {
        type: 'string',
        description: 'The kind of the schema',
        enum: ['openapi_v3'],
      },
      name: {
        type: 'string',
        description: 'A human-readable name for the schema',
      },
      source: {
        type: 'string',
        description: 'The raw schema, e.g., the OpenAPI schema, either as JSON or YAML',
      },
      validation_enabled: {
        type: 'boolean',
        description: 'An indicator if this schema is enabled',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'kind', 'name', 'source', 'validation_enabled'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.schemaValidation.schemas.create(body)),
  );
};

export default { metadata, tool, handler };
