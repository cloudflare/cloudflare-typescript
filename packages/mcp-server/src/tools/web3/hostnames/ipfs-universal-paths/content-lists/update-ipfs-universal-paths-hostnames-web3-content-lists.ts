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
