// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/snippets/{snippet_name}',
  operationId: 'updateZoneSnippet',
};

export const tool: Tool = {
  name: 'update_snippets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates or updates a snippet belonging to the zone.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/snippet_update_response',\n  $defs: {\n    snippet_update_response: {\n      type: 'object',\n      title: 'Result',\n      description: 'A result.',\n      properties: {\n        created_on: {\n          type: 'string',\n          title: 'Created On',\n          description: 'The timestamp of when the snippet was created.',\n          format: 'date-time'\n        },\n        snippet_name: {\n          type: 'string',\n          title: 'Snippet Name',\n          description: 'The identifying name of the snippet.'\n        },\n        modified_on: {\n          type: 'string',\n          title: 'Modified On',\n          description: 'The timestamp of when the snippet was last modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'created_on',\n        'snippet_name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
      snippet_name: {
        type: 'string',
        title: 'Snippet Name',
        description: 'The identifying name of the snippet.',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
        description: 'Metadata about the snippet.',
        properties: {
          main_module: {
            type: 'string',
            title: 'Main Module',
            description: 'Name of the file that contains the main module of the snippet.',
          },
        },
        required: ['main_module'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'snippet_name', 'metadata'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { snippet_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.snippets.update(snippet_name, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
