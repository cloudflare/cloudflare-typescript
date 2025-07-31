// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/sites',
  operationId: 'magic-sites-create-site',
};

export const tool: Tool = {
  name: 'create_magic_transit_sites',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Site\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/site'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    site: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        connector_id: {\n          type: 'string',\n          description: 'Magic Connector identifier tag.'\n        },\n        description: {\n          type: 'string'\n        },\n        ha_mode: {\n          type: 'boolean',\n          description: 'Site high availability mode. If set to true, the site can have two connectors and runs in high availability mode.'\n        },\n        location: {\n          $ref: '#/$defs/site_location'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the site.'\n        },\n        secondary_connector_id: {\n          type: 'string',\n          description: 'Magic Connector identifier tag. Used when high availability mode is on.'\n        }\n      }\n    },\n    site_location: {\n      type: 'object',\n      description: 'Location of site in latitude and longitude.',\n      properties: {\n        lat: {\n          type: 'string',\n          description: 'Latitude'\n        },\n        lon: {\n          type: 'string',\n          description: 'Longitude'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
        description: 'The name of the site.',
      },
      connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag.',
      },
      description: {
        type: 'string',
      },
      ha_mode: {
        type: 'boolean',
        description:
          'Site high availability mode. If set to true, the site can have two connectors and runs in high availability mode.',
      },
      location: {
        $ref: '#/$defs/site_location',
      },
      secondary_connector_id: {
        type: 'string',
        description: 'Magic Connector identifier tag. Used when high availability mode is on.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name'],
    $defs: {
      site_location: {
        type: 'object',
        description: 'Location of site in latitude and longitude.',
        properties: {
          lat: {
            type: 'string',
            description: 'Latitude',
          },
          lon: {
            type: 'string',
            description: 'Longitude',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.magicTransit.sites.create(body)));
};

export default { metadata, tool, handler };
