// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'abuse_reports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/abuse-reports/{report_param}',
  operationId: 'GetAbuseReport',
};

export const tool: Tool = {
  name: 'get_abuse_reports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the details of an abuse report.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Public facing ID of abuse report, aka abuse_rand.'\n        },\n        cdate: {\n          type: 'string',\n          description: 'Creation date of report. Time in RFC 3339 format (https://www.rfc-editor.org/rfc/rfc3339.html)'\n        },\n        domain: {\n          type: 'string',\n          description: 'Domain that relates to the report.'\n        },\n        mitigation_summary: {\n          type: 'object',\n          description: 'A summary of the mitigations related to this report.',\n          properties: {\n            accepted_url_count: {\n              type: 'integer',\n              description: 'How many of the reported URLs were confirmed as abusive.'\n            },\n            active_count: {\n              type: 'integer',\n              description: 'How many mitigations are active.'\n            },\n            external_host_notified: {\n              type: 'boolean',\n              description: 'Whether the report has been forwarded to an external hosting provider.'\n            },\n            in_review_count: {\n              type: 'integer',\n              description: 'How many mitigations are under review.'\n            },\n            pending_count: {\n              type: 'integer',\n              description: 'How many mitigations are pending their effective date.'\n            }\n          },\n          required: [            'accepted_url_count',\n            'active_count',\n            'external_host_notified',\n            'in_review_count',\n            'pending_count'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'An enum value that represents the status of an abuse record',\n          enum: [            'accepted',\n            'in_review'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'The abuse report type',\n          enum: [            'PHISH',\n            'GEN',\n            'THREAT',\n            'DMCA',\n            'EMER',\n            'TM',\n            'REG_WHO',\n            'NCSEI',\n            'NETWORK'\n          ]\n        }\n      },\n      required: [        'id',\n        'cdate',\n        'domain',\n        'mitigation_summary',\n        'status',\n        'type'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    },\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          },\n          code: {\n            anyOf: [              {\n                type: 'string'\n              },\n              {\n                type: 'number'\n              }\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      report_param: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'report_param'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { report_param, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.abuseReports.get(report_param, body)));
};

export default { metadata, tool, handler };
