// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/entries',
  operationId: 'dlp-entries-create-entry',
};

export const tool: Tool = {
  name: 'create_entries_dlp_zero_trust_custom',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a DLP custom entry.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_create_response',\n  $defs: {\n    custom_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        pattern: {\n          $ref: '#/$defs/pattern'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        profile_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'enabled',\n        'name',\n        'pattern',\n        'updated_at'\n      ]\n    },\n    pattern: {\n      type: 'object',\n      properties: {\n        regex: {\n          type: 'string'\n        },\n        validation: {\n          type: 'string',\n          enum: [            'luhn'\n          ]\n        }\n      },\n      required: [        'regex'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      enabled: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      pattern: {
        $ref: '#/$defs/pattern',
      },
      profile_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'enabled', 'name', 'pattern'],
    $defs: {
      pattern: {
        type: 'object',
        properties: {
          regex: {
            type: 'string',
          },
          validation: {
            type: 'string',
            enum: ['luhn'],
          },
        },
        required: ['regex'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dlp.entries.custom.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
