// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.zone',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_settings_dns_zone',
  description: 'Update DNS settings for a zone',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
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
            enum: ['cloudflare.standard', 'custom.account', 'custom.tenant', 'custom.zone'],
          },
          ns_set: {
            type: 'integer',
            description: 'Configured nameserver set to be used for this zone',
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.settings.zone.edit(body);
};

export default { metadata, tool, handler };
