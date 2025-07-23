// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.audio_tracks',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}',
  operationId: 'edit-audio-tracks',
};

export const tool: Tool = {
  name: 'edit_stream_audio_tracks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/audio'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    audio: {\n      type: 'object',\n      properties: {\n        default: {\n          type: 'boolean',\n          description: 'Denotes whether the audio track will be played by default in a player.'\n        },\n        label: {\n          type: 'string',\n          description: 'A string to uniquely identify the track amongst other audio track labels for the specified video.'\n        },\n        status: {\n          type: 'string',\n          description: 'Specifies the processing status of the video.',\n          enum: [            'queued',\n            'ready',\n            'error'\n          ]\n        },\n        uid: {\n          type: 'string',\n          description: 'A Cloudflare-generated unique identifier for a media item.'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'identifier', 'audio_identifier'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { audio_identifier, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.stream.audioTracks.edit(audio_identifier, body)),
  );
};

export default { metadata, tool, handler };
