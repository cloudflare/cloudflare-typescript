// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.traceroute_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path',
  operationId: 'dex-endpoints-traceroute-test-network-path',
};

export const tool: Tool = {
  name: 'network_path_dex_zero_trust_traceroute_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a breakdown of metrics by hop for individual traceroute test runs\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/network_path_response'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    network_path_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'API Resource UUID tag.'\n        },\n        deviceName: {\n          type: 'string'\n        },\n        interval: {\n          type: 'string',\n          description: 'The interval at which the Traceroute synthetic application test is set to run.'\n        },\n        kind: {\n          type: 'string',\n          enum: [            'traceroute'\n          ]\n        },\n        name: {\n          type: 'string'\n        },\n        networkPath: {\n          $ref: '#/$defs/network_path'\n        },\n        url: {\n          type: 'string',\n          description: 'The host of the Traceroute synthetic application test'\n        }\n      },\n      required: [        'id'\n      ]\n    },\n    network_path: {\n      type: 'object',\n      properties: {\n        slots: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'API Resource UUID tag.'\n              },\n              clientToAppRttMs: {\n                type: 'integer',\n                description: 'Round trip time in ms of the client to app mile'\n              },\n              clientToCfEgressRttMs: {\n                type: 'integer',\n                description: 'Round trip time in ms of the client to Cloudflare egress mile'\n              },\n              clientToCfIngressRttMs: {\n                type: 'integer',\n                description: 'Round trip time in ms of the client to Cloudflare ingress mile'\n              },\n              timestamp: {\n                type: 'string'\n              },\n              clientToIspRttMs: {\n                type: 'integer',\n                description: 'Round trip time in ms of the client to ISP mile'\n              }\n            },\n            required: [              'id',\n              'clientToAppRttMs',\n              'clientToCfEgressRttMs',\n              'clientToCfIngressRttMs',\n              'timestamp'\n            ]\n          }\n        },\n        sampling: {\n          type: 'object',\n          description: 'Specifies the sampling applied, if any, to the slots response. When sampled, results shown represent the first test run to the start of each sampling interval.',\n          properties: {\n            unit: {\n              type: 'string',\n              enum: [                'hours'\n              ]\n            },\n            value: {\n              type: 'integer'\n            }\n          },\n          required: [            'unit',\n            'value'\n          ]\n        }\n      },\n      required: [        'slots'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      test_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
      deviceId: {
        type: 'string',
        description: 'Device to filter tracroute result runs to',
      },
      from: {
        type: 'string',
        description: 'Start time for aggregate metrics in ISO ms',
      },
      interval: {
        type: 'string',
        description: 'Time interval for aggregate time slots.',
        enum: ['minute', 'hour'],
      },
      to: {
        type: 'string',
        description: 'End time for aggregate metrics in ISO ms',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'test_id', 'deviceId', 'from', 'interval', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { test_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.dex.tracerouteTests.networkPath(test_id, body)),
  );
};

export default { metadata, tool, handler };
