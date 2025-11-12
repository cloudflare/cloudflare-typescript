// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.policies',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/page_shield/policies/{policy_id}',
  operationId: 'page-shield-update-policy',
};

export const tool: Tool = {
  name: 'update_page_shield_policies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Page Shield policy by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/policy_update_response',\n  $defs: {\n    policy_update_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        action: {\n          type: 'string',\n          description: 'The action to take if the expression matches',\n          enum: [            'allow',\n            'log'\n          ]\n        },\n        description: {\n          type: 'string',\n          description: 'A description for the policy'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether the policy is enabled'\n        },\n        expression: {\n          type: 'string',\n          description: 'The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax'\n        },\n        value: {\n          type: 'string',\n          description: 'The policy which will be applied'\n        }\n      },\n      required: [        'id',\n        'action',\n        'description',\n        'enabled',\n        'expression',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      policy_id: {
        type: 'string',
        description: 'Identifier',
      },
      action: {
        type: 'string',
        description: 'The action to take if the expression matches',
        enum: ['allow', 'log'],
      },
      description: {
        type: 'string',
        description: 'A description for the policy',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether the policy is enabled',
      },
      expression: {
        type: 'string',
        description:
          'The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax',
      },
      value: {
        type: 'string',
        description: 'The policy which will be applied',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'policy_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.pageShield.policies.update(policy_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
