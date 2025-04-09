// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_page_shield',
  description: 'Updates Page Shield settings.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      enabled: {
        type: 'boolean',
        description: 'When true, indicates that Page Shield is enabled.',
      },
      use_cloudflare_reporting_endpoint: {
        type: 'boolean',
        description:
          'When true, CSP reports will be sent to https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report',
      },
      use_connection_url_path: {
        type: 'boolean',
        description: 'When true, the paths associated with connections URLs will also be analyzed.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.pageShield.update(body);
};

export default { metadata, tool, handler };
