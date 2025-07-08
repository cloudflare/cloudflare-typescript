// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/rules/lists/{list_id}/items',
  operationId: 'lists-update-all-list-items',
};

export const tool: Tool = {
  name: 'update_lists_rules_items',
  description:
    'Removes all existing items from the list and adds the provided items to the list.\n\nThis operation is asynchronous. To get current the operation status, invoke the `Get bulk operation status` endpoint with the returned `operation_id`.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines an identifier.',
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
              description: 'Defines a non-negative 32 bit integer.',
            },
            comment: {
              type: 'string',
              description: 'Defines an informative summary of the list item.',
            },
            hostname: {
              $ref: '#/$defs/hostname',
            },
            ip: {
              type: 'string',
              description: 'An IPv4 address, an IPv4 CIDR, an IPv6 address, or an IPv6 CIDR.',
            },
            redirect: {
              $ref: '#/$defs/redirect',
            },
          },
          required: [],
        },
      },
    },
    $defs: {
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return asTextContentResult(await client.rules.lists.items.update(list_id, body));
};

export default { metadata, tool, handler };
