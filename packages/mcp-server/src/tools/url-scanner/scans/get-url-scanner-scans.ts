// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/urlscanner/v2/result/{scan_id}',
  operationId: 'urlscanner-get-scan-v2',
};

export const tool: Tool = {
  name: 'get_url_scanner_scans',
  description: 'Get URL scan by uuid',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      scan_id: {
        type: 'string',
        description: 'Scan UUID.',
      },
    },
    required: ['account_id', 'scan_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { scan_id, ...body } = args as any;
  return asTextContentResult(await client.urlScanner.scans.get(scan_id, body));
};

export default { metadata, tool, handler };
