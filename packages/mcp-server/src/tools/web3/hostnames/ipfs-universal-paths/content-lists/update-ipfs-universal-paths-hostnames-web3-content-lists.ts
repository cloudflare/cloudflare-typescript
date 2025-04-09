// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames.ipfs_universal_paths.content_lists',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_ipfs_universal_paths_hostnames_web3_content_lists',
  description: 'Update IPFS Universal Path Gateway Content List',
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
      action: {
        type: 'string',
        description: 'Behavior of the content list.',
        enum: ['block'],
      },
      entries: {
        type: 'array',
        description: 'Content list entries.',
        items: {
          type: 'object',
          description: 'Content list entry to be blocked.',
          properties: {
            id: {
              type: 'string',
              description: 'Identifier',
            },
            content: {
              type: 'string',
              description: 'CID or content path of content to block.',
            },
            created_on: {
              type: 'string',
              format: 'date-time',
            },
            description: {
              type: 'string',
              description: 'An optional description of the content list entry.',
            },
            modified_on: {
              type: 'string',
              format: 'date-time',
            },
            type: {
              type: 'string',
              description: 'Type of content list entry to block.',
              enum: ['cid', 'content_path'],
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.web3.hostnames.ipfsUniversalPaths.contentLists.update(identifier, body);
};

export default { metadata, tool, handler };
