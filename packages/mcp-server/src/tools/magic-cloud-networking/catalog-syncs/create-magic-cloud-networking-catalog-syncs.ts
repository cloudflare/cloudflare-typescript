// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.catalog_syncs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/catalog-syncs',
  operationId: 'catalog-syncs-create',
};

export const tool: Tool = {
  name: 'create_magic_cloud_networking_catalog_syncs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Catalog Sync (Closed Beta).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/catalog_sync_create_response',\n  $defs: {\n    catalog_sync_create_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        destination_id: {\n          type: 'string'\n        },\n        destination_type: {\n          type: 'string',\n          enum: [            'NONE',\n            'ZERO_TRUST_LIST'\n          ]\n        },\n        last_user_update_at: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        policy: {\n          type: 'string'\n        },\n        update_mode: {\n          type: 'string',\n          enum: [            'AUTO',\n            'MANUAL'\n          ]\n        },\n        errors: {\n          type: 'object',\n          additionalProperties: true\n        },\n        includes_discoveries_until: {\n          type: 'string'\n        },\n        last_attempted_update_at: {\n          type: 'string'\n        },\n        last_successful_update_at: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'description',\n        'destination_id',\n        'destination_type',\n        'last_user_update_at',\n        'name',\n        'policy',\n        'update_mode'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      destination_type: {
        type: 'string',
        enum: ['NONE', 'ZERO_TRUST_LIST'],
      },
      name: {
        type: 'string',
      },
      update_mode: {
        type: 'string',
        enum: ['AUTO', 'MANUAL'],
      },
      description: {
        type: 'string',
      },
      policy: {
        type: 'string',
      },
      forwarded: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'destination_type', 'name', 'update_mode'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.magicCloudNetworking.catalogSyncs.create(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
