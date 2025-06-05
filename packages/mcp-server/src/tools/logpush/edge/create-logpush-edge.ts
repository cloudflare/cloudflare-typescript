// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logpush.edge',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/logpush/edge',
  operationId: 'post-zones-zone_id-logpush-edge-jobs',
};

export const tool: Tool = {
  name: 'create_logpush_edge',
  description: 'Creates a new Instant Logs job for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      fields: {
        type: 'string',
        description: 'Comma-separated list of fields.',
      },
      filter: {
        type: 'string',
        description: 'Filters to drill down into specific events.',
      },
      sample: {
        type: 'integer',
        description:
          'The sample parameter is the sample rate of the records set by the client: "sample": 1 is 100% of records "sample": 10 is 10% and so on.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.logpush.edge.create(body));
};

export default { metadata, tool, handler };
