// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.organizations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_zero_trust_organizations',
  description: 'Updates the configuration for your Zero Trust organization.',
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
      allow_authenticate_via_warp: {
        type: 'boolean',
        description:
          'When set to true, users can authenticate via WARP for any application in your organization. Application settings will take precedence over this value.',
      },
      auth_domain: {
        type: 'string',
        description: 'The unique subdomain assigned to your Zero Trust organization.',
      },
      auto_redirect_to_identity: {
        type: 'boolean',
        description: 'When set to `true`, users skip the identity provider selection step during login.',
      },
      custom_pages: {
        type: 'object',
        properties: {
          forbidden: {
            type: 'string',
            description:
              'The uid of the custom page to use when a user is denied access after failing a non-identity rule.',
          },
          identity_denied: {
            type: 'string',
            description: 'The uid of the custom page to use when a user is denied access.',
          },
        },
        required: [],
      },
      is_ui_read_only: {
        type: 'boolean',
        description:
          'Lock all settings as Read-Only in the Dashboard, regardless of user permission. Updates may only be made via the API or Terraform for this account when enabled.',
      },
      login_design: {
        type: 'object',
        properties: {
          background_color: {
            type: 'string',
            description: 'The background color on your login page.',
          },
          footer_text: {
            type: 'string',
            description: 'The text at the bottom of your login page.',
          },
          header_text: {
            type: 'string',
            description: 'The text at the top of your login page.',
          },
          logo_path: {
            type: 'string',
            description: 'The URL of the logo on your login page.',
          },
          text_color: {
            type: 'string',
            description: 'The text color on your login page.',
          },
        },
        required: [],
      },
      name: {
        type: 'string',
        description: 'The name of your Zero Trust organization.',
      },
      session_duration: {
        type: 'string',
        description:
          'The amount of time that tokens issued for applications will be valid. Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.',
      },
      ui_read_only_toggle_reason: {
        type: 'string',
        description: 'A description of the reason why the UI read only field is being toggled.',
      },
      user_seat_expiration_inactive_time: {
        type: 'string',
        description:
          'The amount of time a user seat is inactive before it expires. When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.',
      },
      warp_auth_session_duration: {
        type: 'string',
        description:
          'The amount of time that tokens issued for applications will be valid. Must be in the format `30m` or `2h45m`. Valid time units are: m, h.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.organizations.update(body);
};

export default { metadata, tool, handler };
