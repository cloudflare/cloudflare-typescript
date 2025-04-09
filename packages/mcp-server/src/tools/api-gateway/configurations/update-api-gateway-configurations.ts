// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.configurations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_api_gateway_configurations',
  description: 'Set configuration properties',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      auth_id_characteristics: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              description: 'Auth ID Characteristic',
              properties: {
                name: {
                  type: 'string',
                  description: 'The name of the characteristic field, i.e., the header or cookie name.',
                },
                type: {
                  type: 'string',
                  description: 'The type of characteristic.',
                  enum: ['header', 'cookie'],
                },
              },
              required: ['name', 'type'],
            },
            {
              type: 'object',
              description: 'Auth ID Characteristic extracted from JWT Token Claims',
              properties: {
                name: {
                  type: 'string',
                  description:
                    'Claim location expressed as `$(token_config_id):$(json_path)`, where `token_config_id` \nis the ID of the token configuration used in validating the JWT, and `json_path` is a RFC 9535 \nJSONPath (https://goessner.net/articles/JsonPath/, https://www.rfc-editor.org/rfc/rfc9535.html).\nThe JSONPath expression may be in dot or bracket notation, may only specify literal keys\nor array indexes, and must return a singleton value, which will be interpreted as a string.\n',
                },
                type: {
                  type: 'string',
                  description: 'The type of characteristic.',
                  enum: ['jwt'],
                },
              },
              required: ['name', 'type'],
            },
          ],
          description: 'Auth ID Characteristic',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.configurations.update(body);
};

export default { metadata, tool, handler };
