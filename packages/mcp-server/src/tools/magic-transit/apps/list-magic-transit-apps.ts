// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.apps',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/apps',
  operationId: 'magic-account-apps-list-apps',
};

export const tool: Tool = {
  name: 'list_magic_transit_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists Apps associated with an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        anyOf: [          {\n            type: 'object',\n            title: 'Account App',\n            description: 'Custom app defined for an account.',\n            properties: {\n              account_app_id: {\n                type: 'string',\n                description: 'Magic account app ID.'\n              },\n              hostnames: {\n                type: 'array',\n                description: 'FQDNs to associate with traffic decisions.',\n                items: {\n                  type: 'string'\n                }\n              },\n              ip_subnets: {\n                type: 'array',\n                description: 'IPv4 CIDRs to associate with traffic decisions. (IPv6 CIDRs are currently unsupported)',\n                items: {\n                  type: 'string',\n                  description: 'A valid CIDR notation representing an IP range.'\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Display name for the app.'\n              },\n              type: {\n                type: 'string',\n                description: 'Category of the app.'\n              }\n            },\n            required: [              'account_app_id'\n            ]\n          },\n          {\n            type: 'object',\n            title: 'Managed App',\n            description: 'Managed app defined by Cloudflare.',\n            properties: {\n              managed_app_id: {\n                type: 'string',\n                description: 'Managed app ID.'\n              },\n              hostnames: {\n                type: 'array',\n                description: 'FQDNs to associate with traffic decisions.',\n                items: {\n                  type: 'string'\n                }\n              },\n              ip_subnets: {\n                type: 'array',\n                description: 'IPv4 CIDRs to associate with traffic decisions. (IPv6 CIDRs are currently unsupported)',\n                items: {\n                  type: 'string',\n                  description: 'A valid CIDR notation representing an IP range.'\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'Display name for the app.'\n              },\n              type: {\n                type: 'string',\n                description: 'Category of the app.'\n              }\n            },\n            required: [              'managed_app_id'\n            ]\n          }\n        ],\n        description: 'Collection of Hostnames and/or IP Subnets to associate with traffic decisions.'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
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
  const response = await client.magicTransit.apps.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
