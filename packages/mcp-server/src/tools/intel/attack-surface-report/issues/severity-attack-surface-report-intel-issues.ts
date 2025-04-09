// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.attack_surface_report.issues',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'severity_attack_surface_report_intel_issues',
  description: 'Get Security Center Issue Counts by Severity',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
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
          type: 'string',
          enum: [
            'compliance_violation',
            'email_security',
            'exposed_infrastructure',
            'insecure_configuration',
            'weak_authentication',
          ],
        },
      },
      'issue_type~neq': {
        type: 'array',
        items: {
          $ref: '#/properties/issue_type/items',
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
          type: 'string',
          enum: ['low', 'moderate', 'critical'],
        },
      },
      'severity~neq': {
        type: 'array',
        items: {
          $ref: '#/properties/severity/items',
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.attackSurfaceReport.issues.severity(body);
};

export default { metadata, tool, handler };
