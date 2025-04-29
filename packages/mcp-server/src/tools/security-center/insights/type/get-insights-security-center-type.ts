// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_center.insights.type',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_insights_security_center_type',
  description: 'Get Security Center Insight Counts by Type',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.securityCenter.insights.type.get(body);
};

export default { metadata, tool, handler };
