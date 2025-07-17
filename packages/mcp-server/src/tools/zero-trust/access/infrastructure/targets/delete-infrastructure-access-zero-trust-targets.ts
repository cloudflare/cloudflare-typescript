// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.infrastructure.targets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/infrastructure/targets/{target_id}',
  operationId: 'infra-targets-delete',
};

export const tool: Tool = {
  name: 'delete_infrastructure_access_zero_trust_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete target\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'account_id',
        description: 'Account identifier',
      },
      target_id: {
        type: 'string',
        title: 'target_id',
        description: 'Target identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'target_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { target_id, ...body } = args as any;
  const response = await client.zeroTrust.access.infrastructure.targets.delete(target_id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
