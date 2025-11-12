// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.tests.unique_devices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/tests/unique-devices',
  operationId: 'dex-endpoints-tests-unique-devices',
};

export const tool: Tool = {
  name: 'list_tests_dex_zero_trust_unique_devices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns unique count of devices that have run synthetic application monitoring tests in the past 7 days.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/unique_devices',\n  $defs: {\n    unique_devices: {\n      type: 'object',\n      properties: {\n        uniqueDevicesTotal: {\n          type: 'integer',\n          description: 'total number of unique devices'\n        }\n      },\n      required: [        'uniqueDevicesTotal'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      deviceId: {
        type: 'array',
        description:
          'Optionally filter result stats to a specific device(s). Cannot be used in combination with colo param.',
        items: {
          type: 'string',
        },
      },
      testName: {
        type: 'string',
        description: 'Optionally filter results by test name',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dex.tests.uniqueDevices.list(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
