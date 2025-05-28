// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/slurper/jobs/abortAll',
  operationId: 'slurper-abort-all-jobs',
};

export const tool: Tool = {
  name: 'abort_all_super_slurper_r2_jobs',
  description: 'Abort all jobs',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.r2.superSlurper.jobs.abortAll(body);
};

export default { metadata, tool, handler };
