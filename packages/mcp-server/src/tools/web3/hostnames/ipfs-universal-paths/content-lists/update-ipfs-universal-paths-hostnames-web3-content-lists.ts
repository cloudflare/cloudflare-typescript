// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames.ipfs_universal_paths.content_lists',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list',
  operationId: 'web3-hostname-update-ipfs-universal-path-gateway-content-list',
};

export const tool: Tool = {
  name: 'update_ipfs_universal_paths_hostnames_web3_content_lists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate IPFS Universal Path Gateway Content List\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/content_list',\n  $defs: {\n    content_list: {\n      type: 'object',\n      properties: {\n        action: {\n          type: 'string',\n          description: 'Behavior of the content list.',\n          enum: [            'block'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
      },
      identifier: {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
      },
      action: {
        type: 'string',
        description: 'Behavior of the content list.',
        enum: ['block'],
      },
      entries: {
        type: 'array',
        description: 'Provides content list entries.',
        items: {
          type: 'object',
          description: 'Specify a content list entry to block.',
          properties: {
            id: {
              type: 'string',
              description: 'Specify the identifier of the hostname.',
            },
            content: {
              type: 'string',
              description: 'Specify the CID or content path of content to block.',
            },
            created_on: {
              type: 'string',
              format: 'date-time',
            },
            description: {
              type: 'string',
              description: 'Specify an optional description of the content list entry.',
            },
            modified_on: {
              type: 'string',
              format: 'date-time',
            },
            type: {
              type: 'string',
              description: 'Specify the type of content list entry to block.',
              enum: ['cid', 'content_path'],
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
    required: ['zone_id', 'identifier', 'action', 'entries'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.web3.hostnames.ipfsUniversalPaths.contentLists.update(identifier, body),
      ),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
