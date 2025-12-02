// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2_data_catalog.namespaces',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2-catalog/{bucket_name}/namespaces',
  operationId: 'list-namespaces',
};

export const tool: Tool = {
  name: 'list_r2_data_catalog_namespaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of namespaces in the specified R2 catalog.\nSupports hierarchical filtering and pagination for efficient traversal\nof large namespace hierarchies.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/namespace_list_response',\n  $defs: {\n    namespace_list_response: {\n      type: 'object',\n      description: 'Contains the list of namespaces with optional pagination.',\n      properties: {\n        namespaces: {\n          type: 'array',\n          description: 'Lists namespaces in the catalog.',\n          items: {\n            type: 'array',\n            description: 'Specifies the hierarchical namespace parts as an array of strings.\\nFor example, [\"bronze\", \"analytics\"] represents the namespace \"bronze.analytics\".\\n',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        details: {\n          type: 'array',\n          description: 'Contains detailed metadata for each namespace when return_details is true.\\nEach object includes the namespace, UUID, and timestamps.\\n',\n          items: {\n            type: 'object',\n            description: 'Contains namespace with metadata details.',\n            properties: {\n              namespace: {\n                type: 'array',\n                description: 'Specifies the hierarchical namespace parts as an array of strings.\\nFor example, [\"bronze\", \"analytics\"] represents the namespace \"bronze.analytics\".\\n',\n                items: {\n                  type: 'string'\n                }\n              },\n              namespace_uuid: {\n                type: 'string',\n                description: 'Contains the UUID that persists across renames.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Indicates the creation timestamp in ISO 8601 format.',\n                format: 'date-time'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Shows the last update timestamp in ISO 8601 format. Null if never updated.',\n                format: 'date-time'\n              }\n            },\n            required: [              'namespace',\n              'namespace_uuid'\n            ]\n          }\n        },\n        namespace_uuids: {\n          type: 'array',\n          description: 'Contains UUIDs for each namespace when return_uuids is true.\\nThe order corresponds to the namespaces array.\\n',\n          items: {\n            type: 'string'\n          }\n        },\n        next_page_token: {\n          type: 'string',\n          description: 'Use this opaque token to fetch the next page of results.\\nA null or absent value indicates the last page.\\n'\n        }\n      },\n      required: [        'namespaces'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Use this to identify the account.',
      },
      bucket_name: {
        type: 'string',
        description: 'Specifies the R2 bucket name.',
      },
      page_size: {
        type: 'integer',
        description: 'Maximum number of namespaces to return per page.\nDefaults to 100, maximum 1000.\n',
      },
      page_token: {
        type: 'string',
        description:
          'Opaque pagination token from a previous response.\nUse this to fetch the next page of results.\n',
      },
      parent: {
        type: 'string',
        description:
          'Parent namespace to filter by. Only returns direct children of this namespace.\nFor nested namespaces, use %1F as separator (e.g., "bronze%1Fanalytics").\nOmit this parameter to list top-level namespaces.\n',
      },
      return_details: {
        type: 'boolean',
        description:
          'Whether to include additional metadata (timestamps).\nWhen true, response includes created_at and updated_at arrays.\n',
      },
      return_uuids: {
        type: 'boolean',
        description:
          'Whether to include namespace UUIDs in the response.\nSet to true to receive the namespace_uuids array.\n',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.r2DataCatalog.namespaces.list(bucket_name, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
