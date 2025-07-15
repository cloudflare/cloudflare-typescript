// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom.fallback_domains',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/devices/policy/{policy_id}/fallback_domains',
  operationId: 'devices-set-local-domain-fallback-list-for-a-device-settings-policy',
};

export const tool: Tool = {
  name: 'update_custom_policies_devices_zero_trust_fallback_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSets the list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead. This will only apply to the specified device settings profile.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/fallback_domain'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    fallback_domain: {\n      type: 'object',\n      properties: {\n        suffix: {\n          type: 'string',\n          description: 'The domain suffix to match when resolving locally.'\n        },\n        description: {\n          type: 'string',\n          description: 'A description of the fallback domain, displayed in the client UI.'\n        },\n        dns_server: {\n          type: 'array',\n          description: 'A list of IP addresses to handle domain resolution.',\n          items: {\n            type: 'string',\n            description: 'IPv4 or IPv6 address.'\n          }\n        }\n      },\n      required: [        'suffix'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy_id: {
        type: 'string',
      },
      domains: {
        type: 'array',
        items: {
          $ref: '#/$defs/fallback_domain',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      fallback_domain: {
        type: 'object',
        properties: {
          suffix: {
            type: 'string',
            description: 'The domain suffix to match when resolving locally.',
          },
          description: {
            type: 'string',
            description: 'A description of the fallback domain, displayed in the client UI.',
          },
          dns_server: {
            type: 'array',
            description: 'A list of IP addresses to handle domain resolution.',
            items: {
              type: 'string',
              description: 'IPv4 or IPv6 address.',
            },
          },
        },
        required: ['suffix'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  const response = await client.zeroTrust.devices.policies.custom.fallbackDomains
    .update(policy_id, body)
    .asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
