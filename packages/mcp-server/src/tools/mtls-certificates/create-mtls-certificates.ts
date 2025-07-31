// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'mtls_certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/mtls_certificates',
  operationId: 'm-tls-certificate-management-upload-m-tls-certificate',
};

export const tool: Tool = {
  name: 'create_mtls_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a certificate that you want to use with mTLS-enabled Cloudflare services.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        ca: {\n          type: 'boolean',\n          description: 'Indicates whether the certificate is a CA or leaf certificate.'\n        },\n        certificates: {\n          type: 'string',\n          description: 'The uploaded root CA certificate.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the certificate expires.',\n          format: 'date-time'\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        name: {\n          type: 'string',\n          description: 'Optional unique name for the certificate. Only used for human readability.'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The certificate serial number.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'This is the time the certificate was updated.',\n          format: 'date-time'\n        },\n        uploaded_on: {\n          type: 'string',\n          description: 'This is the time the certificate was uploaded.',\n          format: 'date-time'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      ca: {
        type: 'boolean',
        description: 'Indicates whether the certificate is a CA or leaf certificate.',
      },
      certificates: {
        type: 'string',
        description: 'The uploaded root CA certificate.',
      },
      name: {
        type: 'string',
        description: 'Optional unique name for the certificate. Only used for human readability.',
      },
      private_key: {
        type: 'string',
        description:
          "The private key for the certificate. This field is only needed for specific use cases such as using a custom certificate with Zero Trust's block page.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'ca', 'certificates'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.mtlsCertificates.create(body)));
};

export default { metadata, tool, handler };
