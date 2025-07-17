// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.cors',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/cors',
  operationId: 'r2-put-bucket-cors-policy',
};

export const tool: Tool = {
  name: 'update_buckets_r2_cors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet the CORS policy for a bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      bucket_name: {
        type: 'string',
        description: 'Name of the bucket.',
      },
      rules: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            allowed: {
              type: 'object',
              description: 'Object specifying allowed origins, methods and headers for this CORS rule.',
              properties: {
                methods: {
                  type: 'array',
                  description:
                    'Specifies the value for the Access-Control-Allow-Methods header R2 sets when requesting objects in a bucket from a browser.',
                  items: {
                    type: 'string',
                    enum: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
                  },
                },
                origins: {
                  type: 'array',
                  description:
                    'Specifies the value for the Access-Control-Allow-Origin header R2 sets when requesting objects in a bucket from a browser.',
                  items: {
                    type: 'string',
                  },
                },
                headers: {
                  type: 'array',
                  description:
                    'Specifies the value for the Access-Control-Allow-Headers header R2 sets when requesting objects in this bucket from a browser. Cross-origin requests that include custom headers (e.g. x-user-id) should specify these headers as AllowedHeaders.',
                  items: {
                    type: 'string',
                  },
                },
              },
              required: ['methods', 'origins'],
            },
            id: {
              type: 'string',
              description: 'Identifier for this rule.',
            },
            exposeHeaders: {
              type: 'array',
              description:
                'Specifies the headers that can be exposed back, and accessed by, the JavaScript making the cross-origin request. If you need to access headers beyond the safelisted response headers, such as Content-Encoding or cf-cache-status, you must specify it here.',
              items: {
                type: 'string',
              },
            },
            maxAgeSeconds: {
              type: 'number',
              description:
                'Specifies the amount of time (in seconds) browsers are allowed to cache CORS preflight responses. Browsers may limit this to 2 hours or less, even if the maximum value (86400) is specified.',
            },
          },
          required: ['allowed'],
        },
      },
      jurisdiction: {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return asTextContentResult((await client.r2.buckets.cors.update(bucket_name, body)) as object);
};

export default { metadata, tool, handler };
