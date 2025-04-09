// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_delete_infrastructure_access_zero_trust_targets',
  description: 'Removes one or more targets.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.infrastructure.targets.bulkDelete(body);
};

export default { metadata, tool, handler };
