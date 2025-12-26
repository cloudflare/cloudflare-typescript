// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.recordings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/recordings',
  operationId: 'get_all_recordings',
};

export const tool: Tool = {
  name: 'get_recordings_realtime_kit_recordings',
  description:
    'Returns all recordings for an App. If the `meeting_id` parameter is passed, returns all recordings for the given meeting ID.',
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
      end_time: {
        type: 'string',
        description:
          'The end time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        format: 'date-time',
      },
      expired: {
        type: 'boolean',
        description: "If passed, only shows expired/non-expired recordings on RealtimeKit's bucket",
      },
      meeting_id: {
        type: 'string',
        description: 'ID of a meeting. Optional. Will limit results to only this meeting if passed.',
      },
      page_no: {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
      },
      search: {
        type: 'string',
        description: 'The search query string. You can search using the meeting ID or title.',
      },
      sort_by: {
        type: 'string',
        enum: ['invokedTime'],
      },
      sort_order: {
        type: 'string',
        enum: ['ASC', 'DESC'],
      },
      start_time: {
        type: 'string',
        description:
          'The start time range for which you want to retrieve the meetings. The time must be specified in ISO format.',
        format: 'date-time',
      },
      status: {
        type: 'array',
        description: 'Filter by one or more recording status',
        items: {
          type: 'string',
          enum: ['INVOKED', 'RECORDING', 'UPLOADING', 'UPLOADED'],
        },
      },
    },
    required: ['account_id', 'app_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.recordings.getRecordings(app_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
