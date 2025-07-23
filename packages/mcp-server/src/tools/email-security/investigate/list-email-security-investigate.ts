// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/investigate',
  operationId: 'email_security_investigate',
};

export const tool: Tool = {
  name: 'list_email_security_investigate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns information for each email that matches the search parameter(s).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          action_log: {\n            type: 'object'\n          },\n          client_recipients: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          detection_reasons: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          is_phish_submission: {\n            type: 'boolean'\n          },\n          is_quarantined: {\n            type: 'boolean'\n          },\n          postfix_id: {\n            type: 'string',\n            title: 'postfix_id',\n            description: 'The identifier of the message.'\n          },\n          properties: {\n            type: 'object',\n            properties: {\n              allowlisted_pattern: {\n                type: 'string'\n              },\n              allowlisted_pattern_type: {\n                type: 'string',\n                enum: [                  'quarantine_release',\n                  'acceptable_sender',\n                  'allowed_sender',\n                  'allowed_recipient',\n                  'domain_similarity',\n                  'domain_recency',\n                  'managed_acceptable_sender'\n                ]\n              },\n              blocklisted_message: {\n                type: 'boolean'\n              },\n              blocklisted_pattern: {\n                type: 'string'\n              },\n              whitelisted_pattern_type: {\n                type: 'string',\n                enum: [                  'quarantine_release',\n                  'acceptable_sender',\n                  'allowed_sender',\n                  'allowed_recipient',\n                  'domain_similarity',\n                  'domain_recency',\n                  'managed_acceptable_sender'\n                ]\n              }\n            }\n          },\n          ts: {\n            type: 'string'\n          },\n          alert_id: {\n            type: 'string'\n          },\n          delivery_mode: {\n            type: 'string',\n            enum: [              'DIRECT',\n              'BCC',\n              'JOURNAL',\n              'REVIEW_SUBMISSION',\n              'DMARC_UNVERIFIED',\n              'DMARC_FAILURE_REPORT',\n              'DMARC_AGGREGATE_REPORT',\n              'THREAT_INTEL_SUBMISSION',\n              'SIMULATION_SUBMISSION',\n              'API',\n              'RETRO_SCAN'\n            ]\n          },\n          edf_hash: {\n            type: 'string'\n          },\n          final_disposition: {\n            type: 'string',\n            enum: [              'MALICIOUS',\n              'MALICIOUS-BEC',\n              'SUSPICIOUS',\n              'SPOOF',\n              'SPAM',\n              'BULK',\n              'ENCRYPTED',\n              'EXTERNAL',\n              'UNKNOWN',\n              'NONE'\n            ]\n          },\n          findings: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                detail: {\n                  type: 'string'\n                },\n                name: {\n                  type: 'string'\n                },\n                value: {\n                  type: 'string'\n                }\n              }\n            }\n          },\n          from: {\n            type: 'string'\n          },\n          from_name: {\n            type: 'string'\n          },\n          message_id: {\n            type: 'string'\n          },\n          sent_date: {\n            type: 'string'\n          },\n          subject: {\n            type: 'string'\n          },\n          threat_categories: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          to: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          to_name: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          },\n          validation: {\n            type: 'object',\n            properties: {\n              comment: {\n                type: 'string'\n              },\n              dkim: {\n                type: 'string',\n                enum: [                  'pass',\n                  'neutral',\n                  'fail',\n                  'error',\n                  'none'\n                ]\n              },\n              dmarc: {\n                type: 'string',\n                enum: [                  'pass',\n                  'neutral',\n                  'fail',\n                  'error',\n                  'none'\n                ]\n              },\n              spf: {\n                type: 'string',\n                enum: [                  'pass',\n                  'neutral',\n                  'fail',\n                  'error',\n                  'none'\n                ]\n              }\n            }\n          }\n        },\n        required: [          'id',\n          'action_log',\n          'client_recipients',\n          'detection_reasons',\n          'is_phish_submission',\n          'is_quarantined',\n          'postfix_id',\n          'properties',\n          'ts'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total results available without any search parameters'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      action_log: {
        type: 'boolean',
        description: 'Determines if the message action log is included in the response.',
      },
      alert_id: {
        type: 'string',
      },
      detections_only: {
        type: 'boolean',
        description: 'Determines if the search results will include detections or not.',
      },
      domain: {
        type: 'string',
        description: 'The sender domains the search filters by.',
      },
      end: {
        type: 'string',
        description: 'The end of the search date range.\nDefaults to `now`.',
        format: 'date-time',
      },
      final_disposition: {
        type: 'string',
        description: 'The dispositions the search filters by.',
        enum: ['MALICIOUS', 'SUSPICIOUS', 'SPOOF', 'SPAM', 'BULK', 'NONE'],
      },
      message_action: {
        type: 'string',
        description: 'The message actions the search filters by.',
        enum: ['PREVIEW', 'QUARANTINE_RELEASED', 'MOVED'],
      },
      message_id: {
        type: 'string',
      },
      metric: {
        type: 'string',
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
        description:
          'The space-delimited term used in the query. The search is case-insensitive.\n\nThe content of the following email metadata fields are searched:\n* alert_id\n* CC\n* From (envelope_from)\n* From Name\n* final_disposition\n* md5 hash (of any attachment)\n* sha1 hash (of any attachment)\n* sha256 hash (of any attachment)\n* name (of any attachment)\n* Reason\n* Received DateTime (yyyy-mm-ddThh:mm:ss)\n* Sent DateTime (yyyy-mm-ddThh:mm:ss)\n* ReplyTo\n* To (envelope_to)\n* To Name\n* Message-ID\n* smtp_helo_server_ip\n* smtp_previous_hop_ip\n* x_originating_ip\n* Subject',
      },
      recipient: {
        type: 'string',
      },
      sender: {
        type: 'string',
      },
      start: {
        type: 'string',
        description: 'The beginning of the search date range.\nDefaults to `now - 30 days`.',
        format: 'date-time',
      },
      subject: {
        type: 'string',
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
  const response = await client.emailSecurity.investigate.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
