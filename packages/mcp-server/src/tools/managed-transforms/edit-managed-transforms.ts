// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'managed_transforms',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_managed_transforms',
  description: 'Updates the status of one or more Managed Transforms.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the zone.',
      },
      managed_request_headers: {
        type: 'array',
        title: 'Managed Request Transforms',
        description: 'The list of Managed Request Transforms.',
        items: {
          type: 'object',
          title: 'Managed Transform',
          description: 'A Managed Transform object.',
          properties: {
            id: {
              type: 'string',
              title: 'ID',
              description: 'The human-readable identifier of the Managed Transform.',
            },
            enabled: {
              type: 'boolean',
              title: 'Enabled',
              description: 'Whether the Managed Transform is enabled.',
            },
            has_conflict: {
              type: 'boolean',
              title: 'Has conflict',
              description:
                'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.',
            },
            conflicts_with: {
              type: 'array',
              title: 'Conflicts with',
              description: 'The Managed Transforms that this Managed Transform conflicts with.',
              items: {
                type: 'string',
              },
            },
          },
          required: ['id', 'enabled', 'has_conflict'],
        },
      },
      managed_response_headers: {
        type: 'array',
        title: 'Managed Response Transforms',
        description: 'The list of Managed Response Transforms.',
        items: {
          type: 'object',
          title: 'Managed Transform',
          description: 'A Managed Transform object.',
          properties: {
            id: {
              type: 'string',
              title: 'ID',
              description: 'The human-readable identifier of the Managed Transform.',
            },
            enabled: {
              type: 'boolean',
              title: 'Enabled',
              description: 'Whether the Managed Transform is enabled.',
            },
            has_conflict: {
              type: 'boolean',
              title: 'Has conflict',
              description:
                'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.',
            },
            conflicts_with: {
              type: 'array',
              title: 'Conflicts with',
              description: 'The Managed Transforms that this Managed Transform conflicts with.',
              items: {
                type: 'string',
              },
            },
          },
          required: ['id', 'enabled', 'has_conflict'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.managedTransforms.edit(body);
};

export default { metadata, tool, handler };
