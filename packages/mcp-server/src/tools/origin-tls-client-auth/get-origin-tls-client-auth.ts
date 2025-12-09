// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/{certificate_id}',
  operationId: 'zone-level-authenticated-origin-pulls-get-certificate-details',
};

export const tool: Tool = {
  name: 'get_origin_tls_client_auth',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Certificate Details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/origin_tls_client_auth_get_response',\n  $defs: {\n    origin_tls_client_auth_get_response: {\n      allOf: [        {\n          $ref: '#/$defs/zone_authenticated_origin_pull'\n        }\n      ]\n    },\n    zone_authenticated_origin_pull: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The zone\\'s leaf certificate.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'When the certificate from the authority expires.',\n          format: 'date-time'\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the certificate activation.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        uploaded_on: {\n          type: 'string',\n          description: 'This is the time the certificate was uploaded.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_id: {
        type: 'string',
        description: 'Identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'certificate_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.originTLSClientAuth.get(certificate_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
