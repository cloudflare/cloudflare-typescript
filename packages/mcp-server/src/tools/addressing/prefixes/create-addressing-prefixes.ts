// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/addressing/prefixes',
  operationId: 'ip-address-management-prefixes-add-prefix',
};

export const tool: Tool = {
  name: 'create_addressing_prefixes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a new prefix under the account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/prefix'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    prefix: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier of an IP Prefix.'\n        },\n        account_id: {\n          type: 'string',\n          description: 'Identifier of a Cloudflare account.'\n        },\n        advertised: {\n          type: 'boolean',\n          description: 'Prefix advertisement status to the Internet. This field is only not \\'null\\' if on demand is enabled.'\n        },\n        advertised_modified_at: {\n          type: 'string',\n          description: 'Last time the advertisement status was changed. This field is only not \\'null\\' if on demand is enabled.',\n          format: 'date-time'\n        },\n        approved: {\n          type: 'string',\n          description: 'Approval state of the prefix (P = pending, V = active).'\n        },\n        asn: {\n          type: 'integer',\n          description: 'Autonomous System Number (ASN) the prefix will be advertised under.'\n        },\n        cidr: {\n          type: 'string',\n          description: 'IP Prefix in Classless Inter-Domain Routing format.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the prefix.'\n        },\n        loa_document_id: {\n          type: 'string',\n          description: 'Identifier for the uploaded LOA document.'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        on_demand_enabled: {\n          type: 'boolean',\n          description: 'Whether advertisement of the prefix to the Internet may be dynamically enabled or disabled.'\n        },\n        on_demand_locked: {\n          type: 'boolean',\n          description: 'Whether advertisement status of the prefix is locked, meaning it cannot be changed.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      asn: {
        type: 'integer',
        description: 'Autonomous System Number (ASN) the prefix will be advertised under.',
      },
      cidr: {
        type: 'string',
        description: 'IP Prefix in Classless Inter-Domain Routing format.',
      },
      loa_document_id: {
        type: 'string',
        description: 'Identifier for the uploaded LOA document.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'asn', 'cidr', 'loa_document_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.addressing.prefixes.create(body)));
};

export default { metadata, tool, handler };
