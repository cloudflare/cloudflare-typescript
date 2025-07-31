// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'stream.live_inputs.outputs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs',
  operationId: 'stream-live-inputs-create-a-new-output,-connected-to-a-live-input',
};

export const tool: Tool = {
  name: 'create_live_inputs_stream_outputs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new output that can be used to simulcast or restream live video to other RTMP or SRT destinations. Outputs are always linked to a specific live input — one live input can have many outputs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/output'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    output: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'When enabled, live video streamed to the associated live input will be sent to the output URL. When disabled, live video will not be sent to the output URL, even when streaming to the associated live input. Use this to control precisely when you start and stop simulcasting to specific destinations like YouTube and Twitch.'\n        },\n        streamKey: {\n          type: 'string',\n          description: 'The streamKey used to authenticate against an output\\'s target.'\n        },\n        uid: {\n          type: 'string',\n          description: 'A unique identifier for the output.'\n        },\n        url: {\n          type: 'string',\n          description: 'The URL an output uses to restream.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      live_input_identifier: {
        type: 'string',
        description: 'A unique identifier for a live input.',
      },
      streamKey: {
        type: 'string',
        description: "The streamKey used to authenticate against an output's target.",
      },
      url: {
        type: 'string',
        description: 'The URL an output uses to restream.',
      },
      enabled: {
        type: 'boolean',
        description:
          'When enabled, live video streamed to the associated live input will be sent to the output URL. When disabled, live video will not be sent to the output URL, even when streaming to the associated live input. Use this to control precisely when you start and stop simulcasting to specific destinations like YouTube and Twitch.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'live_input_identifier', 'streamKey', 'url'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { live_input_identifier, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.stream.liveInputs.outputs.create(live_input_identifier, body)),
  );
};

export default { metadata, tool, handler };
