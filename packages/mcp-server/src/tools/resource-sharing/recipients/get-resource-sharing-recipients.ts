// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.recipients',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}',
  operationId: 'share-recipients-get-by-id',
};

export const tool: Tool = {
  name: 'get_resource_sharing_recipients',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet share recipient by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/recipient_get_response',\n  $defs: {\n    recipient_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Share Recipient identifier tag.'\n        },\n        account_id: {\n          type: 'string',\n          description: 'Account identifier.'\n        },\n        association_status: {\n          type: 'string',\n          description: 'Share Recipient association status.',\n          enum: [            'associating',\n            'associated',\n            'disassociating',\n            'disassociated'\n          ]\n        },\n        created: {\n          type: 'string',\n          description: 'When the share was created.',\n          format: 'date-time'\n        },\n        modified: {\n          type: 'string',\n          description: 'When the share was modified.',\n          format: 'date-time'\n        },\n        resources: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              error: {\n                type: 'string',\n                description: 'Share Recipient error message.'\n              },\n              resource_id: {\n                type: 'string',\n                description: 'Share Resource identifier.'\n              },\n              resource_version: {\n                type: 'integer',\n                description: 'Resource Version.'\n              },\n              terminal: {\n                type: 'boolean',\n                description: 'Whether the error is terminal or will be continually retried.'\n              }\n            },\n            required: [              'error',\n              'resource_id',\n              'resource_version',\n              'terminal'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'association_status',\n        'created',\n        'modified'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier.',
      },
      share_id: {
        type: 'string',
        description: 'Share identifier tag.',
      },
      recipient_id: {
        type: 'string',
        description: 'Share Recipient identifier tag.',
      },
      include_resources: {
        type: 'boolean',
        description: 'Include resources in the response.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'share_id', 'recipient_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { recipient_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.resourceSharing.recipients.get(recipient_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
