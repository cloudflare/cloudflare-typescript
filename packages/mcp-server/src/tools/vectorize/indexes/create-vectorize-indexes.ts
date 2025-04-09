// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_vectorize_indexes',
  description: 'Creates and returns a new Vectorize Index.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      config: {
        anyOf: [
          {
            type: 'object',
            properties: {
              dimensions: {
                type: 'integer',
                description: 'Specifies the number of dimensions for the index',
              },
              metric: {
                type: 'string',
                description: 'Specifies the type of metric to use calculating distance.',
                enum: ['cosine', 'euclidean', 'dot-product'],
              },
            },
            required: ['dimensions', 'metric'],
          },
          {
            type: 'object',
            properties: {
              preset: {
                type: 'string',
                description: 'Specifies the preset to use for the index.',
                enum: [
                  '@cf/baai/bge-small-en-v1.5',
                  '@cf/baai/bge-base-en-v1.5',
                  '@cf/baai/bge-large-en-v1.5',
                  'openai/text-embedding-ada-002',
                  'cohere/embed-multilingual-v2.0',
                ],
              },
            },
            required: ['preset'],
          },
        ],
        description: 'Specifies the type of configuration to use for the index.',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Specifies the description of the index.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.vectorize.indexes.create(body);
};

export default { metadata, tool, handler };
