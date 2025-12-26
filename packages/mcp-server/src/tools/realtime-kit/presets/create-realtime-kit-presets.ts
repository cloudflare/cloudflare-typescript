// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.presets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/presets',
  operationId: 'post-presets',
};

export const tool: Tool = {
  name: 'create_realtime_kit_presets',
  description: 'Creates a preset belonging to the current App',
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
      config: {
        type: 'object',
        properties: {
          max_screenshare_count: {
            type: 'integer',
            description: 'Maximum number of screen shares that can be active at a given time',
          },
          max_video_streams: {
            type: 'object',
            description: 'Maximum number of streams that are visible on a device',
            properties: {
              desktop: {
                type: 'integer',
                description: 'Maximum number of video streams visible on desktop devices',
              },
              mobile: {
                type: 'integer',
                description: 'Maximum number of streams visible on mobile devices',
              },
            },
            required: ['desktop', 'mobile'],
          },
          media: {
            type: 'object',
            description: 'Media configuration options. eg: Video quality',
            properties: {
              screenshare: {
                type: 'object',
                description: 'Configuration options for participant screen shares',
                properties: {
                  frame_rate: {
                    type: 'integer',
                    description: 'Frame rate of screen share',
                  },
                  quality: {
                    type: 'string',
                    description: 'Quality of screen share',
                    enum: ['hd', 'vga', 'qvga'],
                  },
                },
                required: ['frame_rate', 'quality'],
              },
              video: {
                type: 'object',
                description: 'Configuration options for participant videos',
                properties: {
                  frame_rate: {
                    type: 'integer',
                    description: "Frame rate of participants' video",
                  },
                  quality: {
                    type: 'string',
                    description: 'Video quality of participants',
                    enum: ['hd', 'vga', 'qvga'],
                  },
                },
                required: ['frame_rate', 'quality'],
              },
              audio: {
                type: 'object',
                description: 'Control options for Audio quality.',
                properties: {
                  enable_high_bitrate: {
                    type: 'boolean',
                    description: 'Enable High Quality Audio for your meetings',
                  },
                  enable_stereo: {
                    type: 'boolean',
                    description: 'Enable Stereo for your meetings',
                  },
                },
              },
            },
            required: ['screenshare', 'video'],
          },
          view_type: {
            type: 'string',
            description: 'Type of the meeting',
            enum: ['GROUP_CALL', 'WEBINAR', 'AUDIO_ROOM'],
          },
        },
        required: ['max_screenshare_count', 'max_video_streams', 'media', 'view_type'],
      },
      name: {
        type: 'string',
        description: 'Name of the preset',
      },
      ui: {
        type: 'object',
        properties: {
          design_tokens: {
            type: 'object',
            properties: {
              border_radius: {
                type: 'string',
                enum: ['rounded'],
              },
              border_width: {
                type: 'string',
                enum: ['thin'],
              },
              colors: {
                type: 'object',
                properties: {
                  background: {
                    type: 'object',
                    properties: {
                      '600': {
                        type: 'string',
                      },
                      '700': {
                        type: 'string',
                      },
                      '800': {
                        type: 'string',
                      },
                      '900': {
                        type: 'string',
                      },
                      '1000': {
                        type: 'string',
                      },
                    },
                    required: ['1000', '600', '700', '800', '900'],
                  },
                  brand: {
                    type: 'object',
                    properties: {
                      '300': {
                        type: 'string',
                      },
                      '400': {
                        type: 'string',
                      },
                      '500': {
                        type: 'string',
                      },
                      '600': {
                        type: 'string',
                      },
                      '700': {
                        type: 'string',
                      },
                    },
                    required: ['300', '400', '500', '600', '700'],
                  },
                  danger: {
                    type: 'string',
                  },
                  success: {
                    type: 'string',
                  },
                  text: {
                    type: 'string',
                  },
                  text_on_brand: {
                    type: 'string',
                  },
                  video_bg: {
                    type: 'string',
                  },
                  warning: {
                    type: 'string',
                  },
                },
                required: [
                  'background',
                  'brand',
                  'danger',
                  'success',
                  'text',
                  'text_on_brand',
                  'video_bg',
                  'warning',
                ],
              },
              logo: {
                type: 'string',
              },
              spacing_base: {
                type: 'number',
              },
              theme: {
                type: 'string',
                enum: ['dark'],
              },
            },
            required: ['border_radius', 'border_width', 'colors', 'logo', 'spacing_base', 'theme'],
          },
          config_diff: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['design_tokens'],
      },
      permissions: {
        type: 'object',
        properties: {
          accept_waiting_requests: {
            type: 'boolean',
            description: 'Whether this participant can accept waiting requests',
          },
          can_accept_production_requests: {
            type: 'boolean',
          },
          can_change_participant_permissions: {
            type: 'boolean',
          },
          can_edit_display_name: {
            type: 'boolean',
          },
          can_livestream: {
            type: 'boolean',
          },
          can_record: {
            type: 'boolean',
          },
          can_spotlight: {
            type: 'boolean',
          },
          chat: {
            type: 'object',
            description: 'Chat permissions',
            properties: {
              private: {
                type: 'object',
                properties: {
                  can_receive: {
                    type: 'boolean',
                  },
                  can_send: {
                    type: 'boolean',
                  },
                  files: {
                    type: 'boolean',
                  },
                  text: {
                    type: 'boolean',
                  },
                },
                required: ['can_receive', 'can_send', 'files', 'text'],
              },
              public: {
                type: 'object',
                properties: {
                  can_send: {
                    type: 'boolean',
                    description: 'Can send messages in general',
                  },
                  files: {
                    type: 'boolean',
                    description: 'Can send file messages',
                  },
                  text: {
                    type: 'boolean',
                    description: 'Can send text messages',
                  },
                },
                required: ['can_send', 'files', 'text'],
              },
            },
            required: ['private', 'public'],
          },
          connected_meetings: {
            type: 'object',
            properties: {
              can_alter_connected_meetings: {
                type: 'boolean',
              },
              can_switch_connected_meetings: {
                type: 'boolean',
              },
              can_switch_to_parent_meeting: {
                type: 'boolean',
              },
            },
            required: [
              'can_alter_connected_meetings',
              'can_switch_connected_meetings',
              'can_switch_to_parent_meeting',
            ],
          },
          disable_participant_audio: {
            type: 'boolean',
          },
          disable_participant_screensharing: {
            type: 'boolean',
          },
          disable_participant_video: {
            type: 'boolean',
          },
          hidden_participant: {
            type: 'boolean',
            description: 'Whether this participant is visible to others or not',
          },
          kick_participant: {
            type: 'boolean',
          },
          media: {
            type: 'object',
            description: 'Media permissions',
            properties: {
              audio: {
                type: 'object',
                description: 'Audio permissions',
                properties: {
                  can_produce: {
                    type: 'string',
                    description: 'Can produce audio',
                    enum: ['ALLOWED', 'NOT_ALLOWED', 'CAN_REQUEST'],
                  },
                },
                required: ['can_produce'],
              },
              screenshare: {
                type: 'object',
                description: 'Screenshare permissions',
                properties: {
                  can_produce: {
                    type: 'string',
                    description: 'Can produce screen share video',
                    enum: ['ALLOWED', 'NOT_ALLOWED', 'CAN_REQUEST'],
                  },
                },
                required: ['can_produce'],
              },
              video: {
                type: 'object',
                description: 'Video permissions',
                properties: {
                  can_produce: {
                    type: 'string',
                    description: 'Can produce video',
                    enum: ['ALLOWED', 'NOT_ALLOWED', 'CAN_REQUEST'],
                  },
                },
                required: ['can_produce'],
              },
            },
            required: ['audio', 'screenshare', 'video'],
          },
          pin_participant: {
            type: 'boolean',
          },
          plugins: {
            type: 'object',
            description: 'Plugin permissions',
            properties: {
              can_close: {
                type: 'boolean',
                description: 'Can close plugins that are already open',
              },
              can_edit_config: {
                type: 'boolean',
                description: 'Can edit plugin config',
              },
              can_start: {
                type: 'boolean',
                description: 'Can start plugins',
              },
              config: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'object',
                    properties: {
                      access_control: {
                        type: 'string',
                        enum: ['FULL_ACCESS', 'VIEW_ONLY'],
                      },
                      handles_view_only: {
                        type: 'boolean',
                      },
                    },
                    required: ['access_control', 'handles_view_only'],
                  },
                ],
              },
            },
            required: ['can_close', 'can_edit_config', 'can_start', 'config'],
          },
          polls: {
            type: 'object',
            description: 'Poll permissions',
            properties: {
              can_create: {
                type: 'boolean',
                description: 'Can create polls',
              },
              can_view: {
                type: 'boolean',
                description: 'Can view polls',
              },
              can_vote: {
                type: 'boolean',
                description: 'Can vote on polls',
              },
            },
            required: ['can_create', 'can_view', 'can_vote'],
          },
          recorder_type: {
            type: 'string',
            description: 'Type of the recording peer',
            enum: ['RECORDER', 'LIVESTREAMER', 'NONE'],
          },
          show_participant_list: {
            type: 'boolean',
          },
          waiting_room_type: {
            type: 'string',
            description: 'Waiting room type',
            enum: ['SKIP', 'ON_PRIVILEGED_USER_ENTRY', 'SKIP_ON_ACCEPT'],
          },
          is_recorder: {
            type: 'boolean',
          },
        },
        required: [
          'accept_waiting_requests',
          'can_accept_production_requests',
          'can_change_participant_permissions',
          'can_edit_display_name',
          'can_livestream',
          'can_record',
          'can_spotlight',
          'chat',
          'connected_meetings',
          'disable_participant_audio',
          'disable_participant_screensharing',
          'disable_participant_video',
          'hidden_participant',
          'kick_participant',
          'media',
          'pin_participant',
          'plugins',
          'polls',
          'recorder_type',
          'show_participant_list',
          'waiting_room_type',
        ],
      },
    },
    required: ['account_id', 'app_id', 'config', 'name', 'ui'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.presets.create(app_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
