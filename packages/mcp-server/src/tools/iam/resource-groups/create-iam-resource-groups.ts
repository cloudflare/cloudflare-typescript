// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.resource_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/iam/resource_groups',
  operationId: 'account-resource-group-create',
};

export const tool: Tool = {
  name: 'create_iam_resource_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Resource Group under the specified account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'A group of scoped resources.',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Identifier of the group.'\n    },\n    meta: {\n      type: 'object',\n      description: 'Attributes associated to the resource group.'\n    },\n    scope: {\n      type: 'object',\n      description: 'A scope is a combination of scope objects which provides additional context.',\n      properties: {\n        key: {\n          type: 'string',\n          description: 'This is a combination of pre-defined resource name and identifier (like Account ID etc.)'\n        },\n        objects: {\n          type: 'array',\n          description: 'A list of scope objects for additional context. The number of Scope objects should not be zero.',\n          items: {\n            type: 'object',\n            description: 'A scope object represents any resource that can have actions applied against invite.',\n            properties: {\n              key: {\n                type: 'string',\n                description: 'This is a combination of pre-defined resource name and identifier (like Zone ID etc.)'\n              }\n            },\n            required: [              'key'\n            ]\n          }\n        }\n      },\n      required: [        'key',\n        'objects'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'Name of the resource group',
      },
      scope: {
        type: 'object',
        description: 'A scope is a combination of scope objects which provides additional context.',
        properties: {
          key: {
            type: 'string',
            description:
              'This is a combination of pre-defined resource name and identifier (like Account ID etc.)',
          },
          objects: {
            type: 'array',
            description:
              'A list of scope objects for additional context. The number of Scope objects should not be zero.',
            items: {
              type: 'object',
              description:
                'A scope object represents any resource that can have actions applied against invite.',
              properties: {
                key: {
                  type: 'string',
                  description:
                    'This is a combination of pre-defined resource name and identifier (like Zone ID etc.)',
                },
              },
              required: ['key'],
            },
          },
        },
        required: ['key', 'objects'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name', 'scope'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.iam.resourceGroups.create(body)));
};

export default { metadata, tool, handler };
