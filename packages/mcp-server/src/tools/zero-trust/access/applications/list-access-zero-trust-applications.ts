// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/apps',
};

export const tool: Tool = {
  name: 'list_access_zero_trust_applications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists all Access applications in an account or zone.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      aud: {
        type: 'string',
        description: 'The aud of the app.',
      },
      domain: {
        type: 'string',
        description: 'The domain of the app.',
      },
      exact: {
        type: 'boolean',
        description: 'True for only exact string matches against passed name/domain query parameters.',
      },
      name: {
        type: 'string',
        description: 'The name of the app.',
      },
      search: {
        type: 'string',
        description: 'Search for apps by other listed query parameters.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.zeroTrust.access.applications.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
