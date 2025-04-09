// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_stream_live_inputs',
  description:
    'Creates a live input, and returns credentials that you or your users can use to stream live video to Cloudflare Stream.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      defaultCreator: {
        type: 'string',
        description: 'Sets the creator ID asssociated with this live input.',
      },
      deleteRecordingAfterDays: {
        type: 'number',
        description:
          'Indicates the number of days after which the live inputs recordings will be deleted. When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.',
      },
      meta: {
        type: 'object',
        description:
          'A user modifiable key-value store used to reference other systems of record for managing live inputs.',
      },
      recording: {
        type: 'object',
        description:
          'Records the input to a Cloudflare Stream video. Behavior depends on the mode. In most cases, the video will initially be viewable as a live video and transition to on-demand after a condition is satisfied.',
        properties: {
          allowedOrigins: {
            type: 'array',
            description:
              'Lists the origins allowed to display videos created with this input. Enter allowed origin domains in an array and use `*` for wildcard subdomains. An empty array allows videos to be viewed on any origin.',
            items: {
              type: 'string',
            },
          },
          hideLiveViewerCount: {
            type: 'boolean',
            description: 'Disables reporting the number of live viewers when this property is set to `true`.',
          },
          mode: {
            type: 'string',
            description:
              'Specifies the recording behavior for the live input. Set this value to `off` to prevent a recording. Set the value to `automatic` to begin a recording and transition to on-demand after Stream Live stops receiving input.',
            enum: ['off', 'automatic'],
          },
          requireSignedURLs: {
            type: 'boolean',
            description:
              'Indicates if a video using the live input has the `requireSignedURLs` property set. Also enforces access controls on any video recording of the livestream with the live input.',
          },
          timeoutSeconds: {
            type: 'integer',
            description:
              'Determines the amount of time a live input configured in `automatic` mode should wait before a recording transitions from live to on-demand. `0` is recommended for most use cases and indicates the platform default should be used.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.liveInputs.create(body);
};

export default { metadata, tool, handler };
