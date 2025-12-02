// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2_data_catalog',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2-catalog/{bucket_name}',
  operationId: 'get-catalog-details',
};

export const tool: Tool = {
  name: 'get_r2_data_catalog',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve detailed information about a specific R2 catalog by bucket name.\nReturns catalog status, maintenance configuration, and credential status.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/r2_data_catalog_get_response',\n  $defs: {\n    r2_data_catalog_get_response: {\n      type: 'object',\n      description: 'Contains R2 Data Catalog information.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Use this to uniquely identify the catalog.'\n        },\n        bucket: {\n          type: 'string',\n          description: 'Specifies the associated R2 bucket name.'\n        },\n        name: {\n          type: 'string',\n          description: 'Specifies the catalog name (generated from account and bucket name).'\n        },\n        status: {\n          type: 'string',\n          description: 'Indicates the status of the catalog.',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        credential_status: {\n          type: 'string',\n          description: 'Shows the credential configuration status.',\n          enum: [            'present',\n            'absent'\n          ]\n        },\n        maintenance_config: {\n          type: 'object',\n          description: 'Configures maintenance for the catalog.',\n          properties: {\n            compaction: {\n              type: 'object',\n              description: 'Configures compaction for catalog maintenance.',\n              properties: {\n                state: {\n                  type: 'string',\n                  description: 'Specifies the state of maintenance operations.',\n                  enum: [                    'enabled',\n                    'disabled'\n                  ]\n                },\n                target_size_mb: {\n                  type: 'string',\n                  description: 'Sets the target file size for compaction in megabytes.',\n                  enum: [                    '64',\n                    '128',\n                    '256',\n                    '512'\n                  ]\n                }\n              },\n              required: [                'state',\n                'target_size_mb'\n              ]\n            }\n          }\n        }\n      },\n      required: [        'id',\n        'bucket',\n        'name',\n        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Use this to identify the account.',
      },
      bucket_name: {
        type: 'string',
        description: 'Specifies the R2 bucket name.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.r2DataCatalog.get(bucket_name, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
