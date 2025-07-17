// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.identity_providers.scim.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users',
  operationId: 'access-identity-providers-list-scim-user-resources',
};

export const tool: Tool = {
  name: 'list_scim_identity_providers_zero_trust_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLists SCIM User resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/access_user'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    access_user: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique Cloudflare-generated Id of the SCIM resource.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Determines the status of the SCIM User resource.'\n        },\n        displayName: {\n          type: 'string',\n          description: 'The name of the SCIM User resource.'\n        },\n        emails: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              primary: {\n                type: 'boolean',\n                description: 'Indicates if the email address is the primary email belonging to the SCIM User resource.'\n              },\n              type: {\n                type: 'string',\n                description: 'Indicates the type of the email address.'\n              },\n              value: {\n                type: 'string',\n                description: 'The email address of the SCIM User resource.'\n              }\n            }\n          }\n        },\n        externalId: {\n          type: 'string',\n          description: 'The IdP-generated Id of the SCIM resource.'\n        },\n        meta: {\n          type: 'object',\n          description: 'The metadata of the SCIM resource.',\n          properties: {\n            created: {\n              type: 'string',\n              description: 'The timestamp of when the SCIM resource was created.',\n              format: 'date-time'\n            },\n            lastModified: {\n              type: 'string',\n              description: 'The timestamp of when the SCIM resource was last modified.',\n              format: 'date-time'\n            }\n          }\n        },\n        schemas: {\n          type: 'array',\n          description: 'The list of URIs which indicate the attributes contained within a SCIM resource.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      identity_provider_id: {
        type: 'string',
        description: 'UUID.',
      },
      cf_resource_id: {
        type: 'string',
        description: 'The unique Cloudflare-generated Id of the SCIM User resource; also known as the "Id".',
      },
      email: {
        type: 'string',
        description: 'The email address of the SCIM User resource.',
      },
      idp_resource_id: {
        type: 'string',
        description: 'The IdP-generated Id of the SCIM User resource; also known as the "external Id".',
      },
      name: {
        type: 'string',
        description: 'The name of the SCIM User resource.',
      },
      username: {
        type: 'string',
        description: 'The username of the SCIM User resource.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'identity_provider_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { identity_provider_id, ...body } = args as any;
  const response = await client.zeroTrust.identityProviders.scim.users
    .list(identity_provider_id, body)
    .asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
