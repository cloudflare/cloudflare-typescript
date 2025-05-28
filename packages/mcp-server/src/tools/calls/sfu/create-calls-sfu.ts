// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'calls.sfu',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/calls/apps',
  operationId: 'calls-apps-create-a-new-app',
};

export const tool: Tool = {
  name: 'create_calls_sfu',
  description:
    'Creates a new Cloudflare calls app. An app is an unique enviroment where each Session can access all Tracks within the app.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'A short description of Calls app, not shown to end users.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.calls.sfu.create(body);
};

export default { metadata, tool, handler };
