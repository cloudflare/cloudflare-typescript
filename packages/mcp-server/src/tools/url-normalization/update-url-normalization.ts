// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_normalization',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/url_normalization',
  operationId: 'updateUrlNormalization',
};

export const tool: Tool = {
  name: 'update_url_normalization',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the URL Normalization settings.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response',\n  description: 'A response object.',\n  properties: {\n    errors: {\n      type: 'array',\n      title: 'Errors',\n      description: 'A list of error messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          },\n          source: {\n            type: 'object',\n            title: 'Source',\n            description: 'The source of this message.',\n            properties: {\n              pointer: {\n                type: 'string',\n                title: 'Pointer',\n                description: 'A JSON pointer to the field that is the source of the message.'\n              }\n            },\n            required: [              'pointer'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      description: 'A list of warning messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          },\n          source: {\n            type: 'object',\n            title: 'Source',\n            description: 'The source of this message.',\n            properties: {\n              pointer: {\n                type: 'string',\n                title: 'Pointer',\n                description: 'A JSON pointer to the field that is the source of the message.'\n              }\n            },\n            required: [              'pointer'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      title: 'Result',\n      description: 'A result.',\n      properties: {\n        scope: {\n          type: 'string',\n          title: 'Scope',\n          description: 'The scope of the URL normalization.',\n          enum: [            'incoming',\n            'both'\n          ]\n        },\n        type: {\n          type: 'string',\n          title: 'Type',\n          description: 'The type of URL normalization performed by Cloudflare.',\n          enum: [            'cloudflare',\n            'rfc3986'\n          ]\n        }\n      },\n      required: [        'scope',\n        'type'\n      ]\n    },\n    success: {\n      type: 'string',\n      title: 'Success',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the zone.',
      },
      scope: {
        type: 'string',
        title: 'Scope',
        description: 'The scope of the URL normalization.',
        enum: ['incoming', 'both'],
      },
      type: {
        type: 'string',
        title: 'Type',
        description: 'The type of URL normalization performed by Cloudflare.',
        enum: ['cloudflare', 'rfc3986'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'scope', 'type'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.urlNormalization.update(body)));
};

export default { metadata, tool, handler };
