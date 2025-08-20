// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'managed_transforms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/managed_headers',
  operationId: 'listManagedTransforms',
};

export const tool: Tool = {
  name: 'list_managed_transforms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches a list of all Managed Transforms.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response',\n  description: 'A response object.',\n  properties: {\n    errors: {\n      type: 'array',\n      title: 'Errors',\n      description: 'A list of error messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          },\n          source: {\n            type: 'object',\n            title: 'Source',\n            description: 'The source of this message.',\n            properties: {\n              pointer: {\n                type: 'string',\n                title: 'Pointer',\n                description: 'A JSON pointer to the field that is the source of the message.'\n              }\n            },\n            required: [              'pointer'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      description: 'A list of warning messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          },\n          source: {\n            type: 'object',\n            title: 'Source',\n            description: 'The source of this message.',\n            properties: {\n              pointer: {\n                type: 'string',\n                title: 'Pointer',\n                description: 'A JSON pointer to the field that is the source of the message.'\n              }\n            },\n            required: [              'pointer'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      title: 'Result',\n      description: 'A result.',\n      properties: {\n        managed_request_headers: {\n          type: 'array',\n          title: 'Managed Request Transforms',\n          description: 'The list of Managed Request Transforms.',\n          items: {\n            type: 'object',\n            title: 'Managed Transform',\n            description: 'A Managed Transform object.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Transform ID',\n                description: 'The human-readable identifier of the Managed Transform.'\n              },\n              enabled: {\n                type: 'boolean',\n                title: 'Enabled',\n                description: 'Whether the Managed Transform is enabled.'\n              },\n              has_conflict: {\n                type: 'boolean',\n                title: 'Has Conflict',\n                description: 'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.'\n              },\n              conflicts_with: {\n                type: 'array',\n                title: 'Conflicts With',\n                description: 'The Managed Transforms that this Managed Transform conflicts with.',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'id',\n              'enabled',\n              'has_conflict'\n            ]\n          }\n        },\n        managed_response_headers: {\n          type: 'array',\n          title: 'Managed Response Transforms',\n          description: 'The list of Managed Response Transforms.',\n          items: {\n            type: 'object',\n            title: 'Managed Transform',\n            description: 'A Managed Transform object.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Transform ID',\n                description: 'The human-readable identifier of the Managed Transform.'\n              },\n              enabled: {\n                type: 'boolean',\n                title: 'Enabled',\n                description: 'Whether the Managed Transform is enabled.'\n              },\n              has_conflict: {\n                type: 'boolean',\n                title: 'Has Conflict',\n                description: 'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.'\n              },\n              conflicts_with: {\n                type: 'array',\n                title: 'Conflicts With',\n                description: 'The Managed Transforms that this Managed Transform conflicts with.',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'id',\n              'enabled',\n              'has_conflict'\n            ]\n          }\n        }\n      },\n      required: [        'managed_request_headers',\n        'managed_response_headers'\n      ]\n    },\n    success: {\n      type: 'string',\n      title: 'Success',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.managedTransforms.list(body)));
};

export default { metadata, tool, handler };
