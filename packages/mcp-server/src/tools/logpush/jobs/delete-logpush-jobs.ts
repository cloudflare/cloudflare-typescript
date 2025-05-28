// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.jobs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}',
};

export const tool: Tool = {
  name: 'delete_logpush_jobs',
  description: 'Deletes a Logpush job.',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'integer',
        description: 'Unique id of the job.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return client.logpush.jobs.delete(job_id, body);
};

export default { metadata, tool, handler };
