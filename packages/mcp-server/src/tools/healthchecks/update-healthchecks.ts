// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'healthchecks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_healthchecks',
  description: 'Update a configured health check.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      healthcheck_id: {
        type: 'string',
        description: 'Identifier',
      },
      address: {
        type: 'string',
        description: 'The hostname or IP address of the origin server to run health checks on.',
      },
      name: {
        type: 'string',
        description:
          'A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.',
      },
      check_regions: {
        type: 'array',
        description:
          'A list of regions from which to run health checks. Null means Cloudflare will pick a default region.',
        items: {
          type: 'string',
          description:
            'WNAM: Western North America, ENAM: Eastern North America, WEU: Western Europe, EEU: Eastern Europe, NSAM: Northern South America, SSAM: Southern South America, OC: Oceania, ME: Middle East, NAF: North Africa, SAF: South Africa, IN: India, SEAS: South East Asia, NEAS: North East Asia, ALL_REGIONS: all regions (BUSINESS and ENTERPRISE customers only).',
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
            'IN',
            'SEAS',
            'NEAS',
            'ALL_REGIONS',
          ],
        },
      },
      consecutive_fails: {
        type: 'integer',
        description:
          'The number of consecutive fails required from a health check before changing the health to unhealthy.',
      },
      consecutive_successes: {
        type: 'integer',
        description:
          'The number of consecutive successes required from a health check before changing the health to healthy.',
      },
      description: {
        type: 'string',
        description: 'A human-readable description of the health check.',
      },
      http_config: {
        type: 'object',
        description: 'Parameters specific to an HTTP or HTTPS health check.',
        properties: {
          allow_insecure: {
            type: 'boolean',
            description: 'Do not validate the certificate when the health check uses HTTPS.',
          },
          expected_body: {
            type: 'string',
            description:
              'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.',
          },
          expected_codes: {
            type: 'array',
            description:
              'The expected HTTP response codes (e.g. "200") or code ranges (e.g. "2xx" for all codes starting with 2) of the health check.',
            items: {
              type: 'string',
            },
          },
          follow_redirects: {
            type: 'boolean',
            description: 'Follow redirects if the origin returns a 3xx status code.',
          },
          header: {
            type: 'object',
            description:
              'The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden.',
          },
          method: {
            type: 'string',
            description: 'The HTTP method to use for the health check.',
            enum: ['GET', 'HEAD'],
          },
          path: {
            type: 'string',
            description: 'The endpoint path to health check against.',
          },
          port: {
            type: 'integer',
            description:
              'Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.',
          },
        },
        required: [],
      },
      interval: {
        type: 'integer',
        description:
          'The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.',
      },
      retries: {
        type: 'integer',
        description:
          'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.',
      },
      suspended: {
        type: 'boolean',
        description: 'If suspended, no health checks are sent to the origin.',
      },
      tcp_config: {
        type: 'object',
        description: 'Parameters specific to TCP health check.',
        properties: {
          method: {
            type: 'string',
            description: 'The TCP connection method to use for the health check.',
            enum: ['connection_established'],
          },
          port: {
            type: 'integer',
            description: 'Port number to connect to for the health check. Defaults to 80.',
          },
        },
        required: [],
      },
      timeout: {
        type: 'integer',
        description: 'The timeout (in seconds) before marking the health check as failed.',
      },
      type: {
        type: 'string',
        description:
          "The protocol to use for the health check. Currently supported protocols are 'HTTP', 'HTTPS' and 'TCP'.",
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { healthcheck_id, ...body } = args;
  return client.healthchecks.update(healthcheck_id, body);
};

export default { metadata, tool, handler };
