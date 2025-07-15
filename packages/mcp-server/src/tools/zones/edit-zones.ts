// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}',
  operationId: 'zones-0-patch',
};

export const tool: Tool = {
  name: 'edit_zones',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdits a zone. Only one zone property can be changed at a time.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      $ref: '#/$defs/zone'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    zone: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        account: {\n          type: 'object',\n          description: 'The account the zone belongs to.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the account.'\n            }\n          },\n          required: []\n        },\n        activated_on: {\n          type: 'string',\n          description: 'The last time proof of ownership was detected and the zone was made\\nactive.',\n          format: 'date-time'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the zone was created.',\n          format: 'date-time'\n        },\n        development_mode: {\n          type: 'number',\n          description: 'The interval (in seconds) from when development mode expires\\n(positive integer) or last expired (negative integer) for the\\ndomain. If development mode has never been enabled, this value is 0.'\n        },\n        meta: {\n          type: 'object',\n          description: 'Metadata about the zone.',\n          properties: {\n            cdn_only: {\n              type: 'boolean',\n              description: 'The zone is only configured for CDN.'\n            },\n            custom_certificate_quota: {\n              type: 'integer',\n              description: 'Number of Custom Certificates the zone can have.'\n            },\n            dns_only: {\n              type: 'boolean',\n              description: 'The zone is only configured for DNS.'\n            },\n            foundation_dns: {\n              type: 'boolean',\n              description: 'The zone is setup with Foundation DNS.'\n            },\n            page_rule_quota: {\n              type: 'integer',\n              description: 'Number of Page Rules a zone can have.'\n            },\n            phishing_detected: {\n              type: 'boolean',\n              description: 'The zone has been flagged for phishing.'\n            },\n            step: {\n              type: 'integer'\n            }\n          },\n          required: []\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the zone was last modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The domain name.'\n        },\n        name_servers: {\n          type: 'array',\n          description: 'The name servers Cloudflare assigns to a zone.',\n          items: {\n            type: 'string'\n          }\n        },\n        original_dnshost: {\n          type: 'string',\n          description: 'DNS host at the time of switching to Cloudflare.'\n        },\n        original_name_servers: {\n          type: 'array',\n          description: 'Original name servers before moving to Cloudflare.',\n          items: {\n            type: 'string'\n          }\n        },\n        original_registrar: {\n          type: 'string',\n          description: 'Registrar for the domain at the time of switching to Cloudflare.'\n        },\n        owner: {\n          type: 'object',\n          description: 'The owner of the zone.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the owner.'\n            },\n            type: {\n              type: 'string',\n              description: 'The type of owner.'\n            }\n          },\n          required: []\n        },\n        plan: {\n          type: 'object',\n          description: 'A Zones subscription information.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            },\n            can_subscribe: {\n              type: 'boolean',\n              description: 'States if the subscription can be activated.'\n            },\n            currency: {\n              type: 'string',\n              description: 'The denomination of the customer.'\n            },\n            externally_managed: {\n              type: 'boolean',\n              description: 'If this Zone is managed by another company.'\n            },\n            frequency: {\n              type: 'string',\n              description: 'How often the customer is billed.'\n            },\n            is_subscribed: {\n              type: 'boolean',\n              description: 'States if the subscription active.'\n            },\n            legacy_discount: {\n              type: 'boolean',\n              description: 'If the legacy discount applies to this Zone.'\n            },\n            legacy_id: {\n              type: 'string',\n              description: 'The legacy name of the plan.'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the owner.'\n            },\n            price: {\n              type: 'number',\n              description: 'How much the customer is paying.'\n            }\n          },\n          required: []\n        },\n        cname_suffix: {\n          type: 'string',\n          description: 'Allows the customer to use a custom apex.\\n*Tenants Only Configuration*.'\n        },\n        paused: {\n          type: 'boolean',\n          description: 'Indicates whether the zone is only using Cloudflare DNS services. A\\ntrue value means the zone will not receive security or performance\\nbenefits.\\n'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Legacy permissions based on legacy user membership information.',\n          items: {\n            type: 'string'\n          }\n        },\n        status: {\n          type: 'string',\n          description: 'The zone status on Cloudflare.',\n          enum: [            'initializing',\n            'pending',\n            'active',\n            'moved'\n          ]\n        },\n        tenant: {\n          type: 'object',\n          description: 'The root organizational unit that this zone belongs to (such as a tenant or organization).',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the Tenant account.'\n            }\n          },\n          required: []\n        },\n        tenant_unit: {\n          type: 'object',\n          description: 'The immediate parent organizational unit that this zone belongs to (such as under a tenant or sub-organization).',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Identifier'\n            }\n          },\n          required: []\n        },\n        type: {\n          $ref: '#/$defs/type'\n        },\n        vanity_name_servers: {\n          type: 'array',\n          description: 'An array of domains used for custom name servers. This is only available for Business and Enterprise plans.',\n          items: {\n            type: 'string'\n          }\n        },\n        verification_key: {\n          type: 'string',\n          description: 'Verification key for partial zone setup.'\n        }\n      },\n      required: [        'id',\n        'account',\n        'activated_on',\n        'created_on',\n        'development_mode',\n        'meta',\n        'modified_on',\n        'name',\n        'name_servers',\n        'original_dnshost',\n        'original_name_servers',\n        'original_registrar',\n        'owner',\n        'plan'\n      ]\n    },\n    type: {\n      type: 'string',\n      description: 'A full zone implies that DNS is hosted with Cloudflare. A partial zone is\\ntypically a partner-hosted zone or a CNAME setup.',\n      enum: [        'full',\n        'partial',\n        'secondary',\n        'internal'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      paused: {
        type: 'boolean',
        description:
          'Indicates whether the zone is only using Cloudflare DNS services. A\ntrue value means the zone will not receive security or performance\nbenefits.\n',
      },
      type: {
        type: 'string',
        description:
          'A full zone implies that DNS is hosted with Cloudflare. A partial\nzone is typically a partner-hosted zone or a CNAME setup. This\nparameter is only available to Enterprise customers or if it has\nbeen explicitly enabled on a zone.',
        enum: ['full', 'partial', 'secondary', 'internal'],
      },
      vanity_name_servers: {
        type: 'array',
        description:
          'An array of domains used for custom name servers. This is only\navailable for Business and Enterprise plans.',
        items: {
          type: 'string',
        },
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
  return asTextContentResult(await maybeFilter(args, await client.zones.edit(body)));
};

export default { metadata, tool, handler };
