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
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules',
};

export const tool: Tool = {
  name: 'list_firewall_access_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches IP Access rules of an account or zone. These rules apply to all the zones in the account or zone. You can filter the results using several optional parameters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The unique identifier of the IP Access rule.'\n          },\n          allowed_modes: {\n            type: 'array',\n            description: 'The available actions that a rule can apply to a matched request.',\n            items: {\n              type: 'string',\n              description: 'The action to apply to a matched request.',\n              enum: [                'block',\n                'challenge',\n                'whitelist',\n                'js_challenge',\n                'managed_challenge'\n              ]\n            }\n          },\n          configuration: {\n            anyOf: [              {\n                $ref: '#/$defs/access_rule_ip_configuration'\n              },\n              {\n                $ref: '#/$defs/ipv6_configuration'\n              },\n              {\n                $ref: '#/$defs/access_rule_cidr_configuration'\n              },\n              {\n                $ref: '#/$defs/asn_configuration'\n              },\n              {\n                $ref: '#/$defs/country_configuration'\n              }\n            ],\n            description: 'The rule configuration.'\n          },\n          mode: {\n            type: 'string',\n            description: 'The action to apply to a matched request.',\n            enum: [              'block',\n              'challenge',\n              'whitelist',\n              'js_challenge',\n              'managed_challenge'\n            ]\n          },\n          created_on: {\n            type: 'string',\n            description: 'The timestamp of when the rule was created.',\n            format: 'date-time'\n          },\n          modified_on: {\n            type: 'string',\n            description: 'The timestamp of when the rule was last modified.',\n            format: 'date-time'\n          },\n          notes: {\n            type: 'string',\n            description: 'An informative summary of the rule, typically used as a reminder or explanation.'\n          },\n          scope: {\n            type: 'object',\n            description: 'All zones owned by the user will have the rule applied.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Defines an identifier.'\n              },\n              email: {\n                type: 'string',\n                description: 'The contact email address of the user.'\n              },\n              type: {\n                type: 'string',\n                description: 'Defines the scope of the rule.',\n                enum: [                  'user',\n                  'organization'\n                ]\n              }\n            }\n          }\n        },\n        required: [          'id',\n          'allowed_modes',\n          'configuration',\n          'mode'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Defines the total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Defines the current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Defines the number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Defines the total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    access_rule_ip_configuration: {\n      type: 'object',\n      title: 'An IP address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip` when specifying an IP address in the rule.',\n          enum: [            'ip'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address to match. This address will be compared to the IP address of incoming requests.'\n        }\n      }\n    },\n    ipv6_configuration: {\n      type: 'object',\n      title: 'An IPv6 address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip6` when specifying an IPv6 address in the rule.',\n          enum: [            'ip6'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IPv6 address to match.'\n        }\n      }\n    },\n    access_rule_cidr_configuration: {\n      type: 'object',\n      title: 'An IP address range configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the rule.',\n          enum: [            'ip_range'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address range to match. You can only use prefix lengths `/16` and `/24` for IPv4 ranges, and prefix lengths `/32`, `/48`, and `/64` for IPv6 ranges.'\n        }\n      }\n    },\n    asn_configuration: {\n      type: 'object',\n      title: 'An ASN configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `asn` when specifying an Autonomous System Number (ASN) in the rule.',\n          enum: [            'asn'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The AS number to match.'\n        }\n      }\n    },\n    country_configuration: {\n      type: 'object',\n      title: 'A country configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `country` when specifying a country code in the rule.',\n          enum: [            'country'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The two-letter ISO-3166-1 alpha-2 code to match. For more information, refer to [IP Access rules: Parameters](https://developers.cloudflare.com/waf/tools/ip-access-rules/parameters/#country).'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      configuration: {
        type: 'object',
        properties: {
          target: {
            type: 'string',
            description: 'Defines the target to search in existing rules.',
            enum: ['ip', 'ip_range', 'asn', 'country'],
          },
          value: {
            type: 'string',
            description:
              "Defines the target value to search for in existing rules: an IP address, an IP address range, or a country code, depending on the provided `configuration.target`.\nNotes: You can search for a single IPv4 address, an IP address range with a subnet of '/16' or '/24', or a two-letter ISO-3166-1 alpha-2 country code.",
          },
        },
      },
      direction: {
        type: 'string',
        description: 'Defines the direction used to sort returned rules.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'Defines the search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      mode: {
        type: 'string',
        description: 'The action to apply to a matched request.',
        enum: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'],
      },
      notes: {
        type: 'string',
        description:
          "Defines the string to search for in the notes of existing IP Access rules.\nNotes: For example, the string 'attack' would match IP Access rules with notes 'Attack 26/02' and 'Attack 27/02'. The search is case insensitive.",
      },
      order: {
        type: 'string',
        description: 'Defines the field used to sort returned rules.',
        enum: ['configuration.target', 'configuration.value', 'mode'],
      },
      page: {
        type: 'number',
        description: 'Defines the requested page within paginated list of results.',
      },
      per_page: {
        type: 'number',
        description: 'Defines the maximum number of results requested.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.firewall.accessRules.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
