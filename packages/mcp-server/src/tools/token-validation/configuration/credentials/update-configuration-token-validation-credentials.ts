// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'token_validation.configuration.credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/token_validation/config/{config_id}/credentials',
  operationId: 'token-validation-config-credentials-update',
};

export const tool: Tool = {
  name: 'update_configuration_token_validation_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Token Configuration credentials\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/credential_update_response',\n  $defs: {\n    credential_update_response: {\n      type: 'object',\n      properties: {\n        errors: {\n          $ref: '#/$defs/message'\n        },\n        keys: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                type: 'object',\n                description: 'JSON representation of an RSA key.',\n                properties: {\n                  alg: {\n                    type: 'string',\n                    description: 'Algorithm',\n                    enum: [                      'RS256',\n                      'RS384',\n                      'RS512',\n                      'PS256',\n                      'PS384',\n                      'PS512'\n                    ]\n                  },\n                  e: {\n                    type: 'string',\n                    description: 'RSA exponent'\n                  },\n                  kid: {\n                    type: 'string',\n                    description: 'Key ID'\n                  },\n                  kty: {\n                    type: 'string',\n                    description: 'Key Type',\n                    enum: [                      'RSA'\n                    ]\n                  },\n                  n: {\n                    type: 'string',\n                    description: 'RSA modulus'\n                  }\n                },\n                required: [                  'alg',\n                  'e',\n                  'kid',\n                  'kty',\n                  'n'\n                ]\n              },\n              {\n                type: 'object',\n                description: 'JSON representation of an ES256 key',\n                properties: {\n                  alg: {\n                    type: 'string',\n                    description: 'Algorithm',\n                    enum: [                      'ES256'\n                    ]\n                  },\n                  crv: {\n                    type: 'string',\n                    description: 'Curve',\n                    enum: [                      'P-256'\n                    ]\n                  },\n                  kid: {\n                    type: 'string',\n                    description: 'Key ID'\n                  },\n                  kty: {\n                    type: 'string',\n                    description: 'Key Type',\n                    enum: [                      'EC'\n                    ]\n                  },\n                  x: {\n                    type: 'string',\n                    description: 'X EC coordinate'\n                  },\n                  y: {\n                    type: 'string',\n                    description: 'Y EC coordinate'\n                  }\n                },\n                required: [                  'alg',\n                  'crv',\n                  'kid',\n                  'kty',\n                  'x',\n                  'y'\n                ]\n              },\n              {\n                type: 'object',\n                description: 'JSON representation of an ES384 key',\n                properties: {\n                  alg: {\n                    type: 'string',\n                    description: 'Algorithm',\n                    enum: [                      'ES384'\n                    ]\n                  },\n                  crv: {\n                    type: 'string',\n                    description: 'Curve',\n                    enum: [                      'P-384'\n                    ]\n                  },\n                  kid: {\n                    type: 'string',\n                    description: 'Key ID'\n                  },\n                  kty: {\n                    type: 'string',\n                    description: 'Key Type',\n                    enum: [                      'EC'\n                    ]\n                  },\n                  x: {\n                    type: 'string',\n                    description: 'X EC coordinate'\n                  },\n                  y: {\n                    type: 'string',\n                    description: 'Y EC coordinate'\n                  }\n                },\n                required: [                  'alg',\n                  'crv',\n                  'kid',\n                  'kty',\n                  'x',\n                  'y'\n                ]\n              }\n            ],\n            description: 'JSON representation of a JWKS key.'\n          }\n        },\n        messages: {\n          $ref: '#/$defs/message'\n        },\n        success: {\n          type: 'string',\n          description: 'Whether the API call was successful.',\n          enum: [            true\n          ]\n        }\n      },\n      required: [        'errors',\n        'keys',\n        'messages',\n        'success'\n      ]\n    },\n    message: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      config_id: {
        type: 'string',
        description: 'UUID.',
      },
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'config_id', 'keys'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { config_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.tokenValidation.configuration.credentials.update(config_id, body),
      ),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
