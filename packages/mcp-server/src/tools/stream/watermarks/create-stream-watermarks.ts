// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.watermarks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_stream_watermarks',
  description: 'Creates watermark profiles using a single `HTTP POST multipart/form-data` request.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      file: {
        type: 'string',
        description: 'The image file to upload.',
      },
      name: {
        type: 'string',
        description: 'A short description of the watermark profile.',
      },
      opacity: {
        type: 'number',
        description:
          'The translucency of the image. A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.',
      },
      padding: {
        type: 'number',
        description:
          'The whitespace between the adjacent edges (determined by position) of the video and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.',
      },
      position: {
        type: 'string',
        description:
          'The location of the image. Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.',
      },
      scale: {
        type: 'number',
        description:
          'The size of the image relative to the overall size of the video. This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.stream.watermarks.create(body);
};

export default { metadata, tool, handler };
