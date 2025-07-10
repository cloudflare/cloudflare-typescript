// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps/{onramp_id}/export',
  operationId: 'onramps-export',
};

export const tool: Tool = {
  name: 'export_magic_cloud_networking_on_ramps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExport an On-ramp to terraform ready file(s) (Closed Beta).\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      onramp_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { onramp_id, ...body } = args as any;
  return asBinaryContentResult(await client.magicCloudNetworking.onRamps.export(onramp_id, body));
};

export default { metadata, tool, handler };
