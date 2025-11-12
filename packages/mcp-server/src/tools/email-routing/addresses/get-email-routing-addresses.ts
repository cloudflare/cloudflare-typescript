// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.addresses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email/routing/addresses/{destination_address_identifier}',
  operationId: 'email-routing-destination-addresses-get-a-destination-address',
};

export const tool: Tool = {
  name: 'get_email_routing_addresses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets information for a specific destination email already created.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/address',\n  $defs: {\n    address: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Destination address identifier.'\n        },\n        created: {\n          type: 'string',\n          description: 'The date and time the destination address has been created.',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string',\n          description: 'The contact email address of the user.'\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the destination address was last modified.',\n          format: 'date-time'\n        },\n        tag: {\n          type: 'string',\n          description: 'Destination address tag. (Deprecated, replaced by destination address identifier)'\n        },\n        verified: {\n          type: 'string',\n          description: 'The date and time the destination address has been verified. Null means not verified yet.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
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
    required: ['account_id', 'destination_address_identifier'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { destination_address_identifier, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.emailRouting.addresses.get(destination_address_identifier, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
