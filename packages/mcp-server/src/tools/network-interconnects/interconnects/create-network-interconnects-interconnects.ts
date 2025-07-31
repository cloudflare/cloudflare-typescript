// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cni/interconnects',
  operationId: 'create_interconnect',
};

export const tool: Tool = {
  name: 'create_network_interconnects_interconnects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new interconnect\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      title: 'Physical',\n      properties: {\n        account: {\n          type: 'string'\n        },\n        facility: {\n          type: 'object',\n          properties: {\n            address: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: [            'address',\n            'name'\n          ]\n        },\n        name: {\n          type: 'string'\n        },\n        site: {\n          type: 'string',\n          description: 'A Cloudflare site name.'\n        },\n        slot_id: {\n          type: 'string'\n        },\n        speed: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        },\n        owner: {\n          type: 'string'\n        }\n      },\n      required: [        'account',\n        'facility',\n        'name',\n        'site',\n        'slot_id',\n        'speed',\n        'type'\n      ]\n    },\n    {\n      type: 'object',\n      title: 'GcpPartner',\n      properties: {\n        account: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        region: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        },\n        owner: {\n          type: 'string'\n        },\n        speed: {\n          type: 'string',\n          description: 'Bandwidth structure as visible through the customer-facing API.',\n          enum: [            '50M',\n            '100M',\n            '200M',\n            '300M',\n            '400M',\n            '500M',\n            '1G',\n            '2G',\n            '5G',\n            '10G',\n            '20G',\n            '50G'\n          ]\n        }\n      },\n      required: [        'account',\n        'name',\n        'region',\n        'type'\n      ]\n    }\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Customer account tag',
          },
          account: {
            type: 'string',
          },
          slot_id: {
            type: 'string',
          },
          type: {
            type: 'string',
          },
          speed: {
            type: 'string',
          },
        },
        required: ['account_id', 'account', 'slot_id', 'type'],
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Customer account tag',
          },
          account: {
            type: 'string',
          },
          bandwidth: {
            type: 'string',
            description: 'Bandwidth structure as visible through the customer-facing API.',
            enum: ['50M', '100M', '200M', '300M', '400M', '500M', '1G', '2G', '5G', '10G', '20G', '50G'],
          },
          pairing_key: {
            type: 'string',
            description: 'Pairing key provided by GCP',
          },
          type: {
            type: 'string',
          },
        },
        required: ['account_id', 'account', 'bandwidth', 'pairing_key', 'type'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.networkInterconnects.interconnects.create(body)),
  );
};

export default { metadata, tool, handler };
