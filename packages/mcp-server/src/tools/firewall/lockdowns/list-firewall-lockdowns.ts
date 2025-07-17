// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.lockdowns',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/firewall/lockdowns',
  operationId: 'zone-lockdown-list-zone-lockdown-rules',
};

export const tool: Tool = {
  name: 'list_firewall_lockdowns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches Zone Lockdown rules. You can filter the results using several optional parameters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/lockdown'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Defines the total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Defines the current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Defines the number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Defines the total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    lockdown: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the Zone Lockdown rule.'\n        },\n        configurations: {\n          $ref: '#/$defs/configuration'\n        },\n        created_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was created.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the rule.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was last modified.',\n          format: 'date-time'\n        },\n        paused: {\n          type: 'boolean',\n          description: 'When true, indicates that the rule is currently paused.'\n        },\n        urls: {\n          type: 'array',\n          description: 'The URLs to include in the rule definition. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',\n          items: {\n            $ref: '#/$defs/lockdown_url'\n          }\n        }\n      },\n      required: [        'id',\n        'configurations',\n        'created_on',\n        'description',\n        'modified_on',\n        'paused',\n        'urls'\n      ]\n    },\n    configuration: {\n      type: 'array',\n      description: 'A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations.',\n      items: {\n        anyOf: [          {\n            $ref: '#/$defs/lockdown_ip_configuration'\n          },\n          {\n            $ref: '#/$defs/lockdown_cidr_configuration'\n          }\n        ]\n      }\n    },\n    lockdown_ip_configuration: {\n      type: 'object',\n      title: 'An IP address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.',\n          enum: [            'ip'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address to match. This address will be compared to the IP address of incoming requests.'\n        }\n      }\n    },\n    lockdown_cidr_configuration: {\n      type: 'object',\n      title: 'An IP address range configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the Zone Lockdown rule.',\n          enum: [            'ip_range'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address range to match. You can only use prefix lengths `/16` and `/24`.'\n        }\n      }\n    },\n    lockdown_url: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      created_on: {
        type: 'string',
        description: 'The timestamp of when the rule was created.',
        format: 'date-time',
      },
      description: {
        type: 'string',
        description: 'A string to search for in the description of existing rules.',
      },
      description_search: {
        type: 'string',
        description: 'A string to search for in the description of existing rules.',
      },
      ip: {
        type: 'string',
        description: 'A single IP address to search for in existing rules.',
      },
      ip_range_search: {
        type: 'string',
        description: 'A single IP address range to search for in existing rules.',
      },
      ip_search: {
        type: 'string',
        description: 'A single IP address to search for in existing rules.',
      },
      modified_on: {
        type: 'string',
        description: 'The timestamp of when the rule was last modified.',
        format: 'date-time',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description:
          'The maximum number of results per page. You can only set the value to `1` or to a multiple of 5 such as `5`, `10`, `15`, or `20`.',
      },
      priority: {
        type: 'number',
        description:
          'The priority of the rule to control the processing order. A lower number indicates higher priority. If not provided, any rules with a configured priority will be processed before rules without a priority.',
      },
      uri_search: {
        type: 'string',
        description: 'A single URI to search for in the list of URLs of existing rules.',
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.firewall.lockdowns.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
