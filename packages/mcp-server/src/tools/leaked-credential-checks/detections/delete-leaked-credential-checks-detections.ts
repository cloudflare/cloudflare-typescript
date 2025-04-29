// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'leaked_credential_checks.detections',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_leaked_credential_checks_detections',
  description: 'Remove user-defined detection pattern for Leaked Credential Checks.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      detection_id: {
        type: 'string',
        description: 'Defines the unique ID for this custom detection.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { detection_id, ...body } = args as any;
  return client.leakedCredentialChecks.detections.delete(detection_id, body);
};

export default { metadata, tool, handler };
