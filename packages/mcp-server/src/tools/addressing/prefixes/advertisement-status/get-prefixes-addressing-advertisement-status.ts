// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.advertisement_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status',
  operationId: 'ip-address-management-dynamic-advertisement-get-advertisement-status',
};

export const tool: Tool = {
  name: 'get_prefixes_addressing_advertisement_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nView the current advertisement state for a prefix.\n\n**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing \nsubnets of an IP prefix.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/advertisement_status_get_response',\n  $defs: {\n    advertisement_status_get_response: {\n      type: 'object',\n      properties: {\n        advertised: {\n          type: 'boolean',\n          description: 'Advertisement status of the prefix. If `true`, the BGP route for the prefix is advertised to the Internet. If \\n`false`, the BGP route is withdrawn.\\n'\n        },\n        advertised_modified_at: {\n          type: 'string',\n          description: 'Last time the advertisement status was changed. This field is only not \\'null\\' if on demand is enabled.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'prefix_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { prefix_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.addressing.prefixes.advertisementStatus.get(prefix_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
