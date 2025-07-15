// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'keyless_certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/keyless_certificates/{keyless_certificate_id}',
  operationId: 'keyless-ssl-for-a-zone-edit-keyless-ssl-configuration',
};

export const tool: Tool = {
  name: 'edit_keyless_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis will update attributes of a Keyless SSL. Consists of one or more of the following:  host,name,port.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/keyless_certificate'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    keyless_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Keyless certificate identifier tag.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was created.',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether or not the Keyless SSL is on or off.'\n        },\n        host: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was last modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Available permissions for the Keyless SSL for the current user requesting the item.',\n          items: {\n            type: 'string'\n          }\n        },\n        port: {\n          type: 'number',\n          description: 'The keyless SSL port used to communicate between Cloudflare and the client\\'s Keyless SSL server.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the Keyless SSL.',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        tunnel: {\n          $ref: '#/$defs/tunnel'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'enabled',\n        'host',\n        'modified_on',\n        'name',\n        'permissions',\n        'port',\n        'status'\n      ]\n    },\n    tunnel: {\n      type: 'object',\n      description: 'Configuration for using Keyless SSL through a Cloudflare Tunnel',\n      properties: {\n        private_ip: {\n          type: 'string',\n          description: 'Private IP of the Key Server Host'\n        },\n        vnet_id: {\n          type: 'string',\n          description: 'Cloudflare Tunnel Virtual Network ID'\n        }\n      },\n      required: [        'private_ip',\n        'vnet_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      keyless_certificate_id: {
        type: 'string',
        description: 'Identifier.',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether or not the Keyless SSL is on or off.',
      },
      host: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      name: {
        type: 'string',
        description: 'The keyless SSL name.',
      },
      port: {
        type: 'number',
        description:
          "The keyless SSL port used to communicate between Cloudflare and the client's Keyless SSL server.",
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
  const { keyless_certificate_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.keylessCertificates.edit(keyless_certificate_id, body)),
  );
};

export default { metadata, tool, handler };
