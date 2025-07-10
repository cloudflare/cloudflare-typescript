// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.addresses',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/email/routing/addresses/{destination_address_identifier}',
  operationId: 'email-routing-destination-addresses-delete-destination-address',
};

export const tool: Tool = {
  name: 'delete_email_routing_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a specific destination address.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/address'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    address: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Destination address identifier.'\n        },\n        created: {\n          type: 'string',\n          description: 'The date and time the destination address has been created.',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string',\n          description: 'The contact email address of the user.'\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the destination address was last modified.',\n          format: 'date-time'\n        },\n        tag: {\n          type: 'string',\n          description: 'Destination address tag. (Deprecated, replaced by destination address identifier)'\n        },\n        verified: {\n          type: 'string',\n          description: 'The date and time the destination address has been verified. Null means not verified yet.',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      destination_address_identifier: {
        type: 'string',
        description: 'Destination address identifier.',
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
  const { destination_address_identifier, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.emailRouting.addresses.delete(destination_address_identifier, body)),
  );
};

export default { metadata, tool, handler };
