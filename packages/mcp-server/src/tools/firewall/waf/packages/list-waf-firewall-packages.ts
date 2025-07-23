// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/waf/packages',
  operationId: 'waf-packages-list-waf-packages',
};

export const tool: Tool = {
  name: 'list_waf_firewall_packages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches WAF packages for a zone.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).\n\n# Response Schema\n```json\n{\n  anyOf: [    {\n      type: 'object',\n      properties: {\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/response_info'\n          }\n        },\n        messages: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/response_info'\n          }\n        },\n        result: {\n          type: 'array',\n          items: {\n            type: 'object'\n          }\n        },\n        success: {\n          type: 'string',\n          description: 'Defines whether the API call was successful.',\n          enum: [            true\n          ]\n        },\n        result_info: {\n          type: 'object',\n          properties: {\n            count: {\n              type: 'number',\n              description: 'Defines the total number of results for the requested service.'\n            },\n            page: {\n              type: 'number',\n              description: 'Defines the current page within paginated list of results.'\n            },\n            per_page: {\n              type: 'number',\n              description: 'Defines the number of results per page of results.'\n            },\n            total_count: {\n              type: 'number',\n              description: 'Defines the total results available without any search parameters.'\n            }\n          }\n        }\n      },\n      required: [        'errors',\n        'messages',\n        'result',\n        'success'\n      ]\n    },\n    {\n      type: 'object',\n      properties: {\n        result: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                type: 'object',\n                title: 'Traditional WAF package',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Defines an identifier.'\n                  },\n                  description: {\n                    type: 'string',\n                    description: 'A summary of the purpose/function of the WAF package.'\n                  },\n                  detection_mode: {\n                    type: 'string',\n                    description: 'The mode that defines how rules within the package are evaluated during the course of a request. When a package uses anomaly detection mode (`anomaly` value), each rule is given a score when triggered. If the total score of all triggered rules exceeds the sensitivity defined in the WAF package, the action configured in the package will be performed. Traditional detection mode (`traditional` value) will decide the action to take when it is triggered by the request. If multiple rules are triggered, the action providing the highest protection will be applied (for example, a \\'block\\' action will win over a \\'challenge\\' action).',\n                    enum: [                      'anomaly',\n                      'traditional'\n                    ]\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the WAF package.'\n                  },\n                  zone_id: {\n                    type: 'string',\n                    description: 'Defines an identifier.'\n                  },\n                  status: {\n                    type: 'string',\n                    description: 'When set to `active`, indicates that the WAF package will be applied to the zone.',\n                    enum: [                      'active'\n                    ]\n                  }\n                },\n                required: [                  'id',\n                  'description',\n                  'detection_mode',\n                  'name',\n                  'zone_id'\n                ]\n              },\n              {\n                type: 'object',\n                title: 'Anomaly detection WAF package (OWASP)',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'Defines an identifier.'\n                  },\n                  description: {\n                    type: 'string',\n                    description: 'A summary of the purpose/function of the WAF package.'\n                  },\n                  detection_mode: {\n                    type: 'string',\n                    description: 'When a WAF package uses anomaly detection, each rule is given a score when triggered. If the total score of all triggered rules exceeds the sensitivity defined on the WAF package, the action defined on the package will be taken.',\n                    enum: [                      'anomaly',\n                      'traditional'\n                    ]\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'The name of the WAF package.'\n                  },\n                  zone_id: {\n                    type: 'string',\n                    description: 'Defines an identifier.'\n                  },\n                  action_mode: {\n                    type: 'string',\n                    description: 'The default action performed by the rules in the WAF package.',\n                    enum: [                      'simulate',\n                      'block',\n                      'challenge'\n                    ]\n                  },\n                  sensitivity: {\n                    type: 'string',\n                    description: 'The sensitivity of the WAF package.',\n                    enum: [                      'high',\n                      'medium',\n                      'low',\n                      'off'\n                    ]\n                  },\n                  status: {\n                    type: 'string',\n                    description: 'When set to `active`, indicates that the WAF package will be applied to the zone.',\n                    enum: [                      'active'\n                    ]\n                  }\n                },\n                required: [                  'id',\n                  'description',\n                  'detection_mode',\n                  'name',\n                  'zone_id'\n                ]\n              }\n            ]\n          }\n        }\n      }\n    }\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned packages.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      name: {
        type: 'string',
        description: 'The name of the WAF package.',
      },
      order: {
        type: 'string',
        description: 'The field used to sort returned packages.',
        enum: ['name'],
      },
      page: {
        type: 'number',
        description: 'The page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'The number of packages per page.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.firewall.waf.packages.list(body)) as object);
};

export default { metadata, tool, handler };
