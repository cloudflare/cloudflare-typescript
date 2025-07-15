// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'radar.entities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/radar/entities/ip',
  operationId: 'radar-get-entities-ip',
};

export const tool: Tool = {
  name: 'get_radar_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves IP address information.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        ip: {\n          type: 'object',\n          properties: {\n            asn: {\n              type: 'string'\n            },\n            asnLocation: {\n              type: 'string'\n            },\n            asnName: {\n              type: 'string'\n            },\n            asnOrgName: {\n              type: 'string'\n            },\n            ip: {\n              type: 'string'\n            },\n            ipVersion: {\n              type: 'string'\n            },\n            location: {\n              type: 'string'\n            },\n            locationName: {\n              type: 'string'\n            }\n          },\n          required: [            'asn',\n            'asnLocation',\n            'asnName',\n            'asnOrgName',\n            'ip',\n            'ipVersion',\n            'location',\n            'locationName'\n          ]\n        }\n      },\n      required: [        'ip'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ip: {
        type: 'string',
        description: 'IP address.',
      },
      format: {
        type: 'string',
        description: 'Format in which results will be returned.',
        enum: ['JSON', 'CSV'],
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
  return asTextContentResult(await maybeFilter(args, await client.radar.entities.get(body)));
};

export default { metadata, tool, handler };
