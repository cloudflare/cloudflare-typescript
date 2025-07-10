// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/brand-protection/submit',
  operationId: 'phishing-url-scanner-submit-suspicious-url-for-scanning',
};

export const tool: Tool = {
  name: 'submit_brand_protection',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit suspicious URL for scanning.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/submit'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    submit: {\n      type: 'object',\n      properties: {\n        excluded_urls: {\n          type: 'array',\n          description: 'URLs that were excluded from scanning because their domain is in our no-scan list.',\n          items: {\n            type: 'object',\n            properties: {\n              url: {\n                type: 'string',\n                description: 'URL that was excluded.'\n              }\n            },\n            required: []\n          }\n        },\n        skipped_urls: {\n          type: 'array',\n          description: 'URLs that were skipped because the same URL is currently being scanned.',\n          items: {\n            type: 'object',\n            properties: {\n              url: {\n                type: 'string',\n                description: 'URL that was skipped.'\n              },\n              url_id: {\n                type: 'integer',\n                description: 'ID of the submission of that URL that is currently scanning.'\n              }\n            },\n            required: []\n          }\n        },\n        submitted_urls: {\n          type: 'array',\n          description: 'URLs that were successfully submitted for scanning.',\n          items: {\n            type: 'object',\n            properties: {\n              url: {\n                type: 'string',\n                description: 'URL that was submitted.'\n              },\n              url_id: {\n                type: 'integer',\n                description: 'ID assigned to this URL submission. Used to retrieve scanning results.'\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'string',
        description: 'URL(s) to filter submissions results by.',
      },
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
  return asTextContentResult(await maybeFilter(args, await client.brandProtection.submit(body)));
};

export default { metadata, tool, handler };
