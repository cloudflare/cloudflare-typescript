// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets.versions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_rulesets_versions',
  description: 'Fetches the versions of an account or zone ruleset.',
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the ruleset.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { ruleset_id, ...body } = args;
  return client.rulesets.versions.list(ruleset_id, body);
};

export default { metadata, tool, handler };
