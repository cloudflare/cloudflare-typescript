// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.expression_template.fallthrough',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/api_gateway/expression-template/fallthrough',
  operationId: 'api-shield-expression-templates-fallthrough',
};

export const tool: Tool = {
  name: 'create_expression_template_api_gateway_fallthrough',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate fallthrough WAF expression template from a set of API hosts\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fallthrough_create_response',\n  $defs: {\n    fallthrough_create_response: {\n      type: 'object',\n      properties: {\n        expression: {\n          type: 'string',\n          description: 'WAF Expression for fallthrough'\n        },\n        title: {\n          type: 'string',\n          description: 'Title for the expression'\n        }\n      },\n      required: [        'expression',\n        'title'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      hosts: {
        type: 'array',
        description: 'List of hosts to be targeted in the expression',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'hosts'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.apiGateway.expressionTemplate.fallthrough.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
