// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.super_slurper.connectivity_precheck',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'target_super_slurper_r2_connectivity_precheck',
  description: 'Check whether tokens are valid against the target bucket',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      bucket: {
        type: 'string',
      },
      jurisdiction: {
        type: 'string',
        enum: ['default', 'eu', 'fedramp'],
      },
      secret: {
        type: 'object',
        properties: {
          accessKeyId: {
            type: 'string',
          },
          secretAccessKey: {
            type: 'string',
          },
        },
        required: [],
      },
      vendor: {
        type: 'string',
        enum: ['r2'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.r2.superSlurper.connectivityPrecheck.target(body);
};

export default { metadata, tool, handler };
