// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
  description: 'Updates logging settings for the current Zero Trust account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      redact_pii: {
        type: 'boolean',
        description:
          'Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).',
      },
      settings_by_rule_type: {
        type: 'object',
        description: 'Logging settings by rule type.',
        properties: {
          dns: {
            type: 'object',
            properties: {
              log_all: {
                type: 'boolean',
                description: 'Log all requests to this service.',
              },
              log_blocks: {
                type: 'boolean',
                description: 'Log only blocking requests to this service.',
              },
            },
            required: [],
          },
          http: {
            type: 'object',
            properties: {
              log_all: {
                type: 'boolean',
                description: 'Log all requests to this service.',
              },
              log_blocks: {
                type: 'boolean',
                description: 'Log only blocking requests to this service.',
              },
            },
            required: [],
          },
          l4: {
            type: 'object',
            properties: {
              log_all: {
                type: 'boolean',
                description: 'Log all requests to this service.',
              },
              log_blocks: {
                type: 'boolean',
                description: 'Log only blocking requests to this service.',
              },
            },
            required: [],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.logging.update(body));
};

export default { metadata, tool, handler };
