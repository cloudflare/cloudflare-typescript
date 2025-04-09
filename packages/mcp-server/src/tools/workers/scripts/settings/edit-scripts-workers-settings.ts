// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_scripts_workers_settings',
  description:
    'Patch script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Including but not limited to Logpush and Tail Consumers.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      logpush: {
        type: 'boolean',
        description: 'Whether Logpush is turned on for the Worker.',
      },
      observability: {
        type: 'object',
        description: 'Observability settings for the Worker.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Whether observability is enabled for the Worker.',
          },
          head_sampling_rate: {
            type: 'number',
            description:
              'The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.',
          },
        },
        required: ['enabled'],
      },
      tail_consumers: {
        type: 'array',
        description: 'List of Workers that will consume logs from the attached Worker.',
        items: {
          type: 'object',
          description: 'A reference to a script that will consume logs from the attached Worker.',
          properties: {
            service: {
              type: 'string',
              description: 'Name of Worker that is to be the consumer.',
            },
            environment: {
              type: 'string',
              description: 'Optional environment if the Worker utilizes one.',
            },
            namespace: {
              type: 'string',
              description: 'Optional dispatch namespace the script belongs to.',
            },
          },
          required: ['service'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { script_name, ...body } = args;
  return client.workers.scripts.settings.edit(script_name, body);
};

export default { metadata, tool, handler };
