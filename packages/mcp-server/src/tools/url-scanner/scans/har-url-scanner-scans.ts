// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/urlscanner/v2/har/{scan_id}',
  operationId: 'urlscanner-get-scan-har-v2',
};

export const tool: Tool = {
  name: 'har_url_scanner_scans',
  description: "Get a URL scan's HAR file. See HAR spec at http://www.softwareishard.com/blog/har-12-spec/.",
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { scan_id, ...body } = args as any;
  return client.urlScanner.scans.har(scan_id, body);
};

export default { metadata, tool, handler };
