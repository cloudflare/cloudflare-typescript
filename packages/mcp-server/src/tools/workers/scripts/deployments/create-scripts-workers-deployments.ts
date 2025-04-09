// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.deployments',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_scripts_workers_deployments',
  description:
    'Deployments configure how [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions) are deployed to traffic. A deployment can consist of one or two versions of a Worker.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script.',
      },
      strategy: {
        type: 'string',
        enum: ['percentage'],
      },
      versions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            percentage: {
              type: 'number',
            },
            version_id: {
              type: 'string',
            },
          },
          required: ['percentage', 'version_id'],
        },
      },
      force: {
        type: 'boolean',
        description:
          'If set to true, the deployment will be created even if normally blocked by something such rolling back to an older version when a secret has changed.',
      },
      annotations: {
        type: 'object',
        properties: {
          'workers/message': {
            type: 'string',
            description: 'Human-readable message about the deployment. Truncated to 100 bytes.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.deployments.create(script_name, body);
};

export default { metadata, tool, handler };
