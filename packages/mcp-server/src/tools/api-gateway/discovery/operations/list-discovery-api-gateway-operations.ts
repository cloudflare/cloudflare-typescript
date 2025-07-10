// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.discovery.operations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/api_gateway/discovery/operations',
  operationId: 'api-shield-api-discovery-retrieve-discovered-operations-on-a-zone',
};

export const tool: Tool = {
  name: 'list_discovery_api_gateway_operations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the most up to date view of discovered operations\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      $ref: '#/$defs/message'\n    },\n    messages: {\n      $ref: '#/$defs/message'\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/discovery_operation'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    message: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    discovery_operation: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        endpoint: {\n          type: 'string',\n          description: 'The endpoint which can contain path parameter templates in curly braces, each will be replaced from left to right with {varN}, starting with {var1}, during insertion. This will further be Cloudflare-normalized upon insertion. See: https://developers.cloudflare.com/rules/normalization/how-it-works/.'\n        },\n        host: {\n          type: 'string',\n          description: 'RFC3986-compliant host.'\n        },\n        last_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        method: {\n          type: 'string',\n          description: 'The HTTP method used to access the endpoint.',\n          enum: [            'GET',\n            'POST',\n            'HEAD',\n            'OPTIONS',\n            'PUT',\n            'DELETE',\n            'CONNECT',\n            'PATCH',\n            'TRACE'\n          ]\n        },\n        origin: {\n          type: 'array',\n          description: 'API discovery engine(s) that discovered this operation',\n          items: {\n            type: 'string',\n            description: '* `ML` - Discovered operation was sourced using ML API Discovery * `SessionIdentifier` - Discovered operation was sourced using Session Identifier API Discovery * `LabelDiscovery` - Discovered operation was identified to have a specific label',\n            enum: [              'ML',\n              'SessionIdentifier',\n              'LabelDiscovery'\n            ]\n          }\n        },\n        state: {\n          type: 'string',\n          description: 'State of operation in API Discovery\\n  * `review` - Operation is not saved into API Shield Endpoint Management\\n  * `saved` - Operation is saved into API Shield Endpoint Management\\n  * `ignored` - Operation is marked as ignored',\n          enum: [            'review',\n            'saved',\n            'ignored'\n          ]\n        },\n        features: {\n          type: 'object',\n          properties: {\n            traffic_stats: {\n              type: 'object',\n              properties: {\n                last_updated: {\n                  type: 'string',\n                  format: 'date-time'\n                },\n                period_seconds: {\n                  type: 'integer',\n                  description: 'The period in seconds these statistics were computed over'\n                },\n                requests: {\n                  type: 'number',\n                  description: 'The average number of requests seen during this period'\n                }\n              },\n              required: [                'last_updated',\n                'period_seconds',\n                'requests'\n              ]\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'endpoint',\n        'host',\n        'last_updated',\n        'method',\n        'origin',\n        'state'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      diff: {
        type: 'boolean',
        description:
          'When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management',
      },
      direction: {
        type: 'string',
        description: 'Direction to order results.',
        enum: ['asc', 'desc'],
      },
      endpoint: {
        type: 'string',
        description: 'Filter results to only include endpoints containing this pattern.',
      },
      host: {
        type: 'array',
        description: 'Filter results to only include the specified hosts.',
        items: {
          type: 'string',
        },
      },
      method: {
        type: 'array',
        description: 'Filter results to only include the specified HTTP methods.',
        items: {
          type: 'string',
        },
      },
      order: {
        type: 'string',
        description: 'Field to order by',
        enum: ['host', 'method', 'endpoint', 'traffic_stats.requests', 'traffic_stats.last_updated'],
      },
      origin: {
        type: 'string',
        description:
          'Filter results to only include discovery results sourced from a particular discovery engine\n  * `ML` - Discovered operations that were sourced using ML API Discovery\n  * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery',
        enum: ['ML', 'SessionIdentifier', 'LabelDiscovery'],
      },
      page: {
        type: 'integer',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of results per page.',
      },
      state: {
        type: 'string',
        description:
          'Filter results to only include discovery results in a particular state. States are as follows\n  * `review` - Discovered operations that are not saved into API Shield Endpoint Management\n  * `saved` - Discovered operations that are already saved into API Shield Endpoint Management\n  * `ignored` - Discovered operations that have been marked as ignored',
        enum: ['review', 'saved', 'ignored'],
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
  const body = args as any;
  const response = await client.apiGateway.discovery.operations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
