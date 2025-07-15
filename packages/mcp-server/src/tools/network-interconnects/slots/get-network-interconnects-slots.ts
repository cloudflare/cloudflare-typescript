// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.slots',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/slots/{slot}',
  operationId: 'get_slot',
};

export const tool: Tool = {
  name: 'get_network_interconnects_slots',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about the specified slot\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Slot ID'\n    },\n    facility: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'address',\n        'name'\n      ]\n    },\n    occupied: {\n      type: 'boolean',\n      description: 'Whether the slot is occupied or not'\n    },\n    site: {\n      type: 'string'\n    },\n    speed: {\n      type: 'string'\n    },\n    account: {\n      type: 'string',\n      description: 'Customer account tag'\n    }\n  },\n  required: [    'id',\n    'facility',\n    'occupied',\n    'site',\n    'speed'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      slot: {
        type: 'string',
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
  const { slot, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.networkInterconnects.slots.get(slot, body)),
  );
};

export default { metadata, tool, handler };
