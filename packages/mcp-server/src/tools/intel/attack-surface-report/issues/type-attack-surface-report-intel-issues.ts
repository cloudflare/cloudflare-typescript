// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.attack_surface_report.issues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/attack-surface-report/issues/type',
  operationId: 'get-security-center-issue-counts-by-type',
};

export const tool: Tool = {
  name: 'type_attack_surface_report_intel_issues',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Security Center Issue Counts by Type\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/issue_type_response',\n  $defs: {\n    issue_type_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          count: {\n            type: 'integer'\n          },\n          value: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    required: ['account_id'],
    $defs: {
      issue_type: {
        type: 'string',
        enum: [
          'compliance_violation',
          'email_security',
          'exposed_infrastructure',
          'insecure_configuration',
          'weak_authentication',
          'configuration_suggestion',
        ],
      },
      severity_query_param: {
        type: 'string',
        enum: ['low', 'moderate', 'critical'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.intel.attackSurfaceReport.issues.type(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
