// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}',
};

export const tool: Tool = {
  name: 'get_access_zero_trust_applications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches information about an Access application.",
  inputSchema: {
    type: 'object',
    properties: {
      app_id: {
        $ref: '#/$defs/app_id',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
    required: ['app_id'],
    $defs: {
      app_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { app_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.applications.get(app_id, body));
};

export default { metadata, tool, handler };
