// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'web3.hostnames',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/web3/hostnames',
  operationId: 'web3-hostname-list-web3-hostnames',
};

export const tool: Tool = {
  name: 'list_web3_hostnames',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Web3 Hostnames\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/hostname'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Specifies whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Specifies the total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Specifies the current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Specifies the number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Specifies the total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    hostname: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Specify the identifier of the hostname.'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Specify an optional description of the hostname.'\n        },\n        dnslink: {\n          type: 'string',\n          description: 'Specify the DNSLink value used if the target is ipfs.'\n        },\n        modified_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Specify the hostname that points to the target gateway via CNAME.'\n        },\n        status: {\n          type: 'string',\n          description: 'Specifies the status of the hostname\\'s activation.',\n          enum: [            'active',\n            'pending',\n            'deleting',\n            'error'\n          ]\n        },\n        target: {\n          type: 'string',\n          description: 'Specify the target gateway of the hostname.',\n          enum: [            'ethereum',\n            'ipfs',\n            'ipfs_universal_path'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Specify the identifier of the hostname.',
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
  const response = await client.web3.hostnames.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
