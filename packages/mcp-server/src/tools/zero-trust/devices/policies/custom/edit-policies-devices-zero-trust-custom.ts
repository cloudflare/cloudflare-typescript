// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/devices/policy/{policy_id}',
  operationId: 'devices-update-device-settings-policy',
};

export const tool: Tool = {
  name: 'edit_policies_devices_zero_trust_custom',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a configured device settings profile.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      policy_id: {
        type: 'string',
      },
      allow_mode_switch: {
        type: 'boolean',
        description: 'Whether to allow the user to switch WARP between modes.',
      },
      allow_updates: {
        type: 'boolean',
        description: 'Whether to receive update notifications when a new version of the client is available.',
      },
      allowed_to_leave: {
        type: 'boolean',
        description: 'Whether to allow devices to leave the organization.',
      },
      auto_connect: {
        type: 'number',
        description: 'The amount of time in seconds to reconnect after having been disabled.',
      },
      captive_portal: {
        type: 'number',
        description: 'Turn on the captive portal after the specified amount of time.',
      },
      description: {
        type: 'string',
        description: 'A description of the policy.',
      },
      disable_auto_fallback: {
        type: 'boolean',
        description:
          'If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether the policy will be applied to matching devices.',
      },
      exclude: {
        type: 'array',
        description:
          "List of routes excluded in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.",
        items: {
          $ref: '#/$defs/split_tunnel_exclude',
        },
      },
      exclude_office_ips: {
        type: 'boolean',
        description: 'Whether to add Microsoft IPs to Split Tunnel exclusions.',
      },
      include: {
        type: 'array',
        description:
          "List of routes included in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.",
        items: {
          $ref: '#/$defs/split_tunnel_include',
        },
      },
      lan_allow_minutes: {
        type: 'number',
        description:
          'The amount of time in minutes a user is allowed access to their LAN. A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.',
      },
      lan_allow_subnet_size: {
        type: 'number',
        description:
          'The size of the subnet for the local access network. Note that this field is omitted from the response if null or unset.',
      },
      match: {
        type: 'string',
        description:
          'The wirefilter expression to match devices. Available values: "identity.email", "identity.groups.id", "identity.groups.name", "identity.groups.email", "identity.service_token_uuid", "identity.saml_attributes", "network", "os.name", "os.version".',
      },
      name: {
        type: 'string',
        description: 'The name of the device settings profile.',
      },
      precedence: {
        type: 'number',
        description:
          'The precedence of the policy. Lower values indicate higher precedence. Policies will be evaluated in ascending order of this field.',
      },
      register_interface_ip_with_dns: {
        type: 'boolean',
        description:
          "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.",
      },
      sccm_vpn_boundary_support: {
        type: 'boolean',
        description:
          'Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).',
      },
      service_mode_v2: {
        type: 'object',
        properties: {
          mode: {
            type: 'string',
            description: 'The mode to run the WARP client under.',
          },
          port: {
            type: 'number',
            description: 'The port number when used with proxy mode.',
          },
        },
      },
      support_url: {
        type: 'string',
        description: 'The URL to launch when the Send Feedback button is clicked.',
      },
      switch_locked: {
        type: 'boolean',
        description: 'Whether to allow the user to turn off the WARP switch and disconnect the client.',
      },
      tunnel_protocol: {
        type: 'string',
        description: 'Determines which tunnel protocol to use.',
      },
    },
    required: ['account_id', 'policy_id'],
    $defs: {
      split_tunnel_exclude: {
        anyOf: [
          {
            type: 'object',
            properties: {
              address: {
                type: 'string',
                description:
                  'The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.',
              },
              description: {
                type: 'string',
                description: 'A description of the Split Tunnel item, displayed in the client UI.',
              },
            },
            required: ['address'],
          },
          {
            type: 'object',
            properties: {
              host: {
                type: 'string',
                description:
                  'The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.',
              },
              description: {
                type: 'string',
                description: 'A description of the Split Tunnel item, displayed in the client UI.',
              },
            },
            required: ['host'],
          },
        ],
      },
      split_tunnel_include: {
        anyOf: [
          {
            type: 'object',
            properties: {
              address: {
                type: 'string',
                description:
                  'The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.',
              },
              description: {
                type: 'string',
                description: 'A description of the Split Tunnel item, displayed in the client UI.',
              },
            },
            required: ['address'],
          },
          {
            type: 'object',
            properties: {
              host: {
                type: 'string',
                description:
                  'The domain name to include in the tunnel. If `host` is present, `address` must not be present.',
              },
              description: {
                type: 'string',
                description: 'A description of the Split Tunnel item, displayed in the client UI.',
              },
            },
            required: ['host'],
          },
        ],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { policy_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.devices.policies.custom.edit(policy_id, body));
};

export default { metadata, tool, handler };
