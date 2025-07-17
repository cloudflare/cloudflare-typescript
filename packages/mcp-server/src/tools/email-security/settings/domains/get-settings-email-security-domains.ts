// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.domains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email-security/settings/domains/{domain_id}',
  operationId: 'email_security_get_domain',
};

export const tool: Tool = {
  name: 'get_settings_email_security_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet an email domain\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'The unique identifier for the domain.'\n        },\n        allowed_delivery_modes: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'DIRECT',\n              'BCC',\n              'JOURNAL',\n              'API',\n              'RETRO_SCAN'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        domain: {\n          type: 'string'\n        },\n        drop_dispositions: {\n          type: 'array',\n          items: {\n            type: 'string',\n            enum: [              'MALICIOUS',\n              'MALICIOUS-BEC',\n              'SUSPICIOUS',\n              'SPOOF',\n              'SPAM',\n              'BULK',\n              'ENCRYPTED',\n              'EXTERNAL',\n              'UNKNOWN',\n              'NONE'\n            ]\n          }\n        },\n        ip_restrictions: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        last_modified: {\n          type: 'string',\n          format: 'date-time'\n        },\n        lookback_hops: {\n          type: 'integer'\n        },\n        transport: {\n          type: 'string'\n        },\n        authorization: {\n          type: 'object',\n          properties: {\n            authorized: {\n              type: 'boolean'\n            },\n            timestamp: {\n              type: 'string',\n              format: 'date-time'\n            },\n            status_message: {\n              type: 'string'\n            }\n          },\n          required: [            'authorized',\n            'timestamp'\n          ]\n        },\n        emails_processed: {\n          type: 'object',\n          properties: {\n            timestamp: {\n              type: 'string',\n              format: 'date-time'\n            },\n            total_emails_processed: {\n              type: 'integer'\n            },\n            total_emails_processed_previous: {\n              type: 'integer'\n            }\n          },\n          required: [            'timestamp',\n            'total_emails_processed',\n            'total_emails_processed_previous'\n          ]\n        },\n        folder: {\n          type: 'string',\n          enum: [            'AllItems',\n            'Inbox'\n          ]\n        },\n        inbox_provider: {\n          type: 'string',\n          enum: [            'Microsoft',\n            'Google'\n          ]\n        },\n        integration_id: {\n          type: 'string'\n        },\n        o365_tenant_id: {\n          type: 'string'\n        },\n        require_tls_inbound: {\n          type: 'boolean'\n        },\n        require_tls_outbound: {\n          type: 'boolean'\n        }\n      },\n      required: [        'id',\n        'allowed_delivery_modes',\n        'created_at',\n        'domain',\n        'drop_dispositions',\n        'ip_restrictions',\n        'last_modified',\n        'lookback_hops',\n        'transport'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      domain_id: {
        type: 'integer',
        description: 'The unique identifier for the domain.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'domain_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.emailSecurity.settings.domains.get(domain_id, body)),
  );
};

export default { metadata, tool, handler };
