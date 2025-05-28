// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'logs.received.fields',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/logs/received/fields',
  operationId: 'get-zones-zone_id-logs-received-fields',
};

export const tool: Tool = {
  name: 'get_received_logs_fields',
  description:
    'Lists all fields available. The response is json object with key-value pairs, where keys are field names, and values are descriptions.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.logs.received.fields.get(body);
};

export default { metadata, tool, handler };
