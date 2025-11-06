// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.settings.schema_validation',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/api_gateway/settings/schema_validation',
  operationId: 'api-shield-schema-validation-patch-zone-level-settings',
};

export const tool: Tool = {
  name: 'edit_settings_api_gateway_schema_validation',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates zone level schema validation settings on the zone\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/settings',\n  $defs: {\n    settings: {\n      type: 'object',\n      properties: {\n        validation_default_mitigation_action: {\n          type: 'string',\n          description: 'The default mitigation action used when there is no mitigation action defined on the operation\\n\\nMitigation actions are as follows:\\n\\n  * `log` - log request when request does not conform to schema\\n  * `block` - deny access to the site when request does not conform to schema\\n\\nA special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation',\n          enum: [            'none',\n            'log',\n            'block'\n          ]\n        },\n        validation_override_mitigation_action: {\n          type: 'string',\n          description: 'When set, this overrides both zone level and operation level mitigation actions.\\n\\n  - `none` will skip running schema validation entirely for the request\\n  - `null` indicates that no override is in place',\n          enum: [            'none'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
          'The default mitigation action used when there is no mitigation action defined on the operation\nMitigation actions are as follows:\n\n  * `log` - log request when request does not conform to schema\n  * `block` - deny access to the site when request does not conform to schema\n\nA special value of of `none` will skip running schema validation entirely for the request when there is no mitigation action defined on the operation\n\n`null` will have no effect.',
        enum: ['none', 'log', 'block'],
      },
      validation_override_mitigation_action: {
        type: 'string',
        description:
          'When set, this overrides both zone level and operation level mitigation actions.\n\n  - `none` will skip running schema validation entirely for the request\n\nTo clear any override, use the special value `disable_override`\n\n`null` will have no effect.',
        enum: ['none', 'disable_override'],
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.apiGateway.settings.schemaValidation.edit(body)),
  );
};

export default { metadata, tool, handler };
