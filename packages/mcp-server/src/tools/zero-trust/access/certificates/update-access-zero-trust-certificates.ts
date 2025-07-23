// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}',
};

export const tool: Tool = {
  name: 'update_access_zero_trust_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a configured mTLS certificate.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/certificate'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The ID of the application that will use this certificate.'\n        },\n        associated_hostnames: {\n          type: 'array',\n          description: 'The hostnames of the applications that will use this certificate.',\n          items: {\n            $ref: '#/$defs/associated_hostnames'\n          }\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        expires_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        fingerprint: {\n          type: 'string',\n          description: 'The MD5 fingerprint of the certificate.'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the certificate.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    },\n    associated_hostnames: {\n      type: 'string',\n      description: 'A fully-qualified domain name (FQDN).'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      certificate_id: {
        type: 'string',
        description: 'UUID.',
      },
      associated_hostnames: {
        type: 'array',
        description: 'The hostnames of the applications that will use this certificate.',
        items: {
          $ref: '#/$defs/associated_hostnames',
        },
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      name: {
        type: 'string',
        description: 'The name of the certificate.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['certificate_id', 'associated_hostnames'],
    $defs: {
      associated_hostnames: {
        type: 'string',
        description: 'A fully-qualified domain name (FQDN).',
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.access.certificates.update(certificate_id, body)),
  );
};

export default { metadata, tool, handler };
