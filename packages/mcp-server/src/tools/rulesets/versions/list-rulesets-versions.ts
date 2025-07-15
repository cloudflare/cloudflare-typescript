// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions',
};

export const tool: Tool = {
  name: 'list_rulesets_versions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the versions of an account or zone ruleset.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Response',\n  description: 'A response object.',\n  properties: {\n    errors: {\n      type: 'array',\n      title: 'Errors',\n      description: 'A list of error messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          },\n          source: {\n            type: 'object',\n            title: 'Source',\n            description: 'The source of this message.',\n            properties: {\n              pointer: {\n                type: 'string',\n                title: 'Pointer',\n                description: 'A JSON pointer to the field that is the source of the message.'\n              }\n            },\n            required: [              'pointer'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      title: 'Messages',\n      description: 'A list of warning messages.',\n      items: {\n        type: 'object',\n        title: 'Message',\n        description: 'A message.',\n        properties: {\n          message: {\n            type: 'string',\n            title: 'Description',\n            description: 'A text description of this message.'\n          },\n          code: {\n            type: 'integer',\n            title: 'Code',\n            description: 'A unique code for this message.'\n          },\n          source: {\n            type: 'object',\n            title: 'Source',\n            description: 'The source of this message.',\n            properties: {\n              pointer: {\n                type: 'string',\n                title: 'Pointer',\n                description: 'A JSON pointer to the field that is the source of the message.'\n              }\n            },\n            required: [              'pointer'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      title: 'Rulesets',\n      description: 'A list of rulesets. The returned information will not include the rules in each ruleset.',\n      items: {\n        type: 'object',\n        title: 'Ruleset',\n        description: 'A ruleset object.',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'ID',\n            description: 'The unique ID of the ruleset.'\n          },\n          kind: {\n            $ref: '#/$defs/kind'\n          },\n          last_updated: {\n            type: 'string',\n            title: 'Last updated',\n            description: 'The timestamp of when the ruleset was last modified.',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            title: 'Name',\n            description: 'The human-readable name of the ruleset.'\n          },\n          phase: {\n            $ref: '#/$defs/phase'\n          },\n          version: {\n            type: 'string',\n            title: 'Version',\n            description: 'The version of the ruleset.'\n          },\n          description: {\n            type: 'string',\n            title: 'Description',\n            description: 'An informative description of the ruleset.'\n          }\n        },\n        required: [          'id',\n          'kind',\n          'last_updated',\n          'name',\n          'phase',\n          'version'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      title: 'Success',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      title: 'Result Info',\n      description: 'Cursors information to navigate the results.',\n      properties: {\n        cursors: {\n          type: 'object',\n          title: 'Cursors',\n          description: 'Set of cursors.',\n          properties: {\n            after: {\n              type: 'string',\n              title: 'Cursor',\n              description: 'Cursor to use for the next page.'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    kind: {\n      type: 'string',\n      title: 'Kind',\n      description: 'The kind of the ruleset.',\n      enum: [        'managed',\n        'custom',\n        'root',\n        'zone'\n      ]\n    },\n    phase: {\n      type: 'string',\n      title: 'Phase',\n      description: 'The phase of the ruleset.',\n      enum: [        'ddos_l4',\n        'ddos_l7',\n        'http_config_settings',\n        'http_custom_errors',\n        'http_log_custom_fields',\n        'http_ratelimit',\n        'http_request_cache_settings',\n        'http_request_dynamic_redirect',\n        'http_request_firewall_custom',\n        'http_request_firewall_managed',\n        'http_request_late_transform',\n        'http_request_origin',\n        'http_request_redirect',\n        'http_request_sanitize',\n        'http_request_sbfm',\n        'http_request_transform',\n        'http_response_compression',\n        'http_response_firewall_managed',\n        'http_response_headers_transform',\n        'magic_transit',\n        'magic_transit_ids_managed',\n        'magic_transit_managed',\n        'magic_transit_ratelimit'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the ruleset.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
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
  const { ruleset_id, ...body } = args as any;
  const response = await client.rulesets.versions.list(ruleset_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
