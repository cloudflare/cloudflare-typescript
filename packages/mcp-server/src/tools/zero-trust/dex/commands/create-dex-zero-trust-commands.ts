// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dex/commands',
  operationId: 'post-commands',
};

export const tool: Tool = {
  name: 'create_dex_zero_trust_commands',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiate commands for up to 10 devices per account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        commands: {\n          type: 'array',\n          description: 'List of created commands',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the command'\n              },\n              args: {\n                type: 'object',\n                description: 'Command arguments'\n              },\n              device_id: {\n                type: 'string',\n                description: 'Identifier for the device associated with the command'\n              },\n              status: {\n                type: 'string',\n                description: 'Current status of the command',\n                enum: [                  'PENDING_EXEC',\n                  'PENDING_UPLOAD',\n                  'SUCCESS',\n                  'FAILED'\n                ]\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the command (e.g., \"pcap\" or \"warp-diag\")'\n              }\n            }\n          }\n        }\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      commands: {
        type: 'array',
        description: 'List of device-level commands to execute',
        items: {
          type: 'object',
          properties: {
            command_type: {
              type: 'string',
              description: 'Type of command to execute on the device',
              enum: ['pcap', 'warp-diag'],
            },
            device_id: {
              type: 'string',
              description: 'Unique identifier for the device',
            },
            user_email: {
              type: 'string',
              description: 'Email tied to the device',
            },
            command_args: {
              type: 'object',
              properties: {
                interfaces: {
                  type: 'array',
                  description: 'List of interfaces to capture packets on',
                  items: {
                    type: 'string',
                    enum: ['default', 'tunnel'],
                  },
                },
                'max-file-size-mb': {
                  type: 'number',
                  description:
                    'Maximum file size (in MB) for the capture file. Specifies the maximum file size of the warp-diag zip artifact that can be uploaded. If the zip artifact exceeds the specified max file size, it will NOT be uploaded',
                },
                'packet-size-bytes': {
                  type: 'number',
                  description: 'Maximum number of bytes to save for each packet',
                },
                'test-all-routes': {
                  type: 'boolean',
                  description:
                    "Test an IP address from all included or excluded ranges. Tests an IP address from all included or excluded ranges. Essentially the same as running 'route get <ip>'' and collecting the results. This option may increase the time taken to collect the warp-diag",
                },
                'time-limit-min': {
                  type: 'number',
                  description: 'Limit on capture duration (in minutes)',
                },
              },
            },
          },
          required: ['command_type', 'device_id', 'user_email'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'commands'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.zeroTrust.dex.commands.create(body)));
};

export default { metadata, tool, handler };
