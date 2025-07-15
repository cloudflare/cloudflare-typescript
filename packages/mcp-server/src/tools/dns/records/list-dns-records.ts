// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/dns_records',
  operationId: 'dns-records-for-a-zone-list-dns-records',
};

export const tool: Tool = {
  name: 'list_dns_records',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList, search, sort, and filter a zones' DNS records.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      comment: {
        type: 'object',
        properties: {
          absent: {
            type: 'string',
            description: 'If this parameter is present, only records *without* a comment are returned.\n',
          },
          contains: {
            type: 'string',
            description: 'Substring of the DNS record comment. Comment filters are case-insensitive.\n',
          },
          endswith: {
            type: 'string',
            description: 'Suffix of the DNS record comment. Comment filters are case-insensitive.\n',
          },
          exact: {
            type: 'string',
            description: 'Exact value of the DNS record comment. Comment filters are case-insensitive.\n',
          },
          present: {
            type: 'string',
            description: 'If this parameter is present, only records *with* a comment are returned.\n',
          },
          startswith: {
            type: 'string',
            description: 'Prefix of the DNS record comment. Comment filters are case-insensitive.\n',
          },
        },
        required: [],
      },
      content: {
        type: 'object',
        properties: {
          contains: {
            type: 'string',
            description: 'Substring of the DNS record content. Content filters are case-insensitive.\n',
          },
          endswith: {
            type: 'string',
            description: 'Suffix of the DNS record content. Content filters are case-insensitive.\n',
          },
          exact: {
            type: 'string',
            description: 'Exact value of the DNS record content. Content filters are case-insensitive.\n',
          },
          startswith: {
            type: 'string',
            description: 'Prefix of the DNS record content. Content filters are case-insensitive.\n',
          },
        },
        required: [],
      },
      direction: {
        $ref: '#/$defs/sort_direction',
      },
      match: {
        type: 'string',
        description:
          'Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.',
        enum: ['any', 'all'],
      },
      name: {
        type: 'object',
        properties: {
          contains: {
            type: 'string',
            description: 'Substring of the DNS record name. Name filters are case-insensitive.\n',
          },
          endswith: {
            type: 'string',
            description: 'Suffix of the DNS record name. Name filters are case-insensitive.\n',
          },
          exact: {
            type: 'string',
            description: 'Exact value of the DNS record name. Name filters are case-insensitive.\n',
          },
          startswith: {
            type: 'string',
            description: 'Prefix of the DNS record name. Name filters are case-insensitive.\n',
          },
        },
        required: [],
      },
      order: {
        type: 'string',
        description: 'Field to order DNS records by.',
        enum: ['type', 'name', 'content', 'ttl', 'proxied'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of DNS records per page.',
      },
      proxied: {
        type: 'boolean',
        description: 'Whether the record is receiving the performance and security benefits of Cloudflare.',
      },
      search: {
        type: 'string',
        description:
          'Allows searching in multiple properties of a DNS record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.\n',
      },
      tag: {
        type: 'object',
        properties: {
          absent: {
            type: 'string',
            description:
              'Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.\n',
          },
          contains: {
            type: 'string',
            description:
              'A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.\n',
          },
          endswith: {
            type: 'string',
            description:
              'A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.\n',
          },
          exact: {
            type: 'string',
            description:
              'A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.\n',
          },
          present: {
            type: 'string',
            description:
              'Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.\n',
          },
          startswith: {
            type: 'string',
            description:
              'A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.\n',
          },
        },
        required: [],
      },
      tag_match: {
        type: 'string',
        description:
          "Whether to match all tag search requirements or at least one (any). If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.",
        enum: ['any', 'all'],
      },
      type: {
        type: 'string',
        description: 'Record type.',
        enum: [
          'A',
          'AAAA',
          'CAA',
          'CERT',
          'CNAME',
          'DNSKEY',
          'DS',
          'HTTPS',
          'LOC',
          'MX',
          'NAPTR',
          'NS',
          'OPENPGPKEY',
          'PTR',
          'SMIMEA',
          'SRV',
          'SSHFP',
          'SVCB',
          'TLSA',
          'TXT',
          'URI',
        ],
      },
    },
    $defs: {
      sort_direction: {
        type: 'string',
        description: 'Direction to order DNS records in.',
        enum: ['asc', 'desc'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.dns.records.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
