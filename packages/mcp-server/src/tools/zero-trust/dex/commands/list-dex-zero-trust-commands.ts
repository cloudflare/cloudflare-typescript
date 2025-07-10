// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/commands',
  operationId: 'get-commands',
};

export const tool: Tool = {
  name: 'list_dex_zero_trust_commands',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a paginated list of commands issued to devices under the specified account, optionally filtered by time range, device, or other parameters\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        commands: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              completed_date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              created_date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              device_id: {\n                type: 'string'\n              },\n              filename: {\n                type: 'string'\n              },\n              status: {\n                type: 'string'\n              },\n              type: {\n                type: 'string'\n              },\n              user_email: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: []\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'number',
        description: 'Page number for pagination',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
      },
      command_type: {
        type: 'string',
        description: 'Optionally filter executed commands by command type',
      },
      device_id: {
        type: 'string',
        description: 'Unique identifier for a device',
      },
      from: {
        type: 'string',
        description: 'Start time for the query in ISO (RFC3339 - ISO 8601) format',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Optionally filter executed commands by status',
        enum: ['PENDING_EXEC', 'PENDING_UPLOAD', 'SUCCESS', 'FAILED'],
      },
      to: {
        type: 'string',
        description: 'End time for the query in ISO (RFC3339 - ISO 8601) format',
        format: 'date-time',
      },
      user_email: {
        type: 'string',
        description: 'Email tied to the device',
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
  const response = await client.zeroTrust.dex.commands.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
