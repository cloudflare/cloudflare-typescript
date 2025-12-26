// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.recordings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/recordings/active-recording/{meeting_id}',
  operationId: 'get_active_recording',
};

export const tool: Tool = {
  name: 'get_active_recordings_realtime_kit_recordings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the active recording details for the given meeting ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/recording_get_active_recordings_response',\n  $defs: {\n    recording_get_active_recordings_response: {\n      type: 'object',\n      title: 'GenericSuccessResponse',\n      properties: {\n        data: {\n          type: 'object',\n          title: 'Recording',\n          description: 'Data returned by the operation',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID of the recording'\n            },\n            audio_download_url: {\n              type: 'string',\n              description: 'If the audio_config is passed, the URL for downloading the audio recording is returned.'\n            },\n            download_url: {\n              type: 'string',\n              description: 'URL where the recording can be downloaded.'\n            },\n            download_url_expiry: {\n              type: 'string',\n              description: 'Timestamp when the download URL expires.',\n              format: 'date-time'\n            },\n            file_size: {\n              type: 'number',\n              description: 'File size of the recording, in bytes.'\n            },\n            invoked_time: {\n              type: 'string',\n              description: 'Timestamp when this recording was invoked.',\n              format: 'date-time'\n            },\n            output_file_name: {\n              type: 'string',\n              description: 'File name of the recording.'\n            },\n            session_id: {\n              type: 'string',\n              description: 'ID of the meeting session this recording is for.'\n            },\n            started_time: {\n              type: 'string',\n              description: 'Timestamp when this recording actually started after being invoked. Usually a few seconds after `invoked_time`.',\n              format: 'date-time'\n            },\n            status: {\n              type: 'string',\n              description: 'Current status of the recording.',\n              enum: [                'INVOKED',\n                'RECORDING',\n                'UPLOADING',\n                'UPLOADED',\n                'ERRORED',\n                'PAUSED'\n              ]\n            },\n            stopped_time: {\n              type: 'string',\n              description: 'Timestamp when this recording was stopped. Optional; is present only when the recording has actually been stopped.',\n              format: 'date-time'\n            },\n            recording_duration: {\n              type: 'integer',\n              description: 'Total recording time in seconds.'\n            }\n          },\n          required: [            'id',\n            'audio_download_url',\n            'download_url',\n            'download_url_expiry',\n            'file_size',\n            'invoked_time',\n            'output_file_name',\n            'session_id',\n            'started_time',\n            'status',\n            'stopped_time'\n          ]\n        },\n        success: {\n          type: 'boolean',\n          description: 'Success status of the operation'\n        }\n      },\n      required: [        'data',\n        'success'\n      ]\n    }\n  }\n}\n```",
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
      meeting_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'meeting_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { meeting_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.realtimeKit.recordings.getActiveRecordings(meeting_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
