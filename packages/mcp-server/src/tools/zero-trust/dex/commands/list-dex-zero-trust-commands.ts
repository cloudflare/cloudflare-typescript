// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.commands',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_dex_zero_trust_commands',
  description:
    'Retrieves a paginated list of commands issued to devices under the specified account, optionally filtered by time range, device, or other parameters',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'number',
        description: 'Page number for pagination',
      },
      per_page: {
        type: 'number',
        description: 'Number of results per page',
      },
      command_type: {
        type: 'string',
        description: 'Optionally filter executed commands by command type',
      },
      device_id: {
        type: 'string',
        description: 'Unique identifier for a device',
      },
      from: {
        type: 'string',
        description: 'Start time for the query in ISO (RFC3339 - ISO 8601) format',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Optionally filter executed commands by status',
        enum: ['PENDING_EXEC', 'PENDING_UPLOAD', 'SUCCESS', 'FAILED'],
      },
      to: {
        type: 'string',
        description: 'End time for the query in ISO (RFC3339 - ISO 8601) format',
        format: 'date-time',
      },
      user_email: {
        type: 'string',
        description: 'Email tied to the device',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dex.commands.list(body);
};

export default { metadata, tool, handler };
