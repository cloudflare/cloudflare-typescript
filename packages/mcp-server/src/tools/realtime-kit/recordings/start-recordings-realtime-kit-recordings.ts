// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.recordings',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/recordings',
  operationId: 'start_recording',
};

export const tool: Tool = {
  name: 'start_recordings_realtime_kit_recordings',
  description:
    'Starts recording a meeting. The meeting can be started by an App admin directly, or a participant with permissions to start a recording, based on the type of authorization used.',
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
      allow_multiple_recordings: {
        type: 'boolean',
        description:
          'By default, a meeting allows only one recording to run at a time. Enabling the `allow_multiple_recordings` parameter to true allows you to initiate multiple recordings concurrently in the same meeting. This allows you to record separate videos of the same meeting with different configurations, such as portrait mode or landscape mode.',
      },
      audio_config: {
        type: 'object',
        title: 'AudioConfig',
        description: 'Object containing configuration regarding the audio that is being recorded.',
        properties: {
          channel: {
            type: 'string',
            description: 'Audio signal pathway within an audio file that carries a specific sound source.',
            enum: ['mono', 'stereo'],
          },
          codec: {
            type: 'string',
            description:
              'Codec using which the recording will be encoded. If VP8/VP9 is selected for videoConfig, changing audioConfig is not allowed. In this case, the codec in the audioConfig is automatically set to vorbis.',
            enum: ['MP3', 'AAC'],
          },
          export_file: {
            type: 'boolean',
            description: 'Controls whether to export audio file seperately',
          },
        },
      },
      file_name_prefix: {
        type: 'string',
        description: 'Update the recording file name.',
      },
      interactive_config: {
        type: 'object',
        title: 'InteractiveConfig',
        description:
          'Allows you to add timed metadata to your recordings, which are digital markers inserted into a video file to provide contextual information at specific points in the content range. The ID3 tags containing this information are available to clients on the playback timeline in HLS format. The output files are generated in a compressed .tar format.',
        properties: {
          type: {
            type: 'string',
            description: 'The metadata is presented in the form of ID3 tags.',
            enum: ['ID3'],
          },
        },
      },
      max_seconds: {
        type: 'integer',
        description:
          'Specifies the maximum duration for recording in seconds, ranging from a minimum of 60 seconds to a maximum of 24 hours.',
      },
      meeting_id: {
        type: 'string',
        description: 'ID of the meeting to record.',
      },
      realtimekit_bucket_config: {
        type: 'object',
        title: 'realtimekitBucketConfig',
        properties: {
          enabled: {
            type: 'boolean',
            description:
              "Controls whether recordings are uploaded to RealtimeKit's bucket. If set to false, `download_url`, `audio_download_url`, `download_url_expiry` won't be generated for a recording.",
          },
        },
        required: ['enabled'],
      },
      rtmp_out_config: {
        type: 'object',
        title: 'LivestreamingConfig',
        properties: {
          rtmp_url: {
            type: 'string',
            description: 'RTMP URL to stream to',
          },
        },
      },
      storage_config: {
        type: 'object',
        title: 'StorageConfig',
        properties: {
          type: {
            type: 'string',
            description: 'Type of storage media.',
            enum: ['aws', 'azure', 'digitalocean', 'gcs', 'sftp'],
          },
          access_key: {
            type: 'string',
            description:
              'Access key of the storage medium. Access key is not required for the `gcs` storage media type.\n\nNote that this field is not readable by clients, only writeable.',
          },
          auth_method: {
            type: 'string',
            description: 'Authentication method used for "sftp" type storage medium',
            enum: ['KEY', 'PASSWORD'],
          },
          bucket: {
            type: 'string',
            description: "Name of the storage medium's bucket.",
          },
          host: {
            type: 'string',
            description: 'SSH destination server host for SFTP type storage medium',
          },
          password: {
            type: 'string',
            description:
              'SSH destination server password for SFTP type storage medium when auth_method is "PASSWORD". If auth_method is "KEY", this specifies the password for the ssh private key.',
          },
          path: {
            type: 'string',
            description: 'Path relative to the bucket root at which the recording will be placed.',
          },
          port: {
            type: 'number',
            description: 'SSH destination server port for SFTP type storage medium',
          },
          private_key: {
            type: 'string',
            description:
              'Private key used to login to destination SSH server for SFTP type storage medium, when auth_method used is "KEY"',
          },
          region: {
            type: 'string',
            description: 'Region of the storage medium.',
          },
          secret: {
            type: 'string',
            description:
              'Secret key of the storage medium. Similar to `access_key`, it is only writeable by clients, not readable.',
          },
          username: {
            type: 'string',
            description: 'SSH destination server username for SFTP type storage medium',
          },
        },
        required: ['type'],
      },
      url: {
        type: 'string',
        description: 'Pass a custom url to record arbitary screen',
      },
      video_config: {
        type: 'object',
        title: 'VideoConfig',
        properties: {
          codec: {
            type: 'string',
            description: 'Codec using which the recording will be encoded.',
            enum: ['H264', 'VP8'],
          },
          export_file: {
            type: 'boolean',
            description: 'Controls whether to export video file seperately',
          },
          height: {
            type: 'integer',
            description: 'Height of the recording video in pixels',
          },
          watermark: {
            type: 'object',
            description: 'Watermark to be added to the recording',
            properties: {
              position: {
                type: 'string',
                description: 'Position of the watermark',
                enum: ['left top', 'right top', 'left bottom', 'right bottom'],
              },
              size: {
                type: 'object',
                description: 'Size of the watermark',
                properties: {
                  height: {
                    type: 'integer',
                    description: 'Height of the watermark in px',
                  },
                  width: {
                    type: 'integer',
                    description: 'Width of the watermark in px',
                  },
                },
              },
              url: {
                type: 'string',
                description: 'URL of the watermark image',
              },
            },
          },
          width: {
            type: 'integer',
            description: 'Width of the recording video in pixels',
          },
        },
      },
    },
    required: ['account_id', 'app_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.recordings.startRecordings(app_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
