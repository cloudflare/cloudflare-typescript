// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/priority/new',
  operationId: 'cloudforce-one-priority-new',
};

export const tool: Tool = {
  name: 'create_requests_cloudforce_one_priority',
  description: 'Create a New Priority Intelligence Requirement',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      labels: {
        type: 'array',
        title: 'Labels',
        description: 'List of labels.',
        items: {
          $ref: '#/$defs/label',
        },
      },
      priority: {
        type: 'integer',
        description: 'Priority.',
      },
      requirement: {
        type: 'string',
        description: 'Requirement.',
      },
      tlp: {
        type: 'string',
        title: 'TLP',
        description: 'The CISA defined Traffic Light Protocol (TLP).',
        enum: ['clear', 'amber', 'amber-strict', 'green', 'red'],
      },
    },
    $defs: {
      label: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.cloudforceOne.requests.priority.create(body));
};

export default { metadata, tool, handler };
