// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.submissions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/submissions',
  operationId: 'email_security_submissions',
};

export const tool: Tool = {
  name: 'list_email_security_submissions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint returns information for submissions to made to reclassify emails.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          requested_ts: {\n            type: 'string',\n            format: 'date-time'\n          },\n          submission_id: {\n            type: 'string'\n          },\n          original_disposition: {\n            type: 'string',\n            enum: [              'MALICIOUS',\n              'MALICIOUS-BEC',\n              'SUSPICIOUS',\n              'SPOOF',\n              'SPAM',\n              'BULK',\n              'ENCRYPTED',\n              'EXTERNAL',\n              'UNKNOWN',\n              'NONE'\n            ]\n          },\n          original_edf_hash: {\n            type: 'string'\n          },\n          outcome: {\n            type: 'string'\n          },\n          outcome_disposition: {\n            type: 'string',\n            enum: [              'MALICIOUS',\n              'MALICIOUS-BEC',\n              'SUSPICIOUS',\n              'SPOOF',\n              'SPAM',\n              'BULK',\n              'ENCRYPTED',\n              'EXTERNAL',\n              'UNKNOWN',\n              'NONE'\n            ]\n          },\n          requested_by: {\n            type: 'string'\n          },\n          requested_disposition: {\n            type: 'string',\n            enum: [              'MALICIOUS',\n              'MALICIOUS-BEC',\n              'SUSPICIOUS',\n              'SPOOF',\n              'SPAM',\n              'BULK',\n              'ENCRYPTED',\n              'EXTERNAL',\n              'UNKNOWN',\n              'NONE'\n            ]\n          },\n          status: {\n            type: 'string'\n          },\n          subject: {\n            type: 'string'\n          },\n          type: {\n            type: 'string'\n          }\n        },\n        required: [          'requested_ts',\n          'submission_id'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      end: {
        type: 'string',
        description: 'The end of the search date range.\nDefaults to `now`.',
        format: 'date-time',
      },
      original_disposition: {
        type: 'string',
        enum: ['MALICIOUS', 'SUSPICIOUS', 'SPOOF', 'SPAM', 'BULK', 'NONE'],
      },
      outcome_disposition: {
        type: 'string',
        enum: ['MALICIOUS', 'SUSPICIOUS', 'SPOOF', 'SPAM', 'BULK', 'NONE'],
      },
      page: {
        type: 'integer',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'The number of results per page.',
      },
      query: {
        type: 'string',
      },
      requested_disposition: {
        type: 'string',
        enum: ['MALICIOUS', 'SUSPICIOUS', 'SPOOF', 'SPAM', 'BULK', 'NONE'],
      },
      start: {
        type: 'string',
        description: 'The beginning of the search date range.\nDefaults to `now - 30 days`.',
        format: 'date-time',
      },
      submission_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['TEAM', 'USER'],
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.emailSecurity.submissions.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
