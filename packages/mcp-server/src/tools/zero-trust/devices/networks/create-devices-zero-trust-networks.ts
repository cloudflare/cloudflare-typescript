// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.devices.networks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/devices/networks',
  operationId: 'device-managed-networks-create-device-managed-network',
};

export const tool: Tool = {
  name: 'create_devices_zero_trust_networks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new device managed network.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/device_network'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    device_network: {\n      type: 'object',\n      properties: {\n        config: {\n          type: 'object',\n          description: 'The configuration object containing information for the WARP client to detect the managed network.',\n          properties: {\n            tls_sockaddr: {\n              type: 'string',\n              description: 'A network address of the form \"host:port\" that the WARP client will use to detect the presence of a TLS host.'\n            },\n            sha256: {\n              type: 'string',\n              description: 'The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.'\n            }\n          },\n          required: [            'tls_sockaddr'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the device managed network. This name must be unique.'\n        },\n        network_id: {\n          type: 'string',\n          description: 'API UUID.'\n        },\n        type: {\n          type: 'string',\n          description: 'The type of device managed network.',\n          enum: [            'tls'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      config: {
        type: 'object',
        description:
          'The configuration object containing information for the WARP client to detect the managed network.',
        properties: {
          tls_sockaddr: {
            type: 'string',
            description:
              'A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.',
          },
          sha256: {
            type: 'string',
            description:
              'The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.',
          },
        },
        required: ['tls_sockaddr'],
      },
      name: {
        type: 'string',
        description: 'The name of the device managed network. This name must be unique.',
      },
      type: {
        type: 'string',
        description: 'The type of device managed network.',
        enum: ['tls'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'config', 'name', 'type'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.zeroTrust.devices.networks.create(body)),
  );
};

export default { metadata, tool, handler };
