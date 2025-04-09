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
  name: 'rotate_secret_turnstile_widgets',
  description:
    'Generate a new secret key for this widget. If `invalidate_immediately`\nis set to `false`, the previous secret remains valid for 2 hours.\n\nNote that secrets cannot be rotated again during the grace period.\n',
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
      invalidate_immediately: {
        type: 'boolean',
        description:
          'If `invalidate_immediately` is set to `false`, the previous secret will\nremain valid for two hours. Otherwise, the secret is immediately\ninvalidated, and requests using it will be rejected.\n',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { sitekey, ...body } = args;
  return client.turnstile.widgets.rotateSecret(sitekey, body);
};

export default { metadata, tool, handler };
