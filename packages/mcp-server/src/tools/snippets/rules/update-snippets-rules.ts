// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'snippets.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/snippets/snippet_rules',
  operationId: 'updateZoneSnippetRules',
};

export const tool: Tool = {
  name: 'update_snippets_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates all snippet rules belonging to the zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response',\n  description: 'A response object.',\n  properties: {\n    errors: {\n      type: 'array',\n      title: 'Errors',\n      description: 'A list of error messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      description: 'A list of warning messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      title: 'Result',\n      description: 'A result.',\n      items: {\n        type: 'object',\n        title: 'Snippet Rule',\n        description: 'A snippet rule.',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'ID',\n            description: 'The unique ID of the rule.'\n          },\n          expression: {\n            type: 'string',\n            title: 'Expression',\n            description: 'The expression defining which traffic will match the rule.'\n          },\n          last_updated: {\n            type: 'string',\n            title: 'Last Updated',\n            description: 'The timestamp of when the rule was last modified.',\n            format: 'date-time'\n          },\n          snippet_name: {\n            type: 'string',\n            title: 'Snippet Name',\n            description: 'The identifying name of the snippet.'\n          },\n          description: {\n            type: 'string',\n            title: 'Description',\n            description: 'An informative description of the rule.'\n          },\n          enabled: {\n            type: 'boolean',\n            title: 'Enabled',\n            description: 'Whether the rule should be executed.'\n          }\n        },\n        required: [          'id',\n          'expression',\n          'last_updated',\n          'snippet_name'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      title: 'Success',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        title: 'Zone ID',
        description: 'The unique ID of the zone.',
      },
      rules: {
        type: 'array',
        title: 'Snippet Rules',
        description: 'A list of snippet rules.',
        items: {
          type: 'object',
          title: 'Snippet Rule',
          description: 'A snippet rule.',
          properties: {
            id: {
              type: 'string',
              title: 'ID',
              description: 'The unique ID of the rule.',
            },
            expression: {
              type: 'string',
              title: 'Expression',
              description: 'The expression defining which traffic will match the rule.',
            },
            last_updated: {
              type: 'string',
              title: 'Last Updated',
              description: 'The timestamp of when the rule was last modified.',
              format: 'date-time',
            },
            snippet_name: {
              type: 'string',
              title: 'Snippet Name',
              description: 'The identifying name of the snippet.',
            },
            description: {
              type: 'string',
              title: 'Description',
              description: 'An informative description of the rule.',
            },
            enabled: {
              type: 'boolean',
              title: 'Enabled',
              description: 'Whether the rule should be executed.',
            },
          },
          required: ['id', 'expression', 'last_updated', 'snippet_name'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'rules'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.snippets.rules.update(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
