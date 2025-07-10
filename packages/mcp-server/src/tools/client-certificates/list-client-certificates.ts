// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'client_certificates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/client_certificates',
  operationId: 'client-certificate-for-a-zone-list-client-certificates',
};

export const tool: Tool = {
  name: 'list_client_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all of your Zone's API Shield mTLS Client Certificates by Status and/or using Pagination\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/client_certificate'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    client_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        certificate: {\n          type: 'string',\n          description: 'The Client Certificate PEM'\n        },\n        certificate_authority: {\n          type: 'object',\n          description: 'Certificate Authority used to issue the Client Certificate',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        common_name: {\n          type: 'string',\n          description: 'Common Name of the Client Certificate'\n        },\n        country: {\n          type: 'string',\n          description: 'Country, provided by the CSR'\n        },\n        csr: {\n          type: 'string',\n          description: 'The Certificate Signing Request (CSR). Must be newline-encoded.'\n        },\n        expires_on: {\n          type: 'string',\n          description: 'Date that the Client Certificate expires'\n        },\n        fingerprint_sha256: {\n          type: 'string',\n          description: 'Unique identifier of the Client Certificate'\n        },\n        issued_on: {\n          type: 'string',\n          description: 'Date that the Client Certificate was issued by the Certificate Authority'\n        },\n        location: {\n          type: 'string',\n          description: 'Location, provided by the CSR'\n        },\n        organization: {\n          type: 'string',\n          description: 'Organization, provided by the CSR'\n        },\n        organizational_unit: {\n          type: 'string',\n          description: 'Organizational Unit, provided by the CSR'\n        },\n        serial_number: {\n          type: 'string',\n          description: 'The serial number on the created Client Certificate.'\n        },\n        signature: {\n          type: 'string',\n          description: 'The type of hash used for the Client Certificate..'\n        },\n        ski: {\n          type: 'string',\n          description: 'Subject Key Identifier'\n        },\n        state: {\n          type: 'string',\n          description: 'State, provided by the CSR'\n        },\n        status: {\n          $ref: '#/$defs/status'\n        },\n        validity_days: {\n          type: 'integer',\n          description: 'The number of days the Client Certificate will be valid after the issued_on date'\n        }\n      },\n      required: []\n    },\n    status: {\n      type: 'string',\n      description: 'Client Certificates may be active or revoked, and the pending_reactivation or pending_revocation represent in-progress asynchronous transitions',\n      enum: [        'active',\n        'pending_reactivation',\n        'pending_revocation',\n        'revoked'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      limit: {
        type: 'integer',
        description: 'Limit to the number of records returned.',
      },
      offset: {
        type: 'integer',
        description: 'Offset the results',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of records per page.',
      },
      status: {
        type: 'string',
        description: 'Client Certitifcate Status to filter results by.',
        enum: ['all', 'active', 'pending_reactivation', 'pending_revocation', 'revoked'],
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
  const response = await client.clientCertificates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
