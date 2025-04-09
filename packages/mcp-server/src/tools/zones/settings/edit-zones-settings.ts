// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_zones_settings',
  description: 'Updates a single zone setting by the identifier',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['0rtt'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['advanced_ddos'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['aegis'],
          },
          value: {
            type: 'object',
            description: 'Value of the zone setting.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Whether the feature is enabled or not.',
              },
              pool_id: {
                type: 'string',
                description:
                  'Egress pool id which refers to a grouping of dedicated egress IPs through which Cloudflare will connect to origin.',
              },
            },
            required: [],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['always_online'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['always_use_https'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['automatic_https_rewrites'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['brotli'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'on'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['browser_cache_ttl'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: [
              0, 30, 60, 120, 300, 1200, 1800, 3600, 7200, 10800, 14400, 18000, 28800, 43200, 57600, 72000,
              86400, 172800, 259200, 345600, 432000, 691200, 1382400, 2073600, 2678400, 5356800, 16070400,
              31536000,
            ],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['browser_check'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['cache_level'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['aggressive', 'basic', 'simplified'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['challenge_ttl'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: [
              300, 900, 1800, 2700, 3600, 7200, 10800, 14400, 28800, 57600, 86400, 604800, 2592000, 31536000,
            ],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['ciphers'],
          },
          value: {
            type: 'array',
            description: 'Current value of the zone setting.',
            items: {
              type: 'string',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'How to flatten the cname destination.',
            enum: ['cname_flattening'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['flatten_at_root', 'flatten_all'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['development_mode'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['early_hints'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['edge_cache_ttl'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: [
              30, 60, 300, 1200, 1800, 3600, 7200, 10800, 14400, 18000, 28800, 43200, 57600, 72000, 86400,
              172800, 259200, 345600, 432000, 518400, 604800,
            ],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['email_obfuscation'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['h2_prioritization'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off', 'custom'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['hotlink_protection'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['http2'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['http3'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['image_resizing'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off', 'open'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['ip_geolocation'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['ipv6'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'on'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'identifier of the zone setting.',
            enum: ['max_upload'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: [100, 200, 500],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['min_tls_version'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['1.0', '1.1', '1.2', '1.3'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['mirage'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Zone setting identifier.',
            enum: ['nel'],
          },
          value: {
            type: 'object',
            description: 'Current value of the zone setting.',
            properties: {
              enabled: {
                type: 'boolean',
              },
            },
            required: [],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['opportunistic_encryption'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['opportunistic_onion'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['orange_to_orange'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['origin_error_page_pass_thru'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Value of the zone setting.',
            enum: ['origin_h2_max_streams'],
          },
          value: {
            type: 'integer',
            description: 'Value of the Origin H2 Max Streams Setting.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Value of the zone setting.',
            enum: ['origin_max_http_version'],
          },
          value: {
            type: 'string',
            description: 'Value of the Origin Max HTTP Version Setting.',
            enum: ['2', '1'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['polish'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'lossless', 'lossy'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['prefetch_preload'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['privacy_pass'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['proxy_read_timeout'],
          },
          value: {
            type: 'number',
            description: 'Current value of the zone setting.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Value of the Pseudo IPv4 setting.',
            enum: ['pseudo_ipv4'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'add_header', 'overwrite_header'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['replace_insecure_js'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['response_buffering'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['rocket_loader'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['automatic_platform_optimization'],
          },
          value: {
            type: 'object',
            properties: {
              cache_by_device_type: {
                type: 'boolean',
                description:
                  'Indicates whether or not [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/) is enabled.',
              },
              cf: {
                type: 'boolean',
                description: 'Indicates whether or not Cloudflare proxy is enabled.',
              },
              enabled: {
                type: 'boolean',
                description: 'Indicates whether or not Automatic Platform Optimization is enabled.',
              },
              hostnames: {
                type: 'array',
                description:
                  'An array of hostnames where Automatic Platform Optimization for WordPress is activated.',
                items: {
                  type: 'string',
                },
              },
              wordpress: {
                type: 'boolean',
                description: 'Indicates whether or not site is powered by WordPress.',
              },
              wp_plugin: {
                type: 'boolean',
                description:
                  'Indicates whether or not [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is installed.',
              },
            },
            required: ['cache_by_device_type', 'cf', 'enabled', 'hostnames', 'wordpress', 'wp_plugin'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: "ID of the zone's security header.",
            enum: ['security_header'],
          },
          value: {
            type: 'object',
            description: 'Current value of the zone setting.',
            properties: {
              strict_transport_security: {
                type: 'object',
                description: 'Strict Transport Security.',
                properties: {
                  enabled: {
                    type: 'boolean',
                    description: 'Whether or not strict transport security is enabled.',
                  },
                  include_subdomains: {
                    type: 'boolean',
                    description: 'Include all subdomains for strict transport security.',
                  },
                  max_age: {
                    type: 'number',
                    description: 'Max age in seconds of the strict transport security.',
                  },
                  nosniff: {
                    type: 'boolean',
                    description: "Whether or not to include 'X-Content-Type-Options: nosniff' header.",
                  },
                  preload: {
                    type: 'boolean',
                    description: 'Enable automatic preload of the HSTS configuration.',
                  },
                },
                required: [],
              },
            },
            required: [],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['security_level'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'essentially_off', 'low', 'medium', 'high', 'under_attack'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['server_side_exclude'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Zone setting identifier.',
            enum: ['sha1_support'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'on'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['sort_query_string_for_cache'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['ssl'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'flexible', 'full', 'strict'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Enrollment value for SSL/TLS Recommender.',
            enum: ['ssl_recommender'],
          },
          enabled: {
            type: 'boolean',
            description: 'ssl-recommender enrollment setting.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'Zone setting identifier.',
            enum: ['tls_1_2_only'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'on'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['tls_1_3'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off', 'zrt'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['tls_client_auth'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['true_client_ip_header'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['waf'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['on', 'off'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['webp'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'on'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          zone_id: {
            type: 'string',
            description: 'Identifier',
          },
          setting_id: {
            type: 'string',
            description: 'Setting name',
          },
          id: {
            type: 'string',
            description: 'ID of the zone setting.',
            enum: ['websockets'],
          },
          value: {
            type: 'string',
            description: 'Current value of the zone setting.',
            enum: ['off', 'on'],
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { setting_id, ...body } = args;
  return client.zones.settings.edit(setting_id, body);
};

export default { metadata, tool, handler };
