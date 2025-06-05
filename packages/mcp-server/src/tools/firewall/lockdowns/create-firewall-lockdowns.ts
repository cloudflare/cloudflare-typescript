// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/firewall/lockdowns',
  operationId: 'zone-lockdown-create-a-zone-lockdown-rule',
};

export const tool: Tool = {
  name: 'create_firewall_lockdowns',
  description: 'Creates a new Zone Lockdown rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      configurations: {
        $ref: '#/$defs/configuration',
      },
      urls: {
        type: 'array',
        description:
          'The URLs to include in the current WAF override. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',
        items: {
          $ref: '#/$defs/override_url',
        },
      },
      description: {
        type: 'string',
        description:
          'An informative summary of the rate limit. This value is sanitized and any tags will be removed.',
      },
      paused: {
        type: 'boolean',
        description: 'When true, indicates that the rule is currently paused.',
      },
      priority: {
        type: 'number',
        description:
          'The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.',
      },
    },
    $defs: {
      configuration: {
        type: 'array',
        description:
          'A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations.',
        items: {
          anyOf: [
            {
              $ref: '#/$defs/lockdown_ip_configuration',
            },
            {
              $ref: '#/$defs/lockdown_cidr_configuration',
            },
          ],
        },
      },
      lockdown_ip_configuration: {
        type: 'object',
        title: 'An IP address configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.',
            enum: ['ip'],
          },
          value: {
            type: 'string',
            description:
              'The IP address to match. This address will be compared to the IP address of incoming requests.',
          },
        },
        required: [],
      },
      lockdown_cidr_configuration: {
        type: 'object',
        title: 'An IP address range configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the Zone Lockdown rule.',
            enum: ['ip_range'],
          },
          value: {
            type: 'string',
            description: 'The IP address range to match. You can only use prefix lengths `/16` and `/24`.',
          },
        },
        required: [],
      },
      override_url: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.firewall.lockdowns.create(body));
};

export default { metadata, tool, handler };
