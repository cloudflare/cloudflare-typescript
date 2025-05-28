// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.ua_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/firewall/ua_rules/{ua_rule_id}',
  operationId: 'user-agent-blocking-rules-update-a-user-agent-blocking-rule',
};

export const tool: Tool = {
  name: 'update_firewall_ua_rules',
  description: 'Updates an existing User Agent Blocking rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      ua_rule_id: {
        type: 'string',
        description: 'The unique identifier of the User Agent Blocking rule.',
      },
      configuration: {
        anyOf: [
          {
            $ref: '#/$defs/access_rule_ip_configuration',
          },
          {
            $ref: '#/$defs/ipv6_configuration',
          },
          {
            $ref: '#/$defs/access_rule_cidr_configuration',
          },
          {
            $ref: '#/$defs/asn_configuration',
          },
          {
            $ref: '#/$defs/country_configuration',
          },
        ],
        description: 'The rule configuration.',
      },
      mode: {
        type: 'string',
        description: 'The action to apply to a matched request.',
        enum: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'],
      },
    },
    $defs: {
      access_rule_ip_configuration: {
        type: 'object',
        title: 'An IP address configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `ip` when specifying an IP address in the rule.',
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
      ipv6_configuration: {
        type: 'object',
        title: 'An IPv6 address configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `ip6` when specifying an IPv6 address in the rule.',
            enum: ['ip6'],
          },
          value: {
            type: 'string',
            description: 'The IPv6 address to match.',
          },
        },
        required: [],
      },
      access_rule_cidr_configuration: {
        type: 'object',
        title: 'An IP address range configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the rule.',
            enum: ['ip_range'],
          },
          value: {
            type: 'string',
            description:
              'The IP address range to match. You can only use prefix lengths `/16` and `/24` for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.',
          },
        },
        required: [],
      },
      asn_configuration: {
        type: 'object',
        title: 'An ASN configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `asn` when specifying an Autonomous System Number (ASN) in the rule.',
            enum: ['asn'],
          },
          value: {
            type: 'string',
            description: 'The AS number to match.',
          },
        },
        required: [],
      },
      country_configuration: {
        type: 'object',
        title: 'A country configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `country` when specifying a country code in the rule.',
            enum: ['country'],
          },
          value: {
            type: 'string',
            description:
              'The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ua_rule_id, ...body } = args as any;
  return client.firewall.uaRules.update(ua_rule_id, body);
};

export default { metadata, tool, handler };
