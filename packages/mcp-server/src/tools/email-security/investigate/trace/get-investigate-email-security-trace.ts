// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.trace',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/investigate/{postfix_id}/trace',
  operationId: 'email_security_get_message_trace',
};

export const tool: Tool = {
  name: 'get_investigate_email_security_trace',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet email trace\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/trace_get_response',\n  $defs: {\n    trace_get_response: {\n      type: 'object',\n      properties: {\n        inbound: {\n          type: 'object',\n          properties: {\n            lines: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  lineno: {\n                    type: 'integer'\n                  },\n                  message: {\n                    type: 'string'\n                  },\n                  ts: {\n                    type: 'string',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'lineno',\n                  'message',\n                  'ts'\n                ]\n              }\n            },\n            pending: {\n              type: 'boolean'\n            }\n          }\n        },\n        outbound: {\n          type: 'object',\n          properties: {\n            lines: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  lineno: {\n                    type: 'integer'\n                  },\n                  message: {\n                    type: 'string'\n                  },\n                  ts: {\n                    type: 'string',\n                    format: 'date-time'\n                  }\n                },\n                required: [                  'lineno',\n                  'message',\n                  'ts'\n                ]\n              }\n            },\n            pending: {\n              type: 'boolean'\n            }\n          }\n        }\n      },\n      required: [        'inbound',\n        'outbound'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      postfix_id: {
        type: 'string',
        title: 'postfix_id',
        description: 'The identifier of the message.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'postfix_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { postfix_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.emailSecurity.investigate.trace.get(postfix_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
