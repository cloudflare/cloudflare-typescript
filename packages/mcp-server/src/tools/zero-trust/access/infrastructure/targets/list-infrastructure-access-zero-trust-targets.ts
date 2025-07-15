// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/infrastructure/targets',
  operationId: 'infra-targets-list',
};

export const tool: Tool = {
  name: 'list_infrastructure_access_zero_trust_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists and sorts an account’s targets. Filters are optional and are ANDed\ntogether.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'target_id',\n            description: 'Target identifier'\n          },\n          created_at: {\n            type: 'string',\n            description: 'Date and time at which the target was created',\n            format: 'date-time'\n          },\n          hostname: {\n            type: 'string',\n            description: 'A non-unique field that refers to a target'\n          },\n          ip: {\n            type: 'object',\n            description: 'The IPv4/IPv6 address that identifies where to reach a target',\n            properties: {\n              ipv4: {\n                type: 'object',\n                description: 'The target\\'s IPv4 address',\n                properties: {\n                  ip_addr: {\n                    type: 'string',\n                    description: 'IP address of the target'\n                  },\n                  virtual_network_id: {\n                    type: 'string',\n                    description: '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.'\n                  }\n                },\n                required: []\n              },\n              ipv6: {\n                type: 'object',\n                description: 'The target\\'s IPv6 address',\n                properties: {\n                  ip_addr: {\n                    type: 'string',\n                    description: 'IP address of the target'\n                  },\n                  virtual_network_id: {\n                    type: 'string',\n                    description: '(optional) Private virtual network identifier for the target. If omitted, the default virtual network ID will be used.'\n                  }\n                },\n                required: []\n              }\n            },\n            required: []\n          },\n          modified_at: {\n            type: 'string',\n            description: 'Date and time at which the target was modified',\n            format: 'date-time'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'hostname',\n          'ip',\n          'modified_at'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
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
  const response = await client.zeroTrust.access.infrastructure.targets.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
