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
  name: 'get_rulesets_versions',
  description: 'Fetches a specific version of an account or zone ruleset.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { ruleset_version, ...body } = args;
  return client.rulesets.versions.get(ruleset_version, body);
};

export default { metadata, tool, handler };
