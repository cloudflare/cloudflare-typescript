// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'realtime_kit.presets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}',
  operationId: 'get-presets-preset_id',
};

export const tool: Tool = {
  name: 'get_preset_by_id_realtime_kit_presets',
  description: 'Fetches details of a preset using the provided preset ID',
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
    },
    required: ['account_id', 'app_id', 'preset_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { preset_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.realtimeKit.presets.getPresetByID(preset_id, body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
