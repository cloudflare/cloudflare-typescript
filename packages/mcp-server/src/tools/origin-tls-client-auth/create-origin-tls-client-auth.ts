// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth',
  operationId: 'zone-level-authenticated-origin-pulls-upload-certificate',
};

export const tool: Tool = {
  name: 'create_origin_tls_client_auth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload your own certificate you want Cloudflare to use for edge-to-origin communication to override the shared certificate. Please note that it is important to keep only one certificate active. Also, make sure to enable zone-level authenticated origin pulls by making a PUT call to settings endpoint to see the uploaded certificate in use.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      allOf: [        {\n          $ref: '#/$defs/zone_authenticated_origin_pull'\n        }\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    zone_authenticated_origin_pull: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The zone\\'s leaf certificate.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the certificate from the authority expires.',\n          format: 'date-time'\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the certificate activation.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        uploaded_on: {\n          type: 'string',\n          description: 'This is the time the certificate was uploaded.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate: {
        type: 'string',
        description: "The zone's leaf certificate.",
      },
      private_key: {
        type: 'string',
        description: "The zone's private key.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'certificate', 'private_key'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.originTLSClientAuth.create(body)));
};

export default { metadata, tool, handler };
