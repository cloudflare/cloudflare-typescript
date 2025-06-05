// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'healthchecks.previews',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/healthchecks/preview/{healthcheck_id}',
  operationId: 'health-checks-delete-preview-health-check',
};

export const tool: Tool = {
  name: 'delete_healthchecks_previews',
  description: 'Delete a health check.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      healthcheck_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { healthcheck_id, ...body } = args as any;
  return asTextContentResult(await client.healthchecks.previews.delete(healthcheck_id, body));
};

export default { metadata, tool, handler };
