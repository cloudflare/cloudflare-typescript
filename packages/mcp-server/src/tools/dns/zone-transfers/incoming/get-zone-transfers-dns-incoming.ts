// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.zone_transfers.incoming',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/secondary_dns/incoming',
  operationId: 'secondary-dns-(-secondary-zone)-secondary-zone-configuration-details',
};

export const tool: Tool = {
  name: 'get_zone_transfers_dns_incoming',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet secondary zone configuration for incoming zone transfers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/incoming_get_response',\n  $defs: {\n    incoming_get_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        auto_refresh_seconds: {\n          type: 'number',\n          description: 'How often should a secondary zone auto refresh regardless of DNS NOTIFY.\\nNot applicable for primary zones.'\n        },\n        checked_time: {\n          type: 'string',\n          description: 'The time for a specific event.'\n        },\n        created_time: {\n          type: 'string',\n          description: 'The time for a specific event.'\n        },\n        modified_time: {\n          type: 'string',\n          description: 'The time for a specific event.'\n        },\n        name: {\n          type: 'string',\n          description: 'Zone name.'\n        },\n        peers: {\n          type: 'array',\n          description: 'A list of peer tags.',\n          items: {\n            type: 'string'\n          }\n        },\n        soa_serial: {\n          type: 'number',\n          description: 'The serial number of the SOA for the given zone.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.dns.zoneTransfers.incoming.get(body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
