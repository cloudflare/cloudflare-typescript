// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'alerting.silences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/alerting/v3/silences/{silence_id}',
  operationId: 'notification-silences-get-silence',
};

export const tool: Tool = {
  name: 'get_alerting_silences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets a specific silence for an account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/silence_get_response',\n  $defs: {\n    silence_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Silence ID'\n        },\n        created_at: {\n          type: 'string',\n          description: 'When the silence was created.'\n        },\n        end_time: {\n          type: 'string',\n          description: 'When the silence ends.'\n        },\n        policy_id: {\n          type: 'string',\n          description: 'The unique identifier of a notification policy'\n        },\n        start_time: {\n          type: 'string',\n          description: 'When the silence starts.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the silence was modified.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account id',
      },
      silence_id: {
        type: 'string',
        description: 'Silence ID',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'silence_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { silence_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.alerting.silences.get(silence_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
