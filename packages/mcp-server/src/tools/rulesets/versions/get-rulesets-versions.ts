// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}',
};

export const tool: Tool = {
  name: 'get_rulesets_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a specific version of an account or zone ruleset.",
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the ruleset.',
      },
      ruleset_version: {
        type: 'string',
        title: 'Version',
        description: 'The version of the ruleset.',
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_version, ...body } = args as any;
  return asTextContentResult(await client.rulesets.versions.get(ruleset_version, body));
};

export default { metadata, tool, handler };
