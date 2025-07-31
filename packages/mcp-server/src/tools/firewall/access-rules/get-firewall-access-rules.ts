// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.access_rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}',
};

export const tool: Tool = {
  name: 'get_firewall_access_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the details of an IP Access rule defined.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the IP Access rule.'\n        },\n        allowed_modes: {\n          type: 'array',\n          description: 'The available actions that a rule can apply to a matched request.',\n          items: {\n            type: 'string',\n            description: 'The action to apply to a matched request.',\n            enum: [              'block',\n              'challenge',\n              'whitelist',\n              'js_challenge',\n              'managed_challenge'\n            ]\n          }\n        },\n        configuration: {\n          anyOf: [            {\n              $ref: '#/$defs/access_rule_ip_configuration'\n            },\n            {\n              $ref: '#/$defs/ipv6_configuration'\n            },\n            {\n              $ref: '#/$defs/access_rule_cidr_configuration'\n            },\n            {\n              $ref: '#/$defs/asn_configuration'\n            },\n            {\n              $ref: '#/$defs/country_configuration'\n            }\n          ],\n          description: 'The rule configuration.'\n        },\n        mode: {\n          type: 'string',\n          description: 'The action to apply to a matched request.',\n          enum: [            'block',\n            'challenge',\n            'whitelist',\n            'js_challenge',\n            'managed_challenge'\n          ]\n        },\n        created_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was created.',\n          format: 'date-time'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was last modified.',\n          format: 'date-time'\n        },\n        notes: {\n          type: 'string',\n          description: 'An informative summary of the rule, typically used as a reminder or explanation.'\n        },\n        scope: {\n          type: 'object',\n          description: 'All zones owned by the user will have the rule applied.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Defines an identifier.'\n            },\n            email: {\n              type: 'string',\n              description: 'The contact email address of the user.'\n            },\n            type: {\n              type: 'string',\n              description: 'Defines the scope of the rule.',\n              enum: [                'user',\n                'organization'\n              ]\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'allowed_modes',\n        'configuration',\n        'mode'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    access_rule_ip_configuration: {\n      type: 'object',\n      title: 'An IP address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip` when specifying an IP address in the rule.',\n          enum: [            'ip'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address to match. This address will be compared to the IP address of incoming requests.'\n        }\n      }\n    },\n    ipv6_configuration: {\n      type: 'object',\n      title: 'An IPv6 address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip6` when specifying an IPv6 address in the rule.',\n          enum: [            'ip6'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IPv6 address to match.'\n        }\n      }\n    },\n    access_rule_cidr_configuration: {\n      type: 'object',\n      title: 'An IP address range configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the rule.',\n          enum: [            'ip_range'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address range to match. You can only use prefix lengths `/16` and `/24` for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.'\n        }\n      }\n    },\n    asn_configuration: {\n      type: 'object',\n      title: 'An ASN configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `asn` when specifying an Autonomous System Number (ASN) in the rule.',\n          enum: [            'asn'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The AS number to match.'\n        }\n      }\n    },\n    country_configuration: {\n      type: 'object',\n      title: 'A country configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `country` when specifying a country code in the rule.',\n          enum: [            'country'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      rule_id: {
        type: 'string',
        description: 'Unique identifier for a rule.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['rule_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.firewall.accessRules.get(rule_id, body)),
  );
};

export default { metadata, tool, handler };
