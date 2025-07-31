// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/urlscanner/v2/screenshots/{scan_id}.png',
  operationId: 'urlscanner-get-scan-screenshot-v2',
};

export const tool: Tool = {
  name: 'screenshot_url_scanner_scans',
  description: "Get scan's screenshot by resolution (desktop/mobile/tablet).",
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
      resolution: {
        type: 'string',
        description: 'Target device type.',
        enum: ['desktop', 'mobile', 'tablet'],
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
  return asBinaryContentResult(await client.urlScanner.scans.screenshot(scan_id, body));
};

export default { metadata, tool, handler };
