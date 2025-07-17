// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.ipsec_tunnels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}/psk_generate',
  operationId: 'magic-ipsec-tunnels-generate-pre-shared-key-(-psk)-for-ipsec-tunnels',
};

export const tool: Tool = {
  name: 'psk_generate_magic_transit_ipsec_tunnels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a Pre Shared Key for a specific IPsec tunnel used in the IKE session. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes. After a PSK is generated, the PSK is immediately persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a safe place.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        ipsec_tunnel_id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        psk: {\n          type: 'string',\n          description: 'A randomly generated or provided string for use in the IPsec tunnel.'\n        },\n        psk_metadata: {\n          $ref: '#/$defs/psk_metadata'\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    psk_metadata: {\n      type: 'object',\n      description: 'The PSK metadata that includes when the PSK was generated.',\n      properties: {\n        last_generated_on: {\n          type: 'string',\n          description: 'The date and time the tunnel was last modified.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ipsec_tunnel_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'object',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'ipsec_tunnel_id', 'body'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ipsec_tunnel_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.magicTransit.ipsecTunnels.pskGenerate(ipsec_tunnel_id, body)),
  );
};

export default { metadata, tool, handler };
