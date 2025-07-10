// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'intel.domains.bulks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/intel/domain/bulk',
  operationId: 'domain-intelligence-get-multiple-domain-details',
};

export const tool: Tool = {
  name: 'get_domains_intel_bulks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSame as summary.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          additional_information: {\n            type: 'object',\n            description: 'Additional information related to the host name.',\n            properties: {\n              suspected_malware_family: {\n                type: 'string',\n                description: 'Suspected DGA malware family.'\n              }\n            },\n            required: []\n          },\n          application: {\n            type: 'object',\n            description: 'Application that the hostname belongs to.',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: []\n          },\n          content_categories: {\n            type: 'array',\n            items: {\n              type: 'object',\n              description: 'Current content categories.',\n              properties: {\n                id: {\n                  type: 'integer'\n                },\n                name: {\n                  type: 'string'\n                },\n                super_category_id: {\n                  type: 'integer'\n                }\n              },\n              required: []\n            }\n          },\n          domain: {\n            type: 'string'\n          },\n          inherited_content_categories: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'integer'\n                },\n                name: {\n                  type: 'string'\n                },\n                super_category_id: {\n                  type: 'integer'\n                }\n              },\n              required: []\n            }\n          },\n          inherited_from: {\n            type: 'string',\n            description: 'Domain from which `inherited_content_categories` and `inherited_risk_types` are inherited, if applicable.'\n          },\n          inherited_risk_types: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'integer'\n                },\n                name: {\n                  type: 'string'\n                },\n                super_category_id: {\n                  type: 'integer'\n                }\n              },\n              required: []\n            }\n          },\n          popularity_rank: {\n            type: 'integer',\n            description: 'Global Cloudflare 100k ranking for the last 30 days, if available for the hostname. The top ranked domain is 1, the lowest ranked domain is 100,000.'\n          },\n          risk_score: {\n            type: 'number',\n            description: 'Hostname risk score, which is a value between 0 (lowest risk) to 1 (highest risk).'\n          },\n          risk_types: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                id: {\n                  type: 'integer'\n                },\n                name: {\n                  type: 'string'\n                },\n                super_category_id: {\n                  type: 'integer'\n                }\n              },\n              required: []\n            }\n          }\n        },\n        required: []\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      },\n      required: []\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      domain: {
        type: 'array',
        description: 'Accepts multiple values like `?domain=cloudflare.com&domain=example.com`.',
        items: {
          type: 'string',
        },
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
  return asTextContentResult(await maybeFilter(args, await client.intel.domains.bulks.get(body)));
};

export default { metadata, tool, handler };
