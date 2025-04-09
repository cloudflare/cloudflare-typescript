// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_url_scanner_scans',
  description:
    'Submit a URL to scan. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      url: {
        type: 'string',
      },
      customagent: {
        type: 'string',
      },
      customHeaders: {
        type: 'object',
        description: 'Set custom headers.',
      },
      referer: {
        type: 'string',
      },
      screenshotsResolutions: {
        type: 'array',
        description: 'Take multiple screenshots targeting different device types.',
        items: {
          type: 'string',
          description: 'Device resolutions.',
          enum: ['desktop', 'mobile', 'tablet'],
        },
      },
      visibility: {
        type: 'string',
        description:
          "The option `Public` means it will be included in listings like recent scans and search results. `Unlisted` means it will not be included in the aforementioned listings, users will need to have the scan's ID to access it. A a scan will be automatically marked as unlisted if it fails, if it contains potential PII or other sensitive material.",
        enum: ['Public', 'Unlisted'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.urlScanner.scans.create(body);
};

export default { metadata, tool, handler };
