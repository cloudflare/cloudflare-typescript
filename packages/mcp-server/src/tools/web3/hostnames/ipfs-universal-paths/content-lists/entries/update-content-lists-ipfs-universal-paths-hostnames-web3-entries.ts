// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames.ipfs_universal_paths.content_lists.entries',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_content_lists_ipfs_universal_paths_hostnames_web3_entries',
  description: 'Edit IPFS Universal Path Gateway Content List Entry',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      identifier: {
        type: 'string',
        description: 'Identifier',
      },
      content_list_entry_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      content: {
        type: 'string',
        description: 'CID or content path of content to block.',
      },
      type: {
        type: 'string',
        description: 'Type of content list entry to block.',
        enum: ['cid', 'content_path'],
      },
      description: {
        type: 'string',
        description: 'An optional description of the content list entry.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { content_list_entry_identifier, ...body } = args;
  return client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.update(
    content_list_entry_identifier,
    body,
  );
};

export default { metadata, tool, handler };
