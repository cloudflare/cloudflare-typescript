// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_dns_records',
  description:
    'Overwrite an existing DNS record.\n\nNotes:\n- A/AAAA records cannot exist on the same name as CNAME records.\n- NS records cannot exist on the same name as any other record type.\n- Domain names are always represented in Punycode, even if Unicode\n  characters were used when creating the record.\n',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              type: 'string',
              description:
                'Individual tag of the form name:value (the name must consist of only letters, numbers, underscores and hyphens)',
            },
          },
          ttl: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
                description:
                  "Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.",
                enum: [1],
              },
            ],
            description:
              "Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.",
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['A'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid IPv6 address.',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['AAAA'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a CAA record.',
            properties: {
              flags: {
                type: 'number',
                description: 'Flags for the CAA record.',
              },
              tag: {
                type: 'string',
                description:
                  'Name of the property controlled by this record (e.g.: issue, issuewild, iodef).',
              },
              value: {
                type: 'string',
                description: "Value of the record. This field's semantics depend on the chosen tag.",
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['CAA'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a CERT record.',
            properties: {
              algorithm: {
                type: 'number',
                description: 'Algorithm.',
              },
              certificate: {
                type: 'string',
                description: 'Certificate.',
              },
              key_tag: {
                type: 'number',
                description: 'Key Tag.',
              },
              type: {
                type: 'number',
                description: 'Type.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['CERT'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "A valid hostname. Must not match the record's name.",
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              flatten_cname: {
                type: 'boolean',
                description:
                  'If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.',
              },
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['CNAME'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a DNSKEY record.',
            properties: {
              algorithm: {
                type: 'number',
                description: 'Algorithm.',
              },
              flags: {
                type: 'number',
                description: 'Flags.',
              },
              protocol: {
                type: 'number',
                description: 'Protocol.',
              },
              public_key: {
                type: 'string',
                description: 'Public Key.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['DNSKEY'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a DS record.',
            properties: {
              algorithm: {
                type: 'number',
                description: 'Algorithm.',
              },
              digest: {
                type: 'string',
                description: 'Digest.',
              },
              digest_type: {
                type: 'number',
                description: 'Digest Type.',
              },
              key_tag: {
                type: 'number',
                description: 'Key Tag.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['DS'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a HTTPS record.',
            properties: {
              priority: {
                type: 'number',
                description: 'priority.',
              },
              target: {
                type: 'string',
                description: 'target.',
              },
              value: {
                type: 'string',
                description: 'value.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['HTTPS'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a LOC record.',
            properties: {
              altitude: {
                type: 'number',
                description: 'Altitude of location in meters.',
              },
              lat_degrees: {
                type: 'number',
                description: 'Degrees of latitude.',
              },
              lat_direction: {
                type: 'string',
                description: 'Latitude direction.',
                enum: ['N', 'S'],
              },
              lat_minutes: {
                type: 'number',
                description: 'Minutes of latitude.',
              },
              lat_seconds: {
                type: 'number',
                description: 'Seconds of latitude.',
              },
              long_degrees: {
                type: 'number',
                description: 'Degrees of longitude.',
              },
              long_direction: {
                type: 'string',
                description: 'Longitude direction.',
                enum: ['E', 'W'],
              },
              long_minutes: {
                type: 'number',
                description: 'Minutes of longitude.',
              },
              long_seconds: {
                type: 'number',
                description: 'Seconds of longitude.',
              },
              precision_horz: {
                type: 'number',
                description: 'Horizontal precision of location.',
              },
              precision_vert: {
                type: 'number',
                description: 'Vertical precision of location.',
              },
              size: {
                type: 'number',
                description: 'Size of location in meters.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['LOC'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid mail server hostname.',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          priority: {
            type: 'number',
            description:
              'Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['MX'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a NAPTR record.',
            properties: {
              flags: {
                type: 'string',
                description: 'Flags.',
              },
              order: {
                type: 'number',
                description: 'Order.',
              },
              preference: {
                type: 'number',
                description: 'Preference.',
              },
              regex: {
                type: 'string',
                description: 'Regex.',
              },
              replacement: {
                type: 'string',
                description: 'Replacement.',
              },
              service: {
                type: 'string',
                description: 'Service.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['NAPTR'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid name server host name.',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['NS'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1)',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['OPENPGPKEY'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'Domain name pointing to the address.',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['PTR'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a SMIMEA record.',
            properties: {
              certificate: {
                type: 'string',
                description: 'Certificate.',
              },
              matching_type: {
                type: 'number',
                description: 'Matching Type.',
              },
              selector: {
                type: 'number',
                description: 'Selector.',
              },
              usage: {
                type: 'number',
                description: 'Usage.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SMIMEA'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a SRV record.',
            properties: {
              port: {
                type: 'number',
                description: 'The port of the service.',
              },
              priority: {
                type: 'number',
                description:
                  'Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.',
              },
              target: {
                type: 'string',
                description: 'A valid hostname.',
              },
              weight: {
                type: 'number',
                description: 'The record weight.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SRV'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a SSHFP record.',
            properties: {
              algorithm: {
                type: 'number',
                description: 'algorithm.',
              },
              fingerprint: {
                type: 'string',
                description: 'fingerprint.',
              },
              type: {
                type: 'number',
                description: 'type.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SSHFP'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a SVCB record.',
            properties: {
              priority: {
                type: 'number',
                description: 'priority.',
              },
              target: {
                type: 'string',
                description: 'target.',
              },
              value: {
                type: 'string',
                description: 'value.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SVCB'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a TLSA record.',
            properties: {
              certificate: {
                type: 'string',
                description: 'certificate.',
              },
              matching_type: {
                type: 'number',
                description: 'Matching Type.',
              },
              selector: {
                type: 'number',
                description: 'Selector.',
              },
              usage: {
                type: 'number',
                description: 'Usage.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['TLSA'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description:
              'Text content for the record. The content must consist of quoted "character strings" (RFC 1035), each with a length of up to 255 bytes. Strings exceeding this allowed maximum length are automatically split.\n\nLearn more at <https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/>.',
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['TXT'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier.',
          },
          dns_record_id: {
            type: 'string',
            description: 'Identifier.',
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          data: {
            type: 'object',
            description: 'Components of a URI record.',
            properties: {
              target: {
                type: 'string',
                description: 'The record content.',
              },
              weight: {
                type: 'number',
                description: 'The record weight.',
              },
            },
            required: [],
          },
          name: {
            type: 'string',
            description: 'DNS record name (or @ for the zone apex) in Punycode.',
          },
          priority: {
            type: 'number',
            description:
              'Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.',
          },
          proxied: {
            type: 'boolean',
            description:
              'Whether the record is receiving the performance and security benefits of Cloudflare.',
          },
          settings: {
            type: 'object',
            description: 'Settings for the DNS record.',
            properties: {
              ipv4_only: {
                type: 'boolean',
                description:
                  'When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
              ipv6_only: {
                type: 'boolean',
                description:
                  'When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/anyOf/0/properties/tags/items',
            },
          },
          ttl: {
            $ref: '#/anyOf/0/properties/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['URI'],
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { dns_record_id, ...body } = args;
  return client.dns.records.update(dns_record_id, body);
};

export default { metadata, tool, handler };
