// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.settings',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/devices/settings',
  operationId: 'zero-trust-accounts-patch-device-settings-for-the-zero-trust-account',
};

export const tool: Tool = {
  name: 'edit_devices_zero_trust_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatches the current device settings for a Zero Trust account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/device_settings',\n  $defs: {\n    device_settings: {\n      type: 'object',\n      properties: {\n        disable_for_time: {\n          type: 'number',\n          description: 'Sets the time limit, in seconds, that a user can use an override code to bypass WARP.'\n        },\n        external_emergency_signal_enabled: {\n          type: 'boolean',\n          description: 'Controls whether the external emergency disconnect feature is enabled.'\n        },\n        external_emergency_signal_fingerprint: {\n          type: 'string',\n          description: 'The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server\\'s identity. The device will ignore any response if the server\\'s certificate fingerprint does not exactly match this value.'\n        },\n        external_emergency_signal_interval: {\n          type: 'string',\n          description: 'The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., \"5m\", \"2m30s\", \"1h\"). Minimum 30 seconds.'\n        },\n        external_emergency_signal_url: {\n          type: 'string',\n          description: 'The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.'\n        },\n        gateway_proxy_enabled: {\n          type: 'boolean',\n          description: 'Enable gateway proxy filtering on TCP.'\n        },\n        gateway_udp_proxy_enabled: {\n          type: 'boolean',\n          description: 'Enable gateway proxy filtering on UDP.'\n        },\n        root_certificate_installation_enabled: {\n          type: 'boolean',\n          description: 'Enable installation of cloudflare managed root certificate.'\n        },\n        use_zt_virtual_ip: {\n          type: 'boolean',\n          description: 'Enable using CGNAT virtual IPv4.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      disable_for_time: {
        type: 'number',
        description: 'Sets the time limit, in seconds, that a user can use an override code to bypass WARP.',
      },
      external_emergency_signal_enabled: {
        type: 'boolean',
        description: 'Controls whether the external emergency disconnect feature is enabled.',
      },
      external_emergency_signal_fingerprint: {
        type: 'string',
        description:
          "The SHA256 fingerprint (64 hexadecimal characters) of the HTTPS server certificate for the external_emergency_signal_url. If provided, the WARP client will use this value to verify the server's identity. The device will ignore any response if the server's certificate fingerprint does not exactly match this value.",
      },
      external_emergency_signal_interval: {
        type: 'string',
        description:
          'The interval at which the WARP client fetches the emergency disconnect signal, formatted as a duration string (e.g., "5m", "2m30s", "1h"). Minimum 30 seconds.',
      },
      external_emergency_signal_url: {
        type: 'string',
        description:
          'The HTTPS URL from which to fetch the emergency disconnect signal. Must use HTTPS and have an IPv4 or IPv6 address as the host.',
      },
      gateway_proxy_enabled: {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on TCP.',
      },
      gateway_udp_proxy_enabled: {
        type: 'boolean',
        description: 'Enable gateway proxy filtering on UDP.',
      },
      root_certificate_installation_enabled: {
        type: 'boolean',
        description: 'Enable installation of cloudflare managed root certificate.',
      },
      use_zt_virtual_ip: {
        type: 'boolean',
        description: 'Enable using CGNAT virtual IPv4.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.zeroTrust.devices.settings.edit(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
