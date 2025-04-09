// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.attack_surface_report.issue_types',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_attack_surface_report_intel_issue_types',
  description: 'Get Security Center Issues Types',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.intel.attackSurfaceReport.issueTypes.get(body);
};

export default { metadata, tool, handler };
