// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames.ipfs_universal_paths.content_lists.entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries',
  operationId: 'web3-hostname-list-ipfs-universal-path-gateway-content-list-entries',
};

export const tool: Tool = {
  name: 'list_content_lists_ipfs_universal_paths_hostnames_web3_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList IPFS Universal Path Gateway Content List Entries\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entry_list_response',\n  $defs: {\n    entry_list_response: {\n      type: 'object',\n      properties: {\n        entries: {\n          type: 'array',\n          description: 'Provides content list entries.',\n          items: {\n            type: 'object',\n            description: 'Specify a content list entry to block.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Specify the identifier of the hostname.'\n              },\n              content: {\n                type: 'string',\n                description: 'Specify the CID or content path of content to block.'\n              },\n              created_on: {\n                type: 'string',\n                format: 'date-time'\n              },\n              description: {\n                type: 'string',\n                description: 'Specify an optional description of the content list entry.'\n              },\n              modified_on: {\n                type: 'string',\n                format: 'date-time'\n              },\n              type: {\n                type: 'string',\n                description: 'Specify the type of content list entry to block.',\n                enum: [                  'cid',\n                  'content_path'\n                ]\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'identifier'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.list(identifier, body),
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
