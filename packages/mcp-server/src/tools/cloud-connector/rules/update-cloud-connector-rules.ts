// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloud_connector.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/cloud_connector/rules',
  operationId: 'zone-cloud-conenctor-rules-put',
};

export const tool: Tool = {
  name: 'update_cloud_connector_rules',
  description: 'Put Rules',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      rules: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            enabled: {
              type: 'boolean',
            },
            expression: {
              type: 'string',
            },
            parameters: {
              type: 'object',
              description: 'Parameters of Cloud Connector Rule',
              properties: {
                host: {
                  type: 'string',
                  description: 'Host to perform Cloud Connection to',
                },
              },
              required: [],
            },
            provider: {
              type: 'string',
              description: 'Cloud Provider type',
              enum: ['aws_s3', 'cloudflare_r2', 'gcp_storage', 'azure_storage'],
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.cloudConnector.rules.update(body));
};

export default { metadata, tool, handler };
