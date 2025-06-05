// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
  description: 'Get Security Center Issue Counts by Type',
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
  return asTextContentResult(await client.intel.attackSurfaceReport.issues.type(body));
};

export default { metadata, tool, handler };
