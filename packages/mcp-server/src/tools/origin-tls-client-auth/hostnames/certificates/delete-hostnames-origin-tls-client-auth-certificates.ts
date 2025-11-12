// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}',
  operationId: 'per-hostname-authenticated-origin-pull-delete-hostname-client-certificate',
};

export const tool: Tool = {
  name: 'delete_hostnames_origin_tls_client_auth_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Hostname Client Certificate\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/certificate_delete_response',\n  $defs: {\n    certificate_delete_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The hostname certificate.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'The date when the certificate expires.',\n          format: 'date-time'\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The serial number on the uploaded certificate.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the certificate or the association.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        uploaded_on: {\n          type: 'string',\n          description: 'The time when the certificate was uploaded.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
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
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.originTLSClientAuth.hostnames.certificates.delete(certificate_id, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
