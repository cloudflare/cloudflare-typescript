// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}',
  operationId: 'per-hostname-authenticated-origin-pull-get-the-hostname-status-for-client-authentication',
};

export const tool: Tool = {
  name: 'get_origin_tls_client_auth_hostnames',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the Hostname Status for Client Authentication\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/authenticated_origin_pull'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    authenticated_origin_pull: {\n      type: 'object',\n      properties: {\n        cert_id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        cert_status: {\n          type: 'string',\n          description: 'Status of the certificate or the association.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        cert_updated_at: {\n          type: 'string',\n          description: 'The time when the certificate was updated.',\n          format: 'date-time'\n        },\n        cert_uploaded_on: {\n          type: 'string',\n          description: 'The time when the certificate was uploaded.',\n          format: 'date-time'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The hostname certificate.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The time when the certificate was created.',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'The date when the certificate expires.',\n          format: 'date-time'\n        },\n        hostname: {\n          type: 'string',\n          description: 'The hostname on the origin for which the client certificate uploaded will be used.'\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The serial number on the uploaded certificate.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the certificate or the association.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The time when the certificate was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      hostname: {
        type: 'string',
        description: 'The hostname on the origin for which the client certificate uploaded will be used.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'hostname'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { hostname, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.originTLSClientAuth.hostnames.get(hostname, body)),
  );
};

export default { metadata, tool, handler };
