// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_lists_rules_items',
  description:
    'Appends new items to the list.\n\nThis operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](/operations/lists-get-bulk-operation-status) endpoint with the returned `operation_id`.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            asn: {
              type: 'integer',
              description: 'A non-negative 32 bit integer',
            },
            comment: {
              type: 'string',
              description: 'An informative summary of the list item.',
            },
            hostname: {
              type: 'object',
              description:
                'Valid characters for hostnames are ASCII(7) letters from a to z, the digits from 0 to 9, wildcards (*), and the hyphen (-).',
              properties: {
                url_hostname: {
                  type: 'string',
                },
              },
              required: ['url_hostname'],
            },
            ip: {
              type: 'string',
              description:
                'An IPv4 address, an IPv4 CIDR, or an IPv6 CIDR. IPv6 CIDRs are limited to a maximum of /64.',
            },
            redirect: {
              type: 'object',
              description: 'The definition of the redirect.',
              properties: {
                source_url: {
                  type: 'string',
                },
                target_url: {
                  type: 'string',
                },
                include_subdomains: {
                  type: 'boolean',
                },
                preserve_path_suffix: {
                  type: 'boolean',
                },
                preserve_query_string: {
                  type: 'boolean',
                },
                status_code: {
                  type: 'string',
                  enum: [301, 302, 307, 308],
                },
                subpath_matching: {
                  type: 'boolean',
                },
              },
              required: ['source_url', 'target_url'],
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { list_id, ...body } = args;
  return client.rules.lists.items.create(list_id, body);
};

export default { metadata, tool, handler };
