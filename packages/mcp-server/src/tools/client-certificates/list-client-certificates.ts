// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'client_certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_client_certificates',
  description:
    "List all of your Zone's API Shield mTLS Client Certificates by Status and/or using Pagination",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      limit: {
        type: 'integer',
        description: 'Limit to the number of records returned.',
      },
      offset: {
        type: 'integer',
        description: 'Offset the results',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of records per page.',
      },
      status: {
        type: 'string',
        description: 'Client Certitifcate Status to filter results by.',
        enum: ['all', 'active', 'pending_reactivation', 'pending_revocation', 'revoked'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.clientCertificates.list(body);
};

export default { metadata, tool, handler };
