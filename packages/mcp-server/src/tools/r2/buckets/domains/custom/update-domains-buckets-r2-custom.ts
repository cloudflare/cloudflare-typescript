// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.domains.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}',
  operationId: 'r2-edit-custom-domain-settings',
};

export const tool: Tool = {
  name: 'update_domains_buckets_r2_custom',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEdit the configuration for a custom domain on an existing R2 bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        domain: {\n          type: 'string',\n          description: 'Domain name of the affected custom domain.'\n        },\n        ciphers: {\n          type: 'array',\n          description: 'An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.',\n          items: {\n            type: 'string'\n          }\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether this bucket is publicly accessible at the specified custom domain.'\n        },\n        minTLS: {\n          type: 'string',\n          description: 'Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0.',\n          enum: [            '1.0',\n            '1.1',\n            '1.2',\n            '1.3'\n          ]\n        }\n      },\n      required: [        'domain'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
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
      domain: {
        type: 'string',
        description: 'Name of the custom domain.',
      },
      ciphers: {
        type: 'array',
        description:
          'An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.',
        items: {
          type: 'string',
        },
      },
      enabled: {
        type: 'boolean',
        description: 'Whether to enable public bucket access at the specified custom domain.',
      },
      minTLS: {
        type: 'string',
        description:
          'Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to previous value.',
        enum: ['1.0', '1.1', '1.2', '1.3'],
      },
      jurisdiction: {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name', 'domain'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.r2.buckets.domains.custom.update(domain, body)),
  );
};

export default { metadata, tool, handler };
