// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/secrets',
  operationId: 'worker-put-script-secret',
};

export const tool: Tool = {
  name: 'update_scripts_workers_secrets',
  description: 'Add a secret to a script.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Identifier.',
          },
          script_name: {
            type: 'string',
            description: 'Name of the script, used in URLs and route configuration.',
          },
          name: {
            type: 'string',
            description: 'A JavaScript variable name for the binding.',
          },
          text: {
            type: 'string',
            description: 'The secret value to use.',
          },
          type: {
            type: 'string',
            description: 'The kind of resource that the binding provides.',
            enum: ['secret_text'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
            description: 'Identifier.',
          },
          script_name: {
            type: 'string',
            description: 'Name of the script, used in URLs and route configuration.',
          },
          algorithm: {
            type: 'object',
            description:
              'Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).',
          },
          format: {
            type: 'string',
            description:
              'Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).',
            enum: ['raw', 'pkcs8', 'spki', 'jwk'],
          },
          name: {
            type: 'string',
            description: 'A JavaScript variable name for the binding.',
          },
          type: {
            type: 'string',
            description: 'The kind of resource that the binding provides.',
            enum: ['secret_key'],
          },
          usages: {
            type: 'array',
            description:
              'Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).',
            items: {
              type: 'string',
              enum: [
                'encrypt',
                'decrypt',
                'sign',
                'verify',
                'deriveKey',
                'deriveBits',
                'wrapKey',
                'unwrapKey',
              ],
            },
          },
          key_base64: {
            type: 'string',
            description: 'Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".',
          },
          key_jwk: {
            type: 'object',
            description:
              'Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".',
          },
        },
      },
    ],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.secrets.update(script_name, body));
};

export default { metadata, tool, handler };
