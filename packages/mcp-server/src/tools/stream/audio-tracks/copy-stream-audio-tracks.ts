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
  name: 'copy_stream_audio_tracks',
  description: 'Adds an additional audio track to a video using the provided audio track URL.',
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
      label: {
        type: 'string',
        description:
          'A string to uniquely identify the track amongst other audio track labels for the specified video.',
      },
      url: {
        type: 'string',
        description:
          'An audio track URL. The server must be publicly routable and support `HTTP HEAD` requests and `HTTP GET` range requests. The server should respond to `HTTP HEAD` requests with a `content-range` header that includes the size of the file.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.stream.audioTracks.copy(identifier, body);
};

export default { metadata, tool, handler };
