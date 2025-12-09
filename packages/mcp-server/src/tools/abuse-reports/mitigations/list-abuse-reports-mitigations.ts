// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'abuse_reports.mitigations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/abuse-reports/{report_id}/mitigations',
  operationId: 'ListMitigations',
};

export const tool: Tool = {
  name: 'list_abuse_reports_mitigations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList mitigations done to remediate the abuse report.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'boolean'\n    },\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      $ref: '#/$defs/mitigation_list_response'\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        page: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        },\n        total_pages: {\n          type: 'number'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count',\n        'total_pages'\n      ]\n    }\n  },\n  required: [    'success'\n  ],\n  $defs: {\n    mitigation_list_response: {\n      type: 'object',\n      properties: {\n        mitigations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'ID of remediation.'\n              },\n              effective_date: {\n                type: 'string',\n                description: 'Date when the mitigation will become active. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)'\n              },\n              entity_id: {\n                type: 'string'\n              },\n              entity_type: {\n                type: 'string',\n                enum: [                  'url_pattern',\n                  'account',\n                  'zone'\n                ]\n              },\n              status: {\n                type: 'string',\n                description: 'The status of a mitigation',\n                enum: [                  'pending',\n                  'active',\n                  'in_review',\n                  'cancelled',\n                  'removed'\n                ]\n              },\n              type: {\n                type: 'string',\n                description: 'The type of mitigation',\n                enum: [                  'legal_block',\n                  'phishing_interstitial',\n                  'network_block',\n                  'rate_limit_cache',\n                  'account_suspend',\n                  'redirect_video_stream'\n                ]\n              }\n            },\n            required: [              'id',\n              'effective_date',\n              'entity_id',\n              'entity_type',\n              'status',\n              'type'\n            ]\n          }\n        }\n      },\n      required: [        'mitigations'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      report_id: {
        type: 'string',
      },
      effective_after: {
        type: 'string',
        description: 'Returns mitigation that were dispatched after the given date',
      },
      effective_before: {
        type: 'string',
        description: 'Returns mitigations that were dispatched before the given date',
      },
      entity_type: {
        type: 'string',
        description: 'Filter by the type of entity the mitigation impacts.',
        enum: ['url_pattern', 'account', 'zone'],
      },
      page: {
        type: 'integer',
        description: 'Where in pagination to start listing abuse reports',
      },
      per_page: {
        type: 'integer',
        description: 'How many abuse reports per page to list',
      },
      sort: {
        type: 'string',
        description: 'A property to sort by, followed by the order',
        enum: [
          'type,asc',
          'type,desc',
          'effective_date,asc',
          'effective_date,desc',
          'status,asc',
          'status,desc',
          'entity_type,asc',
          'entity_type,desc',
        ],
      },
      status: {
        type: 'string',
        description: 'Filter by the status of the mitigation.',
        enum: ['pending', 'active', 'in_review', 'cancelled', 'removed'],
      },
      type: {
        type: 'string',
        description:
          'Filter by the type of mitigation. This filter parameter can be specified multiple times to include multiple types of mitigations in the result set, e.g. ?type=rate_limit_cache&type=legal_block.',
        enum: [
          'legal_block',
          'phishing_interstitial',
          'network_block',
          'rate_limit_cache',
          'account_suspend',
          'redirect_video_stream',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'report_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { report_id, jq_filter, ...body } = args as any;
  const response = await client.abuseReports.mitigations.list(report_id, body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
