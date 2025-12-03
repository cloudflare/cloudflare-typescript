// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/create/bulk',
  operationId: 'post_EventCreateBulk',
};

export const tool: Tool = {
  name: 'bulk_create_cloudforce_one_threat_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/threat_event_bulk_create_response',\n  $defs: {\n    threat_event_bulk_create_response: {\n      type: 'object',\n      description: 'Detailed result of bulk event creation with auto-tag management',\n      properties: {\n        createdEventsCount: {\n          type: 'number',\n          description: 'Number of events created'\n        },\n        createdIndicatorsCount: {\n          type: 'number',\n          description: 'Number of indicators created'\n        },\n        createdTagsCount: {\n          type: 'number',\n          description: 'Number of tags created in SoT'\n        },\n        errorCount: {\n          type: 'number',\n          description: 'Number of errors encountered'\n        },\n        errors: {\n          type: 'array',\n          description: 'Array of error details',\n          items: {\n            type: 'object',\n            properties: {\n              error: {\n                type: 'string',\n                description: 'Error message'\n              },\n              eventIndex: {\n                type: 'number',\n                description: 'Index of the event that caused the error'\n              }\n            },\n            required: [              'error',\n              'eventIndex'\n            ]\n          }\n        }\n      },\n      required: [        'createdEventsCount',\n        'createdIndicatorsCount',\n        'createdTagsCount',\n        'errorCount'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      data: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
            },
            date: {
              type: 'string',
              format: 'date-time',
            },
            event: {
              type: 'string',
            },
            raw: {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  additionalProperties: true,
                },
                source: {
                  type: 'string',
                },
                tlp: {
                  type: 'string',
                },
              },
              required: ['data'],
            },
            tlp: {
              type: 'string',
            },
            accountId: {
              type: 'number',
            },
            attacker: {
              type: 'string',
            },
            attackerCountry: {
              type: 'string',
            },
            datasetId: {
              type: 'string',
            },
            indicator: {
              type: 'string',
            },
            indicators: {
              type: 'array',
              description:
                'Array of indicators for this event. Supports multiple indicators per event for complex scenarios.',
              items: {
                type: 'object',
                properties: {
                  indicatorType: {
                    type: 'string',
                    description: 'The type of indicator (e.g., DOMAIN, IP, JA3, HASH)',
                  },
                  value: {
                    type: 'string',
                    description: 'The indicator value (e.g., domain name, IP address, hash)',
                  },
                },
                required: ['indicatorType', 'value'],
              },
            },
            indicatorType: {
              type: 'string',
            },
            insight: {
              type: 'string',
            },
            tags: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
            targetCountry: {
              type: 'string',
            },
            targetIndustry: {
              type: 'string',
            },
          },
          required: ['category', 'date', 'event', 'raw', 'tlp'],
        },
      },
      datasetId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'data', 'datasetId'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.bulkCreate(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
