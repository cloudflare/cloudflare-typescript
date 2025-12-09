// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/page_shield',
  operationId: 'page-shield-get-settings',
};

export const tool: Tool = {
  name: 'get_page_shield',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches the Page Shield settings.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/setting',\n  $defs: {\n    setting: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean',\n          description: 'When true, indicates that Page Shield is enabled.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'The timestamp of when Page Shield was last updated.'\n        },\n        use_cloudflare_reporting_endpoint: {\n          type: 'boolean',\n          description: 'When true, CSP reports will be sent to https://csp-reporting.cloudflare.com/cdn-cgi/script_monitor/report'\n        },\n        use_connection_url_path: {\n          type: 'boolean',\n          description: 'When true, the paths associated with connections URLs will also be analyzed.'\n        }\n      },\n      required: [        'enabled',\n        'updated_at',\n        'use_cloudflare_reporting_endpoint',\n        'use_connection_url_path'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.pageShield.get(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
