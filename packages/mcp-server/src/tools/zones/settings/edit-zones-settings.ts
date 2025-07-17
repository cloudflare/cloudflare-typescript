// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/settings/{setting_id}',
  operationId: 'zone-settings-edit-single-setting',
};

export const tool: Tool = {
  name: 'edit_zones_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a single zone setting by the identifier",
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
          enabled: {
            type: 'boolean',
            description: 'ssl-recommender enrollment setting.',
          },
        },
        required: ['zone_id', 'setting_id'],
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
          value: {
            anyOf: [
              {
                type: 'object',
              },
              {
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
              },
              {
                type: 'array',
                description: 'Value of the zone setting.',
                items: {
                  type: 'string',
                },
              },
              {
                type: 'object',
                description: 'Value of the zone setting.',
                properties: {
                  enabled: {
                    type: 'boolean',
                  },
                },
              },
              {
                type: 'number',
                description: 'Value of the zone setting.\nNotes: Value must be between 1 and 6000',
              },
              {
                $ref: '#/$defs/automatic_platform_optimization',
              },
              {
                type: 'object',
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
                  },
                },
              },
            ],
            description: 'Value of the zone setting.',
          },
        },
        required: ['zone_id', 'setting_id'],
      },
    ],
    $defs: {
      automatic_platform_optimization: {
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { setting_id, ...body } = args as any;
  return asTextContentResult(await client.zones.settings.edit(setting_id, body));
};

export default { metadata, tool, handler };
