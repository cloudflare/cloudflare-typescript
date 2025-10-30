// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/organizations',
  operationId: 'Organization_listOrganizations',
};

export const tool: Tool = {
  name: 'list_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of organizations a particular user has access to. (Currently in Closed Beta - see https://developers.cloudflare.com/fundamentals/organizations/)\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        additionalProperties: true\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/organization'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        next_page_token: {\n          type: 'string',\n          description: 'Use this opaque token in the next request to retrieve the\\nnext page.\\n\\nParameters used to filter the retrieved list must remain in subsequent\\nrequests with a page token.'\n        },\n        total_size: {\n          type: 'integer',\n          description: 'Counts the total amount of items in a list with the applied filters. The API omits next_page_token to indicate no more items in a particular list.'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'result_info',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    organization: {\n      type: 'object',\n      description: 'References an Organization in the Cloudflare data model.',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Organization ID'\n        },\n        create_time: {\n          type: 'string',\n          format: 'date-time'\n        },\n        meta: {\n          type: 'object',\n          properties: {\n            flags: {\n              type: 'object',\n              description: 'Enable features for Organizations.',\n              properties: {\n                account_creation: {\n                  type: 'string'\n                },\n                account_deletion: {\n                  type: 'string'\n                },\n                account_migration: {\n                  type: 'string'\n                },\n                account_mobility: {\n                  type: 'string'\n                },\n                sub_org_creation: {\n                  type: 'string'\n                }\n              },\n              required: [                'account_creation',\n                'account_deletion',\n                'account_migration',\n                'account_mobility',\n                'sub_org_creation'\n              ]\n            },\n            managed_by: {\n              type: 'string'\n            }\n          }\n        },\n        name: {\n          type: 'string'\n        },\n        parent: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              title: 'Organization ID'\n            },\n            name: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        profile: {\n          type: 'object',\n          properties: {\n            business_address: {\n              type: 'string'\n            },\n            business_email: {\n              type: 'string'\n            },\n            business_name: {\n              type: 'string'\n            },\n            business_phone: {\n              type: 'string'\n            },\n            external_metadata: {\n              type: 'string'\n            }\n          },\n          required: [            'business_address',\n            'business_email',\n            'business_name',\n            'business_phone',\n            'external_metadata'\n          ]\n        }\n      },\n      required: [        'id',\n        'create_time',\n        'meta',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'array',
        description:
          'Only return organizations with the specified IDs (ex. id=foo&id=bar). Send multiple elements\nby repeating the query value.',
        items: {
          type: 'string',
          title: 'Organization ID',
        },
      },
      containing: {
        type: 'object',
        properties: {
          account: {
            type: 'string',
            description:
              'Filter the list of organizations to the ones that contain this particular\naccount.',
          },
          organization: {
            type: 'string',
            description:
              'Filter the list of organizations to the ones that contain this particular\norganization.',
          },
          user: {
            type: 'string',
            description:
              'Filter the list of organizations to the ones that contain this particular\nuser.\n\nIMPORTANT: Just because an organization "contains" a user is not a\nrepresentation of any authorization or privilege to manage any resources\ntherein. An organization "containing" a user simply means the user is managed by\nthat organization.',
          },
        },
      },
      name: {
        type: 'object',
        properties: {
          contains: {
            type: 'string',
            description:
              '(case-insensitive) Filter the list of organizations to where the name contains a particular\nstring.',
          },
          endsWith: {
            type: 'string',
            description:
              '(case-insensitive) Filter the list of organizations to where the name ends with a particular\nstring.',
          },
          startsWith: {
            type: 'string',
            description:
              '(case-insensitive) Filter the list of organizations to where the name starts with a\nparticular string.',
          },
        },
      },
      page_size: {
        type: 'integer',
        description: 'The amount of items to return. Defaults to 10.',
      },
      page_token: {
        type: 'string',
        description:
          'An opaque token returned from the last list response that when\nprovided will retrieve the next page.\n\nParameters used to filter the retrieved list must remain in subsequent\nrequests with a page token.',
      },
      parent: {
        type: 'object',
        properties: {
          id: {
            anyOf: [
              {
                type: 'string',
                title: 'Organization ID',
              },
              {
                type: 'string',
                description:
                  'Filter the list of organizations to the ones that are a sub-organization\nof the specified organization.\n\n"null" is a valid value to provide for this parameter. It means "where\nan organization has no parent (i.e. it is a \'root\' organization)."',
                enum: ['null'],
              },
            ],
            description:
              'Filter the list of organizations to the ones that are a sub-organization\nof the specified organization.\n\n"null" is a valid value to provide for this parameter. It means "where\nan organization has no parent (i.e. it is a \'root\' organization)."',
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.organizations.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
