// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.waf.packages.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/waf/packages/{package_id}/groups',
  operationId: 'waf-rule-groups-list-waf-rule-groups',
};

export const tool: Tool = {
  name: 'list_packages_waf_firewall_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the WAF rule groups in a WAF package.\n\n**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/group'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Defines the total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Defines the current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Defines the number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Defines the total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    group: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Defines the unique identifier of the rule group.'\n        },\n        description: {\n          type: 'string',\n          description: 'Defines an informative summary of what the rule group does.'\n        },\n        mode: {\n          type: 'string',\n          description: 'Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable.',\n          enum: [            'on',\n            'off'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Defines the name of the rule group.'\n        },\n        rules_count: {\n          type: 'number',\n          description: 'Defines the number of rules in the current rule group.'\n        },\n        allowed_modes: {\n          type: 'array',\n          description: 'Defines the available states for the rule group.',\n          items: {\n            type: 'string',\n            description: 'Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable.',\n            enum: [              'on',\n              'off'\n            ]\n          }\n        },\n        modified_rules_count: {\n          type: 'number',\n          description: 'Defines the number of rules within the group that have been modified from their default configuration.'\n        },\n        package_id: {\n          type: 'string',\n          description: 'Defines the unique identifier of a WAF package.'\n        }\n      },\n      required: [        'id',\n        'description',\n        'mode',\n        'name',\n        'rules_count'\n      ]\n    }\n  }\n}\n```",
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
      direction: {
        type: 'string',
        description: 'Defines the direction used to sort returned rule groups.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'Defines the condition for search requirements. When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      mode: {
        type: 'string',
        description:
          'Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable.',
        enum: ['on', 'off'],
      },
      name: {
        type: 'string',
        description: 'Defines the name of the rule group.',
      },
      order: {
        type: 'string',
        description: 'Defines the field used to sort returned rule groups.',
        enum: ['mode', 'rules_count'],
      },
      page: {
        type: 'number',
        description: 'Defines the page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Defines the number of rule groups per page.',
      },
      rules_count: {
        type: 'number',
        description: 'Defines the number of rules in the current rule group.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'package_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { package_id, ...body } = args as any;
  const response = await client.firewall.waf.packages.groups.list(package_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
