// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cni/interconnects',
  operationId: 'list_interconnects',
};

export const tool: Tool = {
  name: 'list_network_interconnects_interconnects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList existing interconnects\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        anyOf: [          {\n            type: 'object',\n            title: 'Physical',\n            properties: {\n              account: {\n                type: 'string'\n              },\n              facility: {\n                type: 'object',\n                properties: {\n                  address: {\n                    type: 'array',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'address',\n                  'name'\n                ]\n              },\n              name: {\n                type: 'string'\n              },\n              site: {\n                type: 'string',\n                description: 'A Cloudflare site name.'\n              },\n              slot_id: {\n                type: 'string'\n              },\n              speed: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              },\n              owner: {\n                type: 'string'\n              }\n            },\n            required: [              'account',\n              'facility',\n              'name',\n              'site',\n              'slot_id',\n              'speed',\n              'type'\n            ]\n          },\n          {\n            type: 'object',\n            title: 'GcpPartner',\n            properties: {\n              account: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              region: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              },\n              owner: {\n                type: 'string'\n              },\n              speed: {\n                type: 'string',\n                description: 'Bandwidth structure as visible through the customer-facing API.',\n                enum: [                  '50M',\n                  '100M',\n                  '200M',\n                  '300M',\n                  '400M',\n                  '500M',\n                  '1G',\n                  '2G',\n                  '5G',\n                  '10G',\n                  '20G',\n                  '50G'\n                ]\n              }\n            },\n            required: [              'account',\n              'name',\n              'region',\n              'type'\n            ]\n          }\n        ]\n      }\n    },\n    next: {\n      type: 'integer'\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      cursor: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
      },
      site: {
        type: 'string',
        description: 'If specified, only show interconnects located at the given site',
      },
      type: {
        type: 'string',
        description: 'If specified, only show interconnects of the given type',
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
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.networkInterconnects.interconnects.list(body)),
  );
};

export default { metadata, tool, handler };
