// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.variants',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/cache/variants',
  operationId: 'zone-cache-settings-change-variants-setting',
};

export const tool: Tool = {
  name: 'edit_cache_variants',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVariant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      title: 'Variants Caching',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the zone setting.',\n          enum: [            'variants'\n          ]\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Whether the setting is editable'\n        },\n        value: {\n          type: 'string',\n          description: 'The value of the feature'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time this setting was modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable',\n        'value'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      value: {
        type: 'object',
        description: 'Value of the zone setting.',
        properties: {
          avif: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for avif.',
            items: {
              type: 'string',
            },
          },
          bmp: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for bmp.',
            items: {
              type: 'string',
            },
          },
          gif: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for gif.',
            items: {
              type: 'string',
            },
          },
          jp2: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for jp2.',
            items: {
              type: 'string',
            },
          },
          jpeg: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for jpeg.',
            items: {
              type: 'string',
            },
          },
          jpg: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for jpg.',
            items: {
              type: 'string',
            },
          },
          jpg2: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for jpg2.',
            items: {
              type: 'string',
            },
          },
          png: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for png.',
            items: {
              type: 'string',
            },
          },
          tif: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for tif.',
            items: {
              type: 'string',
            },
          },
          tiff: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for tiff.',
            items: {
              type: 'string',
            },
          },
          webp: {
            type: 'array',
            description:
              'List of strings with the MIME types of all the variants that should be served for webp.',
            items: {
              type: 'string',
            },
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.cache.variants.edit(body)));
};

export default { metadata, tool, handler };
