// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.override_codes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/devices/registrations/{registration_id}/override_codes',
  operationId: 'get-registration-override-codes',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_override_codes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches one-time use admin override codes for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        description: 'A message which can be returned in either the \\'errors\\' or \\'messages\\' fields in a v4 API response.',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        disable_for_time: {\n          type: 'object'\n        }\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      registration_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'registration_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { registration_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.devices.overrideCodes.get(registration_id, body)),
  );
};

export default { metadata, tool, handler };
