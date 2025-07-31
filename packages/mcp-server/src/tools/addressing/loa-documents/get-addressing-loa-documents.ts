// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.loa_documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download',
  operationId: 'ip-address-management-prefixes-download-loa-document',
};

export const tool: Tool = {
  name: 'get_addressing_loa_documents',
  description: 'Download specified LOA document under the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      loa_document_id: {
        type: 'string',
        description: 'Identifier for the uploaded LOA document.',
      },
    },
    required: ['account_id', 'loa_document_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { loa_document_id, ...body } = args as any;
  return asBinaryContentResult(await client.addressing.loaDocuments.get(loa_document_id, body));
};

export default { metadata, tool, handler };
