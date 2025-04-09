// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_ai_gateway',
  description: 'Create a new Gateway',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'gateway id',
      },
      cache_invalidate_on_update: {
        type: 'boolean',
      },
      cache_ttl: {
        type: 'integer',
      },
      collect_logs: {
        type: 'boolean',
      },
      rate_limiting_interval: {
        type: 'integer',
      },
      rate_limiting_limit: {
        type: 'integer',
      },
      rate_limiting_technique: {
        type: 'string',
        enum: ['fixed', 'sliding'],
      },
      authentication: {
        type: 'boolean',
      },
      log_management: {
        type: 'integer',
      },
      log_management_strategy: {
        type: 'string',
        enum: ['STOP_INSERTING', 'DELETE_OLDEST'],
      },
      logpush: {
        type: 'boolean',
      },
      logpush_public_key: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.aiGateway.create(body);
};

export default { metadata, tool, handler };
