// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.sippy',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/sippy',
  operationId: 'r2-put-bucket-sippy-config',
};

export const tool: Tool = {
  name: 'update_buckets_r2_sippy',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSets configuration for Sippy for an existing R2 bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      $ref: '#/$defs/sippy'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    sippy: {\n      type: 'object',\n      properties: {\n        destination: {\n          type: 'object',\n          description: 'Details about the configured destination bucket.',\n          properties: {\n            accessKeyId: {\n              type: 'string',\n              description: 'ID of the Cloudflare API token used when writing objects to this\\nbucket.\\n'\n            },\n            account: {\n              type: 'string'\n            },\n            bucket: {\n              type: 'string',\n              description: 'Name of the bucket on the provider.'\n            },\n            provider: {\n              $ref: '#/$defs/provider'\n            }\n          },\n          required: []\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'State of Sippy for this bucket.'\n        },\n        source: {\n          type: 'object',\n          description: 'Details about the configured source bucket.',\n          properties: {\n            bucket: {\n              type: 'string',\n              description: 'Name of the bucket on the provider.'\n            },\n            provider: {\n              type: 'string',\n              enum: [                'aws',\n                'gcs'\n              ]\n            },\n            region: {\n              type: 'string',\n              description: 'Region where the bucket resides (AWS only).'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    provider: {\n      type: 'string',\n      enum: [        'r2'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account ID.',
          },
          bucket_name: {
            type: 'string',
            description: 'Name of the bucket.',
          },
          destination: {
            type: 'object',
            description: 'R2 bucket to copy objects to.',
            properties: {
              accessKeyId: {
                type: 'string',
                description:
                  'ID of a Cloudflare API token.\nThis is the value labelled "Access Key ID" when creating an API.\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
              provider: {
                $ref: '#/$defs/provider',
              },
              secretAccessKey: {
                type: 'string',
                description:
                  'Value of a Cloudflare API token.\nThis is the value labelled "Secret Access Key" when creating an API.\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
            },
            required: [],
          },
          source: {
            type: 'object',
            description: 'AWS S3 bucket to copy objects from.',
            properties: {
              accessKeyId: {
                type: 'string',
                description: 'Access Key ID of an IAM credential (ideally scoped to a single S3 bucket).',
              },
              bucket: {
                type: 'string',
                description: 'Name of the AWS S3 bucket.',
              },
              provider: {
                type: 'string',
                enum: ['aws'],
              },
              region: {
                type: 'string',
                description: 'Name of the AWS availability zone.',
              },
              secretAccessKey: {
                type: 'string',
                description: 'Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket).',
              },
            },
            required: [],
          },
          jurisdiction: {
            type: 'string',
            description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
            enum: ['default', 'eu', 'fedramp'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account ID.',
          },
          bucket_name: {
            type: 'string',
            description: 'Name of the bucket.',
          },
          destination: {
            type: 'object',
            description: 'R2 bucket to copy objects to.',
            properties: {
              accessKeyId: {
                type: 'string',
                description:
                  'ID of a Cloudflare API token.\nThis is the value labelled "Access Key ID" when creating an API.\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
              provider: {
                $ref: '#/$defs/provider',
              },
              secretAccessKey: {
                type: 'string',
                description:
                  'Value of a Cloudflare API token.\nThis is the value labelled "Secret Access Key" when creating an API.\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
            },
            required: [],
          },
          source: {
            type: 'object',
            description: 'GCS bucket to copy objects from.',
            properties: {
              bucket: {
                type: 'string',
                description: 'Name of the GCS bucket.',
              },
              clientEmail: {
                type: 'string',
                description: 'Client email of an IAM credential (ideally scoped to a single GCS bucket).',
              },
              privateKey: {
                type: 'string',
                description: 'Private Key of an IAM credential (ideally scoped to a single GCS bucket).',
              },
              provider: {
                type: 'string',
                enum: ['gcs'],
              },
            },
            required: [],
          },
          jurisdiction: {
            type: 'string',
            description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
            enum: ['default', 'eu', 'fedramp'],
          },
        },
      },
    ],
    $defs: {
      provider: {
        type: 'string',
        enum: ['r2'],
      },
    },
    properties: {
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
  const { bucket_name, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.r2.buckets.sippy.update(bucket_name, body)),
  );
};

export default { metadata, tool, handler };
