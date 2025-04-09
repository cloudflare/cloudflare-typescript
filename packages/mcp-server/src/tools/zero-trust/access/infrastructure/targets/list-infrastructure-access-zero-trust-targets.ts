// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_infrastructure_access_zero_trust_targets',
  description: 'Lists and sorts an account’s targets. Filters are optional and are ANDed\ntogether.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      created_after: {
        type: 'string',
        description: 'Date and time at which the target was created after (inclusive)',
        format: 'date-time',
      },
      created_before: {
        type: 'string',
        description: 'Date and time at which the target was created before (inclusive)',
        format: 'date-time',
      },
      direction: {
        type: 'string',
        description: 'The sorting direction.',
        enum: ['asc', 'desc'],
      },
      hostname: {
        type: 'string',
        description: 'Hostname of a target',
      },
      hostname_contains: {
        type: 'string',
        description: 'Partial match to the hostname of a target',
      },
      ip_like: {
        type: 'string',
        description:
          'Filters for targets whose IP addresses look like the specified string.\nSupports `*` as a wildcard character',
      },
      ip_v4: {
        type: 'string',
        description: 'IPv4 address of the target',
      },
      ip_v6: {
        type: 'string',
        description: 'IPv6 address of the target',
      },
      ips: {
        type: 'array',
        description:
          'Filters for targets that have any of the following IP addresses. Specify\n`ips` multiple times in query parameter to build list of candidates.',
        items: {
          type: 'string',
        },
      },
      ipv4_end: {
        type: 'string',
        description:
          "Defines an IPv4 filter range's ending value (inclusive). Requires\n`ipv4_start` to be specified as well.",
      },
      ipv4_start: {
        type: 'string',
        description:
          "Defines an IPv4 filter range's starting value (inclusive). Requires\n`ipv4_end` to be specified as well.",
      },
      ipv6_end: {
        type: 'string',
        description:
          "Defines an IPv6 filter range's ending value (inclusive). Requires\n`ipv6_start` to be specified as well.",
      },
      ipv6_start: {
        type: 'string',
        description:
          "Defines an IPv6 filter range's starting value (inclusive). Requires\n`ipv6_end` to be specified as well.",
      },
      modified_after: {
        type: 'string',
        description: 'Date and time at which the target was modified after (inclusive)',
        format: 'date-time',
      },
      modified_before: {
        type: 'string',
        description: 'Date and time at which the target was modified before (inclusive)',
        format: 'date-time',
      },
      order: {
        type: 'string',
        description: 'The field to sort by.',
        enum: ['hostname', 'created_at'],
      },
      page: {
        type: 'integer',
        description: 'Current page in the response',
      },
      per_page: {
        type: 'integer',
        description: 'Max amount of entries returned per page',
      },
      target_ids: {
        type: 'array',
        description:
          'Filters for targets that have any of the following UUIDs. Specify\n`target_ids` multiple times in query parameter to build list of\ncandidates.',
        items: {
          type: 'string',
        },
      },
      virtual_network_id: {
        type: 'string',
        description: 'Private virtual network identifier of the target',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.infrastructure.targets.list(body);
};

export default { metadata, tool, handler };
