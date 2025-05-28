// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.account_mapping',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/email/account_mapping',
  operationId: 'dlp-email-scanner-create-account-mapping',
};

export const tool: Tool = {
  name: 'create_email_dlp_zero_trust_account_mapping',
  description: 'Create mapping',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      auth_requirements: {
        anyOf: [
          {
            type: 'object',
            properties: {
              allowed_microsoft_organizations: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              type: {
                type: 'string',
                enum: ['Org'],
              },
            },
            required: ['allowed_microsoft_organizations', 'type'],
          },
          {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                enum: ['NoAuth'],
              },
            },
            required: ['type'],
          },
        ],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.dlp.email.accountMapping.create(body);
};

export default { metadata, tool, handler };
