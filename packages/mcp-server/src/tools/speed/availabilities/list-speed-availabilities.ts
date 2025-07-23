// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.availabilities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/speed_api/availabilities',
  operationId: 'speed-get-availabilities',
};

export const tool: Tool = {
  name: 'list_speed_availabilities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves quota for all plans, as well as the current zone quota.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      $ref: '#/$defs/availability'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    availability: {\n      type: 'object',\n      properties: {\n        quota: {\n          type: 'object',\n          properties: {\n            plan: {\n              type: 'string',\n              description: 'Cloudflare plan.'\n            },\n            quotasPerPlan: {\n              type: 'object',\n              description: 'The number of tests available per plan.',\n              properties: {\n                value: {\n                  type: 'object',\n                  description: 'Counts per account plan.',\n                  properties: {\n                    business: {\n                      type: 'integer'\n                    },\n                    enterprise: {\n                      type: 'integer'\n                    },\n                    free: {\n                      type: 'integer'\n                    },\n                    pro: {\n                      type: 'integer'\n                    }\n                  }\n                }\n              }\n            },\n            remainingSchedules: {\n              type: 'number',\n              description: 'The number of remaining schedules available.'\n            },\n            remainingTests: {\n              type: 'number',\n              description: 'The number of remaining tests available.'\n            },\n            scheduleQuotasPerPlan: {\n              type: 'object',\n              description: 'The number of schedules available per plan.',\n              properties: {\n                value: {\n                  type: 'object',\n                  description: 'Counts per account plan.',\n                  properties: {\n                    business: {\n                      type: 'integer'\n                    },\n                    enterprise: {\n                      type: 'integer'\n                    },\n                    free: {\n                      type: 'integer'\n                    },\n                    pro: {\n                      type: 'integer'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        },\n        regions: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/labeled_region'\n          }\n        },\n        regionsPerPlan: {\n          type: 'object',\n          description: 'Available regions.',\n          properties: {\n            business: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/labeled_region'\n              }\n            },\n            enterprise: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/labeled_region'\n              }\n            },\n            free: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/labeled_region'\n              }\n            },\n            pro: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/labeled_region'\n              }\n            }\n          }\n        }\n      }\n    },\n    labeled_region: {\n      type: 'object',\n      description: 'A test region with a label.',\n      properties: {\n        label: {\n          type: 'string'\n        },\n        value: {\n          type: 'string',\n          description: 'A test region.',\n          enum: [            'asia-east1',\n            'asia-northeast1',\n            'asia-northeast2',\n            'asia-south1',\n            'asia-southeast1',\n            'australia-southeast1',\n            'europe-north1',\n            'europe-southwest1',\n            'europe-west1',\n            'europe-west2',\n            'europe-west3',\n            'europe-west4',\n            'europe-west8',\n            'europe-west9',\n            'me-west1',\n            'southamerica-east1',\n            'us-central1',\n            'us-east1',\n            'us-east4',\n            'us-south1',\n            'us-west1'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.speed.availabilities.list(body)));
};

export default { metadata, tool, handler };
