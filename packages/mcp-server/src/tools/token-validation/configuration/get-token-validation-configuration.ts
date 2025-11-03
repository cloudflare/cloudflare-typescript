// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'token_validation.configuration',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/token_validation/config/{config_id}',
  operationId: 'token-validation-config-get',
};

export const tool: Tool = {
  name: 'get_token_validation_configuration',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single Token Configuration\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      $ref: '#/$defs/message'\n    },\n    messages: {\n      $ref: '#/$defs/message'\n    },\n    result: {\n      $ref: '#/$defs/token_config'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    message: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    token_config: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        credentials: {\n          type: 'object',\n          properties: {\n            keys: {\n              type: 'array',\n              items: {\n                anyOf: [                  {\n                    type: 'object',\n                    description: 'Common properties of a JWT key.',\n                    properties: {\n                      alg: {\n                        type: 'string',\n                        description: 'Algorithm',\n                        enum: [                          'ES256',\n                          'ES384'\n                        ]\n                      },\n                      kid: {\n                        type: 'string',\n                        description: 'Key ID'\n                      },\n                      kty: {\n                        type: 'string',\n                        description: 'Key Type',\n                        enum: [                          'EC'\n                        ]\n                      },\n                      x: {\n                        type: 'string',\n                        description: 'X EC coordinate'\n                      },\n                      y: {\n                        type: 'string',\n                        description: 'Y EC coordinate'\n                      }\n                    },\n                    required: [                      'alg',\n                      'kid',\n                      'kty',\n                      'x',\n                      'y'\n                    ]\n                  },\n                  {\n                    type: 'object',\n                    description: 'Common properties of a JWT key.',\n                    properties: {\n                      alg: {\n                        type: 'string',\n                        description: 'Algorithm',\n                        enum: [                          'RS256',\n                          'RS384',\n                          'RS512',\n                          'PS256',\n                          'PS384',\n                          'PS512'\n                        ]\n                      },\n                      e: {\n                        type: 'string',\n                        description: 'RSA exponent'\n                      },\n                      kid: {\n                        type: 'string',\n                        description: 'Key ID'\n                      },\n                      kty: {\n                        type: 'string',\n                        description: 'Key Type',\n                        enum: [                          'RSA'\n                        ]\n                      },\n                      n: {\n                        type: 'string',\n                        description: 'RSA modulus'\n                      }\n                    },\n                    required: [                      'alg',\n                      'e',\n                      'kid',\n                      'kty',\n                      'n'\n                    ]\n                  }\n                ],\n                description: 'JSON representation of a JWKS key.'\n              }\n            }\n          }\n        },\n        description: {\n          type: 'string'\n        },\n        last_updated: {\n          type: 'string',\n          format: 'date-time'\n        },\n        title: {\n          type: 'string'\n        },\n        token_sources: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'HTTP request header (must be lowercase)'\n          }\n        },\n        token_type: {\n          type: 'string',\n          enum: [            'JWT'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'config_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { config_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.tokenValidation.configuration.get(config_id, body)),
  );
};

export default { metadata, tool, handler };
