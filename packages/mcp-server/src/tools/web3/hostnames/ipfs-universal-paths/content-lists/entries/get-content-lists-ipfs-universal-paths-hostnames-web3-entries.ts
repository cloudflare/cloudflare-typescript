// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames.ipfs_universal_paths.content_lists.entries',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_content_lists_ipfs_universal_paths_hostnames_web3_entries',
  description: 'IPFS Universal Path Gateway Content List Entry Details',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { content_list_entry_identifier, ...body } = args;
  return client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.get(
    content_list_entry_identifier,
    body,
  );
};

export default { metadata, tool, handler };
