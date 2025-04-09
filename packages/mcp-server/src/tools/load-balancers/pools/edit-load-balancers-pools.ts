// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_load_balancers_pools',
  description: 'Apply changes to an existing pool, overwriting the supplied properties.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      pool_id: {
        type: 'string',
      },
      check_regions: {
        type: 'array',
        description:
          'A list of regions from which to run health checks. Null means every Cloudflare data center.',
        items: {
          type: 'string',
          description:
            'WNAM: Western North America, ENAM: Eastern North America, WEU: Western Europe, EEU: Eastern Europe, NSAM: Northern South America, SSAM: Southern South America, OC: Oceania, ME: Middle East, NAF: North Africa, SAF: South Africa, SAS: Southern Asia, SEAS: South East Asia, NEAS: North East Asia, ALL_REGIONS: all regions (ENTERPRISE customers only).',
          enum: [
            'WNAM',
            'ENAM',
            'WEU',
            'EEU',
            'NSAM',
            'SSAM',
            'OC',
            'ME',
            'NAF',
            'SAF',
            'SAS',
            'SEAS',
            'NEAS',
            'ALL_REGIONS',
          ],
        },
      },
      description: {
        type: 'string',
        description: 'A human-readable description of the pool.',
      },
      enabled: {
        type: 'boolean',
        description:
          'Whether to enable (the default) or disable this pool. Disabled pools will not receive traffic and are excluded from health checks. Disabling a pool will cause any load balancers using it to failover to the next pool (if any).',
      },
      latitude: {
        type: 'number',
        description:
          'The latitude of the data center containing the origins used in this pool in decimal degrees. If this is set, longitude must also be set.',
      },
      load_shedding: {
        type: 'object',
        description: 'Configures load shedding policies and percentages for the pool.',
        properties: {
          default_percent: {
            type: 'number',
            description:
              'The percent of traffic to shed from the pool, according to the default policy. Applies to new sessions and traffic without session affinity.',
          },
          default_policy: {
            type: 'string',
            description:
              'The default policy to use when load shedding. A random policy randomly sheds a given percent of requests. A hash policy computes a hash over the CF-Connecting-IP address and sheds all requests originating from a percent of IPs.',
            enum: ['random', 'hash'],
          },
          session_percent: {
            type: 'number',
            description:
              'The percent of existing sessions to shed from the pool, according to the session policy.',
          },
          session_policy: {
            type: 'string',
            description:
              'Only the hash policy is supported for existing sessions (to avoid exponential decay).',
            enum: ['hash'],
          },
        },
        required: [],
      },
      longitude: {
        type: 'number',
        description:
          'The longitude of the data center containing the origins used in this pool in decimal degrees. If this is set, latitude must also be set.',
      },
      minimum_origins: {
        type: 'integer',
        description:
          'The minimum number of origins that must be healthy for this pool to serve traffic. If the number of healthy origins falls below this number, the pool will be marked unhealthy and will failover to the next available pool.',
      },
      monitor: {
        type: 'string',
        description: 'The ID of the Monitor to use for checking the health of origins within this pool.',
      },
      name: {
        type: 'string',
        description:
          'A short name (tag) for the pool. Only alphanumeric characters, hyphens, and underscores are allowed.',
      },
      notification_email: {
        type: 'string',
        description:
          "This field is now deprecated. It has been moved to Cloudflare's Centralized Notification service https://developers.cloudflare.com/fundamentals/notifications/. The email address to send health status notifications to. This can be an individual mailbox or a mailing list. Multiple emails can be supplied as a comma delimited list.",
      },
      notification_filter: {
        type: 'object',
        description:
          'Filter pool and origin health notifications by resource type or health status. Use null to reset.',
        properties: {
          origin: {
            type: 'object',
            description: 'Filter options for a particular resource type (pool or origin). Use null to reset.',
            properties: {
              disable: {
                type: 'boolean',
                description: 'If set true, disable notifications for this type of resource (pool or origin).',
              },
              healthy: {
                type: 'boolean',
                description:
                  'If present, send notifications only for this health status (e.g. false for only DOWN events). Use null to reset (all events).',
              },
            },
            required: [],
          },
          pool: {
            $ref: '#/properties/notification_filter/origin',
          },
        },
        required: [],
      },
      origin_steering: {
        type: 'object',
        description:
          'Configures origin steering for the pool. Controls how origins are selected for new sessions and traffic without session affinity.',
        properties: {
          policy: {
            type: 'string',
            description:
              'The type of origin steering policy to use.\n- `"random"`: Select an origin randomly.\n- `"hash"`: Select an origin by computing a hash over the CF-Connecting-IP address.\n- `"least_outstanding_requests"`: Select an origin by taking into consideration origin weights, as well as each origin\'s number of outstanding requests. Origins with more pending requests are weighted proportionately less relative to others.\n- `"least_connections"`: Select an origin by taking into consideration origin weights, as well as each origin\'s number of open connections. Origins with more open connections are weighted proportionately less relative to others. Supported for HTTP/1 and HTTP/2 connections.',
            enum: ['random', 'hash', 'least_outstanding_requests', 'least_connections'],
          },
        },
        required: [],
      },
      origins: {
        type: 'array',
        description:
          'The list of origins within this pool. Traffic directed at this pool is balanced across all currently healthy origins, provided the pool itself is healthy.',
        items: {
          type: 'object',
          properties: {
            address: {
              type: 'string',
              description:
                'The IP address (IPv4 or IPv6) of the origin, or its publicly addressable hostname. Hostnames entered here should resolve directly to the origin, and not be a hostname proxied by Cloudflare. To set an internal/reserved address, virtual_network_id must also be set.',
            },
            disabled_at: {
              type: 'string',
              description:
                'This field shows up only if the origin is disabled. This field is set with the time the origin was disabled.',
              format: 'date-time',
            },
            enabled: {
              type: 'boolean',
              description:
                'Whether to enable (the default) this origin within the pool. Disabled origins will not receive traffic and are excluded from health checks. The origin will only be disabled for the current pool.',
            },
            header: {
              type: 'object',
              description:
                "The request header is used to pass additional information with an HTTP request. Currently supported header is 'Host'.",
              properties: {
                Host: {
                  type: 'array',
                  description:
                    "The 'Host' header allows to override the hostname set in the HTTP request. Current support is 1 'Host' header override per origin.",
                  items: {
                    type: 'string',
                  },
                },
              },
              required: [],
            },
            name: {
              type: 'string',
              description: 'A human-identifiable name for the origin.',
            },
            virtual_network_id: {
              type: 'string',
              description:
                'The virtual network subnet ID the origin belongs in. Virtual network must also belong to the account.',
            },
            weight: {
              type: 'number',
              description:
                'The weight of this origin relative to other origins in the pool. Based on the configured weight the total traffic is distributed among origins within the pool.\n- `origin_steering.policy="least_outstanding_requests"`: Use weight to scale the origin\'s outstanding requests.\n- `origin_steering.policy="least_connections"`: Use weight to scale the origin\'s open connections.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { pool_id, ...body } = args;
  return client.loadBalancers.pools.edit(pool_id, body);
};

export default { metadata, tool, handler };
