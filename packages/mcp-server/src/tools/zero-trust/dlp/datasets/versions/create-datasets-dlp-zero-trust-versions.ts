// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.datasets.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}',
  operationId: 'dlp-datasets-define-columns',
};

export const tool: Tool = {
  name: 'create_datasets_dlp_zero_trust_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis is used for multi-column EDMv2 datasets. The EDMv2 format can only be\ncreated in the Cloudflare dashboard. The columns in the response appear in\nthe same order as in the request.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          entry_id: {\n            type: 'string'\n          },\n          header_name: {\n            type: 'string'\n          },\n          num_cells: {\n            type: 'integer'\n          },\n          upload_status: {\n            type: 'string',\n            enum: [              'empty',\n              'uploading',\n              'pending',\n              'processing',\n              'failed',\n              'complete'\n            ]\n          }\n        },\n        required: [          'entry_id',\n          'header_name',\n          'num_cells',\n          'upload_status'\n        ]\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
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
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              title: 'Existing Column',
              properties: {
                entry_id: {
                  type: 'string',
                },
                header_name: {
                  type: 'string',
                },
                num_cells: {
                  type: 'integer',
                },
              },
              required: ['entry_id'],
            },
            {
              type: 'object',
              title: 'New Column',
              properties: {
                entry_name: {
                  type: 'string',
                },
                header_name: {
                  type: 'string',
                },
                num_cells: {
                  type: 'integer',
                },
              },
              required: ['entry_name'],
            },
          ],
        },
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { version, ...body } = args as any;
  const response = await client.zeroTrust.dlp.datasets.versions.create(version, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
