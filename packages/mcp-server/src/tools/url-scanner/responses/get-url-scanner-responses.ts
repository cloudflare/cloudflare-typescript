// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.responses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/urlscanner/v2/responses/{response_id}',
  operationId: 'urlscanner-get-response-v2',
};

export const tool: Tool = {
  name: 'get_url_scanner_responses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the raw response of the network request. Find the `response_id` in the `data.requests.response.hash`.\n\n# Response Schema\n```json\n{\n  type: 'string',\n  description: 'Web resource or image.'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      response_id: {
        type: 'string',
        description: 'Response hash.',
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
  const { response_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.urlScanner.responses.get(response_id, body)),
  );
};

export default { metadata, tool, handler };
