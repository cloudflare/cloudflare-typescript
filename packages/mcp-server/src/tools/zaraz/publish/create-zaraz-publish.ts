// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.publish',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/settings/zaraz/publish',
  operationId: 'post-zones-zone_identifier-zaraz-publish',
};

export const tool: Tool = {
  name: 'create_zaraz_publish',
  description: 'Publish current Zaraz preview configuration for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'string',
        description: 'Zaraz configuration description.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zaraz.publish.create(body);
};

export default { metadata, tool, handler };
