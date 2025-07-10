// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.investigate.detections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/investigate/{postfix_id}/detections',
  operationId: 'email_security_get_message_detections',
};

export const tool: Tool = {
  name: 'get_investigate_email_security_detections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns detection details such as threat categories and sender information for non-benign messages.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        action: {\n          type: 'string'\n        },\n        attachments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              size: {\n                type: 'integer'\n              },\n              content_type: {\n                type: 'string'\n              },\n              detection: {\n                type: 'string',\n                enum: [                  'MALICIOUS',\n                  'MALICIOUS-BEC',\n                  'SUSPICIOUS',\n                  'SPOOF',\n                  'SPAM',\n                  'BULK',\n                  'ENCRYPTED',\n                  'EXTERNAL',\n                  'UNKNOWN',\n                  'NONE'\n                ]\n              },\n              encrypted: {\n                type: 'boolean'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: [              'size'\n            ]\n          }\n        },\n        headers: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              value: {\n                type: 'string'\n              }\n            },\n            required: [              'name',\n              'value'\n            ]\n          }\n        },\n        links: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              href: {\n                type: 'string'\n              },\n              text: {\n                type: 'string'\n              }\n            },\n            required: [              'href'\n            ]\n          }\n        },\n        sender_info: {\n          type: 'object',\n          properties: {\n            as_name: {\n              type: 'string',\n              description: 'The name of the autonomous system.'\n            },\n            as_number: {\n              type: 'integer',\n              description: 'The number of the autonomous system.'\n            },\n            geo: {\n              type: 'string'\n            },\n            ip: {\n              type: 'string'\n            },\n            pld: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        threat_categories: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              description: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        },\n        validation: {\n          type: 'object',\n          properties: {\n            comment: {\n              type: 'string'\n            },\n            dkim: {\n              type: 'string',\n              enum: [                'pass',\n                'neutral',\n                'fail',\n                'error',\n                'none'\n              ]\n            },\n            dmarc: {\n              type: 'string',\n              enum: [                'pass',\n                'neutral',\n                'fail',\n                'error',\n                'none'\n              ]\n            },\n            spf: {\n              type: 'string',\n              enum: [                'pass',\n                'neutral',\n                'fail',\n                'error',\n                'none'\n              ]\n            }\n          },\n          required: []\n        },\n        final_disposition: {\n          type: 'string',\n          enum: [            'MALICIOUS',\n            'MALICIOUS-BEC',\n            'SUSPICIOUS',\n            'SPOOF',\n            'SPAM',\n            'BULK',\n            'ENCRYPTED',\n            'EXTERNAL',\n            'UNKNOWN',\n            'NONE'\n          ]\n        }\n      },\n      required: [        'action',\n        'attachments',\n        'headers',\n        'links',\n        'sender_info',\n        'threat_categories',\n        'validation'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { postfix_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.emailSecurity.investigate.detections.get(postfix_id, body)),
  );
};

export default { metadata, tool, handler };
