// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.sippy',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_buckets_r2_sippy',
  description: 'Sets configuration for Sippy for an existing R2 bucket.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account ID',
          },
          bucket_name: {
            type: 'string',
            description: 'Name of the bucket',
          },
          destination: {
            type: 'object',
            description: 'R2 bucket to copy objects to',
            properties: {
              accessKeyId: {
                type: 'string',
                description:
                  'ID of a Cloudflare API token.\nThis is the value labelled "Access Key ID" when creating an API\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
              provider: {
                type: 'string',
                enum: ['r2'],
              },
              secretAccessKey: {
                type: 'string',
                description:
                  'Value of a Cloudflare API token.\nThis is the value labelled "Secret Access Key" when creating an API\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
            },
            required: [],
          },
          source: {
            type: 'object',
            description: 'AWS S3 bucket to copy objects from',
            properties: {
              accessKeyId: {
                type: 'string',
                description: 'Access Key ID of an IAM credential (ideally scoped to a single S3 bucket)',
              },
              bucket: {
                type: 'string',
                description: 'Name of the AWS S3 bucket',
              },
              provider: {
                type: 'string',
                enum: ['aws'],
              },
              region: {
                type: 'string',
                description: 'Name of the AWS availability zone',
              },
              secretAccessKey: {
                type: 'string',
                description: 'Secret Access Key of an IAM credential (ideally scoped to a single S3 bucket)',
              },
            },
            required: [],
          },
          jurisdiction: {
            type: 'string',
            description: 'The bucket jurisdiction',
            enum: ['default', 'eu', 'fedramp'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Account ID',
          },
          bucket_name: {
            type: 'string',
            description: 'Name of the bucket',
          },
          destination: {
            type: 'object',
            description: 'R2 bucket to copy objects to',
            properties: {
              accessKeyId: {
                type: 'string',
                description:
                  'ID of a Cloudflare API token.\nThis is the value labelled "Access Key ID" when creating an API\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
              provider: {
                $ref: '#/anyOf/0/properties/destination/provider',
              },
              secretAccessKey: {
                type: 'string',
                description:
                  'Value of a Cloudflare API token.\nThis is the value labelled "Secret Access Key" when creating an API\ntoken from the [R2 dashboard](https://dash.cloudflare.com/?to=/:account/r2/api-tokens).\n\nSippy will use this token when writing objects to R2, so it is\nbest to scope this token to the bucket you\'re enabling Sippy for.\n',
              },
            },
            required: [],
          },
          source: {
            type: 'object',
            description: 'GCS bucket to copy objects from',
            properties: {
              bucket: {
                type: 'string',
                description: 'Name of the GCS bucket',
              },
              clientEmail: {
                type: 'string',
                description: 'Client email of an IAM credential (ideally scoped to a single GCS bucket)',
              },
              privateKey: {
                type: 'string',
                description: 'Private Key of an IAM credential (ideally scoped to a single GCS bucket)',
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
            description: 'The bucket jurisdiction',
            enum: ['default', 'eu', 'fedramp'],
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { bucket_name, ...body } = args;
  return client.r2.buckets.sippy.update(bucket_name, body);
};

export default { metadata, tool, handler };
