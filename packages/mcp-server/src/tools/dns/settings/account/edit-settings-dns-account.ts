// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/dns_settings',
  operationId: 'dns-settings-for-an-account-update-dns-settings',
};

export const tool: Tool = {
  name: 'edit_settings_dns_account',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate DNS settings for an account\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        zone_defaults: {\n          type: 'object',\n          properties: {\n            flatten_all_cnames: {\n              type: 'boolean',\n              description: 'Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.'\n            },\n            foundation_dns: {\n              type: 'boolean',\n              description: 'Whether to enable Foundation DNS Advanced Nameservers on the zone.'\n            },\n            internal_dns: {\n              type: 'object',\n              description: 'Settings for this internal zone.',\n              properties: {\n                reference_zone_id: {\n                  type: 'string',\n                  description: 'The ID of the zone to fallback to.'\n                }\n              },\n              required: []\n            },\n            multi_provider: {\n              type: 'boolean',\n              description: 'Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.'\n            },\n            nameservers: {\n              type: 'object',\n              description: 'Settings determining the nameservers through which the zone should be available.',\n              properties: {\n                type: {\n                  type: 'string',\n                  description: 'Nameserver type',\n                  enum: [                    'cloudflare.standard',\n                    'cloudflare.standard.random',\n                    'custom.account',\n                    'custom.tenant'\n                  ]\n                }\n              },\n              required: [                'type'\n              ]\n            },\n            ns_ttl: {\n              type: 'number',\n              description: 'The time to live (TTL) of the zone\\'s nameserver (NS) records.'\n            },\n            secondary_overrides: {\n              type: 'boolean',\n              description: 'Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.'\n            },\n            soa: {\n              type: 'object',\n              description: 'Components of the zone\\'s SOA record.',\n              properties: {\n                expire: {\n                  type: 'number',\n                  description: 'Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.'\n                },\n                min_ttl: {\n                  type: 'number',\n                  description: 'The time to live (TTL) for negative caching of records within the zone.'\n                },\n                mname: {\n                  type: 'string',\n                  description: 'The primary nameserver, which may be used for outbound zone transfers.'\n                },\n                refresh: {\n                  type: 'number',\n                  description: 'Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.'\n                },\n                retry: {\n                  type: 'number',\n                  description: 'Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.'\n                },\n                rname: {\n                  type: 'string',\n                  description: 'The email address of the zone administrator, with the first label representing the local part of the email address.'\n                },\n                ttl: {\n                  type: 'number',\n                  description: 'The time to live (TTL) of the SOA record itself.'\n                }\n              },\n              required: [                'expire',\n                'min_ttl',\n                'mname',\n                'refresh',\n                'retry',\n                'rname',\n                'ttl'\n              ]\n            },\n            zone_mode: {\n              type: 'string',\n              description: 'Whether the zone mode is a regular or CDN/DNS only zone.',\n              enum: [                'standard',\n                'cdn_only',\n                'dns_only'\n              ]\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      zone_defaults: {
        type: 'object',
        properties: {
          flatten_all_cnames: {
            type: 'boolean',
            description:
              'Whether to flatten all CNAME records in the zone. Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.',
          },
          foundation_dns: {
            type: 'boolean',
            description: 'Whether to enable Foundation DNS Advanced Nameservers on the zone.',
          },
          internal_dns: {
            type: 'object',
            description: 'Settings for this internal zone.',
            properties: {
              reference_zone_id: {
                type: 'string',
                description: 'The ID of the zone to fallback to.',
              },
            },
            required: [],
          },
          multi_provider: {
            type: 'boolean',
            description:
              'Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.',
          },
          nameservers: {
            type: 'object',
            description: 'Settings determining the nameservers through which the zone should be available.',
            properties: {
              type: {
                type: 'string',
                description: 'Nameserver type',
                enum: [
                  'cloudflare.standard',
                  'cloudflare.standard.random',
                  'custom.account',
                  'custom.tenant',
                ],
              },
            },
            required: ['type'],
          },
          ns_ttl: {
            type: 'number',
            description: "The time to live (TTL) of the zone's nameserver (NS) records.",
          },
          secondary_overrides: {
            type: 'boolean',
            description:
              'Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.',
          },
          soa: {
            type: 'object',
            description: "Components of the zone's SOA record.",
            properties: {
              expire: {
                type: 'number',
                description:
                  'Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.',
              },
              min_ttl: {
                type: 'number',
                description: 'The time to live (TTL) for negative caching of records within the zone.',
              },
              mname: {
                type: 'string',
                description: 'The primary nameserver, which may be used for outbound zone transfers.',
              },
              refresh: {
                type: 'number',
                description:
                  'Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.',
              },
              retry: {
                type: 'number',
                description:
                  'Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.',
              },
              rname: {
                type: 'string',
                description:
                  'The email address of the zone administrator, with the first label representing the local part of the email address.',
              },
              ttl: {
                type: 'number',
                description: 'The time to live (TTL) of the SOA record itself.',
              },
            },
            required: ['expire', 'min_ttl', 'mname', 'refresh', 'retry', 'rname', 'ttl'],
          },
          zone_mode: {
            type: 'string',
            description: 'Whether the zone mode is a regular or CDN/DNS only zone.',
            enum: ['standard', 'cdn_only', 'dns_only'],
          },
        },
        required: [],
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
  return asTextContentResult(await maybeFilter(args, await client.dns.settings.account.edit(body)));
};

export default { metadata, tool, handler };
