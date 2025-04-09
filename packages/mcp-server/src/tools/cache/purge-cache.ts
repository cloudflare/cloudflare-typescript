// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'purge_cache',
  description:
    '### Purge All Cached Content\nRemoves ALL files from Cloudflare\'s cache. All tiers can purge everything.\n```\n{"purge_everything": true}\n```\n\n### Purge Cached Content by URL\nGranularly removes one or more files from Cloudflare\'s cache by specifying URLs. All tiers can purge by URL.\n\nTo purge files with custom cache keys, include the headers used to compute the cache key as in the example. If you have a device type or geo in your cache key, you will need to include the CF-Device-Type or CF-IPCountry headers. If you have lang in your cache key, you will need to include the Accept-Language header.\n\n**NB:** When including the Origin header, be sure to include the **scheme** and **hostname**. The port number can be omitted if it is the default port (80 for http, 443 for https), but must be included otherwise.\n\n**NB:** For Zones on Free/Pro/Business plan, you may purge up to 30 URLs in one API call. For Zones on Enterprise plan, you may purge up to 500 URLs in one API call.\n\nSingle file purge example with files:\n```\n{"files": ["http://www.example.com/css/styles.css", "http://www.example.com/js/index.js"]}\n```\nSingle file purge example with url and header pairs:\n```\n{"files": [{url: "http://www.example.com/cat_picture.jpg", headers: { "CF-IPCountry": "US", "CF-Device-Type": "desktop", "Accept-Language": "zh-CN" }}, {url: "http://www.example.com/dog_picture.jpg", headers: { "CF-IPCountry": "EU", "CF-Device-Type": "mobile", "Accept-Language": "en-US" }}]}\n```\n\n### Purge Cached Content by Tag, Host or Prefix\nGranularly removes one or more files from Cloudflare\'s cache either by specifying the host, the associated Cache-Tag, or a Prefix. Only Enterprise customers are permitted to purge by Tag, Host or Prefix.\n\n**NB:** Cache-Tag, host, and prefix purging each have a rate limit of 30,000 purge API calls in every 24 hour period. You may purge up to 30 tags, hosts, or prefixes in one API call. This rate limit can be raised for customers who need to purge at higher volume.\n\nFlex purge with tags:\n```\n{"tags": ["a-cache-tag", "another-cache-tag"]}\n```\nFlex purge with hosts:\n```\n{"hosts": ["www.example.com", "images.example.com"]}\n```\nFlex purge with prefixes:\n```\n{"prefixes": ["www.example.com/foo", "images.example.com/bar/baz"]}\n```\n',
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
              'For more information on cache tags and purging by tags, please refer to [purge by cache-tags documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/#purge-cache-by-cache-tags-enterprise-only).',
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cache.purge(body);
};

export default { metadata, tool, handler };
