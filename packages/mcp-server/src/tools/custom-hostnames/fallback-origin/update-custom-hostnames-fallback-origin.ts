// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_hostnames.fallback_origin',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/custom_hostnames/fallback_origin',
  operationId: 'custom-hostname-fallback-origin-for-a-zone-update-fallback-origin-for-custom-hostnames',
};

export const tool: Tool = {
  name: 'update_custom_hostnames_fallback_origin',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Fallback Origin for Custom Hostnames\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        created_at: {\n          type: 'string',\n          description: 'This is the time the fallback origin was created.',\n          format: 'date-time'\n        },\n        errors: {\n          type: 'array',\n          description: 'These are errors that were encountered while trying to activate a fallback origin.',\n          items: {\n            type: 'string'\n          }\n        },\n        origin: {\n          type: 'string',\n          description: 'Your origin hostname that requests to your custom hostnames will be sent to.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the fallback origin\\'s activation.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'This is the time the fallback origin was updated.',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      origin: {
        type: 'string',
        description: 'Your origin hostname that requests to your custom hostnames will be sent to.',
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
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.customHostnames.fallbackOrigin.update(body)),
  );
};

export default { metadata, tool, handler };
