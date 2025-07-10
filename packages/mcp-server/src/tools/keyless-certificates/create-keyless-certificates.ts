// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'keyless_certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/keyless_certificates',
  operationId: 'keyless-ssl-for-a-zone-create-keyless-ssl-configuration',
};

export const tool: Tool = {
  name: 'create_keyless_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Keyless SSL Configuration\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/keyless_certificate'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    keyless_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Keyless certificate identifier tag.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was created.',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether or not the Keyless SSL is on or off.'\n        },\n        host: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was last modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Available permissions for the Keyless SSL for the current user requesting the item.',\n          items: {\n            type: 'string'\n          }\n        },\n        port: {\n          type: 'number',\n          description: 'The keyless SSL port used to communicate between Cloudflare and the client\\'s Keyless SSL server.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the Keyless SSL.',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        tunnel: {\n          $ref: '#/$defs/tunnel'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'enabled',\n        'host',\n        'modified_on',\n        'name',\n        'permissions',\n        'port',\n        'status'\n      ]\n    },\n    tunnel: {\n      type: 'object',\n      description: 'Configuration for using Keyless SSL through a Cloudflare Tunnel',\n      properties: {\n        private_ip: {\n          type: 'string',\n          description: 'Private IP of the Key Server Host'\n        },\n        vnet_id: {\n          type: 'string',\n          description: 'Cloudflare Tunnel Virtual Network ID'\n        }\n      },\n      required: [        'private_ip',\n        'vnet_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate: {
        type: 'string',
        description: "The zone's SSL certificate or SSL certificate and intermediate(s).",
      },
      host: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      port: {
        type: 'number',
        description:
          "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
      },
      bundle_method: {
        $ref: '#/$defs/bundle_method',
      },
      name: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      tunnel: {
        $ref: '#/$defs/tunnel',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      bundle_method: {
        type: 'string',
        description:
          'A ubiquitous bundle has the highest probability of being verified everywhere, even by clients using outdated or unusual trust stores. An optimal bundle uses the shortest chain and newest intermediates. And the force bundle verifies the chain, but does not otherwise modify it.',
        enum: ['ubiquitous', 'optimal', 'force'],
      },
      tunnel: {
        type: 'object',
        description: 'Configuration for using Keyless SSL through a Cloudflare Tunnel',
        properties: {
          private_ip: {
            type: 'string',
            description: 'Private IP of the Key Server Host',
          },
          vnet_id: {
            type: 'string',
            description: 'Cloudflare Tunnel Virtual Network ID',
          },
        },
        required: ['private_ip', 'vnet_id'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.keylessCertificates.create(body)));
};

export default { metadata, tool, handler };
