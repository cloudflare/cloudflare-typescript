// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'keyless_certificates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/keyless_certificates',
  operationId: 'keyless-ssl-for-a-zone-list-keyless-ssl-configurations',
};

export const tool: Tool = {
  name: 'list_keyless_certificates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Keyless SSL configurations for a given zone.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/keyless_certificate'\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    keyless_certificate: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Keyless certificate identifier tag.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was created.',\n          format: 'date-time'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether or not the Keyless SSL is on or off.'\n        },\n        host: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'When the Keyless SSL was last modified.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The keyless SSL name.'\n        },\n        permissions: {\n          type: 'array',\n          description: 'Available permissions for the Keyless SSL for the current user requesting the item.',\n          items: {\n            type: 'string'\n          }\n        },\n        port: {\n          type: 'number',\n          description: 'The keyless SSL port used to communicate between Cloudflare and the client\\'s Keyless SSL server.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the Keyless SSL.',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        tunnel: {\n          $ref: '#/$defs/tunnel'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'enabled',\n        'host',\n        'modified_on',\n        'name',\n        'permissions',\n        'port',\n        'status'\n      ]\n    },\n    tunnel: {\n      type: 'object',\n      description: 'Configuration for using Keyless SSL through a Cloudflare Tunnel',\n      properties: {\n        private_ip: {\n          type: 'string',\n          description: 'Private IP of the Key Server Host'\n        },\n        vnet_id: {\n          type: 'string',\n          description: 'Cloudflare Tunnel Virtual Network ID'\n        }\n      },\n      required: [        'private_ip',\n        'vnet_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
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
  const response = await client.keylessCertificates.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
