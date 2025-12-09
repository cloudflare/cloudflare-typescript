// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/datasets',
  operationId: 'dlp-datasets-create',
};

export const tool: Tool = {
  name: 'create_dlp_zero_trust_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new dataset\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/dataset_create_response',\n  $defs: {\n    dataset_create_response: {\n      type: 'object',\n      properties: {\n        dataset: {\n          $ref: '#/$defs/dataset'\n        },\n        encoding_version: {\n          type: 'integer',\n          description: 'Encoding version to use for dataset.'\n        },\n        max_cells: {\n          type: 'integer'\n        },\n        version: {\n          type: 'integer',\n          description: 'The version to use when uploading the dataset.'\n        },\n        secret: {\n          type: 'string',\n          description: 'The secret to use for Exact Data Match datasets.\\n\\nThis is not present in Custom Wordlists.'\n        }\n      },\n      required: [        'dataset',\n        'encoding_version',\n        'max_cells',\n        'version'\n      ]\n    },\n    dataset: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        columns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              entry_id: {\n                type: 'string'\n              },\n              header_name: {\n                type: 'string'\n              },\n              num_cells: {\n                type: 'integer'\n              },\n              upload_status: {\n                type: 'string',\n                enum: [                  'empty',\n                  'uploading',\n                  'pending',\n                  'processing',\n                  'failed',\n                  'complete'\n                ]\n              }\n            },\n            required: [              'entry_id',\n              'header_name',\n              'num_cells',\n              'upload_status'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        encoding_version: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        num_cells: {\n          type: 'integer'\n        },\n        secret: {\n          type: 'boolean'\n        },\n        status: {\n          type: 'string',\n          enum: [            'empty',\n            'uploading',\n            'pending',\n            'processing',\n            'failed',\n            'complete'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Stores when the dataset was last updated.\\n\\nThis includes name or description changes as well as uploads.',\n          format: 'date-time'\n        },\n        uploads: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              num_cells: {\n                type: 'integer'\n              },\n              status: {\n                type: 'string',\n                enum: [                  'empty',\n                  'uploading',\n                  'pending',\n                  'processing',\n                  'failed',\n                  'complete'\n                ]\n              },\n              version: {\n                type: 'integer'\n              }\n            },\n            required: [              'num_cells',\n              'status',\n              'version'\n            ]\n          }\n        },\n        case_sensitive: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the dataset.'\n        }\n      },\n      required: [        'id',\n        'columns',\n        'created_at',\n        'encoding_version',\n        'name',\n        'num_cells',\n        'secret',\n        'status',\n        'updated_at',\n        'uploads'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      case_sensitive: {
        type: 'boolean',
        description:
          'Only applies to custom word lists.\nDetermines if the words should be matched in a case-sensitive manner\nCannot be set to false if `secret` is true or undefined',
      },
      description: {
        type: 'string',
        description: 'The description of the dataset.',
      },
      encoding_version: {
        type: 'integer',
        description:
          'Dataset encoding version\n\nNon-secret custom word lists with no header are always version 1.\nSecret EDM lists with no header are version 1.\nMulticolumn CSV with headers are version 2.\nOmitting this field provides the default value 0, which is interpreted\nthe same as 1.',
      },
      secret: {
        type: 'boolean',
        description:
          'Generate a secret dataset.\n\nIf true, the response will include a secret to use with the EDM encoder.\nIf false, the response has no secret and the dataset is uploaded in plaintext.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dlp.datasets.create(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
