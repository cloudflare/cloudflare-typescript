// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitor_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/monitor_groups',
  operationId: 'account-load-balancer-monitor-groups-list-monitor-groups',
};

export const tool: Tool = {
  name: 'list_load_balancers_monitor_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList configured monitor groups.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/monitor_group'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results on the current page.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        },\n        total_pages: {\n          type: 'number',\n          description: 'Total number of pages available.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    monitor_group: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the Monitor Group to use for checking the health of origins within this pool.'\n        },\n        description: {\n          type: 'string',\n          description: 'A short description of the monitor group'\n        },\n        members: {\n          type: 'array',\n          description: 'List of monitors in this group',\n          items: {\n            type: 'object',\n            properties: {\n              enabled: {\n                type: 'boolean',\n                description: 'Whether this monitor is enabled in the group'\n              },\n              monitor_id: {\n                type: 'string',\n                description: 'The ID of the Monitor to use for checking the health of origins within this pool.'\n              },\n              monitoring_only: {\n                type: 'boolean',\n                description: 'Whether this monitor is used for monitoring only (does not affect pool health)'\n              },\n              must_be_healthy: {\n                type: 'boolean',\n                description: 'Whether this monitor must be healthy for the pool to be considered healthy'\n              },\n              created_at: {\n                type: 'string',\n                description: 'The timestamp of when the monitor was added to the group',\n                format: 'date-time'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'The timestamp of when the monitor group member was last updated',\n                format: 'date-time'\n              }\n            },\n            required: [              'enabled',\n              'monitor_id',\n              'monitoring_only',\n              'must_be_healthy'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'The timestamp of when the monitor group was created',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when the monitor group was last updated',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'description',\n        'members'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.loadBalancers.monitorGroups.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
