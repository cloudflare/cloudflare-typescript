// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.meetings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}',
  operationId: 'update_meeting',
};

export const tool: Tool = {
  name: 'update_meeting_by_id_realtime_kit_meetings',
  description: 'Updates a meeting in an App for the given meeting ID.',
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
          'If a meeting is updated to persist_chat, meeting chat would remain for a week within the meeting space.',
      },
      record_on_start: {
        type: 'boolean',
        description:
          'Specifies if the meeting should start getting recorded as soon as someone joins the meeting.',
      },
      session_keep_alive_time_in_secs: {
        type: 'number',
        description:
          'Time in seconds, for which a session remains active, after the last participant has left the meeting.',
      },
      status: {
        type: 'string',
        description:
          'Whether the meeting is `ACTIVE` or `INACTIVE`. Users will not be able to join an `INACTIVE` meeting.',
        enum: ['ACTIVE', 'INACTIVE'],
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { meeting_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.meetings.updateMeetingByID(meeting_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
