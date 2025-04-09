// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.jobs.logs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_jobs_super_slurper_r2_logs',
  description: 'Get job logs',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      job_id: {
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

export const handler = (client: Cloudflare, args: any) => {
  const { job_id, ...body } = args;
  return client.r2.superSlurper.jobs.logs.list(job_id, body);
};

export default { metadata, tool, handler };
