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
  httpPath: '/zones/{zone_id}/firewall/lockdowns/{lock_downs_id}',
  operationId: 'zone-lockdown-get-a-zone-lockdown-rule',
};

export const tool: Tool = {
  name: 'get_firewall_lockdowns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the details of a Zone Lockdown rule.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/lockdown'\n    },\n    success: {\n      type: 'string',\n      description: 'Defines whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    lockdown: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the Zone Lockdown rule.'\n        },\n        configurations: {\n          $ref: '#/$defs/configuration'\n        },\n        created_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was created.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'An informative summary of the rule.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'The timestamp of when the rule was last modified.',\n          format: 'date-time'\n        },\n        paused: {\n          type: 'boolean',\n          description: 'When true, indicates that the rule is currently paused.'\n        },\n        urls: {\n          type: 'array',\n          description: 'The URLs to include in the rule definition. You can use wildcards. Each entered URL will be escaped before use, which means you can only use simple wildcard patterns.',\n          items: {\n            $ref: '#/$defs/lockdown_url'\n          }\n        }\n      },\n      required: [        'id',\n        'configurations',\n        'created_on',\n        'description',\n        'modified_on',\n        'paused',\n        'urls'\n      ]\n    },\n    configuration: {\n      type: 'array',\n      description: 'A list of IP addresses or CIDR ranges that will be allowed to access the URLs specified in the Zone Lockdown rule. You can include any number of `ip` or `ip_range` configurations.',\n      items: {\n        anyOf: [          {\n            $ref: '#/$defs/lockdown_ip_configuration'\n          },\n          {\n            $ref: '#/$defs/lockdown_cidr_configuration'\n          }\n        ]\n      }\n    },\n    lockdown_ip_configuration: {\n      type: 'object',\n      title: 'An IP address configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip` when specifying an IP address in the Zone Lockdown rule.',\n          enum: [            'ip'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address to match. This address will be compared to the IP address of incoming requests.'\n        }\n      }\n    },\n    lockdown_cidr_configuration: {\n      type: 'object',\n      title: 'An IP address range configuration.',\n      properties: {\n        target: {\n          type: 'string',\n          description: 'The configuration target. You must set the target to `ip_range` when specifying an IP address range in the Zone Lockdown rule.',\n          enum: [            'ip_range'\n          ]\n        },\n        value: {\n          type: 'string',\n          description: 'The IP address range to match. You can only use prefix lengths `/16` and `/24`.'\n        }\n      }\n    },\n    lockdown_url: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      lock_downs_id: {
        type: 'string',
        description: 'The unique identifier of the Zone Lockdown rule.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'lock_downs_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { lock_downs_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.firewall.lockdowns.get(lock_downs_id, body)),
  );
};

export default { metadata, tool, handler };
