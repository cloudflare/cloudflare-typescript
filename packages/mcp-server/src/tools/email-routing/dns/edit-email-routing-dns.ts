// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.dns',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/zones/{zone_id}/email/routing/dns',
  operationId: 'email-routing-settings-unlock-email-routing-dns',
};

export const tool: Tool = {
  name: 'edit_email_routing_dns',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUnlock MX Records previously locked by Email Routing.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/settings'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    settings: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Email Routing settings identifier.'\n        },\n        enabled: {\n          type: 'string',\n          description: 'State of the zone settings for Email Routing.',\n          enum: [            true,\n            false\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Domain of your zone.'\n        },\n        created: {\n          type: 'string',\n          description: 'The date and time the settings have been created.',\n          format: 'date-time'\n        },\n        modified: {\n          type: 'string',\n          description: 'The date and time the settings have been modified.',\n          format: 'date-time'\n        },\n        skip_wizard: {\n          type: 'string',\n          description: 'Flag to check if the user skipped the configuration wizard.',\n          enum: [            true,\n            false\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'Show the state of your account, and the type or configuration error.',\n          enum: [            'ready',\n            'unconfigured',\n            'misconfigured',\n            'misconfigured/locked',\n            'unlocked'\n          ]\n        },\n        tag: {\n          type: 'string',\n          description: 'Email Routing settings tag. (Deprecated, replaced by Email Routing settings identifier)'\n        }\n      },\n      required: [        'id',\n        'enabled',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      name: {
        type: 'string',
        description: 'Domain of your zone.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.emailRouting.dns.edit(body)));
};

export default { metadata, tool, handler };
