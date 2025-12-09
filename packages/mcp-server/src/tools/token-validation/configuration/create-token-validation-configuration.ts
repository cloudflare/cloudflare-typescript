// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'token_validation.configuration',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/token_validation/config',
  operationId: 'token-validation-config-create',
};

export const tool: Tool = {
  name: 'create_token_validation_configuration',
  description: 'Create a new Token Validation configuration',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      credentials: {
        type: 'object',
        properties: {
          keys: {
            type: 'array',
            items: {
              anyOf: [
                {
                  type: 'object',
                  description: 'JSON representation of an RSA key.',
                  properties: {
                    alg: {
                      type: 'string',
                      description: 'Algorithm',
                      enum: ['RS256', 'RS384', 'RS512', 'PS256', 'PS384', 'PS512'],
                    },
                    e: {
                      type: 'string',
                      description: 'RSA exponent',
                    },
                    kid: {
                      type: 'string',
                      description: 'Key ID',
                    },
                    kty: {
                      type: 'string',
                      description: 'Key Type',
                      enum: ['RSA'],
                    },
                    n: {
                      type: 'string',
                      description: 'RSA modulus',
                    },
                  },
                  required: ['alg', 'e', 'kid', 'kty', 'n'],
                },
                {
                  type: 'object',
                  description: 'JSON representation of an ES256 key',
                  properties: {
                    alg: {
                      type: 'string',
                      description: 'Algorithm',
                      enum: ['ES256'],
                    },
                    crv: {
                      type: 'string',
                      description: 'Curve',
                      enum: ['P-256'],
                    },
                    kid: {
                      type: 'string',
                      description: 'Key ID',
                    },
                    kty: {
                      type: 'string',
                      description: 'Key Type',
                      enum: ['EC'],
                    },
                    x: {
                      type: 'string',
                      description: 'X EC coordinate',
                    },
                    y: {
                      type: 'string',
                      description: 'Y EC coordinate',
                    },
                  },
                  required: ['alg', 'crv', 'kid', 'kty', 'x', 'y'],
                },
                {
                  type: 'object',
                  description: 'JSON representation of an ES384 key',
                  properties: {
                    alg: {
                      type: 'string',
                      description: 'Algorithm',
                      enum: ['ES384'],
                    },
                    crv: {
                      type: 'string',
                      description: 'Curve',
                      enum: ['P-384'],
                    },
                    kid: {
                      type: 'string',
                      description: 'Key ID',
                    },
                    kty: {
                      type: 'string',
                      description: 'Key Type',
                      enum: ['EC'],
                    },
                    x: {
                      type: 'string',
                      description: 'X EC coordinate',
                    },
                    y: {
                      type: 'string',
                      description: 'Y EC coordinate',
                    },
                  },
                  required: ['alg', 'crv', 'kid', 'kty', 'x', 'y'],
                },
              ],
              description: 'JSON representation of a JWKS key.',
            },
          },
        },
        required: ['keys'],
      },
      description: {
        type: 'string',
      },
      title: {
        type: 'string',
      },
      token_sources: {
        type: 'array',
        items: {
          type: 'string',
          description: 'HTTP request header (must be lowercase)',
        },
      },
      token_type: {
        type: 'string',
        enum: ['JWT'],
      },
    },
    required: ['zone_id', 'credentials', 'description', 'title', 'token_sources', 'token_type'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.tokenValidation.configuration.create(body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
