// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.audio_tracks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_stream_audio_tracks',
  description:
    'Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      identifier: {
        type: 'string',
        description: 'A Cloudflare-generated unique identifier for a media item.',
      },
      audio_identifier: {
        type: 'string',
        description: 'The unique identifier for an additional audio track.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { audio_identifier, ...body } = args;
  return client.stream.audioTracks.delete(audio_identifier, body);
};

export default { metadata, tool, handler };
