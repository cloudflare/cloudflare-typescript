// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.temporary_credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/r2/temp-access-credentials',
  operationId: 'r2-create-temp-access-credentials',
};

export const tool: Tool = {
  name: 'create_r2_temporary_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates temporary access credentials on a bucket that can be optionally scoped to prefixes or objects.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        accessKeyId: {\n          type: 'string',\n          description: 'ID for new access key.'\n        },\n        secretAccessKey: {\n          type: 'string',\n          description: 'Secret access key.'\n        },\n        sessionToken: {\n          type: 'string',\n          description: 'Security token.'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      bucket: {
        type: 'string',
        description: 'Name of the R2 bucket.',
      },
      parentAccessKeyId: {
        type: 'string',
        description: 'The parent access key id to use for signing.',
      },
      permission: {
        type: 'string',
        description: 'Permissions allowed on the credentials.',
        enum: ['admin-read-write', 'admin-read-only', 'object-read-write', 'object-read-only'],
      },
      ttlSeconds: {
        type: 'number',
        description: 'How long the credentials will live for in seconds.',
      },
      objects: {
        type: 'array',
        description: 'Optional object paths to scope the credentials to.',
        items: {
          type: 'string',
        },
      },
      prefixes: {
        type: 'array',
        description: 'Optional prefix paths to scope the credentials to.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket', 'parentAccessKeyId', 'permission', 'ttlSeconds'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.r2.temporaryCredentials.create(body)));
};

export default { metadata, tool, handler };
