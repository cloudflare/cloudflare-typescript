// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'dom_url_scanner_scans',
  description: "Returns a plain text response, with the scan's DOM content as rendered by Chrome.",
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

export const handler = (client: Cloudflare, args: any) => {
  const { scan_id, ...body } = args;
  return client.urlScanner.scans.dom(scan_id, body);
};

export default { metadata, tool, handler };
