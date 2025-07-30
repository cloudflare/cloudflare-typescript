// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pcaps/ownership',
  operationId: 'magic-pcap-collection-add-buckets-for-full-packet-captures',
};

export const tool: Tool = {
  name: 'create_pcaps_magic_transit_ownership',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdds an AWS or GCP bucket to use with full packet captures.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/ownership'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    ownership: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The bucket ID associated with the packet captures API.'\n        },\n        destination_conf: {\n          type: 'string',\n          description: 'The full URI for the bucket. This field only applies to `full` packet captures.'\n        },\n        filename: {\n          type: 'string',\n          description: 'The ownership challenge filename stored in the bucket.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the ownership challenge. Can be pending, success or failed.',\n          enum: [            'pending',\n            'success',\n            'failed'\n          ]\n        },\n        submitted: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp when the bucket was added to packet captures API.'\n        },\n        validated: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp when the bucket was validated.'\n        }\n      },\n      required: [        'id',\n        'destination_conf',\n        'filename',\n        'status',\n        'submitted'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      destination_conf: {
        type: 'string',
        description: 'The full URI for the bucket. This field only applies to `full` packet captures.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'destination_conf'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.magicTransit.pcaps.ownership.create(body)));
};

export default { metadata, tool, handler };
