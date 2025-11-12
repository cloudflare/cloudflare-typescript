// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.access_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules',
};

export const tool: Tool = {
  name: 'create_firewall_access_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new IP Access rule for an account or zone. The rule will apply to all zones in the account or zone.\n\nNote: To create an IP Access rule that applies to a single zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/access_rule_create_response',\n  $defs: {\n    access_rule_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the IP Access rule.'\n        },\n        allowed_modes: {\n          type: 'array',\n          description: 'The available actions that a rule can apply to a matched request.',\n          items: {\n            type: 'string',\n            description: 'The action to apply to a matched request.',\n            enum: [              'block',\n              'challenge',\n              'whitelist',\n              'js_challenge',\n              'managed_challenge'\n            ]\n          }\n        },\n        configuration: {\n          anyOf: [            {\n              $ref: '#/$defs/access_rule_ip_configuration'\n            },\n            {\n              $ref: '#/$defs/ipv6_configuration'\n            },\n            {\n              $ref: '#/$defs/access_rule_cidr_configuration'\n            },\n            {\n              $ref: '#/$defs/asn_configuration'\n            },\n            {\n              $ref: '#/$defs/country_configuration'\n            }\n          ],\n          description: 'The rule configuration.'\n        },\n        mode: {\n          type: 'string',\n          description: 'The action to apply to a matched request.',\n          enum: [            'block',\n            'challenge',\n            'whitelist',\n            'js_challenge',\n            'managed_challenge'\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was created.',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was last modified.',\n          format: 'date-time'\n        },\n        notes: {\n          type: 'string',\n          description: 'An informative summary of the rule, typically used as a reminder or explanation.'\n        },\n        scope: {\n          type: 'object',\n          description: 'All zones owned by the user will have the rule applied.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Defines an identifier.'\n            },\n            email: {\n              type: 'string',\n              description: 'The contact email address of the user.'\n            },\n            type: {\n              type: 'string',\n              description: 'Defines the scope of the rule.',\n              enum: [                'user',\n                'organization'\n              ]\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'allowed_modes',\n        'configuration',\n        'mode'\n      ]\n    },\n    access_rule_ip_configuration: {\n      type: 'object',\n      title: 'An IP address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip` when specifying an IP address in the rule.',\n          enum: [            'ip'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address to match. This address will be compared to the IP address of incoming requests.'\n        }\n      }\n    },\n    ipv6_configuration: {\n      type: 'object',\n      title: 'An IPv6 address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip6` when specifying an IPv6 address in the rule.',\n          enum: [            'ip6'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IPv6 address to match.'\n        }\n      }\n    },\n    access_rule_cidr_configuration: {\n      type: 'object',\n      title: 'An IP address range configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the rule.',\n          enum: [            'ip_range'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address range to match. You can only use prefix lengths `/16` and `/24` for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.'\n        }\n      }\n    },\n    asn_configuration: {\n      type: 'object',\n      title: 'An ASN configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `asn` when specifying an Autonomous System Number (ASN) in the rule.',\n          enum: [            'asn'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The AS number to match.'\n        }\n      }\n    },\n    country_configuration: {\n      type: 'object',\n      title: 'A country configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `country` when specifying a country code in the rule.',\n          enum: [            'country'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      notes: {
        type: 'string',
        description: 'An informative summary of the rule, typically used as a reminder or explanation.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['configuration', 'mode'],
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.firewall.accessRules.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
