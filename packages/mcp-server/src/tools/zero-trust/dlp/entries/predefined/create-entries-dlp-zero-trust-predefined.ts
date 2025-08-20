// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.entries.predefined',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/entries/predefined',
  operationId: 'dlp-entries-create-predefined-entry',
};

export const tool: Tool = {
  name: 'create_entries_dlp_zero_trust_predefined',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPredefined entries can't be created, this will update an existing predefined entry\nThis is needed for our generated terraform API\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        confidence: {\n          type: 'object',\n          properties: {\n            ai_context_available: {\n              type: 'boolean',\n              description: 'Indicates whether this entry has AI remote service validation.'\n            },\n            available: {\n              type: 'boolean',\n              description: 'Indicates whether this entry has any form of validation that is not an AI remote service.'\n            }\n          },\n          required: [            'ai_context_available',\n            'available'\n          ]\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        profile_id: {\n          type: 'string'\n        },\n        variant: {\n          type: 'object',\n          properties: {\n            topic_type: {\n              type: 'string',\n              enum: [                'Intent',\n                'Content'\n              ]\n            },\n            type: {\n              type: 'string',\n              enum: [                'PromptTopic'\n              ]\n            }\n          },\n          required: [            'topic_type',\n            'type'\n          ]\n        }\n      },\n      required: [        'id',\n        'confidence',\n        'enabled',\n        'name'\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      enabled: {
        type: 'boolean',
      },
      entry_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
        description:
          'This field is not actually used as the owning profile for a predefined entry is already set\nto a predefined profile',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'enabled', 'entry_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.dlp.entries.predefined.create(body)),
  );
};

export default { metadata, tool, handler };
