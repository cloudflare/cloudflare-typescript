// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.binary_storage',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/binary',
  operationId: 'post_BinDBPost',
};

export const tool: Tool = {
  name: 'create_cloudforce_one_binary_storage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPosts a file to BinDB\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    accountIds: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    content_type: {\n      type: 'string'\n    },\n    filenames: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    first_seen: {\n      type: 'number'\n    },\n    is_private: {\n      type: 'boolean'\n    },\n    md5: {\n      type: 'string'\n    },\n    sha1: {\n      type: 'string'\n    },\n    sha256: {\n      type: 'string'\n    }\n  },\n  required: [    'accountIds',\n    'content_type',\n    'filenames',\n    'first_seen',\n    'is_private',\n    'md5',\n    'sha1',\n    'sha256'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      file: {
        type: 'string',
        description: 'The binary file content to upload.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'file'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.cloudforceOne.binaryStorage.create(body)));
};

export default { metadata, tool, handler };
