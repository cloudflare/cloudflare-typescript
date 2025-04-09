// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.policies.default',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_policies_devices_zero_trust_default',
  description: 'Updates the default device settings profile for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
      disable_auto_fallback: {
        type: 'boolean',
        description:
          'If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.',
      },
      exclude: {
        type: 'array',
        description:
          "List of routes excluded in the WARP client's tunnel. Both 'exclude' and 'include' cannot be set in the same request.",
        items: {
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
      register_interface_ip_with_dns: {
        type: 'boolean',
        description:
          "Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.",
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
        required: [],
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.devices.policies.default.edit(body);
};

export default { metadata, tool, handler };
