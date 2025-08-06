// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'argo.smart_routing',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/argo/smart_routing',
  operationId: 'argo-smart-routing-patch-argo-smart-routing-setting',
};

export const tool: Tool = {
  name: 'edit_argo_smart_routing',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nConfigures the value of the Argo Smart Routing enablement setting.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Specifies the identifier of the Argo Smart Routing setting.'\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Specifies if the setting is editable.'\n        },\n        value: {\n          type: 'string',\n          description: 'Specifies the enablement value of Argo Smart Routing.',\n          enum: [            'on',\n            'off'\n          ]\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Specifies the time when the setting was last modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable',\n        'value'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Describes a successful API response.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Specifies the zone associated with the API call.',
      },
      value: {
        type: 'string',
        description: 'Specifies the enablement value of Argo Smart Routing.',
        enum: ['on', 'off'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.argo.smartRouting.edit(body)));
};

export default { metadata, tool, handler };
