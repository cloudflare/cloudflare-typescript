// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps.address_spaces',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space',
  operationId: 'onramps-mwan-addr-space-patch',
};

export const tool: Tool = {
  name: 'edit_on_ramps_magic_cloud_networking_address_spaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the Magic WAN Address Space (Closed Beta).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/address_space_edit_response',\n  $defs: {\n    address_space_edit_response: {\n      type: 'object',\n      properties: {\n        prefixes: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'An IP address prefix in CIDR format.'\n          }\n        }\n      },\n      required: [        'prefixes'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      prefixes: {
        type: 'array',
        items: {
          type: 'string',
          description: 'An IP address prefix in CIDR format.',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'prefixes'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.magicCloudNetworking.onRamps.addressSpaces.edit(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
