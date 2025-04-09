// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_turnstile_widgets',
  description: 'Update the configuration of a widget.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      sitekey: {
        type: 'string',
        description: 'Widget item identifier tag.',
      },
      domains: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'Hosts as a hostname or IPv4/IPv6 address represented by strings. The\nwidget will only work on these domains, and their subdomains.\n',
        },
      },
      mode: {
        type: 'string',
        description: 'Widget Mode',
        enum: ['non-interactive', 'invisible', 'managed'],
      },
      name: {
        type: 'string',
        description:
          'Human readable widget name. Not unique. Cloudflare suggests that you\nset this to a meaningful string to make it easier to identify your\nwidget, and where it is used.\n',
      },
      bot_fight_mode: {
        type: 'boolean',
        description:
          'If bot_fight_mode is set to `true`, Cloudflare issues computationally\nexpensive challenges in response to malicious bots (ENT only).\n',
      },
      clearance_level: {
        type: 'string',
        description:
          'If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,\nthis setting can determine the clearance level to be set',
        enum: ['no_clearance', 'jschallenge', 'managed', 'interactive'],
      },
      ephemeral_id: {
        type: 'boolean',
        description: 'Return the Ephemeral ID in /siteverify (ENT only).\n',
      },
      offlabel: {
        type: 'boolean',
        description: 'Do not show any Cloudflare branding on the widget (ENT only).\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { sitekey, ...body } = args;
  return client.turnstile.widgets.update(sitekey, body);
};

export default { metadata, tool, handler };
