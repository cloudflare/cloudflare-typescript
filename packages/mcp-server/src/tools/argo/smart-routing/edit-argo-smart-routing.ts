// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nConfigures the value of the Argo Smart Routing enablement setting.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/smart_routing_edit_response',\n  $defs: {\n    smart_routing_edit_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Specifies the identifier of the Argo Smart Routing setting.'\n        },\n        editable: {\n          type: 'boolean',\n          description: 'Specifies if the setting is editable.'\n        },\n        value: {\n          type: 'string',\n          description: 'Specifies the enablement value of Argo Smart Routing.',\n          enum: [            'on',\n            'off'\n          ]\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Specifies the time when the setting was last modified.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'editable',\n        'value'\n      ]\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.argo.smartRouting.edit(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
