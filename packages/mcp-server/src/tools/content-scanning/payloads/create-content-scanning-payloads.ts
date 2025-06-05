// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'content_scanning.payloads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/content-upload-scan/payloads',
  operationId: 'waf-content-scanning-add-custom-scan-expressions',
};

export const tool: Tool = {
  name: 'create_content_scanning_payloads',
  description: 'Add custom scan expressions for Content Scanning.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            payload: {
              type: 'string',
              description: 'Defines the ruleset expression to use in matching content objects.',
            },
          },
          required: ['payload'],
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.contentScanning.payloads.create(body));
};

export default { metadata, tool, handler };
