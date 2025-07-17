// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}',
  operationId: 'waf-rules-update-a-waf-rule',
};

export const tool: Tool = {
  name: 'edit_packages_waf_firewall_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a WAF rule. You can only update the mode/action of the rule.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      anyOf: [        {\n          type: 'object',\n          title: 'Anomaly detection WAF rule',\n          description: 'When triggered, anomaly detection WAF rules contribute to an overall threat score that will determine if a request is considered malicious. You can configure the total scoring threshold through the \\'sensitivity\\' property of the WAF package.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Defines the unique identifier of the WAF rule.'\n            },\n            allowed_modes: {\n              type: 'array',\n              description: 'Defines the available modes for the current WAF rule. Applies to anomaly detection WAF rules.',\n              items: {\n                $ref: '#/$defs/allowed_modes_anomaly'\n              }\n            },\n            description: {\n              type: 'string',\n              description: 'Defines the public description of the WAF rule.'\n            },\n            group: {\n              $ref: '#/$defs/waf_rule_group'\n            },\n            mode: {\n              $ref: '#/$defs/allowed_modes_anomaly'\n            },\n            package_id: {\n              type: 'string',\n              description: 'Defines the unique identifier of a WAF package.'\n            },\n            priority: {\n              type: 'string',\n              description: 'Defines the order in which the individual WAF rule is executed within its rule group.'\n            }\n          },\n          required: [            'id',\n            'allowed_modes',\n            'description',\n            'group',\n            'mode',\n            'package_id',\n            'priority'\n          ]\n        },\n        {\n          type: 'object',\n          title: 'Traditional (deny) WAF rule',\n          description: 'When triggered, traditional WAF rules cause the firewall to immediately act upon the request based on the configuration of the rule. A \\'deny\\' rule will immediately respond to the request based on the configured rule action/mode (for example, \\'block\\') and no other rules will be processed.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Defines the unique identifier of the WAF rule.'\n            },\n            allowed_modes: {\n              type: 'array',\n              description: 'Defines the list of possible actions of the WAF rule when it is triggered.',\n              items: {\n                type: 'string',\n                description: 'Defines the action that the current WAF rule will perform when triggered. Applies to traditional (deny) WAF rules.',\n                enum: [                  'default',\n                  'disable',\n                  'simulate',\n                  'block',\n                  'challenge'\n                ]\n              }\n            },\n            default_mode: {\n              type: 'string',\n              description: 'Defines the default action/mode of a rule.',\n              enum: [                'disable',\n                'simulate',\n                'block',\n                'challenge'\n              ]\n            },\n            description: {\n              type: 'string',\n              description: 'Defines the public description of the WAF rule.'\n            },\n            group: {\n              $ref: '#/$defs/waf_rule_group'\n            },\n            mode: {\n              type: 'string',\n              description: 'Defines the action that the current WAF rule will perform when triggered. Applies to traditional (deny) WAF rules.',\n              enum: [                'default',\n                'disable',\n                'simulate',\n                'block',\n                'challenge'\n              ]\n            },\n            package_id: {\n              type: 'string',\n              description: 'Defines the unique identifier of a WAF package.'\n            },\n            priority: {\n              type: 'string',\n              description: 'Defines the order in which the individual WAF rule is executed within its rule group.'\n            }\n          },\n          required: [            'id',\n            'allowed_modes',\n            'default_mode',\n            'description',\n            'group',\n            'mode',\n            'package_id',\n            'priority'\n          ]\n        },\n        {\n          type: 'object',\n          title: 'Traditional (allow) WAF rule',\n          description: 'When triggered, traditional WAF rules cause the firewall to immediately act on the request based on the rule configuration. An \\'allow\\' rule will immediately allow the request and no other rules will be processed.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Defines the unique identifier of the WAF rule.'\n            },\n            allowed_modes: {\n              type: 'array',\n              description: 'Defines the available modes for the current WAF rule.',\n              items: {\n                type: 'string',\n                description: 'When set to `on`, the current rule will be used when evaluating the request. Applies to traditional (allow) WAF rules.',\n                enum: [                  'on',\n                  'off'\n                ]\n              }\n            },\n            description: {\n              type: 'string',\n              description: 'Defines the public description of the WAF rule.'\n            },\n            group: {\n              $ref: '#/$defs/waf_rule_group'\n            },\n            mode: {\n              type: 'string',\n              description: 'When set to `on`, the current rule will be used when evaluating the request. Applies to traditional (allow) WAF rules.',\n              enum: [                'on',\n                'off'\n              ]\n            },\n            package_id: {\n              type: 'string',\n              description: 'Defines the unique identifier of a WAF package.'\n            },\n            priority: {\n              type: 'string',\n              description: 'Defines the order in which the individual WAF rule is executed within its rule group.'\n            }\n          },\n          required: [            'id',\n            'allowed_modes',\n            'description',\n            'group',\n            'mode',\n            'package_id',\n            'priority'\n          ]\n        }\n      ],\n      description: 'When triggered, anomaly detection WAF rules contribute to an overall threat score that will determine if a request is considered malicious. You can configure the total scoring threshold through the \\'sensitivity\\' property of the WAF package.'\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    allowed_modes_anomaly: {\n      type: 'string',\n      description: 'Defines the mode anomaly. When set to `on`, the current WAF rule will be used when evaluating the request. Applies to anomaly detection WAF rules.',\n      enum: [        'on',\n        'off'\n      ]\n    },\n    waf_rule_group: {\n      type: 'object',\n      description: 'Defines the rule group to which the current WAF rule belongs.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Defines the unique identifier of the rule group.'\n        },\n        name: {\n          type: 'string',\n          description: 'Defines the name of the rule group.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier of a schema.',
      },
      package_id: {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
      },
      rule_id: {
        type: 'string',
        description: 'Defines the unique identifier of a WAF package.',
      },
      mode: {
        type: 'string',
        description:
          'Defines the mode/action of the rule when triggered. You must use a value from the `allowed_modes` array of the current rule.',
        enum: ['default', 'disable', 'simulate', 'block', 'challenge', 'on', 'off'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'package_id', 'rule_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.firewall.waf.packages.rules.edit(rule_id, body)),
  );
};

export default { metadata, tool, handler };
