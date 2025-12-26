// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.recordings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}',
  operationId: 'pause_resume_stop_recording',
};

export const tool: Tool = {
  name: 'pause_resume_stop_recording_realtime_kit_recordings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPause/Resume/Stop a given recording ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/recording_pause_resume_stop_recording_response',\n  $defs: {\n    recording_pause_resume_stop_recording_response: {\n      type: 'object',\n      title: 'GenericSuccessResponse',\n      properties: {\n        success: {\n          type: 'boolean',\n          description: 'Success status of the operation'\n        },\n        data: {\n          type: 'object',\n          title: 'Recording',\n          description: 'Data returned by the operation',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'ID of the recording'\n            },\n            audio_download_url: {\n              type: 'string',\n              description: 'If the audio_config is passed, the URL for downloading the audio recording is returned.'\n            },\n            download_url: {\n              type: 'string',\n              description: 'URL where the recording can be downloaded.'\n            },\n            download_url_expiry: {\n              type: 'string',\n              description: 'Timestamp when the download URL expires.',\n              format: 'date-time'\n            },\n            file_size: {\n              type: 'number',\n              description: 'File size of the recording, in bytes.'\n            },\n            invoked_time: {\n              type: 'string',\n              description: 'Timestamp when this recording was invoked.',\n              format: 'date-time'\n            },\n            output_file_name: {\n              type: 'string',\n              description: 'File name of the recording.'\n            },\n            session_id: {\n              type: 'string',\n              description: 'ID of the meeting session this recording is for.'\n            },\n            started_time: {\n              type: 'string',\n              description: 'Timestamp when this recording actually started after being invoked. Usually a few seconds after `invoked_time`.',\n              format: 'date-time'\n            },\n            status: {\n              type: 'string',\n              description: 'Current status of the recording.',\n              enum: [                'INVOKED',\n                'RECORDING',\n                'UPLOADING',\n                'UPLOADED',\n                'ERRORED',\n                'PAUSED'\n              ]\n            },\n            stopped_time: {\n              type: 'string',\n              description: 'Timestamp when this recording was stopped. Optional; is present only when the recording has actually been stopped.',\n              format: 'date-time'\n            },\n            recording_duration: {\n              type: 'integer',\n              description: 'Total recording time in seconds.'\n            },\n            start_reason: {\n              type: 'object',\n              title: 'startReason',\n              properties: {\n                caller: {\n                  type: 'object',\n                  properties: {\n                    name: {\n                      type: 'string',\n                      description: 'Name of the user who started the recording.'\n                    },\n                    type: {\n                      type: 'string',\n                      description: 'The type can be an App or a user. If the type is `user`, then only the `user_Id` and `name` are returned.',\n                      enum: [                        'ORGANIZATION',\n                        'USER'\n                      ]\n                    },\n                    user_Id: {\n                      type: 'string',\n                      description: 'The user ID of the person who started the recording.'\n                    }\n                  }\n                },\n                reason: {\n                  type: 'string',\n                  description: 'Specifies if the recording was started using the \"Start a Recording\"API or using the parameter RECORD_ON_START in the \"Create a meeting\" API. \\n\\nIf the recording is initiated using the \"RECORD_ON_START\" parameter, the user details will not be populated.',\n                  enum: [                    'API_CALL',\n                    'RECORD_ON_START'\n                  ]\n                }\n              }\n            },\n            stop_reason: {\n              type: 'object',\n              title: 'stopReason',\n              properties: {\n                caller: {\n                  type: 'object',\n                  properties: {\n                    name: {\n                      type: 'string',\n                      description: 'Name of the user who stopped the recording.'\n                    },\n                    type: {\n                      type: 'string',\n                      description: 'The type can be an App or a user. If the type is `user`, then only the `user_Id` and `name` are returned.',\n                      enum: [                        'ORGANIZATION',\n                        'USER'\n                      ]\n                    },\n                    user_Id: {\n                      type: 'string',\n                      description: 'The user ID of the person who stopped the recording.'\n                    }\n                  }\n                },\n                reason: {\n                  type: 'string',\n                  description: 'Specifies the reason why the recording stopped.',\n                  enum: [                    'API_CALL',\n                    'INTERNAL_ERROR',\n                    'ALL_PEERS_LEFT'\n                  ]\n                }\n              }\n            },\n            storage_config: {\n              type: 'object',\n              title: 'StorageConfig',\n              properties: {\n                type: {\n                  type: 'string',\n                  description: 'Type of storage media.',\n                  enum: [                    'aws',\n                    'azure',\n                    'digitalocean',\n                    'gcs',\n                    'sftp'\n                  ]\n                },\n                access_key: {\n                  type: 'string',\n                  description: 'Access key of the storage medium. Access key is not required for the `gcs` storage media type.\\n\\nNote that this field is not readable by clients, only writeable.'\n                },\n                auth_method: {\n                  type: 'string',\n                  description: 'Authentication method used for \"sftp\" type storage medium',\n                  enum: [                    'KEY',\n                    'PASSWORD'\n                  ]\n                },\n                bucket: {\n                  type: 'string',\n                  description: 'Name of the storage medium\\'s bucket.'\n                },\n                host: {\n                  type: 'string',\n                  description: 'SSH destination server host for SFTP type storage medium'\n                },\n                password: {\n                  type: 'string',\n                  description: 'SSH destination server password for SFTP type storage medium when auth_method is \"PASSWORD\". If auth_method is \"KEY\", this specifies the password for the ssh private key.'\n                },\n                path: {\n                  type: 'string',\n                  description: 'Path relative to the bucket root at which the recording will be placed.'\n                },\n                port: {\n                  type: 'number',\n                  description: 'SSH destination server port for SFTP type storage medium'\n                },\n                private_key: {\n                  type: 'string',\n                  description: 'Private key used to login to destination SSH server for SFTP type storage medium, when auth_method used is \"KEY\"'\n                },\n                region: {\n                  type: 'string',\n                  description: 'Region of the storage medium.'\n                },\n                secret: {\n                  type: 'string',\n                  description: 'Secret key of the storage medium. Similar to `access_key`, it is only writeable by clients, not readable.'\n                },\n                username: {\n                  type: 'string',\n                  description: 'SSH destination server username for SFTP type storage medium'\n                }\n              },\n              required: [                'type'\n              ]\n            }\n          },\n          required: [            'id',\n            'audio_download_url',\n            'download_url',\n            'download_url_expiry',\n            'file_size',\n            'invoked_time',\n            'output_file_name',\n            'session_id',\n            'started_time',\n            'status',\n            'stopped_time'\n          ]\n        }\n      },\n      required: [        'success'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      app_id: {
        type: 'string',
      },
      recording_id: {
        type: 'string',
      },
      action: {
        type: 'string',
        enum: ['stop', 'pause', 'resume'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id', 'recording_id', 'action'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { recording_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.realtimeKit.recordings.pauseResumeStopRecording(recording_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
