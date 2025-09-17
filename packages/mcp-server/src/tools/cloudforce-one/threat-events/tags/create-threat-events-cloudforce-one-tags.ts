// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/tags/create',
  operationId: 'post_TagCreate',
};

export const tool: Tool = {
  name: 'create_threat_events_cloudforce_one_tags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new tag to be used accross threat events.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    uuid: {\n      type: 'string'\n    },\n    value: {\n      type: 'string'\n    },\n    activeDuration: {\n      type: 'string'\n    },\n    actorCategory: {\n      type: 'string'\n    },\n    aliasGroupNames: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    aliasGroupNamesInternal: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    analyticPriority: {\n      type: 'number'\n    },\n    attributionConfidence: {\n      type: 'string'\n    },\n    attributionOrganization: {\n      type: 'string'\n    },\n    categoryUuid: {\n      type: 'string'\n    },\n    externalReferenceLinks: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    internalDescription: {\n      type: 'string'\n    },\n    motive: {\n      type: 'string'\n    },\n    opsecLevel: {\n      type: 'string'\n    },\n    originCountryISO: {\n      type: 'string'\n    },\n    priority: {\n      type: 'number'\n    },\n    sophisticationLevel: {\n      type: 'string'\n    }\n  },\n  required: [    'uuid',\n    'value'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      value: {
        type: 'string',
      },
      activeDuration: {
        type: 'string',
      },
      actorCategory: {
        type: 'string',
      },
      aliasGroupNames: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      aliasGroupNamesInternal: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      analyticPriority: {
        type: 'number',
      },
      attributionConfidence: {
        type: 'string',
      },
      attributionOrganization: {
        type: 'string',
      },
      categoryUuid: {
        type: 'string',
      },
      externalReferenceLinks: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      internalDescription: {
        type: 'string',
      },
      motive: {
        type: 'string',
      },
      opsecLevel: {
        type: 'string',
      },
      originCountryISO: {
        type: 'string',
      },
      priority: {
        type: 'number',
      },
      sophisticationLevel: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.cloudforceOne.threatEvents.tags.create(body)),
  );
};

export default { metadata, tool, handler };
