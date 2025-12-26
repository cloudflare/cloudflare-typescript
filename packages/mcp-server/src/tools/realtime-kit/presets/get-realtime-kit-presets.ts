// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.presets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/presets',
  operationId: 'get-presets',
};

export const tool: Tool = {
  name: 'get_realtime_kit_presets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches all the presets belonging to an App.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/preset_get_response',\n  $defs: {\n    preset_get_response: {\n      type: 'object',\n      title: 'PagingResponse',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'PresetListItem',\n            description: 'Returned by Get All Presets route',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'ID of the preset'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Timestamp this preset was created at',\n                format: 'date-time'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the preset'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Timestamp this preset was last updated',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        paging: {\n          type: 'object',\n          properties: {\n            end_offset: {\n              type: 'number'\n            },\n            start_offset: {\n              type: 'number'\n            },\n            total_count: {\n              type: 'number'\n            }\n          },\n          required: [            'end_offset',\n            'start_offset',\n            'total_count'\n          ]\n        },\n        success: {\n          type: 'boolean'\n        }\n      },\n      required: [        'data',\n        'paging',\n        'success'\n      ]\n    }\n  }\n}\n```",
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
      page_no: {
        type: 'number',
        description: 'The page number from which you want your page search results to be displayed.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
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
      await maybeFilter(jq_filter, await client.realtimeKit.presets.get(app_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
