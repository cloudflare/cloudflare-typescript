// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.prefixes.service_bindings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}',
  operationId: 'ip-address-management-service-bindings-get-service-binding',
};

export const tool: Tool = {
  name: 'get_prefixes_addressing_service_bindings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a single Service Binding\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/service_binding'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    service_binding: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier of a Service Binding.'\n        },\n        cidr: {\n          type: 'string',\n          description: 'IP Prefix in Classless Inter-Domain Routing format.'\n        },\n        provisioning: {\n          type: 'object',\n          description: 'Status of a Service Binding\\'s deployment to the Cloudflare network',\n          properties: {\n            state: {\n              type: 'string',\n              description: 'When a binding has been deployed to a majority of Cloudflare datacenters, the binding will become active and can be used with its associated service.',\n              enum: [                'provisioning',\n                'active'\n              ]\n            }\n          },\n          required: []\n        },\n        service_id: {\n          type: 'string',\n          description: 'Identifier of a Service on the Cloudflare network. Available services and their IDs may be found in the\\n**List Services** endpoint.\\n'\n        },\n        service_name: {\n          type: 'string',\n          description: 'Name of a service running on the Cloudflare network'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      binding_id: {
        type: 'string',
        description: 'Identifier of a Service Binding.',
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
  const { binding_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.addressing.prefixes.serviceBindings.get(binding_id, body)),
  );
};

export default { metadata, tool, handler };
