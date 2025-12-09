// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_normalization',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/url_normalization',
  operationId: 'getUrlNormalization',
};

export const tool: Tool = {
  name: 'get_url_normalization',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the current URL Normalization settings.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/url_normalization_get_response',\n  $defs: {\n    url_normalization_get_response: {\n      type: 'object',\n      title: 'Result',\n      description: 'A result.',\n      properties: {\n        scope: {\n          type: 'string',\n          title: 'Scope',\n          description: 'The scope of the URL normalization.',\n          enum: [            'incoming',\n            'both',\n            'none'\n          ]\n        },\n        type: {\n          type: 'string',\n          title: 'Type',\n          description: 'The type of URL normalization performed by Cloudflare.',\n          enum: [            'cloudflare',\n            'rfc3986'\n          ]\n        }\n      },\n      required: [        'scope',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.urlNormalization.get(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
