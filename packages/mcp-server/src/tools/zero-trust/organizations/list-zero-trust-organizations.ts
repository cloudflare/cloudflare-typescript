// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.organizations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/organizations',
};

export const tool: Tool = {
  name: 'list_zero_trust_organizations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the configuration for your Zero Trust organization.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/organization'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    organization: {\n      type: 'object',\n      properties: {\n        allow_authenticate_via_warp: {\n          type: 'boolean',\n          description: 'When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over this value.'\n        },\n        auth_domain: {\n          type: 'string',\n          description: 'The unique subdomain assigned to your Zero Trust organization.'\n        },\n        auto_redirect_to_identity: {\n          type: 'boolean',\n          description: 'When set to `true`, users skip the identity provider selection step during login.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        custom_pages: {\n          type: 'object',\n          properties: {\n            forbidden: {\n              type: 'string',\n              description: 'The uid of the custom page to use when a user is denied access after failing a non-identity rule.'\n            },\n            identity_denied: {\n              type: 'string',\n              description: 'The uid of the custom page to use when a user is denied access.'\n            }\n          }\n        },\n        is_ui_read_only: {\n          type: 'boolean',\n          description: 'Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this account when enabled.'\n        },\n        login_design: {\n          $ref: '#/$defs/login_design'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of your Zero Trust organization.'\n        },\n        session_duration: {\n          type: 'string',\n          description: 'The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.'\n        },\n        ui_read_only_toggle_reason: {\n          type: 'string',\n          description: 'A description of the reason why the UI read only field is being toggled.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        user_seat_expiration_inactive_time: {\n          type: 'string',\n          description: 'The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.'\n        },\n        warp_auth_session_duration: {\n          type: 'string',\n          description: 'The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.'\n        }\n      }\n    },\n    login_design: {\n      type: 'object',\n      properties: {\n        background_color: {\n          type: 'string',\n          description: 'The background color on your login page.'\n        },\n        footer_text: {\n          type: 'string',\n          description: 'The text at the bottom of your login page.'\n        },\n        header_text: {\n          type: 'string',\n          description: 'The text at the top of your login page.'\n        },\n        logo_path: {\n          type: 'string',\n          description: 'The URL of the logo on your login page.'\n        },\n        text_color: {\n          type: 'string',\n          description: 'The text color on your login page.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.zeroTrust.organizations.list(body)));
};

export default { metadata, tool, handler };
