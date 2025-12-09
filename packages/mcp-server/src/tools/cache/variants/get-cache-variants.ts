// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.variants',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/cache/variants',
  operationId: 'zone-cache-settings-get-variants-setting',
};

export const tool: Tool = {
  name: 'get_cache_variants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVariant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/variant_get_response',\n  $defs: {\n    variant_get_response: {\n      type: 'object',\n      title: 'Variants Caching',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The identifier of the caching setting.',\n          enum: [            'variants'\n          ]\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Whether the setting is editable.'\n        },\n        value: {\n          type: 'object',\n          description: 'Value of the zone setting.',\n          properties: {\n            avif: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for avif.',\n              items: {\n                type: 'string'\n              }\n            },\n            bmp: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for bmp.',\n              items: {\n                type: 'string'\n              }\n            },\n            gif: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for gif.',\n              items: {\n                type: 'string'\n              }\n            },\n            jp2: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for jp2.',\n              items: {\n                type: 'string'\n              }\n            },\n            jpeg: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for jpeg.',\n              items: {\n                type: 'string'\n              }\n            },\n            jpg: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for jpg.',\n              items: {\n                type: 'string'\n              }\n            },\n            jpg2: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for jpg2.',\n              items: {\n                type: 'string'\n              }\n            },\n            png: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for png.',\n              items: {\n                type: 'string'\n              }\n            },\n            tif: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for tif.',\n              items: {\n                type: 'string'\n              }\n            },\n            tiff: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for tiff.',\n              items: {\n                type: 'string'\n              }\n            },\n            webp: {\n              type: 'array',\n              description: 'List of strings with the MIME types of all the variants that should be served for webp.',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time this setting was modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.cache.variants.get(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
