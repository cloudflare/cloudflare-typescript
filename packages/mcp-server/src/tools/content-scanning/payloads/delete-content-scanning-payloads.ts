// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'content_scanning.payloads',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_content_scanning_payloads',
  description: 'Delete a Content Scan Custom Expression',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      expression_id: {
        type: 'string',
        description: 'The unique ID for this custom scan expression',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { expression_id, ...body } = args;
  return client.contentScanning.payloads.delete(expression_id, body);
};

export default { metadata, tool, handler };
