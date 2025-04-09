// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.dex_tests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_devices_zero_trust_dex_tests',
  description: 'Delete a Device DEX test. Returns the remaining device dex tests for the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dex_test_id: {
        type: 'string',
        description: 'API UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dex_test_id, ...body } = args;
  return client.zeroTrust.devices.dexTests.delete(dex_test_id, body);
};

export default { metadata, tool, handler };
