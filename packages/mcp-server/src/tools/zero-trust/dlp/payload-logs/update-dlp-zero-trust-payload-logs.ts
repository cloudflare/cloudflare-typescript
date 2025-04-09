// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.payload_logs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_dlp_zero_trust_payload_logs',
  description: 'Set payload log settings',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      public_key: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.payloadLogs.update(body);
};

export default { metadata, tool, handler };
