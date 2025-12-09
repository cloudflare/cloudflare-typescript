// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.user_schemas',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/user_schemas/{schema_id}',
  operationId: 'api-shield-schema-validation-retrieve-information-about-specific-schema',
};

export const tool: Tool = {
  name: 'get_api_gateway_user_schemas',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve information about a specific schema on a zone\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/old_public_schema',\n  $defs: {\n    old_public_schema: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        kind: {\n          type: 'string',\n          description: 'Kind of schema',\n          enum: [            'openapi_v3'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the schema'\n        },\n        schema_id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        source: {\n          type: 'string',\n          description: 'Source of the schema'\n        },\n        validation_enabled: {\n          type: 'boolean',\n          description: 'Flag whether schema is enabled for validation.'\n        }\n      },\n      required: [        'created_at',\n        'kind',\n        'name',\n        'schema_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      schema_id: {
        type: 'string',
      },
      omit_source: {
        type: 'boolean',
        description: 'Omit the source-files of schemas and only retrieve their meta-data.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'schema_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { schema_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.apiGateway.userSchemas.get(schema_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
