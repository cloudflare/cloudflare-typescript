// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2_data_catalog.namespaces.tables',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables',
  operationId: 'list-tables',
};

export const tool: Tool = {
  name: 'list_namespaces_r2_data_catalog_tables',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of tables in the specified namespace within an R2 catalog.\nSupports pagination for efficient traversal of large table collections.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/table_list_response',\n  $defs: {\n    table_list_response: {\n      type: 'object',\n      description: 'Contains the list of tables with optional pagination.',\n      properties: {\n        identifiers: {\n          type: 'array',\n          description: 'Lists tables in the namespace.',\n          items: {\n            type: 'object',\n            description: 'Specifies a unique table identifier within a catalog.',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'Specifies the table name.'\n              },\n              namespace: {\n                type: 'array',\n                description: 'Specifies the hierarchical namespace parts as an array of strings.\\nFor example, [\"bronze\", \"analytics\"] represents the namespace \"bronze.analytics\".\\n',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'name',\n              'namespace'\n            ]\n          }\n        },\n        details: {\n          type: 'array',\n          description: 'Contains detailed metadata for each table when return_details is true.\\nEach object includes identifier, UUID, timestamps, and locations.\\n',\n          items: {\n            type: 'object',\n            description: 'Contains table with metadata.',\n            properties: {\n              identifier: {\n                type: 'object',\n                description: 'Specifies a unique table identifier within a catalog.',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'Specifies the table name.'\n                  },\n                  namespace: {\n                    type: 'array',\n                    description: 'Specifies the hierarchical namespace parts as an array of strings.\\nFor example, [\"bronze\", \"analytics\"] represents the namespace \"bronze.analytics\".\\n',\n                    items: {\n                      type: 'string'\n                    }\n                  }\n                },\n                required: [                  'name',\n                  'namespace'\n                ]\n              },\n              table_uuid: {\n                type: 'string',\n                description: 'Contains the UUID that persists across renames.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'Indicates the creation timestamp in ISO 8601 format.',\n                format: 'date-time'\n              },\n              location: {\n                type: 'string',\n                description: 'Specifies the base S3 URI for table storage location.'\n              },\n              metadata_location: {\n                type: 'string',\n                description: 'Contains the S3 URI to table metadata file. Null for staged tables.'\n              },\n              updated_at: {\n                type: 'string',\n                description: 'Shows the last update timestamp in ISO 8601 format. Null if never updated.',\n                format: 'date-time'\n              }\n            },\n            required: [              'identifier',\n              'table_uuid'\n            ]\n          }\n        },\n        next_page_token: {\n          type: 'string',\n          description: 'Use this opaque token to fetch the next page of results.\\nA null or absent value indicates the last page.\\n'\n        },\n        table_uuids: {\n          type: 'array',\n          description: 'Contains UUIDs for each table when return_uuids is true.\\nThe order corresponds to the identifiers array.\\n',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'identifiers'\n      ]\n    }\n  }\n}\n```",
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
      namespace: {
        type: 'string',
      },
      page_size: {
        type: 'integer',
        description: 'Maximum number of tables to return per page.\nDefaults to 100, maximum 1000.\n',
      },
      page_token: {
        type: 'string',
        description:
          'Opaque pagination token from a previous response.\nUse this to fetch the next page of results.\n',
      },
      return_details: {
        type: 'boolean',
        description:
          'Whether to include additional metadata (timestamps, locations).\nWhen true, response includes created_at, updated_at, metadata_locations, and locations arrays.\n',
      },
      return_uuids: {
        type: 'boolean',
        description:
          'Whether to include table UUIDs in the response.\nSet to true to receive the table_uuids array.\n',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name', 'namespace'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.r2DataCatalog.namespaces.tables.list(namespace, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
