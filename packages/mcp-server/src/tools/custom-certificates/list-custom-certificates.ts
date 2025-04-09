// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_custom_certificates',
  description:
    "List, search, and filter all of your custom SSL certificates. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      match: {
        type: 'string',
        description: 'Whether to match all search requirements or at least one (any).',
        enum: ['any', 'all'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of zones per page.',
      },
      status: {
        type: 'string',
        description: "Status of the zone's custom SSL.",
        enum: ['active', 'expired', 'deleted', 'pending', 'initializing'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customCertificates.list(body);
};

export default { metadata, tool, handler };
