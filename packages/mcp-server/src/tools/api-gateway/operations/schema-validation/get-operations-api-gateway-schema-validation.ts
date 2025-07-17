// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.operations.schema_validation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation',
  operationId: 'api-shield-schema-validation-retrieve-operation-level-settings',
};

export const tool: Tool = {
  name: 'get_operations_api_gateway_schema_validation',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves operation-level schema validation settings on the zone\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    mitigation_action: {\n      type: 'string',\n      description: 'When set, this applies a mitigation action to this operation\\n\\n  - `log` log request when request does not conform to schema for this operation\\n  - `block` deny access to the site when request does not conform to schema for this operation\\n  - `none` will skip mitigation for this operation\\n  - `null` indicates that no operation level mitigation is in place, see Zone Level Schema Validation Settings for mitigation action that will be applied',\n      enum: [        'log',\n        'block',\n        'none'\n      ]\n    },\n    operation_id: {\n      type: 'string',\n      description: 'UUID.'\n    }\n  }\n}\n```",
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { operation_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.apiGateway.operations.schemaValidation.get(operation_id, body)),
  );
};

export default { metadata, tool, handler };
