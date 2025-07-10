// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policy_tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/policy-tests/{policy_test_id}',
  operationId: 'access-policy-tests-get-an-update',
};

export const tool: Tool = {
  name: 'get_applications_access_zero_trust_policy_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the current status of a given Access policy test.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The UUID of the policy test.'\n        },\n        percent_approved: {\n          type: 'integer',\n          description: 'The percentage of (processed) users approved based on policy evaluation results.'\n        },\n        percent_blocked: {\n          type: 'integer',\n          description: 'The percentage of (processed) users blocked based on policy evaluation results.'\n        },\n        percent_errored: {\n          type: 'integer',\n          description: 'The percentage of (processed) users errored based on policy evaluation results.'\n        },\n        percent_users_processed: {\n          type: 'integer',\n          description: 'The percentage of users processed so far (of the entire user base).'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the policy test.',\n          enum: [            'blocked',\n            'processing',\n            'exceeded time',\n            'complete'\n          ]\n        },\n        total_users: {\n          type: 'integer',\n          description: 'The total number of users in the user base.'\n        },\n        users_approved: {\n          type: 'integer',\n          description: 'The number of (processed) users approved based on policy evaluation results.'\n        },\n        users_blocked: {\n          type: 'integer',\n          description: 'The number of (processed) users blocked based on policy evaluation results.'\n        },\n        users_errored: {\n          type: 'integer',\n          description: 'The number of (processed) users errored based on policy evaluation results.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      policy_test_id: {
        type: 'string',
        description: 'The UUID of the policy test.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_test_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.access.applications.policyTests.get(policy_test_id, body)),
  );
};

export default { metadata, tool, handler };
