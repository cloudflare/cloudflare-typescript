// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.pcaps.ownership',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/pcaps/ownership/validate',
  operationId: 'magic-pcap-collection-validate-buckets-for-full-packet-captures',
};

export const tool: Tool = {
  name: 'validate_pcaps_magic_transit_ownership',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidates buckets added to the packet captures API.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ownership',\n  $defs: {\n    ownership: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The bucket ID associated with the packet captures API.'\n        },\n        destination_conf: {\n          type: 'string',\n          description: 'The full URI for the bucket. This field only applies to `full` packet captures.'\n        },\n        filename: {\n          type: 'string',\n          description: 'The ownership challenge filename stored in the bucket.'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the ownership challenge. Can be pending, success or failed.',\n          enum: [            'pending',\n            'success',\n            'failed'\n          ]\n        },\n        submitted: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp when the bucket was added to packet captures API.'\n        },\n        validated: {\n          type: 'string',\n          description: 'The RFC 3339 timestamp when the bucket was validated.'\n        }\n      },\n      required: [        'id',\n        'destination_conf',\n        'filename',\n        'status',\n        'submitted'\n      ]\n    }\n  }\n}\n```",
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
      ownership_challenge: {
        type: 'string',
        description: 'The ownership challenge filename stored in the bucket.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'destination_conf', 'ownership_challenge'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.magicTransit.pcaps.ownership.validate(body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
