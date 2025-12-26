// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.livestreams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise',
  operationId: 'get-org-analytics',
};

export const tool: Tool = {
  name: 'get_org_analytics_realtime_kit_livestreams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns day-wise session and recording analytics data of an App for the specified time range start_date to end_date. If start_date and end_date are not provided, the default time range is set from 30 days ago to the current date.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/livestream_get_org_analytics_response',\n  $defs: {\n    livestream_get_org_analytics_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            recording_stats: {\n              type: 'object',\n              description: 'Recording statistics of an App during the range specified',\n              properties: {\n                day_stats: {\n                  type: 'array',\n                  description: 'Day wise recording stats',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      day: {\n                        type: 'string'\n                      },\n                      total_recording_minutes: {\n                        type: 'integer',\n                        description: 'Total recording minutes for a specific day'\n                      },\n                      total_recordings: {\n                        type: 'integer',\n                        description: 'Total number of recordings for a specific day'\n                      }\n                    }\n                  }\n                },\n                recording_count: {\n                  type: 'integer',\n                  description: 'Total number of recordings during the range specified'\n                },\n                recording_minutes_consumed: {\n                  type: 'number',\n                  description: 'Total recording minutes during the range specified'\n                }\n              }\n            },\n            session_stats: {\n              type: 'object',\n              description: 'Session statistics of an App during the range specified',\n              properties: {\n                day_stats: {\n                  type: 'array',\n                  description: 'Day wise session stats',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      day: {\n                        type: 'string'\n                      },\n                      total_session_minutes: {\n                        type: 'number',\n                        description: 'Total session minutes for a specific day'\n                      },\n                      total_sessions: {\n                        type: 'integer',\n                        description: 'Total number of sessions for a specific day'\n                      }\n                    }\n                  }\n                },\n                sessions_count: {\n                  type: 'integer',\n                  description: 'Total number of sessions during the range specified'\n                },\n                sessions_minutes_consumed: {\n                  type: 'number',\n                  description: 'Total session minutes during the range specified'\n                }\n              }\n            }\n          }\n        },\n        success: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
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
      end_date: {
        type: 'string',
        description: 'end date in YYYY-MM-DD format',
      },
      start_date: {
        type: 'string',
        description: 'start date in YYYY-MM-DD format',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'app_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.realtimeKit.livestreams.getOrgAnalytics(app_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
