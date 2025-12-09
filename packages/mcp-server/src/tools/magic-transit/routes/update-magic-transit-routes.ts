// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/magic/routes/{route_id}',
  operationId: 'magic-static-routes-update-route',
};

export const tool: Tool = {
  name: 'update_magic_transit_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a specific Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/route_update_response',\n  $defs: {\n    route_update_response: {\n      type: 'object',\n      properties: {\n        modified: {\n          type: 'boolean'\n        },\n        modified_route: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            },\n            nexthop: {\n              type: 'string',\n              description: 'The next-hop IP Address for the static route.'\n            },\n            prefix: {\n              type: 'string',\n              description: 'IP Prefix in Classless Inter-Domain Routing format.'\n            },\n            priority: {\n              type: 'integer',\n              description: 'Priority of the static route.'\n            },\n            created_on: {\n              type: 'string',\n              description: 'When the route was created.',\n              format: 'date-time'\n            },\n            description: {\n              type: 'string',\n              description: 'An optional human provided description of the static route.'\n            },\n            modified_on: {\n              type: 'string',\n              description: 'When the route was last modified.',\n              format: 'date-time'\n            },\n            scope: {\n              $ref: '#/$defs/scope'\n            },\n            weight: {\n              type: 'integer',\n              description: 'Optional weight of the ECMP scope - if provided.'\n            }\n          },\n          required: [            'id',\n            'nexthop',\n            'prefix',\n            'priority'\n          ]\n        }\n      }\n    },\n    scope: {\n      type: 'object',\n      description: 'Used only for ECMP routes.',\n      properties: {\n        colo_names: {\n          type: 'array',\n          description: 'List of colo names for the ECMP scope.',\n          items: {\n            type: 'string',\n            description: 'Scope colo name.'\n          }\n        },\n        colo_regions: {\n          type: 'array',\n          description: 'List of colo regions for the ECMP scope.',\n          items: {\n            type: 'string',\n            description: 'Scope colo region.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      route_id: {
        type: 'string',
        description: 'Identifier',
      },
      nexthop: {
        type: 'string',
        description: 'The next-hop IP Address for the static route.',
      },
      prefix: {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      },
      priority: {
        type: 'integer',
        description: 'Priority of the static route.',
      },
      description: {
        type: 'string',
        description: 'An optional human provided description of the static route.',
      },
      scope: {
        $ref: '#/$defs/scope',
      },
      weight: {
        type: 'integer',
        description: 'Optional weight of the ECMP scope - if provided.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'route_id', 'nexthop', 'prefix', 'priority'],
    $defs: {
      scope: {
        type: 'object',
        description: 'Used only for ECMP routes.',
        properties: {
          colo_names: {
            type: 'array',
            description: 'List of colo names for the ECMP scope.',
            items: {
              type: 'string',
              description: 'Scope colo name.',
            },
          },
          colo_regions: {
            type: 'array',
            description: 'List of colo regions for the ECMP scope.',
            items: {
              type: 'string',
              description: 'Scope colo region.',
            },
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { route_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.magicTransit.routes.update(route_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
