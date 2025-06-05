// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.attack_surface_report.issues',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/intel/attack-surface-report/{issue_id}/dismiss',
  operationId: 'archive-security-center-insight-deprecated',
};

export const tool: Tool = {
  name: 'dismiss_attack_surface_report_intel_issues',
  description: 'Archive Security Center Insight',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      issue_id: {
        type: 'string',
      },
      dismiss: {
        type: 'boolean',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { issue_id, ...body } = args as any;
  return asTextContentResult(await client.intel.attackSurfaceReport.issues.dismiss(issue_id, body));
};

export default { metadata, tool, handler };
