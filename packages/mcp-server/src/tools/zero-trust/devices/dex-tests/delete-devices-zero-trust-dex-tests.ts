// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.dex_tests',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}',
  operationId: 'device-dex-test-delete-device-dex-test',
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
        description: 'API Resource UUID tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dex_test_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.devices.dexTests.delete(dex_test_id, body));
};

export default { metadata, tool, handler };
