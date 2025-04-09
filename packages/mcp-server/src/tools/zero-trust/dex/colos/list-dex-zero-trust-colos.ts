// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.colos',
  operation: 'read',
  tags: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dex.colos.list(body);
};

export default { metadata, tool, handler };
