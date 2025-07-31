// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_nameservers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/custom_ns',
  operationId: 'account-level-custom-nameservers-add-account-custom-nameserver',
};

export const tool: Tool = {
  name: 'create_custom_nameservers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd Account Custom Nameserver\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/custom_nameserver'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    custom_nameserver: {\n      type: 'object',\n      title: 'Custom NS',\n      description: 'A single account custom nameserver.',\n      properties: {\n        dns_records: {\n          type: 'array',\n          description: 'A and AAAA records associated with the nameserver.',\n          items: {\n            type: 'object',\n            properties: {\n              type: {\n                type: 'string',\n                description: 'DNS record type.',\n                enum: [                  'A',\n                  'AAAA'\n                ]\n              },\n              value: {\n                type: 'string',\n                description: 'DNS record contents (an IPv4 or IPv6 address).'\n              }\n            }\n          }\n        },\n        ns_name: {\n          type: 'string',\n          description: 'The FQDN of the name server.'\n        },\n        status: {\n          type: 'string',\n          description: 'Verification status of the nameserver.',\n          enum: [            'moved',\n            'pending',\n            'verified'\n          ]\n        },\n        zone_tag: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        ns_set: {\n          type: 'number',\n          description: 'The number of the set that this name server belongs to.'\n        }\n      },\n      required: [        'dns_records',\n        'ns_name',\n        'status',\n        'zone_tag'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      ns_name: {
        type: 'string',
        description: 'The FQDN of the name server.',
      },
      ns_set: {
        type: 'number',
        description: 'The number of the set that this name server belongs to.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'ns_name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.customNameservers.create(body)));
};

export default { metadata, tool, handler };
