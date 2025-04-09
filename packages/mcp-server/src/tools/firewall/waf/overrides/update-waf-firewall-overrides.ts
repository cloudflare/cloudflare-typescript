// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.overrides',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_waf_firewall_overrides',
  description:
    'Updates an existing URI-based WAF override.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      overrides_id: {
        type: 'string',
        description: 'The unique identifier of the WAF override.',
      },
      id: {
        type: 'string',
        description: 'Identifier',
      },
      rewrite_action: {
        type: 'object',
        description:
          'Specifies that, when a WAF rule matches, its configured action will be replaced by the action configured in this object.',
        properties: {
          block: {
            type: 'string',
            description: 'The WAF rule action to apply.',
            enum: ['challenge', 'block', 'simulate', 'disable', 'default'],
          },
          challenge: {
            type: 'string',
            description: 'The WAF rule action to apply.',
            enum: ['challenge', 'block', 'simulate', 'disable', 'default'],
          },
          default: {
            type: 'string',
            description: 'The WAF rule action to apply.',
            enum: ['challenge', 'block', 'simulate', 'disable', 'default'],
          },
          disable: {
            type: 'string',
            description: 'The WAF rule action to apply.',
            enum: ['challenge', 'block', 'simulate', 'disable', 'default'],
          },
          simulate: {
            type: 'string',
            description: 'The WAF rule action to apply.',
            enum: ['challenge', 'block', 'simulate', 'disable', 'default'],
          },
        },
        required: [],
      },
      rules: {
        type: 'object',
        description:
          'An object that allows you to override the action of specific WAF rules. Each key of this object must be the ID of a WAF rule, and each value must be a valid WAF action. Unless you are disabling a rule, ensure that you also enable the rule group that this WAF rule belongs to. When creating a new URI-based WAF override, you must provide a `groups` object or a `rules` object.',
      },
      urls: {
        type: 'array',
        description:
          'The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { overrides_id, ...body } = args;
  return client.firewall.waf.overrides.update(overrides_id, body);
};

export default { metadata, tool, handler };
