// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/stream/live_inputs',
  operationId: 'stream-live-inputs-list-live-inputs',
};

export const tool: Tool = {
  name: 'list_stream_live_inputs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists the live inputs created for an account. To get the credentials needed to stream to a specific live input, request a single live input.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/live_input_list_response',\n  $defs: {\n    live_input_list_response: {\n      type: 'object',\n      properties: {\n        liveInputs: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              created: {\n                type: 'string',\n                description: 'The date and time the live input was created.',\n                format: 'date-time'\n              },\n              deleteRecordingAfterDays: {\n                type: 'number',\n                description: 'Indicates the number of days after which the live inputs recordings will be deleted. When a stream completes and the recording is ready, the value is used to calculate a scheduled deletion date for that recording. Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion.'\n              },\n              meta: {\n                type: 'object',\n                description: 'A user modifiable key-value store used to reference other systems of record for managing live inputs.',\n                additionalProperties: true\n              },\n              modified: {\n                type: 'string',\n                description: 'The date and time the live input was last modified.',\n                format: 'date-time'\n              },\n              uid: {\n                type: 'string',\n                description: 'A unique identifier for a live input.'\n              }\n            }\n          }\n        },\n        range: {\n          type: 'integer',\n          description: 'The total number of remaining live inputs based on cursor position.'\n        },\n        total: {\n          type: 'integer',\n          description: 'The total number of live inputs that match the provided filters.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      include_counts: {
        type: 'boolean',
        description: 'Includes the total number of videos associated with the submitted query parameters.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.stream.liveInputs.list(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
