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
  httpPath: '/accounts/{account_id}/email-security/investigate/{postfix_id}',
  operationId: 'email_security_get_message',
};

export const tool: Tool = {
  name: 'get_email_security_investigate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet message details\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        action_log: {\n          type: 'object'\n        },\n        client_recipients: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        detection_reasons: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        is_phish_submission: {\n          type: 'boolean'\n        },\n        is_quarantined: {\n          type: 'boolean'\n        },\n        postfix_id: {\n          type: 'string',\n          title: 'postfix_id',\n          description: 'The identifier of the message.'\n        },\n        properties: {\n          type: 'object',\n          properties: {\n            allowlisted_pattern: {\n              type: 'string'\n            },\n            allowlisted_pattern_type: {\n              type: 'string',\n              enum: [                'quarantine_release',\n                'acceptable_sender',\n                'allowed_sender',\n                'allowed_recipient',\n                'domain_similarity',\n                'domain_recency',\n                'managed_acceptable_sender'\n              ]\n            },\n            blocklisted_message: {\n              type: 'boolean'\n            },\n            blocklisted_pattern: {\n              type: 'string'\n            },\n            whitelisted_pattern_type: {\n              type: 'string',\n              enum: [                'quarantine_release',\n                'acceptable_sender',\n                'allowed_sender',\n                'allowed_recipient',\n                'domain_similarity',\n                'domain_recency',\n                'managed_acceptable_sender'\n              ]\n            }\n          }\n        },\n        ts: {\n          type: 'string'\n        },\n        alert_id: {\n          type: 'string'\n        },\n        delivery_mode: {\n          type: 'string',\n          enum: [            'DIRECT',\n            'BCC',\n            'JOURNAL',\n            'REVIEW_SUBMISSION',\n            'DMARC_UNVERIFIED',\n            'DMARC_FAILURE_REPORT',\n            'DMARC_AGGREGATE_REPORT',\n            'THREAT_INTEL_SUBMISSION',\n            'SIMULATION_SUBMISSION',\n            'API',\n            'RETRO_SCAN'\n          ]\n        },\n        edf_hash: {\n          type: 'string'\n        },\n        final_disposition: {\n          type: 'string',\n          enum: [            'MALICIOUS',\n            'MALICIOUS-BEC',\n            'SUSPICIOUS',\n            'SPOOF',\n            'SPAM',\n            'BULK',\n            'ENCRYPTED',\n            'EXTERNAL',\n            'UNKNOWN',\n            'NONE'\n          ]\n        },\n        findings: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              detail: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              value: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        from: {\n          type: 'string'\n        },\n        from_name: {\n          type: 'string'\n        },\n        message_id: {\n          type: 'string'\n        },\n        sent_date: {\n          type: 'string'\n        },\n        subject: {\n          type: 'string'\n        },\n        threat_categories: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        to: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        to_name: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        validation: {\n          type: 'object',\n          properties: {\n            comment: {\n              type: 'string'\n            },\n            dkim: {\n              type: 'string',\n              enum: [                'pass',\n                'neutral',\n                'fail',\n                'error',\n                'none'\n              ]\n            },\n            dmarc: {\n              type: 'string',\n              enum: [                'pass',\n                'neutral',\n                'fail',\n                'error',\n                'none'\n              ]\n            },\n            spf: {\n              type: 'string',\n              enum: [                'pass',\n                'neutral',\n                'fail',\n                'error',\n                'none'\n              ]\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'action_log',\n        'client_recipients',\n        'detection_reasons',\n        'is_phish_submission',\n        'is_quarantined',\n        'postfix_id',\n        'properties',\n        'ts'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
  const { postfix_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.emailSecurity.investigate.get(postfix_id, body)),
  );
};

export default { metadata, tool, handler };
