// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.meetings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}',
  operationId: 'replace_meeting',
};

export const tool: Tool = {
  name: 'replace_meeting_by_id_realtime_kit_meetings',
  description: 'Replaces all the details for the given meeting ID.',
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
      ai_config: {
        type: 'object',
        title: 'AIConfig',
        description:
          'The AI Config allows you to customize the behavior of meeting transcriptions and summaries',
        properties: {
          summarization: {
            type: 'object',
            title: 'SummarizationConfig',
            description: 'Summary Config',
            properties: {
              summary_type: {
                type: 'string',
                description:
                  'Defines the style of the summary, such as general, team meeting, or sales call.',
                enum: [
                  'general',
                  'team_meeting',
                  'sales_call',
                  'client_check_in',
                  'interview',
                  'daily_standup',
                  'one_on_one_meeting',
                  'lecture',
                  'code_review',
                ],
              },
              text_format: {
                type: 'string',
                description: 'Determines the text format of the summary, such as plain text or markdown.',
                enum: ['plain_text', 'markdown'],
              },
              word_limit: {
                type: 'integer',
                description: 'Sets the maximum number of words in the meeting summary.',
              },
            },
          },
          transcription: {
            type: 'object',
            title: 'TranscriptionConfig',
            description: 'Transcription Configurations',
            properties: {
              keywords: {
                type: 'array',
                description: 'Adds specific terms to improve accurate detection during transcription.',
                items: {
                  type: 'string',
                },
              },
              language: {
                type: 'string',
                description: 'Specifies the language code for transcription to ensure accurate results.',
                enum: ['en-US', 'en-IN', 'de', 'hi', 'sv', 'ru', 'pl', 'el', 'fr', 'nl'],
              },
              profanity_filter: {
                type: 'boolean',
                description: 'Control the inclusion of offensive language in transcriptions.',
              },
            },
          },
        },
      },
      live_stream_on_start: {
        type: 'boolean',
        description: 'Specifies if the meeting should start getting livestreamed on start.',
      },
      persist_chat: {
        type: 'boolean',
        description:
          'If a meeting is set to persist_chat, meeting chat would remain for a week within the meeting space.',
      },
      record_on_start: {
        type: 'boolean',
        description:
          'Specifies if the meeting should start getting recorded as soon as someone joins the meeting.',
      },
      recording_config: {
        type: 'object',
        title: 'RecordingConfig',
        description:
          'Recording Configurations to be used for this meeting. This level of configs takes higher preference over App level configs on the RealtimeKit developer portal.\n',
        properties: {
          audio_config: {
            type: 'object',
            title: 'AudioConfig',
            description: 'Object containing configuration regarding the audio that is being recorded.',
            properties: {
              channel: {
                type: 'string',
                description:
                  'Audio signal pathway within an audio file that carries a specific sound source.',
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
            description: 'Adds a prefix to the beginning of the file name of the recording.',
          },
          live_streaming_config: {
            type: 'object',
            title: 'LivestreamingConfig',
            properties: {
              rtmp_url: {
                type: 'string',
                description: 'RTMP URL to stream to',
              },
            },
          },
          max_seconds: {
            type: 'number',
            description:
              'Specifies the maximum duration for recording in seconds, ranging from a minimum of 60 seconds to a maximum of 24 hours.',
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
      },
      session_keep_alive_time_in_secs: {
        type: 'number',
        description:
          'Time in seconds, for which a session remains active, after the last participant has left the meeting.',
      },
      summarize_on_end: {
        type: 'boolean',
        description:
          'Automatically generate summary of meetings using transcripts. Requires Transcriptions to be enabled, and can be retrieved via Webhooks or summary API.',
      },
      title: {
        type: 'string',
        description: 'Title of the meeting',
      },
    },
    required: ['account_id', 'app_id', 'meeting_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { meeting_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.meetings.replaceMeetingByID(meeting_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
