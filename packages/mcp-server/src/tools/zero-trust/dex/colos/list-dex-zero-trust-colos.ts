// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.colos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/colos',
  operationId: 'dex-endpoints-list-colos',
};

export const tool: Tool = {
  name: 'list_dex_zero_trust_colos',
  description:
    "List Cloudflare colos that account's devices were connected to during a time period, sorted by usage starting from the most used colo. Colos without traffic are also returned and sorted alphabetically.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Start time for connection period in ISO (RFC3339 - ISO 8601) format',
      },
      to: {
        type: 'string',
        description: 'End time for connection period in ISO (RFC3339 - ISO 8601) format',
      },
      sortBy: {
        type: 'string',
        description:
          'Type of usage that colos should be sorted by. If unspecified, returns all Cloudflare colos sorted alphabetically.',
        enum: ['fleet-status-usage', 'application-tests-usage'],
      },
    },
    required: ['account_id', 'from', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.zeroTrust.dex.colos.list(body)) as object);
};

export default { metadata, tool, handler };
