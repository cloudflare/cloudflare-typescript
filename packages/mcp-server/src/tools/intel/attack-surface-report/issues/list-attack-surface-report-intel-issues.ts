// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.attack_surface_report.issues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/attack-surface-report/issues',
  operationId: 'get-security-center-issues',
};

export const tool: Tool = {
  name: 'list_attack_surface_report_intel_issues',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Security Center Issues\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Total number of results'\n        },\n        issues: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              dismissed: {\n                type: 'boolean'\n              },\n              issue_class: {\n                type: 'string'\n              },\n              issue_type: {\n                $ref: '#/$defs/issue_type'\n              },\n              payload: {\n                type: 'object'\n              },\n              resolve_link: {\n                type: 'string'\n              },\n              resolve_text: {\n                type: 'string'\n              },\n              severity: {\n                type: 'string',\n                enum: [                  'Low',\n                  'Moderate',\n                  'Critical'\n                ]\n              },\n              since: {\n                type: 'string',\n                format: 'date-time'\n              },\n              subject: {\n                type: 'string'\n              },\n              timestamp: {\n                type: 'string',\n                format: 'date-time'\n              }\n            },\n            required: []\n          }\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'Number of results per page of results'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    issue_type: {\n      type: 'string',\n      enum: [        'compliance_violation',\n        'email_security',\n        'exposed_infrastructure',\n        'insecure_configuration',\n        'weak_authentication'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dismissed: {
        type: 'boolean',
      },
      issue_class: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'issue_class~neq': {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      issue_type: {
        type: 'array',
        items: {
          $ref: '#/$defs/issue_type',
        },
      },
      'issue_type~neq': {
        type: 'array',
        items: {
          $ref: '#/$defs/issue_type',
        },
      },
      page: {
        type: 'integer',
        description: 'Current page within paginated list of results',
      },
      per_page: {
        type: 'integer',
        description: 'Number of results per page of results',
      },
      product: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'product~neq': {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      severity: {
        type: 'array',
        items: {
          $ref: '#/$defs/severity_query_param',
        },
      },
      'severity~neq': {
        type: 'array',
        items: {
          $ref: '#/$defs/severity_query_param',
        },
      },
      subject: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'subject~neq': {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      issue_type: {
        type: 'string',
        enum: [
          'compliance_violation',
          'email_security',
          'exposed_infrastructure',
          'insecure_configuration',
          'weak_authentication',
        ],
      },
      severity_query_param: {
        type: 'string',
        enum: ['low', 'moderate', 'critical'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.intel.attackSurfaceReport.issues.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
