// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.requests.priority',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/requests/priority/quota',
  operationId: 'cloudforce-one-priority-quota',
};

export const tool: Tool = {
  name: 'quota_requests_cloudforce_one_priority',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Priority Intelligence Requirement Quota\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/quota',\n  $defs: {\n    quota: {\n      type: 'object',\n      title: 'Quota',\n      properties: {\n        anniversary_date: {\n          type: 'string',\n          description: 'Anniversary date is when annual quota limit is refreshed.',\n          format: 'date-time'\n        },\n        quarter_anniversary_date: {\n          type: 'string',\n          description: 'Quarter anniversary date is when quota limit is refreshed each quarter.',\n          format: 'date-time'\n        },\n        quota: {\n          type: 'integer',\n          description: 'Tokens for the quarter.'\n        },\n        remaining: {\n          type: 'integer',\n          description: 'Tokens remaining for the quarter.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
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
      await maybeFilter(jq_filter, await client.cloudforceOne.requests.priority.quota(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
