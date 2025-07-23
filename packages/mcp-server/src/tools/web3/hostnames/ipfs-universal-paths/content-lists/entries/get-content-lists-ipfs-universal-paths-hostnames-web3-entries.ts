// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames.ipfs_universal_paths.content_lists.entries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}',
  operationId: 'web3-hostname-ipfs-universal-path-gateway-content-list-entry-details',
};

export const tool: Tool = {
  name: 'get_content_lists_ipfs_universal_paths_hostnames_web3_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIPFS Universal Path Gateway Content List Entry Details\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'Specify a content list entry to block.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Specify the identifier of the hostname.'\n        },\n        content: {\n          type: 'string',\n          description: 'Specify the CID or content path of content to block.'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Specify an optional description of the content list entry.'\n        },\n        modified_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        type: {\n          type: 'string',\n          description: 'Specify the type of content list entry to block.',\n          enum: [            'cid',\n            'content_path'\n          ]\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Specifies whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      anyOf: [        {\n          type: 'object'\n        },\n        {\n          type: 'string'\n        }\n      ],\n      description: 'Provides the API response.'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      content_list_entry_identifier: {
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
    required: ['zone_id', 'identifier', 'content_list_entry_identifier'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { content_list_entry_identifier, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.get(
        content_list_entry_identifier,
        body,
      ),
    ),
  );
};

export default { metadata, tool, handler };
