// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.versions.entries',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}',
  operationId: 'dlp-datasets-upload-dataset-column',
};

export const tool: Tool = {
  name: 'create_versions_datasets_dlp_zero_trust_entries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis is used for multi-column EDMv2 datasets. The EDMv2 format can only be\ncreated in the Cloudflare dashboard.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/entry_create_response',\n  $defs: {\n    entry_create_response: {\n      type: 'object',\n      properties: {\n        entry_id: {\n          type: 'string'\n        },\n        header_name: {\n          type: 'string'\n        },\n        num_cells: {\n          type: 'integer'\n        },\n        upload_status: {\n          type: 'string',\n          enum: [            'empty',\n            'uploading',\n            'pending',\n            'processing',\n            'failed',\n            'complete'\n          ]\n        }\n      },\n      required: [        'entry_id',\n        'header_name',\n        'num_cells',\n        'upload_status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      dataset_id: {
        type: 'string',
      },
      version: {
        type: 'integer',
      },
      entry_id: {
        type: 'string',
      },
      dataset_version_entry: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'dataset_id', 'version', 'entry_id', 'dataset_version_entry'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { entry_id, dataset_version_entry, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.zeroTrust.dlp.datasets.versions.entries.create(entry_id, dataset_version_entry, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
