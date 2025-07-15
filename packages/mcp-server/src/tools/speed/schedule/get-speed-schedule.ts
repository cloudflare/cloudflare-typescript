// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.schedule',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/speed_api/schedule/{url}',
  operationId: 'speed-get-scheduled-test',
};

export const tool: Tool = {
  name: 'get_speed_schedule',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the test schedule for a page in a specific region.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      $ref: '#/$defs/schedule'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    schedule: {\n      type: 'object',\n      description: 'The test schedule.',\n      properties: {\n        frequency: {\n          type: 'string',\n          description: 'The frequency of the test.',\n          enum: [            'DAILY',\n            'WEEKLY'\n          ]\n        },\n        region: {\n          type: 'string',\n          description: 'A test region.',\n          enum: [            'asia-east1',\n            'asia-northeast1',\n            'asia-northeast2',\n            'asia-south1',\n            'asia-southeast1',\n            'australia-southeast1',\n            'europe-north1',\n            'europe-southwest1',\n            'europe-west1',\n            'europe-west2',\n            'europe-west3',\n            'europe-west4',\n            'europe-west8',\n            'europe-west9',\n            'me-west1',\n            'southamerica-east1',\n            'us-central1',\n            'us-east1',\n            'us-east4',\n            'us-south1',\n            'us-west1'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'A URL.'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'string',
        description: 'A URL.',
      },
      region: {
        type: 'string',
        description: 'A test region.',
        enum: [
          'asia-east1',
          'asia-northeast1',
          'asia-northeast2',
          'asia-south1',
          'asia-southeast1',
          'australia-southeast1',
          'europe-north1',
          'europe-southwest1',
          'europe-west1',
          'europe-west2',
          'europe-west3',
          'europe-west4',
          'europe-west8',
          'europe-west9',
          'me-west1',
          'southamerica-east1',
          'us-central1',
          'us-east1',
          'us-east4',
          'us-south1',
          'us-west1',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { url, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.speed.schedule.get(url, body)));
};

export default { metadata, tool, handler };
