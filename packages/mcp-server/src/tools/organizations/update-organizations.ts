// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'organizations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/organizations/{organization_id}',
  operationId: 'Organizations_modify',
};

export const tool: Tool = {
  name: 'update_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nModify organization. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        additionalProperties: true\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/organization'\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    organization: {\n      type: 'object',\n      description: 'References an Organization in the Cloudflare data model.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Organization ID'\n        },\n        create_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            flags: {\n              type: 'object',\n              description: 'Enable features for Organizations.',\n              properties: {\n                account_creation: {\n                  type: 'string'\n                },\n                account_deletion: {\n                  type: 'string'\n                },\n                account_migration: {\n                  type: 'string'\n                },\n                account_mobility: {\n                  type: 'string'\n                },\n                sub_org_creation: {\n                  type: 'string'\n                }\n              },\n              required: [                'account_creation',\n                'account_deletion',\n                'account_migration',\n                'account_mobility',\n                'sub_org_creation'\n              ]\n            },\n            managed_by: {\n              type: 'string'\n            }\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        parent: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              title: 'Organization ID'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        profile: {\n          type: 'object',\n          properties: {\n            business_address: {\n              type: 'string'\n            },\n            business_email: {\n              type: 'string'\n            },\n            business_name: {\n              type: 'string'\n            },\n            business_phone: {\n              type: 'string'\n            },\n            external_metadata: {\n              type: 'string'\n            }\n          },\n          required: [            'business_address',\n            'business_email',\n            'business_name',\n            'business_phone',\n            'external_metadata'\n          ]\n        }\n      },\n      required: [        'id',\n        'create_time',\n        'meta',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      organization_id: {
        type: 'string',
        title: 'Organization ID',
      },
      name: {
        type: 'string',
      },
      parent: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            title: 'Organization ID',
          },
          name: {
            type: 'string',
          },
        },
        required: ['id', 'name'],
      },
      profile: {
        type: 'object',
        properties: {
          business_address: {
            type: 'string',
          },
          business_email: {
            type: 'string',
          },
          business_name: {
            type: 'string',
          },
          business_phone: {
            type: 'string',
          },
          external_metadata: {
            type: 'string',
          },
        },
        required: [
          'business_address',
          'business_email',
          'business_name',
          'business_phone',
          'external_metadata',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['organization_id', 'name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { organization_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.organizations.update(organization_id, body)),
  );
};

export default { metadata, tool, handler };
