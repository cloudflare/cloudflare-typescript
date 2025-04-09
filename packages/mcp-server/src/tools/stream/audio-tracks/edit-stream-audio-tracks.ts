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
  name: 'edit_stream_audio_tracks',
  description:
    'Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.',
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
      default: {
        type: 'boolean',
        description: 'Denotes whether the audio track will be played by default in a player.',
      },
      label: {
        type: 'string',
        description:
          'A string to uniquely identify the track amongst other audio track labels for the specified video.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { audio_identifier, ...body } = args;
  return client.stream.audioTracks.edit(audio_identifier, body);
};

export default { metadata, tool, handler };
