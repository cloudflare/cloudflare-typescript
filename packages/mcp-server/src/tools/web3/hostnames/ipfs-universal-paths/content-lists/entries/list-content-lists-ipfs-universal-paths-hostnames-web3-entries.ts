// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
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
  description: 'List IPFS Universal Path Gateway Content List Entries',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  return asTextContentResult(
    await client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.list(identifier, body),
  );
};

export default { metadata, tool, handler };
