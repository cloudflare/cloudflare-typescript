// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.registrations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/devices/registrations/revoke',
  operationId: 'revoke-registrations',
};

export const tool: Tool = {
  name: 'revoke_devices_zero_trust_registrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevokes a list of WARP registrations.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object'\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result_info: {\n      type: 'object',\n      description: 'V4 public API Pagination/Cursor info.',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Number of records in the response.'\n        },\n        cursor: {\n          type: 'string',\n          description: 'Opaque token to request the next set of records.'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'The limit for the number of records in the response.'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total number of records available.'\n        }\n      },\n      required: [        'count',\n        'cursor',\n        'per_page'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'array',
        description: 'A list of registration IDs to revoke.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.zeroTrust.devices.registrations.revoke(body)) as object);
};

export default { metadata, tool, handler };
