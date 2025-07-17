// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing User Agent Blocking rule.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the User Agent Blocking rule.'\n        },\n        configuration: {\n          type: 'object',\n          description: 'The configuration object for the current rule.',\n          properties: {\n            target: {\n              type: 'string',\n              description: 'The configuration target for this rule. You must set the target to `ua` for User Agent Blocking rules.'\n            },\n            value: {\n              type: 'string',\n              description: 'The exact user agent string to match. This value will be compared to the received `User-Agent` HTTP header value.'\n            }\n          }\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the rule.'\n        },\n        mode: {\n          type: 'string',\n          description: 'The action to apply to a matched request.',\n          enum: [            'block',\n            'challenge',\n            'js_challenge',\n            'managed_challenge'\n          ]\n        },\n        paused: {\n          type: 'boolean',\n          description: 'When true, indicates that the rule is currently paused.'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      description: {
        type: 'string',
        description:
          'An informative summary of the rule. This value is sanitized and any tags will be removed.',
      },
      paused: {
        type: 'boolean',
        description: 'When true, indicates that the rule is currently paused.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'ua_rule_id', 'configuration', 'mode'],
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
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ua_rule_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.firewall.uaRules.update(ua_rule_id, body)));
};

export default { metadata, tool, handler };
