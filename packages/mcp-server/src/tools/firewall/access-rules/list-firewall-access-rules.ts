// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.access_rules',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_firewall_access_rules',
  description:
    'Fetches IP Access rules of an account or zone. These rules apply to all the zones in the account or zone. You can filter the results using several optional parameters.',
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
      configuration: {
        type: 'object',
        properties: {
          target: {
            type: 'string',
            description: 'The target to search in existing rules.',
            enum: ['ip', 'ip_range', 'asn', 'country'],
          },
          value: {
            type: 'string',
            description:
              "The target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`.\nNotes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.",
          },
        },
        required: [],
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned rules.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      mode: {
        type: 'string',
        description: 'The action to apply to a matched request.',
        enum: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'],
      },
      notes: {
        type: 'string',
        description:
          "The string to search for in the notes of existing IP Access rules.\nNotes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.",
      },
      order: {
        type: 'string',
        description: 'The field used to sort returned rules.',
        enum: ['configuration.target', 'configuration.value', 'mode'],
      },
      page: {
        type: 'number',
        description: 'Requested page within paginated list of results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results requested.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.firewall.accessRules.list(body);
};

export default { metadata, tool, handler };
