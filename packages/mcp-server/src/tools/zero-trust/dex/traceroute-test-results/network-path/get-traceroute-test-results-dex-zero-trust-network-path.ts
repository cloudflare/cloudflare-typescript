// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.traceroute_test_results.network_path',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path',
  operationId: 'dex-endpoints-traceroute-test-result-network-path',
};

export const tool: Tool = {
  name: 'get_traceroute_test_results_dex_zero_trust_network_path',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a breakdown of hops and performance metrics for a specific traceroute test run\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/network_path_get_response',\n  $defs: {\n    network_path_get_response: {\n      type: 'object',\n      properties: {\n        hops: {\n          type: 'array',\n          description: 'an array of the hops taken by the device to reach the end destination',\n          items: {\n            type: 'object',\n            properties: {\n              ttl: {\n                type: 'integer'\n              },\n              asn: {\n                type: 'integer'\n              },\n              aso: {\n                type: 'string'\n              },\n              ipAddress: {\n                type: 'string'\n              },\n              location: {\n                type: 'object',\n                properties: {\n                  city: {\n                    type: 'string'\n                  },\n                  state: {\n                    type: 'string'\n                  },\n                  zip: {\n                    type: 'string'\n                  }\n                }\n              },\n              mile: {\n                type: 'string',\n                enum: [                  'client-to-app',\n                  'client-to-cf-egress',\n                  'client-to-cf-ingress',\n                  'client-to-isp'\n                ]\n              },\n              name: {\n                type: 'string'\n              },\n              packetLossPct: {\n                type: 'number'\n              },\n              rttMs: {\n                type: 'integer'\n              }\n            },\n            required: [              'ttl'\n            ]\n          }\n        },\n        resultId: {\n          type: 'string',\n          description: 'API Resource UUID tag.'\n        },\n        deviceName: {\n          type: 'string',\n          description: 'name of the device associated with this network path response'\n        },\n        testId: {\n          type: 'string',\n          description: 'API Resource UUID tag.'\n        },\n        testName: {\n          type: 'string',\n          description: 'name of the tracroute test'\n        }\n      },\n      required: [        'hops',\n        'resultId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      test_result_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'test_result_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { test_result_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.zeroTrust.dex.tracerouteTestResults.networkPath.get(test_result_id, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
