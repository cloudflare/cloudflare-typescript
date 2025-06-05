// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/email/routing/disable',
  operationId: 'email-routing-settings-disable-email-routing',
};

export const tool: Tool = {
  name: 'disable_email_routing',
  description:
    'Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.emailRouting.disable(body));
};

export default { metadata, tool, handler };
