// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_requests_cloudforce_one_priority',
  description: 'Get a Priority Intelligence Requirement',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      priority_identifer: {
        type: 'string',
        description: 'UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { priority_identifer, ...body } = args;
  return client.cloudforceOne.requests.priority.get(priority_identifer, body);
};

export default { metadata, tool, handler };
