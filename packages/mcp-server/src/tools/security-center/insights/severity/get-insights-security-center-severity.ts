// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_center.insights.severity',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_insights_security_center_severity',
  description: 'Get Security Center Insight Counts by Severity',
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
  return client.securityCenter.insights.severity.get(body);
};

export default { metadata, tool, handler };
