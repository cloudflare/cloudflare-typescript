// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'managed_transforms',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/managed_headers',
  operationId: 'updateManagedTransforms',
};

export const tool: Tool = {
  name: 'edit_managed_transforms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the status of one or more Managed Transforms.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/managed_transform_edit_response',\n  $defs: {\n    managed_transform_edit_response: {\n      type: 'object',\n      title: 'Result',\n      description: 'A result.',\n      properties: {\n        managed_request_headers: {\n          type: 'array',\n          title: 'Managed Request Transforms',\n          description: 'The list of Managed Request Transforms.',\n          items: {\n            type: 'object',\n            title: 'Managed Transform',\n            description: 'A Managed Transform object.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Transform ID',\n                description: 'The human-readable identifier of the Managed Transform.'\n              },\n              enabled: {\n                type: 'boolean',\n                title: 'Enabled',\n                description: 'Whether the Managed Transform is enabled.'\n              },\n              has_conflict: {\n                type: 'boolean',\n                title: 'Has Conflict',\n                description: 'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.'\n              },\n              conflicts_with: {\n                type: 'array',\n                title: 'Conflicts With',\n                description: 'The Managed Transforms that this Managed Transform conflicts with.',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'id',\n              'enabled',\n              'has_conflict'\n            ]\n          }\n        },\n        managed_response_headers: {\n          type: 'array',\n          title: 'Managed Response Transforms',\n          description: 'The list of Managed Response Transforms.',\n          items: {\n            type: 'object',\n            title: 'Managed Transform',\n            description: 'A Managed Transform object.',\n            properties: {\n              id: {\n                type: 'string',\n                title: 'Transform ID',\n                description: 'The human-readable identifier of the Managed Transform.'\n              },\n              enabled: {\n                type: 'boolean',\n                title: 'Enabled',\n                description: 'Whether the Managed Transform is enabled.'\n              },\n              has_conflict: {\n                type: 'boolean',\n                title: 'Has Conflict',\n                description: 'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.'\n              },\n              conflicts_with: {\n                type: 'array',\n                title: 'Conflicts With',\n                description: 'The Managed Transforms that this Managed Transform conflicts with.',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'id',\n              'enabled',\n              'has_conflict'\n            ]\n          }\n        }\n      },\n      required: [        'managed_request_headers',\n        'managed_response_headers'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
      managed_request_headers: {
        type: 'array',
        title: 'Managed Request Transforms',
        description: 'The list of Managed Request Transforms.',
        items: {
          type: 'object',
          title: 'Managed Transform',
          description: 'A Managed Transform object.',
          properties: {
            id: {
              type: 'string',
              title: 'Transform ID',
              description: 'The human-readable identifier of the Managed Transform.',
            },
            enabled: {
              type: 'boolean',
              title: 'Enabled',
              description: 'Whether the Managed Transform is enabled.',
            },
            has_conflict: {
              type: 'boolean',
              title: 'Has Conflict',
              description:
                'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.',
            },
            conflicts_with: {
              type: 'array',
              title: 'Conflicts With',
              description: 'The Managed Transforms that this Managed Transform conflicts with.',
              items: {
                type: 'string',
              },
            },
          },
          required: ['id', 'enabled', 'has_conflict'],
        },
      },
      managed_response_headers: {
        type: 'array',
        title: 'Managed Response Transforms',
        description: 'The list of Managed Response Transforms.',
        items: {
          type: 'object',
          title: 'Managed Transform',
          description: 'A Managed Transform object.',
          properties: {
            id: {
              type: 'string',
              title: 'Transform ID',
              description: 'The human-readable identifier of the Managed Transform.',
            },
            enabled: {
              type: 'boolean',
              title: 'Enabled',
              description: 'Whether the Managed Transform is enabled.',
            },
            has_conflict: {
              type: 'boolean',
              title: 'Has Conflict',
              description:
                'Whether the Managed Transform conflicts with the currently-enabled Managed Transforms.',
            },
            conflicts_with: {
              type: 'array',
              title: 'Conflicts With',
              description: 'The Managed Transforms that this Managed Transform conflicts with.',
              items: {
                type: 'string',
              },
            },
          },
          required: ['id', 'enabled', 'has_conflict'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'managed_request_headers', 'managed_response_headers'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.managedTransforms.edit(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
