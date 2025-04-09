// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.resource_groups',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_iam_resource_groups',
  description: 'Create a new Resource Group under the specified account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      scope: {
        type: 'object',
        description: 'A scope is a combination of scope objects which provides additional context.',
        properties: {
          key: {
            type: 'string',
            description:
              'This is a combination of pre-defined resource name and identifier (like Account ID etc.)',
          },
          objects: {
            type: 'array',
            description:
              'A list of scope objects for additional context. The number of Scope objects should not be zero.',
            items: {
              type: 'object',
              description:
                'A scope object represents any resource that can have actions applied against invite.',
              properties: {
                key: {
                  type: 'string',
                  description:
                    'This is a combination of pre-defined resource name and identifier (like Zone ID etc.)',
                },
              },
              required: ['key'],
            },
          },
        },
        required: ['key', 'objects'],
      },
      meta: {
        type: 'object',
        description: 'Attributes associated to the resource group.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.iam.resourceGroups.create(body);
};

export default { metadata, tool, handler };
