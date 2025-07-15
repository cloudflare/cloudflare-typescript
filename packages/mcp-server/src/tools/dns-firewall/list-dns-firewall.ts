// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns_firewall',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dns_firewall',
  operationId: 'dns-firewall-list-dns-firewall-clusters',
};

export const tool: Tool = {
  name: 'list_dns_firewall',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList DNS Firewall clusters for an account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Identifier.'\n          },\n          deprecate_any_requests: {\n            type: 'boolean',\n            description: 'Whether to refuse to answer queries for the ANY type'\n          },\n          dns_firewall_ips: {\n            type: 'array',\n            items: {\n              $ref: '#/$defs/firewall_ips'\n            }\n          },\n          ecs_fallback: {\n            type: 'boolean',\n            description: 'Whether to forward client IP (resolver) subnet if no EDNS Client Subnet is sent'\n          },\n          maximum_cache_ttl: {\n            type: 'number',\n            description: 'Maximum DNS cache TTL This setting sets an upper bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. Higher TTLs will be decreased to the maximum defined here for caching purposes.'\n          },\n          minimum_cache_ttl: {\n            type: 'number',\n            description: 'Minimum DNS cache TTL This setting sets a lower bound on DNS TTLs for purposes of caching between DNS Firewall and the upstream servers. Lower TTLs will be increased to the minimum defined here for caching purposes.'\n          },\n          modified_on: {\n            type: 'string',\n            description: 'Last modification of DNS Firewall cluster',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            description: 'DNS Firewall cluster name'\n          },\n          negative_cache_ttl: {\n            type: 'number',\n            description: 'Negative DNS cache TTL This setting controls how long DNS Firewall should cache negative responses (e.g., NXDOMAIN) from the upstream servers.'\n          },\n          ratelimit: {\n            type: 'number',\n            description: 'Ratelimit in queries per second per datacenter (applies to DNS queries sent to the upstream nameservers configured on the cluster)'\n          },\n          retries: {\n            type: 'number',\n            description: 'Number of retries for fetching DNS responses from upstream nameservers (not counting the initial attempt)'\n          },\n          upstream_ips: {\n            type: 'array',\n            items: {\n              $ref: '#/$defs/upstream_ips'\n            }\n          },\n          attack_mitigation: {\n            $ref: '#/$defs/attack_mitigation'\n          }\n        },\n        required: [          'id',\n          'deprecate_any_requests',\n          'dns_firewall_ips',\n          'ecs_fallback',\n          'maximum_cache_ttl',\n          'minimum_cache_ttl',\n          'modified_on',\n          'name',\n          'negative_cache_ttl',\n          'ratelimit',\n          'retries',\n          'upstream_ips'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    firewall_ips: {\n      type: 'string',\n      description: 'Cloudflare-assigned DNS IPv4 address'\n    },\n    upstream_ips: {\n      type: 'string',\n      description: 'Upstream DNS Server IPv4 address'\n    },\n    attack_mitigation: {\n      type: 'object',\n      description: 'Attack mitigation settings',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'When enabled, automatically mitigate random-prefix attacks to protect upstream DNS servers'\n        },\n        only_when_upstream_unhealthy: {\n          type: 'boolean',\n          description: 'Only mitigate attacks when upstream servers seem unhealthy'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results',
      },
      per_page: {
        type: 'number',
        description: 'Number of clusters per page',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.dnsFirewall.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
