// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.miscategorizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/intel/miscategorization',
  operationId: 'miscategorization-create-miscategorization',
};

export const tool: Tool = {
  name: 'create_intel_miscategorizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAllows you to submit requests to change a domain’s category.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      content_adds: {
        type: 'array',
        description: 'Content category IDs to add.',
        items: {
          type: 'integer',
        },
      },
      content_removes: {
        type: 'array',
        description: 'Content category IDs to remove.',
        items: {
          type: 'integer',
        },
      },
      indicator_type: {
        type: 'string',
        enum: ['domain', 'ipv4', 'ipv6', 'url'],
      },
      ip: {
        type: 'string',
        description: 'Provide only if indicator_type is `ipv4` or `ipv6`.',
      },
      security_adds: {
        type: 'array',
        description: 'Security category IDs to add.',
        items: {
          type: 'integer',
        },
      },
      security_removes: {
        type: 'array',
        description: 'Security category IDs to remove.',
        items: {
          type: 'integer',
        },
      },
      url: {
        type: 'string',
        description:
          'Provide only if indicator_type is `domain` or `url`. Example if indicator_type is `domain`: `example.com`. Example if indicator_type is `url`: `https://example.com/news/`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.intel.miscategorizations.create(body)));
};

export default { metadata, tool, handler };
