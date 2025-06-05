// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/slurper/jobs',
  operationId: 'slurper-list-jobs',
};

export const tool: Tool = {
  name: 'list_super_slurper_r2_jobs',
  description: 'List jobs',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      limit: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.r2.superSlurper.jobs.list(body));
};

export default { metadata, tool, handler };
