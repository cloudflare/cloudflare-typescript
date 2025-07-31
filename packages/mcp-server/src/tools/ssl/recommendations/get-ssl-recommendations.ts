// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.recommendations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/ssl/recommendation',
  operationId: 'ssl/-tls-mode-recommendation-ssl/-tls-recommendation',
};

export const tool: Tool = {
  name: 'get_ssl_recommendations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the SSL/TLS Recommender's recommendation for a zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Whether this setting can be updated or not.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Last time this setting was modified.',\n          format: 'date-time'\n        },\n        value: {\n          type: 'string',\n          description: 'Current setting of the automatic SSL/TLS.',\n          enum: [            'auto',\n            'custom'\n          ]\n        },\n        next_scheduled_scan: {\n          type: 'string',\n          description: 'Next time this zone will be scanned by the Automatic SSL/TLS.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable',\n        'modified_on',\n        'value'\n      ]\n    },\n    success: {\n      type: 'boolean',\n      description: 'Indicates the API call\\'s success or failure.'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.ssl.recommendations.get(body)));
};

export default { metadata, tool, handler };
