// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'pages.projects.domains',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}',
  operationId: 'pages-domains-get-domain',
};

export const tool: Tool = {
  name: 'get_projects_pages_domains',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a single domain.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/domain_get_response',\n  $defs: {\n    domain_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        certificate_authority: {\n          type: 'string',\n          enum: [            'google',\n            'lets_encrypt'\n          ]\n        },\n        created_on: {\n          type: 'string'\n        },\n        domain_id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'initializing',\n            'pending',\n            'active',\n            'deactivated',\n            'blocked',\n            'error'\n          ]\n        },\n        validation_data: {\n          type: 'object',\n          properties: {\n            error_message: {\n              type: 'string'\n            },\n            method: {\n              type: 'string',\n              enum: [                'http',\n                'txt'\n              ]\n            },\n            status: {\n              type: 'string',\n              enum: [                'initializing',\n                'pending',\n                'active',\n                'deactivated',\n                'error'\n              ]\n            },\n            txt_name: {\n              type: 'string'\n            },\n            txt_value: {\n              type: 'string'\n            }\n          }\n        },\n        verification_data: {\n          type: 'object',\n          properties: {\n            error_message: {\n              type: 'string'\n            },\n            status: {\n              type: 'string',\n              enum: [                'pending',\n                'active',\n                'deactivated',\n                'blocked',\n                'error'\n              ]\n            }\n          }\n        },\n        zone_tag: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      project_name: {
        type: 'string',
        description: 'Name of the project.',
      },
      domain_name: {
        type: 'string',
        description: 'Name of the domain.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'project_name', 'domain_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { domain_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.pages.projects.domains.get(domain_name, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
