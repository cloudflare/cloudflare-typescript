// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}',
};

export const tool: Tool = {
  name: 'get_logpush_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets the details of a Logpush job.",
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
    required: ['job_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return asTextContentResult(await client.logpush.jobs.get(job_id, body));
};

export default { metadata, tool, handler };
