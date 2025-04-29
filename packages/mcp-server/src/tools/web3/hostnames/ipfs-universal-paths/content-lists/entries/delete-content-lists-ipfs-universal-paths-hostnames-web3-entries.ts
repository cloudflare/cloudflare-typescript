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
  name: 'delete_content_lists_ipfs_universal_paths_hostnames_web3_entries',
  description: 'Delete IPFS Universal Path Gateway Content List Entry',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { content_list_entry_identifier, ...body } = args as any;
  return client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.delete(
    content_list_entry_identifier,
    body,
  );
};

export default { metadata, tool, handler };
