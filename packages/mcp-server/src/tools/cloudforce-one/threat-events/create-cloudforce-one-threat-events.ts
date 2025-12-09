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
  httpPath: '/accounts/{account_id}/cloudforce-one/events/create',
  operationId: 'post_EventCreate',
};

export const tool: Tool = {
  name: 'create_cloudforce_one_threat_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTo create a dataset, see the [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint. When `datasetId` parameter is unspecified, it will be created in a default dataset named `Cloudforce One Threat Events`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/threat_event_create_response',\n  $defs: {\n    threat_event_create_response: {\n      type: 'object',\n      properties: {\n        attacker: {\n          type: 'string'\n        },\n        attackerCountry: {\n          type: 'string'\n        },\n        category: {\n          type: 'string'\n        },\n        date: {\n          type: 'string'\n        },\n        event: {\n          type: 'string'\n        },\n        hasChildren: {\n          type: 'boolean'\n        },\n        indicator: {\n          type: 'string'\n        },\n        indicatorType: {\n          type: 'string'\n        },\n        indicatorTypeId: {\n          type: 'number'\n        },\n        killChain: {\n          type: 'number'\n        },\n        mitreAttack: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        numReferenced: {\n          type: 'number'\n        },\n        numReferences: {\n          type: 'number'\n        },\n        rawId: {\n          type: 'string'\n        },\n        referenced: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        referencedIds: {\n          type: 'array',\n          items: {\n            type: 'number'\n          }\n        },\n        references: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        referencesIds: {\n          type: 'array',\n          items: {\n            type: 'number'\n          }\n        },\n        tags: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        targetCountry: {\n          type: 'string'\n        },\n        targetIndustry: {\n          type: 'string'\n        },\n        tlp: {\n          type: 'string'\n        },\n        uuid: {\n          type: 'string'\n        },\n        insight: {\n          type: 'string'\n        },\n        releasabilityId: {\n          type: 'string'\n        }\n      },\n      required: [        'attacker',\n        'attackerCountry',\n        'category',\n        'date',\n        'event',\n        'hasChildren',\n        'indicator',\n        'indicatorType',\n        'indicatorTypeId',\n        'killChain',\n        'mitreAttack',\n        'numReferenced',\n        'numReferences',\n        'rawId',\n        'referenced',\n        'referencedIds',\n        'references',\n        'referencesIds',\n        'tags',\n        'targetCountry',\n        'targetIndustry',\n        'tlp',\n        'uuid'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'category', 'date', 'event', 'raw', 'tlp'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
