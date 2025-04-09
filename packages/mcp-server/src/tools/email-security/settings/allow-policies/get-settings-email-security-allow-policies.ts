// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.allow_policies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_settings_email_security_allow_policies',
  description: 'Get an email allow policy',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      policy_id: {
        type: 'integer',
        title: 'identifier',
        description: 'The unique identifier for the allow policy.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.emailSecurity.settings.allowPolicies.get(policy_id, body);
};

export default { metadata, tool, handler };
