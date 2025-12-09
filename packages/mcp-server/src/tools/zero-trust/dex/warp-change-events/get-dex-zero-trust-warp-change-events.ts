// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dex.warp_change_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/warp-change-events',
  operationId: 'list-warp-change-events',
};

export const tool: Tool = {
  name: 'get_dex_zero_trust_warp_change_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList WARP configuration and enablement toggle change events by device.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warp_change_event_get_response',\n  $defs: {\n    warp_change_event_get_response: {\n      type: 'array',\n      items: {\n        anyOf: [          {\n            type: 'object',\n            properties: {\n              account_name: {\n                type: 'string',\n                description: 'The account name.'\n              },\n              account_tag: {\n                type: 'string',\n                description: 'The public account identifier.'\n              },\n              device_id: {\n                type: 'string',\n                description: 'API Resource UUID tag.'\n              },\n              device_registration: {\n                type: 'string',\n                description: 'API Resource UUID tag.'\n              },\n              hostname: {\n                type: 'string',\n                description: 'The hostname of the machine the event is from'\n              },\n              serial_number: {\n                type: 'string',\n                description: 'The serial number of the machine the event is from'\n              },\n              timestamp: {\n                type: 'string',\n                description: 'Timestamp in ISO format'\n              },\n              toggle: {\n                type: 'string',\n                description: 'The state of the WARP toggle.',\n                enum: [                  'on',\n                  'off'\n                ]\n              },\n              user_email: {\n                type: 'string',\n                description: 'Email tied to the device'\n              }\n            }\n          },\n          {\n            type: 'object',\n            properties: {\n              device_id: {\n                type: 'string',\n                description: 'API Resource UUID tag.'\n              },\n              device_registration: {\n                type: 'string',\n                description: 'API Resource UUID tag.'\n              },\n              from: {\n                type: 'object',\n                properties: {\n                  account_name: {\n                    type: 'string',\n                    description: 'The account name.'\n                  },\n                  account_tag: {\n                    type: 'string',\n                    description: 'API Resource UUID tag.'\n                  },\n                  config_name: {\n                    type: 'string',\n                    description: 'The name of the WARP configuration.'\n                  }\n                }\n              },\n              hostname: {\n                type: 'string',\n                description: 'The hostname of the machine the event is from'\n              },\n              serial_number: {\n                type: 'string',\n                description: 'The serial number of the machine the event is from'\n              },\n              timestamp: {\n                type: 'string',\n                description: 'Timestamp in ISO format'\n              },\n              to: {\n                type: 'object',\n                properties: {\n                  account_name: {\n                    type: 'string',\n                    description: 'The account name.'\n                  },\n                  account_tag: {\n                    type: 'string',\n                    description: 'API Resource UUID tag.'\n                  },\n                  config_name: {\n                    type: 'string',\n                    description: 'The name of the WARP configuration.'\n                  }\n                }\n              },\n              user_email: {\n                type: 'string',\n                description: 'Email tied to the device'\n              }\n            }\n          }\n        ]\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description: 'Start time for the query in ISO (RFC3339 - ISO 8601) format',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page',
      },
      to: {
        type: 'string',
        description: 'End time for the query in ISO (RFC3339 - ISO 8601) format',
      },
      account_name: {
        type: 'string',
        description: 'Filter events by account name.',
      },
      config_name: {
        type: 'string',
        description:
          "Filter events by WARP configuration name changed from or to. Applicable to type='config' events only.",
      },
      sort_order: {
        type: 'string',
        description: 'Sort response by event timestamp.',
        enum: ['ASC', 'DESC'],
      },
      toggle: {
        type: 'string',
        description: "Filter events by type toggle value. Applicable to type='toggle' events only.",
        enum: ['on', 'off'],
      },
      type: {
        type: 'string',
        description: "Filter events by type 'config' or 'toggle'",
        enum: ['config', 'toggle'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'from', 'page', 'per_page', 'to'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.dex.warpChangeEvents.get(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
