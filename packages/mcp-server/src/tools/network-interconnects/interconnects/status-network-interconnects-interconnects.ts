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
  httpPath: '/accounts/{account_id}/cni/interconnects/{icon}/status',
  operationId: 'get_interconnect_status',
};

export const tool: Tool = {
  name: 'status_network_interconnects_interconnects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the current status of an interconnect object\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        state: {\n          type: 'string',\n          enum: [            'Pending'\n          ]\n        }\n      },\n      required: [        'state'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        state: {\n          type: 'string',\n          enum: [            'Down'\n          ]\n        },\n        reason: {\n          type: 'string',\n          description: 'Diagnostic information, if available'\n        }\n      },\n      required: [        'state'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        state: {\n          type: 'string',\n          enum: [            'Unhealthy'\n          ]\n        },\n        reason: {\n          type: 'string',\n          description: 'Diagnostic information, if available'\n        }\n      },\n      required: [        'state'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        state: {\n          type: 'string',\n          enum: [            'Healthy'\n          ]\n        }\n      },\n      required: [        'state'\n      ]\n    }\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      icon: {
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
  const { icon, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.networkInterconnects.interconnects.status(icon, body)),
  );
};

export default { metadata, tool, handler };
