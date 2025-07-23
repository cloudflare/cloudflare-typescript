// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.settings.operations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/schema_validation/settings/operations/{operation_id}',
  operationId: 'schema-validation-get-per-operation-setting',
};

export const tool: Tool = {
  name: 'get_settings_schema_validation_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet per-operation schema validation setting\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      $ref: '#/$defs/message'\n    },\n    messages: {\n      $ref: '#/$defs/message'\n    },\n    result: {\n      type: 'object',\n      properties: {\n        mitigation_action: {\n          type: 'string',\n          description: 'When set, this applies a mitigation action to this operation which supersedes a global schema validation setting just for this operation\\n\\n  - `\"log\"` - log request when request does not conform to schema for this operation\\n  - `\"block\"` - deny access to the site when request does not conform to schema for this operation\\n  - `\"none\"` - will skip mitigation for this operation',\n          enum: [            'log',\n            'block',\n            'none'\n          ]\n        },\n        operation_id: {\n          type: 'string',\n          description: 'UUID.'\n        }\n      },\n      required: [        'mitigation_action',\n        'operation_id'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    message: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      operation_id: {
        type: 'string',
        description: 'UUID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'operation_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { operation_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.schemaValidation.settings.operations.get(operation_id, body)),
  );
};

export default { metadata, tool, handler };
