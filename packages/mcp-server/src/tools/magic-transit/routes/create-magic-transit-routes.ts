// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/routes',
  operationId: 'magic-static-routes-create-routes',
};

export const tool: Tool = {
  name: 'create_magic_transit_routes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        nexthop: {\n          type: 'string',\n          description: 'The next-hop IP Address for the static route.'\n        },\n        prefix: {\n          type: 'string',\n          description: 'IP Prefix in Classless Inter-Domain Routing format.'\n        },\n        priority: {\n          type: 'integer',\n          description: 'Priority of the static route.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the route was created.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional human provided description of the static route.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the route was last modified.',\n          format: 'date-time'\n        },\n        scope: {\n          $ref: '#/$defs/scope'\n        },\n        weight: {\n          type: 'integer',\n          description: 'Optional weight of the ECMP scope - if provided.'\n        }\n      },\n      required: [        'id',\n        'nexthop',\n        'prefix',\n        'priority'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    scope: {\n      type: 'object',\n      description: 'Used only for ECMP routes.',\n      properties: {\n        colo_names: {\n          type: 'array',\n          description: 'List of colo names for the ECMP scope.',\n          items: {\n            type: 'string',\n            description: 'Scope colo name.'\n          }\n        },\n        colo_regions: {\n          type: 'array',\n          description: 'List of colo regions for the ECMP scope.',\n          items: {\n            type: 'string',\n            description: 'Scope colo region.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
    required: ['account_id', 'nexthop', 'prefix', 'priority'],
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.magicTransit.routes.create(body)));
};

export default { metadata, tool, handler };
