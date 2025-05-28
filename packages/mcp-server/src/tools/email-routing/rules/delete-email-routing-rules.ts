// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/email/routing/rules/{rule_identifier}',
  operationId: 'email-routing-routing-rules-delete-routing-rule',
};

export const tool: Tool = {
  name: 'delete_email_routing_rules',
  description: 'Delete a specific routing rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      rule_identifier: {
        type: 'string',
        description: 'Routing rule identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_identifier, ...body } = args as any;
  return client.emailRouting.rules.delete(rule_identifier, body);
};

export default { metadata, tool, handler };
