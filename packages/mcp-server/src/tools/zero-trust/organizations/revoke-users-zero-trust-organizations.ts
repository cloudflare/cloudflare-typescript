// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.organizations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/organizations/revoke_user',
};

export const tool: Tool = {
  name: 'revoke_users_zero_trust_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRevokes a user's access across all applications.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'string',\n      enum: [        true,\n        false\n      ]\n    },\n    success: {\n      type: 'string',\n      enum: [        true,\n        false\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'The email of the user to revoke.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      query_devices: {
        type: 'boolean',
        description: 'When set to `true`, all devices associated with the user will be revoked.',
      },
      body_devices: {
        type: 'boolean',
        description: 'When set to `true`, all devices associated with the user will be revoked.',
      },
      user_uid: {
        type: 'string',
        description: 'The uuid of the user to revoke.',
      },
      warp_session_reauth: {
        type: 'boolean',
        description:
          'When set to `true`, the user will be required to re-authenticate to WARP for all Gateway policies that enforce a WARP client session duration. When `false`, the user’s WARP session will remain active',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zeroTrust.organizations.revokeUsers(body)));
};

export default { metadata, tool, handler };
