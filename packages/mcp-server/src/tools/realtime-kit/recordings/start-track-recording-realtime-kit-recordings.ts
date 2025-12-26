// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.recordings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/recordings/track',
  operationId: 'startTrackRecordingForAMeeting',
};

export const tool: Tool = {
  name: 'start_track_recording_realtime_kit_recordings',
  description:
    'Starts a track recording in a meeting. Track recordings consist of "layers". Layers are used to map audio/video tracks in a meeting to output destinations. More information about track recordings is available in the [Track Recordings Guide Page](https://docs.realtime.cloudflare.com/guides/capabilities/recording/recording-overview).',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      app_id: {
        type: 'string',
        description: 'The app identifier tag.',
      },
      layers: {
        type: 'object',
        additionalProperties: true,
      },
      meeting_id: {
        type: 'string',
        description: 'ID of the meeting to record.',
      },
      max_seconds: {
        type: 'number',
        description: 'Maximum seconds this recording should be active for (beta)',
      },
    },
    required: ['account_id', 'app_id', 'layers', 'meeting_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  const response = await client.realtimeKit.recordings.startTrackRecording(app_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
