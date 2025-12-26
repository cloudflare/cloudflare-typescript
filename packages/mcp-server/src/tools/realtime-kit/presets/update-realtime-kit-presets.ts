// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.presets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}',
  operationId: 'patch-presets-preset_id',
};

export const tool: Tool = {
  name: 'update_realtime_kit_presets',
  description: 'Update a preset by the provided preset ID',
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
      preset_id: {
        type: 'string',
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
              },
            },
          },
          view_type: {
            type: 'string',
            description: 'Type of the meeting',
            enum: ['GROUP_CALL', 'WEBINAR', 'AUDIO_ROOM'],
          },
        },
      },
      name: {
        type: 'string',
        description: 'Name of the preset',
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
              },
            },
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
          is_recorder: {
            type: 'boolean',
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
              },
            },
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
                  },
                ],
              },
            },
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
        },
      },
      ui: {
        type: 'object',
        properties: {
          config_diff: {
            type: 'object',
            additionalProperties: true,
          },
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
          },
        },
      },
    },
    required: ['account_id', 'app_id', 'preset_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { preset_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.presets.update(preset_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
