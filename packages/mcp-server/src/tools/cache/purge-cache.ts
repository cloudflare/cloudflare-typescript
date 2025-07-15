// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/purge_cache',
  operationId: 'zone-purge',
};

export const tool: Tool = {
  name: 'purge_cache',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n### Purge All Cached Content\nRemoves ALL files from Cloudflare's cache. All tiers can purge everything.\n```\n{\"purge_everything\": true}\n```\n\n### Purge Cached Content by URL\nGranularly removes one or more files from Cloudflare's cache by specifying URLs. All tiers can purge by URL.\n\nTo purge files with custom cache keys, include the headers used to compute the cache key as in the example. If you have a device type or geo in your cache key, you will need to include the CF-Device-Type or CF-IPCountry headers. If you have lang in your cache key, you will need to include the Accept-Language header.\n\n**NB:** When including the Origin header, be sure to include the **scheme** and **hostname**. The port number can be omitted if it is the default port (80 for http, 443 for https), but must be included otherwise.\n\nSingle file purge example with files:\n```\n{\"files\": [\"http://www.example.com/css/styles.css\", \"http://www.example.com/js/index.js\"]}\n```\nSingle file purge example with url and header pairs:\n```\n{\"files\": [{url: \"http://www.example.com/cat_picture.jpg\", headers: { \"CF-IPCountry\": \"US\", \"CF-Device-Type\": \"desktop\", \"Accept-Language\": \"zh-CN\" }}, {url: \"http://www.example.com/dog_picture.jpg\", headers: { \"CF-IPCountry\": \"EU\", \"CF-Device-Type\": \"mobile\", \"Accept-Language\": \"en-US\" }}]}\n```\n\n### Purge Cached Content by Tag, Host or Prefix\nGranularly removes one or more files from Cloudflare's cache either by specifying the host, the associated Cache-Tag, or a Prefix.\n\nFlex purge with tags:\n```\n{\"tags\": [\"a-cache-tag\", \"another-cache-tag\"]}\n```\nFlex purge with hosts:\n```\n{\"hosts\": [\"www.example.com\", \"images.example.com\"]}\n```\nFlex purge with prefixes:\n```\n{\"prefixes\": [\"www.example.com/foo\", \"images.example.com/bar/baz\"]}\n```\n\n### Availability and limits\nplease refer to [purge cache availability and limits documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
          },
          tags: {
            type: 'array',
            description:
              'For more information on cache tags and purging by tags, please refer to [purge by cache-tags documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/).',
            items: {
              type: 'string',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
          },
          hosts: {
            type: 'array',
            description:
              'For more information purging by hostnames, please refer to [purge by hostname documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/).',
            items: {
              type: 'string',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
          },
          prefixes: {
            type: 'array',
            description:
              'For more information on purging by prefixes, please refer to [purge by prefix documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).',
            items: {
              type: 'string',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
          },
          purge_everything: {
            type: 'boolean',
            description:
              'For more information, please refer to [purge everything documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything/).',
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
          },
          files: {
            type: 'array',
            description:
              'For more information on purging files, please refer to [purge by single-file documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).',
            items: {
              type: 'string',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
          },
          files: {
            type: 'array',
            description:
              'For more information on purging files with URL and headers, please refer to [purge by single-file documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).',
            items: {
              type: 'object',
              properties: {
                headers: {
                  type: 'object',
                },
                url: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
        },
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.cache.purge(body)));
};

export default { metadata, tool, handler };
