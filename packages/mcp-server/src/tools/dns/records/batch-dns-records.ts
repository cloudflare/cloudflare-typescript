// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.records',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/dns_records/batch',
  operationId: 'dns-records-for-a-zone-batch-dns-records',
};

export const tool: Tool = {
  name: 'batch_dns_records',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend a Batch of DNS Record API calls to be executed together.\n\nNotes:\n- Although Cloudflare will execute the batched operations in a single database transaction, Cloudflare's distributed KV store must treat each record change as a single key-value pair. This means that the propagation of changes is not atomic. See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/batch-record-changes/ \"Batch DNS records\") for more information.\n- The operations you specify within the /batch request body are always executed in the following order:\n\n    - Deletes\n    - Patches\n    - Puts\n    - Posts\n",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      deletes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Identifier.',
            },
          },
          required: ['id'],
        },
      },
      patches: {
        type: 'array',
        items: {
          $ref: '#/$defs/batch_patch',
        },
      },
      posts: {
        type: 'array',
        items: {
          anyOf: [
            {
              $ref: '#/$defs/a_record',
            },
            {
              $ref: '#/$defs/aaaa_record',
            },
            {
              $ref: '#/$defs/cname_record',
            },
            {
              $ref: '#/$defs/mx_record',
            },
            {
              $ref: '#/$defs/ns_record',
            },
            {
              type: 'object',
              title: 'OPENPGPKEY Record',
              properties: {
                name: {
                  type: 'string',
                  description: 'Complete DNS record name, including the zone name, in Punycode.',
                },
                ttl: {
                  $ref: '#/$defs/ttl',
                },
                type: {
                  type: 'string',
                  description: 'Record type.',
                  enum: ['OPENPGPKEY'],
                },
                comment: {
                  type: 'string',
                  description:
                    'Comments or notes about the DNS record. This field has no effect on DNS responses.',
                },
                content: {
                  type: 'string',
                  description:
                    'A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1)',
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
                },
                tags: {
                  type: 'array',
                  description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
                  items: {
                    $ref: '#/$defs/record_tags',
                  },
                },
              },
              required: ['name', 'ttl', 'type'],
            },
            {
              $ref: '#/$defs/ptr_record',
            },
            {
              $ref: '#/$defs/txt_record',
            },
            {
              $ref: '#/$defs/caa_record',
            },
            {
              $ref: '#/$defs/cert_record',
            },
            {
              $ref: '#/$defs/dnskey_record',
            },
            {
              $ref: '#/$defs/ds_record',
            },
            {
              $ref: '#/$defs/https_record',
            },
            {
              $ref: '#/$defs/loc_record',
            },
            {
              $ref: '#/$defs/naptr_record',
            },
            {
              $ref: '#/$defs/smimea_record',
            },
            {
              $ref: '#/$defs/srv_record',
            },
            {
              $ref: '#/$defs/sshfp_record',
            },
            {
              $ref: '#/$defs/svcb_record',
            },
            {
              $ref: '#/$defs/tlsa_record',
            },
            {
              $ref: '#/$defs/uri_record',
            },
          ],
        },
      },
      puts: {
        type: 'array',
        items: {
          $ref: '#/$defs/batch_put',
        },
      },
    },
    required: ['zone_id'],
    $defs: {
      batch_patch: {
        anyOf: [
          {
            allOf: [
              {
                $ref: '#/$defs/a_record',
              },
            ],
            title: 'A Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/aaaa_record',
              },
            ],
            title: 'AAAA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/cname_record',
              },
            ],
            title: 'CNAME Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/mx_record',
              },
            ],
            title: 'MX Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/ns_record',
              },
            ],
            title: 'NS Record',
          },
          {
            type: 'object',
            title: 'OPENPGPKEY Record',
            properties: {
              id: {
                type: 'string',
                description: 'Identifier.',
              },
              name: {
                type: 'string',
                description: 'Complete DNS record name, including the zone name, in Punycode.',
              },
              ttl: {
                $ref: '#/$defs/ttl',
              },
              type: {
                type: 'string',
                description: 'Record type.',
                enum: ['OPENPGPKEY'],
              },
              comment: {
                type: 'string',
                description:
                  'Comments or notes about the DNS record. This field has no effect on DNS responses.',
              },
              content: {
                type: 'string',
                description:
                  'A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1)',
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
              },
              tags: {
                type: 'array',
                description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
                items: {
                  $ref: '#/$defs/record_tags',
                },
              },
            },
            required: ['id', 'name', 'ttl', 'type'],
          },
          {
            allOf: [
              {
                $ref: '#/$defs/ptr_record',
              },
            ],
            title: 'PTR Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/txt_record',
              },
            ],
            title: 'TXT Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/caa_record',
              },
            ],
            title: 'CAA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/cert_record',
              },
            ],
            title: 'CERT Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/dnskey_record',
              },
            ],
            title: 'DNSKEY Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/ds_record',
              },
            ],
            title: 'DS Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/https_record',
              },
            ],
            title: 'HTTPS Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/loc_record',
              },
            ],
            title: 'LOC Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/naptr_record',
              },
            ],
            title: 'NAPTR Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/smimea_record',
              },
            ],
            title: 'SMIMEA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/srv_record',
              },
            ],
            title: 'SRV Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/sshfp_record',
              },
            ],
            title: 'SSHFP Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/svcb_record',
              },
            ],
            title: 'SVCB Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/tlsa_record',
              },
            ],
            title: 'TLSA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/uri_record',
              },
            ],
            title: 'URI Record',
          },
        ],
      },
      a_record: {
        type: 'object',
        title: 'A Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['A'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid IPv4 address.',
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
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
      record_tags: {
        type: 'string',
        description:
          'Individual tag of the form name:value (the name must consist of only letters, numbers, underscores and hyphens)',
      },
      aaaa_record: {
        type: 'object',
        title: 'AAAA Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['AAAA'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid IPv6 address.',
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      cname_record: {
        type: 'object',
        title: 'CNAME Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['CNAME'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "A valid hostname. Must not match the record's name.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      mx_record: {
        type: 'object',
        title: 'MX Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['MX'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid mail server hostname.',
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      ns_record: {
        type: 'object',
        title: 'NS Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['NS'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'A valid name server host name.',
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      ptr_record: {
        type: 'object',
        title: 'PTR Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['PTR'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: 'Domain name pointing to the address.',
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      txt_record: {
        type: 'object',
        title: 'TXT Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['TXT'],
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      caa_record: {
        type: 'object',
        title: 'CAA Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['CAA'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted CAA content. See 'data' to set CAA properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      cert_record: {
        type: 'object',
        title: 'CERT Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['CERT'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted CERT content. See 'data' to set CERT properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      dnskey_record: {
        type: 'object',
        title: 'DNSKEY Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['DNSKEY'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted DNSKEY content. See 'data' to set DNSKEY properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      ds_record: {
        type: 'object',
        title: 'DS Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['DS'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted DS content. See 'data' to set DS properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      https_record: {
        type: 'object',
        title: 'HTTPS Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['HTTPS'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted HTTPS content. See 'data' to set HTTPS properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      loc_record: {
        type: 'object',
        title: 'LOC Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['LOC'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted LOC content. See 'data' to set LOC properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      naptr_record: {
        type: 'object',
        title: 'NAPTR Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['NAPTR'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted NAPTR content. See 'data' to set NAPTR properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      smimea_record: {
        type: 'object',
        title: 'SMIMEA Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SMIMEA'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted SMIMEA content. See 'data' to set SMIMEA properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      srv_record: {
        type: 'object',
        title: 'SRV Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SRV'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description:
              "Priority, weight, port, and SRV target. See 'data' for setting the individual component values.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      sshfp_record: {
        type: 'object',
        title: 'SSHFP Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SSHFP'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted SSHFP content. See 'data' to set SSHFP properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      svcb_record: {
        type: 'object',
        title: 'SVCB Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['SVCB'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted SVCB content. See 'data' to set SVCB properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      tlsa_record: {
        type: 'object',
        title: 'TLSA Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['TLSA'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted TLSA content. See 'data' to set TLSA properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      uri_record: {
        type: 'object',
        title: 'URI Record',
        properties: {
          name: {
            type: 'string',
            description: 'Complete DNS record name, including the zone name, in Punycode.',
          },
          ttl: {
            $ref: '#/$defs/ttl',
          },
          type: {
            type: 'string',
            description: 'Record type.',
            enum: ['URI'],
          },
          comment: {
            type: 'string',
            description: 'Comments or notes about the DNS record. This field has no effect on DNS responses.',
          },
          content: {
            type: 'string',
            description: "Formatted URI content. See 'data' to set URI properties.",
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
          },
          tags: {
            type: 'array',
            description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
            items: {
              $ref: '#/$defs/record_tags',
            },
          },
        },
        required: ['name', 'ttl', 'type'],
      },
      batch_put: {
        anyOf: [
          {
            allOf: [
              {
                $ref: '#/$defs/a_record',
              },
            ],
            title: 'A Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/aaaa_record',
              },
            ],
            title: 'AAAA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/cname_record',
              },
            ],
            title: 'CNAME Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/mx_record',
              },
            ],
            title: 'MX Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/ns_record',
              },
            ],
            title: 'NS Record',
          },
          {
            type: 'object',
            title: 'OPENPGPKEY Record',
            properties: {
              id: {
                type: 'string',
                description: 'Identifier.',
              },
              name: {
                type: 'string',
                description: 'Complete DNS record name, including the zone name, in Punycode.',
              },
              ttl: {
                $ref: '#/$defs/ttl',
              },
              type: {
                type: 'string',
                description: 'Record type.',
                enum: ['OPENPGPKEY'],
              },
              comment: {
                type: 'string',
                description:
                  'Comments or notes about the DNS record. This field has no effect on DNS responses.',
              },
              content: {
                type: 'string',
                description:
                  'A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1)',
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
              },
              tags: {
                type: 'array',
                description: 'Custom tags for the DNS record. This field has no effect on DNS responses.',
                items: {
                  $ref: '#/$defs/record_tags',
                },
              },
            },
            required: ['id', 'name', 'ttl', 'type'],
          },
          {
            allOf: [
              {
                $ref: '#/$defs/ptr_record',
              },
            ],
            title: 'PTR Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/txt_record',
              },
            ],
            title: 'TXT Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/caa_record',
              },
            ],
            title: 'CAA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/cert_record',
              },
            ],
            title: 'CERT Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/dnskey_record',
              },
            ],
            title: 'DNSKEY Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/ds_record',
              },
            ],
            title: 'DS Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/https_record',
              },
            ],
            title: 'HTTPS Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/loc_record',
              },
            ],
            title: 'LOC Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/naptr_record',
              },
            ],
            title: 'NAPTR Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/smimea_record',
              },
            ],
            title: 'SMIMEA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/srv_record',
              },
            ],
            title: 'SRV Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/sshfp_record',
              },
            ],
            title: 'SSHFP Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/svcb_record',
              },
            ],
            title: 'SVCB Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/tlsa_record',
              },
            ],
            title: 'TLSA Record',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/uri_record',
              },
            ],
            title: 'URI Record',
          },
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.dns.records.batch(body));
};

export default { metadata, tool, handler };
