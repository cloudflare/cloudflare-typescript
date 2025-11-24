// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.upload',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/datasets/{dataset_id}/upload',
  operationId: 'dlp-datasets-create-version',
};

export const tool: Tool = {
  name: 'create_datasets_dlp_zero_trust_upload',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPrepare to upload a new version of a dataset\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/upload_create_response',\n  $defs: {\n    upload_create_response: {\n      type: 'object',\n      properties: {\n        encoding_version: {\n          type: 'integer'\n        },\n        max_cells: {\n          type: 'integer'\n        },\n        version: {\n          type: 'integer'\n        },\n        case_sensitive: {\n          type: 'boolean'\n        },\n        columns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              entry_id: {\n                type: 'string'\n              },\n              header_name: {\n                type: 'string'\n              },\n              num_cells: {\n                type: 'integer'\n              },\n              upload_status: {\n                type: 'string',\n                enum: [                  'empty',\n                  'uploading',\n                  'pending',\n                  'processing',\n                  'failed',\n                  'complete'\n                ]\n              }\n            },\n            required: [              'entry_id',\n              'header_name',\n              'num_cells',\n              'upload_status'\n            ]\n          }\n        },\n        secret: {\n          type: 'string'\n        }\n      },\n      required: [        'encoding_version',\n        'max_cells',\n        'version'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'dataset_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dataset_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dlp.datasets.upload.create(dataset_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
