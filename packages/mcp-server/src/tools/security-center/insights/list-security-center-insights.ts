// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'security_center.insights',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_security_center_insights',
  description: 'Get Security Center Insights',
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
  return client.securityCenter.insights.list(body);
};

export default { metadata, tool, handler };
