// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.domains.custom',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}',
  operationId: 'r2-get-custom-domain-settings',
};

export const tool: Tool = {
  name: 'get_domains_buckets_r2_custom',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the configuration for a custom domain on an existing R2 bucket.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_get_response',\n  $defs: {\n    custom_get_response: {\n      type: 'object',\n      properties: {\n        domain: {\n          type: 'string',\n          description: 'Domain name of the custom domain to be added.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether this bucket is publicly accessible at the specified custom domain.'\n        },\n        status: {\n          type: 'object',\n          properties: {\n            ownership: {\n              type: 'string',\n              description: 'Ownership status of the domain.',\n              enum: [                'pending',\n                'active',\n                'deactivated',\n                'blocked',\n                'error',\n                'unknown'\n              ]\n            },\n            ssl: {\n              type: 'string',\n              description: 'SSL certificate status.',\n              enum: [                'initializing',\n                'pending',\n                'active',\n                'deactivated',\n                'error',\n                'unknown'\n              ]\n            }\n          },\n          required: [            'ownership',\n            'ssl'\n          ]\n        },\n        ciphers: {\n          type: 'array',\n          description: 'An allowlist of ciphers for TLS termination. These ciphers must be in the BoringSSL format.',\n          items: {\n            type: 'string'\n          }\n        },\n        minTLS: {\n          type: 'string',\n          description: 'Minimum TLS Version the custom domain will accept for incoming connections. If not set, defaults to 1.0.',\n          enum: [            '1.0',\n            '1.1',\n            '1.2',\n            '1.3'\n          ]\n        },\n        zoneId: {\n          type: 'string',\n          description: 'Zone ID of the custom domain resides in.'\n        },\n        zoneName: {\n          type: 'string',\n          description: 'Zone that the custom domain resides in.'\n        }\n      },\n      required: [        'domain',\n        'enabled',\n        'status'\n      ]\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.r2.buckets.domains.custom.get(domain, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
