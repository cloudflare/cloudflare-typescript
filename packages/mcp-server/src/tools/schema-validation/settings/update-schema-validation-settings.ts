// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'schema_validation.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/schema_validation/settings',
  operationId: 'schema-validation-update-settings',
};

export const tool: Tool = {
  name: 'update_schema_validation_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate global schema validation settings\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/setting_update_response',\n  $defs: {\n    setting_update_response: {\n      type: 'object',\n      properties: {\n        validation_default_mitigation_action: {\n          type: 'string',\n          description: 'The default mitigation action used\\n\\nMitigation actions are as follows:\\n\\n  - `log` - log request when request does not conform to schema\\n  - `block` - deny access to the site when request does not conform to schema\\n  - `none` - skip running schema validation',\n          enum: [            'none',\n            'log',\n            'block'\n          ]\n        },\n        validation_override_mitigation_action: {\n          type: 'string',\n          description: 'When not null, this overrides global both zone level and operation level mitigation actions. This can serve as a quick way to disable schema validation for the whole zone.\\n\\n  - `\"none\"` will skip running schema validation entirely for the request',\n          enum: [            'none'\n          ]\n        }\n      },\n      required: [        'validation_default_mitigation_action'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      validation_default_mitigation_action: {
        type: 'string',
        description:
          'The default mitigation action used\nMitigation actions are as follows:\n\n  - `"log"` - log request when request does not conform to schema\n  - `"block"` - deny access to the site when request does not conform to schema\n  - `"none"` - skip running schema validation',
        enum: ['none', 'log', 'block'],
      },
      validation_override_mitigation_action: {
        type: 'string',
        description:
          'When set, this overrides both zone level and operation level mitigation actions.\n\n  - `"none"` - skip running schema validation entirely for the request\n  - `null` - clears any existing override',
        enum: ['none'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'validation_default_mitigation_action'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.schemaValidation.settings.update(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
