// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}',
  operationId: 'worker-get-script-secret',
};

export const tool: Tool = {
  name: 'get_scripts_workers_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a given secret binding (value omitted) on a script.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string',\n              description: 'A JavaScript variable name for the binding.'\n            },\n            text: {\n              type: 'string',\n              description: 'The secret value to use.'\n            },\n            type: {\n              type: 'string',\n              description: 'The kind of resource that the binding provides.',\n              enum: [                'secret_text'\n              ]\n            }\n          },\n          required: [            'name',\n            'text',\n            'type'\n          ]\n        },\n        {\n          type: 'object',\n          properties: {\n            algorithm: {\n              type: 'object',\n              description: 'Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).'\n            },\n            format: {\n              type: 'string',\n              description: 'Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format).',\n              enum: [                'raw',\n                'pkcs8',\n                'spki',\n                'jwk'\n              ]\n            },\n            name: {\n              type: 'string',\n              description: 'A JavaScript variable name for the binding.'\n            },\n            type: {\n              type: 'string',\n              description: 'The kind of resource that the binding provides.',\n              enum: [                'secret_key'\n              ]\n            },\n            usages: {\n              type: 'array',\n              description: 'Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).',\n              items: {\n                type: 'string',\n                enum: [                  'encrypt',\n                  'decrypt',\n                  'sign',\n                  'verify',\n                  'deriveKey',\n                  'deriveBits',\n                  'wrapKey',\n                  'unwrapKey'\n                ]\n              }\n            },\n            key_base64: {\n              type: 'string',\n              description: 'Base64-encoded key data. Required if `format` is \"raw\", \"pkcs8\", or \"spki\".'\n            },\n            key_jwk: {\n              type: 'object',\n              description: 'Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is \"jwk\".'\n            }\n          },\n          required: [            'algorithm',\n            'format',\n            'name',\n            'type',\n            'usages'\n          ]\n        }\n      ],\n      description: 'A secret value accessible through a binding.'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
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
      secret_name: {
        type: 'string',
        description: 'A JavaScript variable name for the secret binding.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'script_name', 'secret_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { secret_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.workers.scripts.secrets.get(secret_name, body)),
  );
};

export default { metadata, tool, handler };
