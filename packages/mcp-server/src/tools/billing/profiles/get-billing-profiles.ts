// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'billing.profiles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/billing/profile',
  operationId: 'account-billing-profile-(-deprecated)-billing-profile-details',
};

export const tool: Tool = {
  name: 'get_billing_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets the current billing profile for the account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Billing item identifier tag.'\n        },\n        account_type: {\n          type: 'string'\n        },\n        address: {\n          type: 'string'\n        },\n        address2: {\n          type: 'string'\n        },\n        balance: {\n          type: 'string'\n        },\n        card_expiry_month: {\n          type: 'integer'\n        },\n        card_expiry_year: {\n          type: 'integer'\n        },\n        card_number: {\n          type: 'string'\n        },\n        city: {\n          type: 'string'\n        },\n        company: {\n          type: 'string'\n        },\n        country: {\n          type: 'string'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        device_data: {\n          type: 'string'\n        },\n        edited_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enterprise_billing_email: {\n          type: 'string'\n        },\n        enterprise_primary_email: {\n          type: 'string'\n        },\n        first_name: {\n          type: 'string'\n        },\n        is_partner: {\n          type: 'boolean'\n        },\n        last_name: {\n          type: 'string'\n        },\n        next_bill_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_address: {\n          type: 'string'\n        },\n        payment_address2: {\n          type: 'string'\n        },\n        payment_city: {\n          type: 'string'\n        },\n        payment_country: {\n          type: 'string'\n        },\n        payment_email: {\n          type: 'string'\n        },\n        payment_first_name: {\n          type: 'string'\n        },\n        payment_gateway: {\n          type: 'string'\n        },\n        payment_last_name: {\n          type: 'string'\n        },\n        payment_nonce: {\n          type: 'string'\n        },\n        payment_state: {\n          type: 'string'\n        },\n        payment_zipcode: {\n          type: 'string'\n        },\n        primary_email: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        tax_id_type: {\n          type: 'string'\n        },\n        telephone: {\n          type: 'string'\n        },\n        use_legacy: {\n          type: 'boolean'\n        },\n        validation_code: {\n          type: 'string'\n        },\n        vat: {\n          type: 'string'\n        },\n        zipcode: {\n          type: 'string'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.billing.profiles.get(body)));
};

export default { metadata, tool, handler };
