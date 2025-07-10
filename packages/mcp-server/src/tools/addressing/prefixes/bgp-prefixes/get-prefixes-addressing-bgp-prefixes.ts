// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.bgp_prefixes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}',
  operationId: 'ip-address-management-prefixes-fetch-bgp-prefix',
};

export const tool: Tool = {
  name: 'get_prefixes_addressing_bgp_prefixes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single BGP Prefix according to its identifier\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/bgp_prefix'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    bgp_prefix: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier of BGP Prefix.'\n        },\n        asn: {\n          type: 'integer',\n          description: 'Autonomous System Number (ASN) the prefix will be advertised under.'\n        },\n        asn_prepend_count: {\n          type: 'integer',\n          description: 'Number of times to prepend the Cloudflare ASN to the BGP AS-Path attribute'\n        },\n        bgp_signal_opts: {\n          type: 'object',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether control of advertisement of the prefix to the Internet is enabled to be performed via BGP signal'\n            },\n            modified_at: {\n              type: 'string',\n              description: 'Last time BGP signaling control was toggled. This field is null if BGP signaling has never been enabled.',\n              format: 'date-time'\n            }\n          },\n          required: []\n        },\n        cidr: {\n          type: 'string',\n          description: 'IP Prefix in Classless Inter-Domain Routing format.'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        on_demand: {\n          type: 'object',\n          properties: {\n            advertised: {\n              type: 'boolean',\n              description: 'Prefix advertisement status to the Internet. This field is only not \\'null\\' if on demand is enabled.'\n            },\n            advertised_modified_at: {\n              type: 'string',\n              description: 'Last time the advertisement status was changed. This field is only not \\'null\\' if on demand is enabled.',\n              format: 'date-time'\n            },\n            on_demand_enabled: {\n              type: 'boolean',\n              description: 'Whether advertisement of the prefix to the Internet may be dynamically enabled or disabled.'\n            },\n            on_demand_locked: {\n              type: 'boolean',\n              description: 'Whether advertisement status of the prefix is locked, meaning it cannot be changed.'\n            }\n          },\n          required: []\n        },\n        withdraw_if_no_route: {\n          type: 'boolean',\n          description: 'Controls whether the BGP prefix is automatically withdrawn when prefix is withdrawn from Magic routing table (for Magic Transit customers using Direct CNI)'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      prefix_id: {
        type: 'string',
        description: 'Identifier of an IP Prefix.',
      },
      bgp_prefix_id: {
        type: 'string',
        description: 'Identifier of BGP Prefix.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bgp_prefix_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.addressing.prefixes.bgpPrefixes.get(bgp_prefix_id, body)),
  );
};

export default { metadata, tool, handler };
