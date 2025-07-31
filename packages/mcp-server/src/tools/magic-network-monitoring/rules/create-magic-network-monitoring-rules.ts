// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/mnm/rules',
  operationId: 'magic-network-monitoring-rules-create-rules',
};

export const tool: Tool = {
  name: 'create_magic_network_monitoring_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate network monitoring rules for account. Currently only supports creating a single rule per API request.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/magic_network_monitoring_rule'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    magic_network_monitoring_rule: {\n      type: 'object',\n      properties: {\n        automatic_advertisement: {\n          type: 'boolean',\n          description: 'Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.'\n        },\n        prefixes: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'The IP prefixes that are monitored for this rule. Must be a CIDR range like 203.0.113.0/24. Max 5000 different CIDR ranges.'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'MNM rule type.',\n          enum: [            'threshold',\n            'zscore',\n            'advanced_ddos'\n          ]\n        },\n        id: {\n          type: 'string',\n          description: 'The id of the rule. Must be unique.'\n        },\n        bandwidth_threshold: {\n          type: 'number',\n          description: 'The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.'\n        },\n        duration: {\n          type: 'string',\n          description: 'The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values [\"1m\",\"5m\",\"10m\",\"15m\",\"20m\",\"30m\",\"45m\",\"60m\"].',\n          enum: [            '1m',\n            '5m',\n            '10m',\n            '15m',\n            '20m',\n            '30m',\n            '45m',\n            '60m'\n          ]\n        },\n        packet_threshold: {\n          type: 'number',\n          description: 'The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.'\n        },\n        prefix_match: {\n          type: 'string',\n          description: 'Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.',\n          enum: [            'exact',\n            'subnet',\n            'supernet'\n          ]\n        },\n        zscore_sensitivity: {\n          type: 'string',\n          description: 'Level of sensitivity set for zscore rules.',\n          enum: [            'low',\n            'medium',\n            'high'\n          ]\n        },\n        zscore_target: {\n          type: 'string',\n          description: 'Target of the zscore rule analysis.',\n          enum: [            'bits',\n            'packets'\n          ]\n        }\n      },\n      required: [        'automatic_advertisement',\n        'name',\n        'prefixes',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      duration: {
        type: 'string',
        description:
          'The amount of time that the rule threshold must be exceeded to send an alert notification. The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].',
        enum: ['1m', '5m', '10m', '15m', '20m', '30m', '45m', '60m'],
      },
      name: {
        type: 'string',
        description:
          'The name of the rule. Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.',
      },
      automatic_advertisement: {
        type: 'boolean',
        description:
          'Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. Only available for users of Magic Transit.',
      },
      bandwidth: {
        type: 'number',
        description:
          'The number of bits per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.',
      },
      packet_threshold: {
        type: 'number',
        description:
          'The number of packets per second for the rule. When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.',
      },
      prefixes: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'The IP prefixes that are monitored for this rule. Must be a CIDR range like 203.0.113.0/24. Max 5000 different CIDR ranges.',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'duration', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.magicNetworkMonitoring.rules.create(body)),
  );
};

export default { metadata, tool, handler };
