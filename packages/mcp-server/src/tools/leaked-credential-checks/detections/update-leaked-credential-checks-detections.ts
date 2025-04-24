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
  name: 'update_leaked_credential_checks_detections',
  description: 'Update user-defined detection pattern for Leaked Credential Checks.',
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
      password: {
        type: 'string',
        description: 'Defines ehe ruleset expression to use in matching the password in a request.',
      },
      username: {
        type: 'string',
        description: 'Defines the ruleset expression to use in matching the username in a request.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { detection_id, ...body } = args;
  return client.leakedCredentialChecks.detections.update(detection_id, body);
};

export default { metadata, tool, handler };
