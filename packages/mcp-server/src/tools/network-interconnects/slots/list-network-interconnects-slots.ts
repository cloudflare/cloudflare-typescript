// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.slots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/slots',
  operationId: 'list_slots',
};

export const tool: Tool = {
  name: 'list_network_interconnects_slots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of all slots matching the specified parameters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Slot ID'\n          },\n          facility: {\n            type: 'object',\n            properties: {\n              address: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: [              'address',\n              'name'\n            ]\n          },\n          occupied: {\n            type: 'boolean',\n            description: 'Whether the slot is occupied or not'\n          },\n          site: {\n            type: 'string'\n          },\n          speed: {\n            type: 'string'\n          },\n          account: {\n            type: 'string',\n            description: 'Customer account tag'\n          }\n        },\n        required: [          'id',\n          'facility',\n          'occupied',\n          'site',\n          'speed'\n        ]\n      }\n    },\n    next: {\n      type: 'integer'\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      address_contains: {
        type: 'string',
        description: 'If specified, only show slots with the given text in their address field',
      },
      cursor: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
      },
      occupied: {
        type: 'boolean',
        description: 'If specified, only show slots with a specific occupied/unoccupied state',
      },
      site: {
        type: 'string',
        description: 'If specified, only show slots located at the given site',
      },
      speed: {
        type: 'string',
        description: 'If specified, only show slots that support the given speed',
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
  return asTextContentResult(await maybeFilter(args, await client.networkInterconnects.slots.list(body)));
};

export default { metadata, tool, handler };
