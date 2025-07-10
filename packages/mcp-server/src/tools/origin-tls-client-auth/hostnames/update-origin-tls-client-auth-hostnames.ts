// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/origin_tls_client_auth/hostnames',
  operationId:
    'per-hostname-authenticated-origin-pull-enable-or-disable-a-hostname-for-client-authentication',
};

export const tool: Tool = {
  name: 'update_origin_tls_client_auth_hostnames',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAssociate a hostname to a certificate and enable, disable or invalidate the association. If disabled, client certificate will not be sent to the hostname even if activated at the zone level. 100 maximum associations on a single certificate are allowed. Note: Use a null value for parameter *enabled* to invalidate the association.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        allOf: [          {\n            $ref: '#/$defs/authenticated_origin_pull'\n          }\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    authenticated_origin_pull: {\n      type: 'object',\n      properties: {\n        cert_id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        cert_status: {\n          type: 'string',\n          description: 'Status of the certificate or the association.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        cert_updated_at: {\n          type: 'string',\n          description: 'The time when the certificate was updated.',\n          format: 'date-time'\n        },\n        cert_uploaded_on: {\n          type: 'string',\n          description: 'The time when the certificate was uploaded.',\n          format: 'date-time'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The hostname certificate.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'The time when the certificate was created.',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'The date when the certificate expires.',\n          format: 'date-time'\n        },\n        hostname: {\n          type: 'string',\n          description: 'The hostname on the origin for which the client certificate uploaded will be used.'\n        },\n        issuer: {\n          type: 'string',\n          description: 'The certificate authority that issued the certificate.'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The serial number on the uploaded certificate.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the certificate.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the certificate or the association.',\n          enum: [            'initializing',\n            'pending_deployment',\n            'pending_deletion',\n            'active',\n            'deleted',\n            'deployment_timed_out',\n            'deletion_timed_out'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The time when the certificate was updated.',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      config: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            cert_id: {
              type: 'string',
              description: 'Certificate identifier tag.',
            },
            enabled: {
              type: 'boolean',
              description:
                'Indicates whether hostname-level authenticated origin pulls is enabled. A null value voids the association.',
            },
            hostname: {
              type: 'string',
              description:
                'The hostname on the origin for which the client certificate uploaded will be used.',
            },
          },
          required: [],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.originTLSClientAuth.hostnames.update(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
