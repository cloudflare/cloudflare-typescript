// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'resource_sharing.recipients',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}',
  operationId: 'share-recipient-delete',
};

export const tool: Tool = {
  name: 'delete_resource_sharing_recipients',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletion is not immediate, an updated share recipient object with a new status will be returned.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Share Recipient identifier tag.'\n        },\n        account_id: {\n          type: 'string',\n          description: 'Account identifier.'\n        },\n        association_status: {\n          type: 'string',\n          description: 'Share Recipient association status.',\n          enum: [            'associating',\n            'associated',\n            'disassociating',\n            'disassociated'\n          ]\n        },\n        created: {\n          type: 'string',\n          description: 'When the share was created.',\n          format: 'date-time'\n        },\n        modified: {\n          type: 'string',\n          description: 'When the share was modified.',\n          format: 'date-time'\n        },\n        status_message: {\n          type: 'string',\n          description: 'Share Recipient status message.'\n        },\n        resources: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              error: {\n                type: 'string',\n                description: 'Share Recipient error message.'\n              },\n              resource_id: {\n                type: 'string',\n                description: 'Share Resource identifier.'\n              },\n              resource_version: {\n                type: 'integer',\n                description: 'Resource Version.'\n              }\n            },\n            required: [              'error',\n              'resource_id',\n              'resource_version'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'association_status',\n        'created',\n        'modified',\n        'status_message'\n      ]\n    }\n  },\n  required: [    'errors',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { recipient_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.resourceSharing.recipients.delete(recipient_id, body)),
  );
};

export default { metadata, tool, handler };
