// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_resource_sharing',
  description: 'Create a new share',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      name: {
        type: 'string',
        description: 'The name of the share.',
      },
      recipients: {
        type: 'array',
        items: {
          type: 'object',
          description: 'Account or organization ID must be provided.',
          properties: {
            account_id: {
              type: 'string',
              description: 'Account identifier.',
            },
            organization_id: {
              type: 'string',
              description: 'Organization identifier.',
            },
          },
          required: [],
        },
      },
      resources: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            meta: {
              type: 'object',
              description: 'Resource Metadata.',
            },
            resource_account_id: {
              type: 'string',
              description: 'Account identifier.',
            },
            resource_id: {
              type: 'string',
              description: 'Share Resource identifier.',
            },
            resource_type: {
              type: 'string',
              description: 'Resource Type.',
              enum: ['custom-ruleset', 'widget'],
            },
          },
          required: ['meta', 'resource_account_id', 'resource_id', 'resource_type'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.resourceSharing.create(body);
};

export default { metadata, tool, handler };
