// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'request_tracers.traces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/request-tracer/trace',
  operationId: 'account-request-tracer-request-trace',
};

export const tool: Tool = {
  name: 'create_request_tracers_traces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRequest Trace\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      description: 'Trace result with an origin status code',\n      properties: {\n        status_code: {\n          type: 'integer',\n          description: 'HTTP Status code of zone response'\n        },\n        trace: {\n          $ref: '#/$defs/trace'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    trace: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/trace_item'\n      }\n    },\n    trace_item: {\n      type: 'object',\n      description: 'List of steps acting on request/response',\n      properties: {\n        action: {\n          type: 'string',\n          description: 'If step type is rule, then action performed by this rule'\n        },\n        action_parameters: {\n          type: 'object',\n          description: 'If step type is rule, then action parameters of this rule as JSON'\n        },\n        description: {\n          type: 'string',\n          description: 'If step type is rule or ruleset, the description of this entity'\n        },\n        expression: {\n          type: 'string',\n          description: 'If step type is rule, then expression used to match for this rule'\n        },\n        kind: {\n          type: 'string',\n          description: 'If step type is ruleset, then kind of this ruleset'\n        },\n        matched: {\n          type: 'boolean',\n          description: 'Whether tracing step affected tracing request/response'\n        },\n        name: {\n          type: 'string',\n          description: 'If step type is ruleset, then name of this ruleset'\n        },\n        step_name: {\n          type: 'string',\n          description: 'Tracing step identifying name'\n        },\n        trace: {\n          $ref: '#/$defs/trace'\n        },\n        type: {\n          type: 'string',\n          description: 'Tracing step type'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      method: {
        type: 'string',
        description: 'HTTP Method of tracing request',
      },
      url: {
        type: 'string',
        description: 'URL to which perform tracing request',
      },
      body: {
        type: 'object',
        properties: {
          base64: {
            type: 'string',
            description: 'Base64 encoded request body',
          },
          json: {
            type: 'object',
            description: 'Arbitrary json as request body',
          },
          plain_text: {
            type: 'string',
            description: 'Request body as plain text',
          },
        },
        required: [],
      },
      context: {
        type: 'object',
        description: 'Additional request parameters',
        properties: {
          bot_score: {
            type: 'integer',
            description: 'Bot score used for evaluating tracing request processing',
          },
          geoloc: {
            type: 'object',
            description: 'Geodata for tracing request',
            properties: {
              city: {
                type: 'string',
              },
              continent: {
                type: 'string',
              },
              is_eu_country: {
                type: 'boolean',
              },
              iso_code: {
                type: 'string',
              },
              latitude: {
                type: 'number',
              },
              longitude: {
                type: 'number',
              },
              postal_code: {
                type: 'string',
              },
              region_code: {
                type: 'string',
              },
              subdivision_2_iso_code: {
                type: 'string',
              },
              timezone: {
                type: 'string',
              },
            },
            required: [],
          },
          skip_challenge: {
            type: 'boolean',
            description: 'Whether to skip any challenges for tracing request (e.g.: captcha)',
          },
          threat_score: {
            type: 'integer',
            description: 'Threat score used for evaluating tracing request processing',
          },
        },
        required: [],
      },
      cookies: {
        type: 'object',
        description: 'Cookies added to tracing request',
      },
      headers: {
        type: 'object',
        description: 'Headers added to tracing request',
      },
      protocol: {
        type: 'string',
        description: 'HTTP Protocol of tracing request',
      },
      skip_response: {
        type: 'boolean',
        description: 'Skip sending the request to the Origin server after all rules evaluation',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.requestTracers.traces.create(body)));
};

export default { metadata, tool, handler };
