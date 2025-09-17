// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.logging',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/gateway/logging',
  operationId: 'zero-trust-accounts-update-logging-settings-for-the-zero-trust-account',
};

export const tool: Tool = {
  name: 'update_gateway_zero_trust_logging',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate logging settings for the current Zero Trust account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicate whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/logging_setting'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    logging_setting: {\n      type: 'object',\n      properties: {\n        redact_pii: {\n          type: 'boolean',\n          description: 'Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).'\n        },\n        settings_by_rule_type: {\n          type: 'object',\n          description: 'Configure logging settings for each rule type.',\n          properties: {\n            dns: {\n              type: 'object',\n              description: 'Configure logging settings for DNS firewall.',\n              properties: {\n                log_all: {\n                  type: 'boolean',\n                  description: 'Specify whether to log all requests to this service.'\n                },\n                log_blocks: {\n                  type: 'boolean',\n                  description: 'Specify whether to log only blocking requests to this service.'\n                }\n              }\n            },\n            http: {\n              type: 'object',\n              description: 'Configure logging settings for HTTP/HTTPS firewall.',\n              properties: {\n                log_all: {\n                  type: 'boolean',\n                  description: 'Specify whether to log all requests to this service.'\n                },\n                log_blocks: {\n                  type: 'boolean',\n                  description: 'Specify whether to log only blocking requests to this service.'\n                }\n              }\n            },\n            l4: {\n              type: 'object',\n              description: 'Configure logging settings for Network firewall.',\n              properties: {\n                log_all: {\n                  type: 'boolean',\n                  description: 'Specify whether to log all requests to this service.'\n                },\n                log_blocks: {\n                  type: 'boolean',\n                  description: 'Specify whether to log only blocking requests to this service.'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      redact_pii: {
        type: 'boolean',
        description:
          'Indicate whether to redact personally identifiable information from activity logging (PII fields include source IP, user email, user ID, device ID, URL, referrer, and user agent).',
      },
      settings_by_rule_type: {
        type: 'object',
        description: 'Configure logging settings for each rule type.',
        properties: {
          dns: {
            type: 'object',
            description: 'Configure logging settings for DNS firewall.',
            properties: {
              log_all: {
                type: 'boolean',
                description: 'Specify whether to log all requests to this service.',
              },
              log_blocks: {
                type: 'boolean',
                description: 'Specify whether to log only blocking requests to this service.',
              },
            },
          },
          http: {
            type: 'object',
            description: 'Configure logging settings for HTTP/HTTPS firewall.',
            properties: {
              log_all: {
                type: 'boolean',
                description: 'Specify whether to log all requests to this service.',
              },
              log_blocks: {
                type: 'boolean',
                description: 'Specify whether to log only blocking requests to this service.',
              },
            },
          },
          l4: {
            type: 'object',
            description: 'Configure logging settings for Network firewall.',
            properties: {
              log_all: {
                type: 'boolean',
                description: 'Specify whether to log all requests to this service.',
              },
              log_blocks: {
                type: 'boolean',
                description: 'Specify whether to log only blocking requests to this service.',
              },
            },
          },
        },
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
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.gateway.logging.update(body)),
  );
};

export default { metadata, tool, handler };
