// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.applications.policy_tests.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/policy-tests/{policy_test_id}/users',
  operationId: 'access-policy-tests-get-a-user-page',
};

export const tool: Tool = {
  name: 'list_policy_tests_applications_access_zero_trust_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a single page of user results from an Access policy test.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      description: 'Page of processed users.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'UUID.'\n          },\n          email: {\n            type: 'string',\n            description: 'The email of the user.'\n          },\n          name: {\n            type: 'string',\n            description: 'The name of the user.'\n          },\n          status: {\n            type: 'string',\n            description: 'Policy evaluation result for an individual user.',\n            enum: [              'approved',\n              'blocked',\n              'error'\n            ]\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
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
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      status: {
        type: 'string',
        description: 'Filter users by their policy evaluation status.',
        enum: ['success', 'fail', 'error'],
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
  const response = await client.zeroTrust.access.applications.policyTests.users
    .list(policy_test_id, body)
    .asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
