// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_security.settings.allow_policies',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_settings_email_security_allow_policies',
  description: 'Create an email allow policy',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account Identifier',
      },
      is_acceptable_sender: {
        type: 'boolean',
        description:
          'Messages from this sender will be exempted from Spam, Spoof and Bulk dispositions.\nNote: This will not exempt messages with Malicious or Suspicious dispositions.',
      },
      is_exempt_recipient: {
        type: 'boolean',
        description: 'Messages to this recipient will bypass all detections.',
      },
      is_regex: {
        type: 'boolean',
      },
      is_trusted_sender: {
        type: 'boolean',
        description: 'Messages from this sender will bypass all detections and link following.',
      },
      pattern: {
        type: 'string',
      },
      pattern_type: {
        type: 'string',
        enum: ['EMAIL', 'DOMAIN', 'IP', 'UNKNOWN'],
      },
      verify_sender: {
        type: 'boolean',
        description:
          'Enforce DMARC, SPF or DKIM authentication.\nWhen on, Email Security only honors policies that pass authentication.',
      },
      comments: {
        type: 'string',
      },
      is_recipient: {
        type: 'boolean',
      },
      is_sender: {
        type: 'boolean',
      },
      is_spoof: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailSecurity.settings.allowPolicies.create(body);
};

export default { metadata, tool, handler };
