// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.upload',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_datasets_dlp_zero_trust_upload',
  description:
    'This is used for single-column EDMv1 and Custom Word Lists. The EDM format\ncan only be created in the Cloudflare dashboard. For other clients, this\noperation can only be used for non-secret Custom Word Lists. The body must\nbe a UTF-8 encoded, newline (NL or CRNL) separated list of words to be matched.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
      version: {
        type: 'integer',
      },
      body: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { version, ...body } = args;
  return client.zeroTrust.dlp.datasets.upload.edit(version, body);
};

export default { metadata, tool, handler };
