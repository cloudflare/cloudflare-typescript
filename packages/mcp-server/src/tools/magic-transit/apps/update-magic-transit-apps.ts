// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.apps',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/magic/apps/{account_app_id}',
  operationId: 'magic-account-apps-update-app',
};

export const tool: Tool = {
  name: 'update_magic_transit_apps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an Account App\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/app_update_response',\n  $defs: {\n    app_update_response: {\n      type: 'object',\n      title: 'Account App',\n      description: 'Custom app defined for an account.',\n      properties: {\n        account_app_id: {\n          type: 'string',\n          description: 'Magic account app ID.'\n        },\n        hostnames: {\n          type: 'array',\n          description: 'FQDNs to associate with traffic decisions.',\n          items: {\n            type: 'string'\n          }\n        },\n        ip_subnets: {\n          type: 'array',\n          description: 'IPv4 CIDRs to associate with traffic decisions. (IPv6 CIDRs are currently unsupported)',\n          items: {\n            type: 'string',\n            description: 'A valid CIDR notation representing an IP range.'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Display name for the app.'\n        },\n        type: {\n          type: 'string',\n          description: 'Category of the app.'\n        }\n      },\n      required: [        'account_app_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      account_app_id: {
        type: 'string',
        description: 'Identifier',
      },
      hostnames: {
        type: 'array',
        description: 'FQDNs to associate with traffic decisions.',
        items: {
          type: 'string',
        },
      },
      ip_subnets: {
        type: 'array',
        description: 'IPv4 CIDRs to associate with traffic decisions. (IPv6 CIDRs are currently unsupported)',
        items: {
          type: 'string',
          description: 'A valid CIDR notation representing an IP range.',
        },
      },
      name: {
        type: 'string',
        description: 'Display name for the app.',
      },
      type: {
        type: 'string',
        description: 'Category of the app.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'account_app_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { account_app_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.magicTransit.apps.update(account_app_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
