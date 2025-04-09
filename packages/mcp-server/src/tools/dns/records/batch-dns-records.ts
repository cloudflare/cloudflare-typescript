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
  name: 'batch_dns_records',
  description:
    'Send a Batch of DNS Record API calls to be executed together.\n\nNotes:\n- Although Cloudflare will execute the batched operations in a single database transaction, Cloudflare\'s distributed KV store must treat each record change as a single key-value pair. This means that the propagation of changes is not atomic. See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/batch-record-changes/ "Batch DNS records") for more information.\n- The operations you specify within the /batch request body are always executed in the following order:\n\n    - Deletes\n    - Patches\n    - Puts\n    - Posts\n',
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
          anyOf: [
            {
              allOf: [
                {
                  type: 'object',
                  title: 'A Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
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
                  required: [],
                },
              ],
              title: 'A Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'AAAA Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['AAAA'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'AAAA Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'CAA Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                          description:
                            "Value of the record. This field's semantics depend on the chosen tag.",
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['CAA'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'CAA Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'CERT Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['CERT'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'CERT Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'CNAME Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['CNAME'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'CNAME Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'DNSKEY Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['DNSKEY'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'DNSKEY Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'DS Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['DS'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'DS Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'HTTPS Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['HTTPS'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'HTTPS Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'LOC Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['LOC'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'LOC Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'MX Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['MX'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'MX Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'NAPTR Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['NAPTR'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'NAPTR Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'NS Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['NS'],
                    },
                  },
                  required: [],
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
                    $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                  },
                },
                ttl: {
                  $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                },
                type: {
                  type: 'string',
                  description: 'Record type.',
                  enum: ['OPENPGPKEY'],
                },
              },
              required: ['id'],
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'PTR Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['PTR'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'PTR Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'SMIMEA Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['SMIMEA'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'SMIMEA Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'SRV Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['SRV'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'SRV Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'SSHFP Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['SSHFP'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'SSHFP Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'SVCB Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['SVCB'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'SVCB Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'TLSA Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['TLSA'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'TLSA Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'TXT Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['TXT'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'TXT Record',
            },
            {
              allOf: [
                {
                  type: 'object',
                  title: 'URI Record',
                  properties: {
                    comment: {
                      type: 'string',
                      description:
                        'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                      description:
                        'Custom tags for the DNS record. This field has no effect on DNS responses.',
                      items: {
                        $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                      },
                    },
                    ttl: {
                      $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                    },
                    type: {
                      type: 'string',
                      description: 'Record type.',
                      enum: ['URI'],
                    },
                  },
                  required: [],
                },
              ],
              title: 'URI Record',
            },
          ],
        },
      },
      posts: {
        type: 'array',
        items: {
          anyOf: [
            {
              $ref: '#/properties/patches/items/anyOf/0/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/1/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/2/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/3/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/4/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/5/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/6/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/7/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/8/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/9/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/10/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/11/allOf/0',
            },
            {
              type: 'object',
              title: 'OPENPGPKEY Record',
              properties: {
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
                    $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                  },
                },
                ttl: {
                  $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                },
                type: {
                  type: 'string',
                  description: 'Record type.',
                  enum: ['OPENPGPKEY'],
                },
              },
              required: [],
            },
            {
              $ref: '#/properties/patches/items/anyOf/13/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/14/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/15/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/16/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/17/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/18/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/19/allOf/0',
            },
            {
              $ref: '#/properties/patches/items/anyOf/20/allOf/0',
            },
          ],
        },
      },
      puts: {
        type: 'array',
        items: {
          anyOf: [
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/0/allOf/0',
                },
              ],
              title: 'A Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/1/allOf/0',
                },
              ],
              title: 'AAAA Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/2/allOf/0',
                },
              ],
              title: 'CAA Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/3/allOf/0',
                },
              ],
              title: 'CERT Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/4/allOf/0',
                },
              ],
              title: 'CNAME Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/5/allOf/0',
                },
              ],
              title: 'DNSKEY Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/6/allOf/0',
                },
              ],
              title: 'DS Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/7/allOf/0',
                },
              ],
              title: 'HTTPS Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/8/allOf/0',
                },
              ],
              title: 'LOC Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/9/allOf/0',
                },
              ],
              title: 'MX Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/10/allOf/0',
                },
              ],
              title: 'NAPTR Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/11/allOf/0',
                },
              ],
              title: 'NS Record',
            },
            {
              type: 'object',
              title: 'OPENPGPKEY Record',
              properties: {
                content: {
                  type: 'string',
                  description:
                    'A single Base64-encoded OpenPGP Transferable Public Key (RFC 4880 Section 11.1)',
                },
                name: {
                  type: 'string',
                  description: 'DNS record name (or @ for the zone apex) in Punycode.',
                },
                type: {
                  type: 'string',
                  description: 'Record type.',
                  enum: ['OPENPGPKEY'],
                },
                id: {
                  type: 'string',
                  description: 'Identifier.',
                },
                comment: {
                  type: 'string',
                  description:
                    'Comments or notes about the DNS record. This field has no effect on DNS responses.',
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
                    $ref: '#/properties/patches/items/anyOf/0/allOf/0/tags/items',
                  },
                },
                ttl: {
                  $ref: '#/properties/patches/items/anyOf/0/allOf/0/ttl',
                },
              },
              required: ['content', 'name', 'type'],
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/13/allOf/0',
                },
              ],
              title: 'PTR Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/14/allOf/0',
                },
              ],
              title: 'SMIMEA Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/15/allOf/0',
                },
              ],
              title: 'SRV Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/16/allOf/0',
                },
              ],
              title: 'SSHFP Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/17/allOf/0',
                },
              ],
              title: 'SVCB Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/18/allOf/0',
                },
              ],
              title: 'TLSA Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/19/allOf/0',
                },
              ],
              title: 'TXT Record',
            },
            {
              allOf: [
                {
                  $ref: '#/properties/patches/items/anyOf/20/allOf/0',
                },
              ],
              title: 'URI Record',
            },
          ],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.records.batch(body);
};

export default { metadata, tool, handler };
