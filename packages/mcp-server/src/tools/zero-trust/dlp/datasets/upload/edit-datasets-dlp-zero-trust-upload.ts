// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.upload',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}',
  operationId: 'dlp-datasets-upload-version',
};

export const tool: Tool = {
  name: 'edit_datasets_dlp_zero_trust_upload',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis is used for single-column EDMv1 and Custom Word Lists. The EDM format\ncan only be created in the Cloudflare dashboard. For other clients, this\noperation can only be used for non-secret Custom Word Lists. The body must\nbe a UTF-8 encoded, newline (NL or CRNL) separated list of words to be matched.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/dataset'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    dataset: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        columns: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              entry_id: {\n                type: 'string'\n              },\n              header_name: {\n                type: 'string'\n              },\n              num_cells: {\n                type: 'integer'\n              },\n              upload_status: {\n                type: 'string',\n                enum: [                  'empty',\n                  'uploading',\n                  'pending',\n                  'processing',\n                  'failed',\n                  'complete'\n                ]\n              }\n            },\n            required: [              'entry_id',\n              'header_name',\n              'num_cells',\n              'upload_status'\n            ]\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        encoding_version: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        },\n        num_cells: {\n          type: 'integer'\n        },\n        secret: {\n          type: 'boolean'\n        },\n        status: {\n          type: 'string',\n          enum: [            'empty',\n            'uploading',\n            'pending',\n            'processing',\n            'failed',\n            'complete'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'When the dataset was last updated.\\n\\nThis includes name or description changes as well as uploads.',\n          format: 'date-time'\n        },\n        uploads: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              num_cells: {\n                type: 'integer'\n              },\n              status: {\n                type: 'string',\n                enum: [                  'empty',\n                  'uploading',\n                  'pending',\n                  'processing',\n                  'failed',\n                  'complete'\n                ]\n              },\n              version: {\n                type: 'integer'\n              }\n            },\n            required: [              'num_cells',\n              'status',\n              'version'\n            ]\n          }\n        },\n        case_sensitive: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the dataset.'\n        }\n      },\n      required: [        'id',\n        'columns',\n        'created_at',\n        'encoding_version',\n        'name',\n        'num_cells',\n        'secret',\n        'status',\n        'updated_at',\n        'uploads'\n      ]\n    }\n  }\n}\n```",
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
      body: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'dataset_id', 'version', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { version, body, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.dlp.datasets.upload.edit(version, body)),
  );
};

export default { metadata, tool, handler };
