// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pipelines.streams',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/pipelines/v1/streams/{stream_id}',
  operationId: 'patchV4AccountsByAccount_idPipelinesV1StreamsByStream_id',
};

export const tool: Tool = {
  name: 'update_pipelines_streams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Stream.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Indicates a unique identifier for this stream.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        http: {\n          type: 'object',\n          properties: {\n            authentication: {\n              type: 'boolean',\n              description: 'Indicates that authentication is required for the HTTP endpoint.'\n            },\n            enabled: {\n              type: 'boolean',\n              description: 'Indicates that the HTTP endpoint is enabled.'\n            },\n            cors: {\n              type: 'object',\n              description: 'Specifies the CORS options for the HTTP endpoint.',\n              properties: {\n                origins: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                }\n              }\n            }\n          },\n          required: [            'authentication',\n            'enabled'\n          ]\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Indicates the name of the Stream.'\n        },\n        version: {\n          type: 'integer',\n          description: 'Indicates the current version of this stream.'\n        },\n        worker_binding: {\n          type: 'object',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Indicates that the worker binding is enabled.'\n            }\n          },\n          required: [            'enabled'\n          ]\n        },\n        endpoint: {\n          type: 'string',\n          description: 'Indicates the endpoint URL of this stream.'\n        },\n        format: {\n          anyOf: [            {\n              type: 'object',\n              title: 'Json',\n              properties: {\n                type: {\n                  type: 'string',\n                  enum: [                    'json'\n                  ]\n                },\n                decimal_encoding: {\n                  type: 'string',\n                  enum: [                    'number',\n                    'string',\n                    'bytes'\n                  ]\n                },\n                timestamp_format: {\n                  type: 'string',\n                  enum: [                    'rfc3339',\n                    'unix_millis'\n                  ]\n                },\n                unstructured: {\n                  type: 'boolean'\n                }\n              },\n              required: [                'type'\n              ]\n            },\n            {\n              type: 'object',\n              title: 'Parquet',\n              properties: {\n                type: {\n                  type: 'string',\n                  enum: [                    'parquet'\n                  ]\n                },\n                compression: {\n                  type: 'string',\n                  enum: [                    'uncompressed',\n                    'snappy',\n                    'gzip',\n                    'zstd',\n                    'lz4'\n                  ]\n                },\n                row_group_bytes: {\n                  type: 'integer'\n                }\n              },\n              required: [                'type'\n              ]\n            }\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'http',\n        'modified_at',\n        'name',\n        'version',\n        'worker_binding'\n      ]\n    },\n    success: {\n      type: 'boolean',\n      description: 'Indicates whether the API call was successful.'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Specifies the public ID of the account.',
      },
      stream_id: {
        type: 'string',
        description: 'Specifies the public ID of the stream.',
      },
      http: {
        type: 'object',
        properties: {
          authentication: {
            type: 'boolean',
            description: 'Indicates that authentication is required for the HTTP endpoint.',
          },
          enabled: {
            type: 'boolean',
            description: 'Indicates that the HTTP endpoint is enabled.',
          },
          cors: {
            type: 'object',
            description: 'Specifies the CORS options for the HTTP endpoint.',
            properties: {
              origins: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            },
          },
        },
        required: ['authentication', 'enabled'],
      },
      worker_binding: {
        type: 'object',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Indicates that the worker binding is enabled.',
          },
        },
        required: ['enabled'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'stream_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { stream_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.pipelines.streams.update(stream_id, body)),
  );
};

export default { metadata, tool, handler };
