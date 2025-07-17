// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.whois',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/whois',
  operationId: 'whois-record-get-whois-record',
};

export const tool: Tool = {
  name: 'get_intel_whois',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet WHOIS Record\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Returns a boolean for the success/failure of the API call.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        dnssec: {\n          type: 'boolean'\n        },\n        domain: {\n          type: 'string'\n        },\n        extension: {\n          type: 'string'\n        },\n        found: {\n          type: 'boolean'\n        },\n        nameservers: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        punycode: {\n          type: 'string'\n        },\n        registrant: {\n          type: 'string'\n        },\n        registrar: {\n          type: 'string'\n        },\n        id: {\n          type: 'string'\n        },\n        administrative_city: {\n          type: 'string'\n        },\n        administrative_country: {\n          type: 'string'\n        },\n        administrative_email: {\n          type: 'string'\n        },\n        administrative_fax: {\n          type: 'string'\n        },\n        administrative_fax_ext: {\n          type: 'string'\n        },\n        administrative_id: {\n          type: 'string'\n        },\n        administrative_name: {\n          type: 'string'\n        },\n        administrative_org: {\n          type: 'string'\n        },\n        administrative_phone: {\n          type: 'string'\n        },\n        administrative_phone_ext: {\n          type: 'string'\n        },\n        administrative_postal_code: {\n          type: 'string'\n        },\n        administrative_province: {\n          type: 'string'\n        },\n        administrative_referral_url: {\n          type: 'string'\n        },\n        administrative_street: {\n          type: 'string'\n        },\n        billing_city: {\n          type: 'string'\n        },\n        billing_country: {\n          type: 'string'\n        },\n        billing_email: {\n          type: 'string'\n        },\n        billing_fax: {\n          type: 'string'\n        },\n        billing_fax_ext: {\n          type: 'string'\n        },\n        billing_id: {\n          type: 'string'\n        },\n        billing_name: {\n          type: 'string'\n        },\n        billing_org: {\n          type: 'string'\n        },\n        billing_phone: {\n          type: 'string'\n        },\n        billing_phone_ext: {\n          type: 'string'\n        },\n        billing_postal_code: {\n          type: 'string'\n        },\n        billing_province: {\n          type: 'string'\n        },\n        billing_referral_url: {\n          type: 'string'\n        },\n        billing_street: {\n          type: 'string'\n        },\n        created_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        created_date_raw: {\n          type: 'string'\n        },\n        expiration_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        expiration_date_raw: {\n          type: 'string'\n        },\n        registrant_city: {\n          type: 'string'\n        },\n        registrant_country: {\n          type: 'string'\n        },\n        registrant_email: {\n          type: 'string'\n        },\n        registrant_fax: {\n          type: 'string'\n        },\n        registrant_fax_ext: {\n          type: 'string'\n        },\n        registrant_id: {\n          type: 'string'\n        },\n        registrant_name: {\n          type: 'string'\n        },\n        registrant_org: {\n          type: 'string'\n        },\n        registrant_phone: {\n          type: 'string'\n        },\n        registrant_phone_ext: {\n          type: 'string'\n        },\n        registrant_postal_code: {\n          type: 'string'\n        },\n        registrant_province: {\n          type: 'string'\n        },\n        registrant_referral_url: {\n          type: 'string'\n        },\n        registrant_street: {\n          type: 'string'\n        },\n        registrar_city: {\n          type: 'string'\n        },\n        registrar_country: {\n          type: 'string'\n        },\n        registrar_email: {\n          type: 'string'\n        },\n        registrar_fax: {\n          type: 'string'\n        },\n        registrar_fax_ext: {\n          type: 'string'\n        },\n        registrar_id: {\n          type: 'string'\n        },\n        registrar_name: {\n          type: 'string'\n        },\n        registrar_org: {\n          type: 'string'\n        },\n        registrar_phone: {\n          type: 'string'\n        },\n        registrar_phone_ext: {\n          type: 'string'\n        },\n        registrar_postal_code: {\n          type: 'string'\n        },\n        registrar_province: {\n          type: 'string'\n        },\n        registrar_referral_url: {\n          type: 'string'\n        },\n        registrar_street: {\n          type: 'string'\n        },\n        status: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        technical_city: {\n          type: 'string'\n        },\n        technical_country: {\n          type: 'string'\n        },\n        technical_email: {\n          type: 'string'\n        },\n        technical_fax: {\n          type: 'string'\n        },\n        technical_fax_ext: {\n          type: 'string'\n        },\n        technical_id: {\n          type: 'string'\n        },\n        technical_name: {\n          type: 'string'\n        },\n        technical_org: {\n          type: 'string'\n        },\n        technical_phone: {\n          type: 'string'\n        },\n        technical_phone_ext: {\n          type: 'string'\n        },\n        technical_postal_code: {\n          type: 'string'\n        },\n        technical_province: {\n          type: 'string'\n        },\n        technical_referral_url: {\n          type: 'string'\n        },\n        technical_street: {\n          type: 'string'\n        },\n        updated_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        updated_date_raw: {\n          type: 'string'\n        },\n        whois_server: {\n          type: 'string'\n        }\n      },\n      required: [        'dnssec',\n        'domain',\n        'extension',\n        'found',\n        'nameservers',\n        'punycode',\n        'registrant',\n        'registrar'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Use to uniquely identify or reference the resource.',
      },
      domain: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(args, await client.intel.whois.get(body)));
};

export default { metadata, tool, handler };
