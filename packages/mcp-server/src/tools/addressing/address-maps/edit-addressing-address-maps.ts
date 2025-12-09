// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
  operationId: 'ip-address-management-address-maps-update-address-map',
};

export const tool: Tool = {
  name: 'edit_addressing_address_maps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nModify properties of an address map owned by the account.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/address_map',\n  $defs: {\n    address_map: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier of an Address Map.'\n        },\n        can_delete: {\n          type: 'boolean',\n          description: 'If set to false, then the Address Map cannot be deleted via API. This is true for Cloudflare-managed maps.'\n        },\n        can_modify_ips: {\n          type: 'boolean',\n          description: 'If set to false, then the IPs on the Address Map cannot be modified via the API. This is true for Cloudflare-managed maps.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        default_sni: {\n          type: 'string',\n          description: 'If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.'\n        },\n        description: {\n          type: 'string',\n          description: 'An optional description field which may be used to describe the types of IPs or zones on the map.'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether the Address Map is enabled or not. Cloudflare\\'s DNS will not respond with IP addresses on an Address Map until the map is enabled.'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      address_map_id: {
        type: 'string',
        description: 'Identifier of an Address Map.',
      },
      default_sni: {
        type: 'string',
        description:
          'If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.',
      },
      description: {
        type: 'string',
        description:
          'An optional description field which may be used to describe the types of IPs or zones on the map.',
      },
      enabled: {
        type: 'boolean',
        description:
          "Whether the Address Map is enabled or not. Cloudflare's DNS will not respond with IP addresses on an Address Map until the map is enabled.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'address_map_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { address_map_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.addressing.addressMaps.edit(address_map_id, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
