// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workflows.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}',
  operationId: 'wor-describe-workflow-versions',
};

export const tool: Tool = {
  name: 'get_workflows_versions',
  description: 'Get Workflow version details',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      workflow_name: {
        type: 'string',
      },
      version_id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  return asTextContentResult(await client.workflows.versions.get(version_id, body));
};

export default { metadata, tool, handler };
