// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/slurper/jobs/{job_id}',
  operationId: 'slurper-get-job',
};

export const tool: Tool = {
  name: 'get_super_slurper_r2_jobs',
  description: 'Get job details',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      job_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return client.r2.superSlurper.jobs.get(job_id, body);
};

export default { metadata, tool, handler };
