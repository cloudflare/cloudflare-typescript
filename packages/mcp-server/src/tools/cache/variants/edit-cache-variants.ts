// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.variants',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_cache_variants',
  description:
    "Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.",
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
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cache.variants.edit(body);
};

export default { metadata, tool, handler };
