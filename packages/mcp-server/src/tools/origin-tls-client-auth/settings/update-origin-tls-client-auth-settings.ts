// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/settings',
  operationId: 'zone-level-authenticated-origin-pulls-set-enablement-for-zone',
};

export const tool: Tool = {
  name: 'update_origin_tls_client_auth_settings',
  description:
    "Enable or disable zone-level authenticated origin pulls. 'enabled' should be set true either before/after the certificate is uploaded to see the certificate in use.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      enabled: {
        type: 'boolean',
        description: 'Indicates whether zone-level authenticated origin pulls is enabled.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.originTLSClientAuth.settings.update(body));
};

export default { metadata, tool, handler };
