// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.fleet_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dex/devices/{device_id}/fleet-status/live',
  operationId: 'devices-live-status',
};

export const tool: Tool = {
  name: 'get_devices_zero_trust_fleet_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the live status of a latest device given device_id from the device_state table\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    colo: {\n      type: 'string',\n      description: 'Cloudflare colo'\n    },\n    deviceId: {\n      type: 'string',\n      description: 'Device identifier (UUID v4)'\n    },\n    mode: {\n      type: 'string',\n      description: 'The mode under which the WARP client is run'\n    },\n    platform: {\n      type: 'string',\n      description: 'Operating system'\n    },\n    status: {\n      type: 'string',\n      description: 'Network status'\n    },\n    timestamp: {\n      type: 'string',\n      description: 'Timestamp in ISO format'\n    },\n    version: {\n      type: 'string',\n      description: 'WARP client version'\n    },\n    alwaysOn: {\n      type: 'boolean'\n    },\n    batteryCharging: {\n      type: 'boolean'\n    },\n    batteryCycles: {\n      type: 'integer'\n    },\n    batteryPct: {\n      type: 'number'\n    },\n    connectionType: {\n      type: 'string'\n    },\n    cpuPct: {\n      type: 'number'\n    },\n    cpuPctByApp: {\n      type: 'array',\n      items: {\n        type: 'array',\n        items: {\n          type: 'object',\n          properties: {\n            cpu_pct: {\n              type: 'number'\n            },\n            name: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    },\n    deviceIpv4: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        asn: {\n          type: 'integer'\n        },\n        aso: {\n          type: 'string'\n        },\n        location: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country_iso: {\n              type: 'string'\n            },\n            state_iso: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        },\n        netmask: {\n          type: 'string'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    },\n    deviceIpv6: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        asn: {\n          type: 'integer'\n        },\n        aso: {\n          type: 'string'\n        },\n        location: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country_iso: {\n              type: 'string'\n            },\n            state_iso: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        },\n        netmask: {\n          type: 'string'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    },\n    deviceName: {\n      type: 'string',\n      description: 'Device identifier (human readable)'\n    },\n    diskReadBps: {\n      type: 'integer'\n    },\n    diskUsagePct: {\n      type: 'number'\n    },\n    diskWriteBps: {\n      type: 'integer'\n    },\n    dohSubdomain: {\n      type: 'string'\n    },\n    estimatedLossPct: {\n      type: 'number'\n    },\n    firewallEnabled: {\n      type: 'boolean'\n    },\n    gatewayIpv4: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        asn: {\n          type: 'integer'\n        },\n        aso: {\n          type: 'string'\n        },\n        location: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country_iso: {\n              type: 'string'\n            },\n            state_iso: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        },\n        netmask: {\n          type: 'string'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    },\n    gatewayIpv6: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        asn: {\n          type: 'integer'\n        },\n        aso: {\n          type: 'string'\n        },\n        location: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country_iso: {\n              type: 'string'\n            },\n            state_iso: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        },\n        netmask: {\n          type: 'string'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    },\n    handshakeLatencyMs: {\n      type: 'number'\n    },\n    ispIpv4: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        asn: {\n          type: 'integer'\n        },\n        aso: {\n          type: 'string'\n        },\n        location: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country_iso: {\n              type: 'string'\n            },\n            state_iso: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        },\n        netmask: {\n          type: 'string'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    },\n    ispIpv6: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string'\n        },\n        asn: {\n          type: 'integer'\n        },\n        aso: {\n          type: 'string'\n        },\n        location: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string'\n            },\n            country_iso: {\n              type: 'string'\n            },\n            state_iso: {\n              type: 'string'\n            },\n            zip: {\n              type: 'string'\n            }\n          }\n        },\n        netmask: {\n          type: 'string'\n        },\n        version: {\n          type: 'string'\n        }\n      }\n    },\n    metal: {\n      type: 'string'\n    },\n    networkRcvdBps: {\n      type: 'integer'\n    },\n    networkSentBps: {\n      type: 'integer'\n    },\n    networkSsid: {\n      type: 'string'\n    },\n    personEmail: {\n      type: 'string',\n      description: 'User contact email address'\n    },\n    ramAvailableKb: {\n      type: 'integer'\n    },\n    ramUsedPct: {\n      type: 'number'\n    },\n    ramUsedPctByApp: {\n      type: 'array',\n      items: {\n        type: 'array',\n        items: {\n          type: 'object',\n          properties: {\n            name: {\n              type: 'string'\n            },\n            ram_used_pct: {\n              type: 'number'\n            }\n          }\n        }\n      }\n    },\n    switchLocked: {\n      type: 'boolean'\n    },\n    wifiStrengthDbm: {\n      type: 'integer'\n    }\n  },\n  required: [    'colo',\n    'deviceId',\n    'mode',\n    'platform',\n    'status',\n    'timestamp',\n    'version'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      device_id: {
        type: 'string',
        description: 'Device-specific ID, given as UUID v4',
      },
      since_minutes: {
        type: 'number',
        description: 'Number of minutes before current time',
      },
      colo: {
        type: 'string',
        description: 'List of data centers to filter results',
      },
      time_now: {
        type: 'string',
        description: 'Number of minutes before current time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'device_id', 'since_minutes'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { device_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.zeroTrust.devices.fleetStatus.get(device_id, body)),
  );
};

export default { metadata, tool, handler };
