// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.loa_documents',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_addressing_loa_documents',
  description: 'Submit LOA document (pdf format) under the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      loa_document: {
        type: 'string',
        description: 'LOA document to upload.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.addressing.loaDocuments.create(body);
};

export default { metadata, tool, handler };
