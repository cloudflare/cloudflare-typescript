// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.audio_tracks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_stream_audio_tracks',
  description:
    'Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.stream.audioTracks.get(identifier, body);
};

export default { metadata, tool, handler };
