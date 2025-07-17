// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/urlscanner/v2/har/{scan_id}',
  operationId: 'urlscanner-get-scan-har-v2',
};

export const tool: Tool = {
  name: 'har_url_scanner_scans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a URL scan's HAR file. See HAR spec at http://www.softwareishard.com/blog/har-12-spec/.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    log: {\n      type: 'object',\n      properties: {\n        creator: {\n          type: 'object',\n          properties: {\n            comment: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            version: {\n              type: 'string'\n            }\n          },\n          required: [            'comment',\n            'name',\n            'version'\n          ]\n        },\n        entries: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              _initialPriority: {\n                type: 'string'\n              },\n              _initiator_type: {\n                type: 'string'\n              },\n              _priority: {\n                type: 'string'\n              },\n              _requestId: {\n                type: 'string'\n              },\n              _requestTime: {\n                type: 'number'\n              },\n              _resourceType: {\n                type: 'string'\n              },\n              cache: {\n                type: 'object'\n              },\n              connection: {\n                type: 'string'\n              },\n              pageref: {\n                type: 'string'\n              },\n              request: {\n                type: 'object',\n                properties: {\n                  bodySize: {\n                    type: 'number'\n                  },\n                  headers: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        name: {\n                          type: 'string'\n                        },\n                        value: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'name',\n                        'value'\n                      ]\n                    }\n                  },\n                  headersSize: {\n                    type: 'number'\n                  },\n                  httpVersion: {\n                    type: 'string'\n                  },\n                  method: {\n                    type: 'string'\n                  },\n                  url: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'bodySize',\n                  'headers',\n                  'headersSize',\n                  'httpVersion',\n                  'method',\n                  'url'\n                ]\n              },\n              response: {\n                type: 'object',\n                properties: {\n                  _transferSize: {\n                    type: 'number'\n                  },\n                  bodySize: {\n                    type: 'number'\n                  },\n                  content: {\n                    type: 'object',\n                    properties: {\n                      mimeType: {\n                        type: 'string'\n                      },\n                      size: {\n                        type: 'number'\n                      },\n                      compression: {\n                        type: 'integer'\n                      }\n                    },\n                    required: [                      'mimeType',\n                      'size'\n                    ]\n                  },\n                  headers: {\n                    type: 'array',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        name: {\n                          type: 'string'\n                        },\n                        value: {\n                          type: 'string'\n                        }\n                      },\n                      required: [                        'name',\n                        'value'\n                      ]\n                    }\n                  },\n                  headersSize: {\n                    type: 'number'\n                  },\n                  httpVersion: {\n                    type: 'string'\n                  },\n                  redirectURL: {\n                    type: 'string'\n                  },\n                  status: {\n                    type: 'number'\n                  },\n                  statusText: {\n                    type: 'string'\n                  }\n                },\n                required: [                  '_transferSize',\n                  'bodySize',\n                  'content',\n                  'headers',\n                  'headersSize',\n                  'httpVersion',\n                  'redirectURL',\n                  'status',\n                  'statusText'\n                ]\n              },\n              serverIPAddress: {\n                type: 'string'\n              },\n              startedDateTime: {\n                type: 'string'\n              },\n              time: {\n                type: 'number'\n              }\n            },\n            required: [              '_initialPriority',\n              '_initiator_type',\n              '_priority',\n              '_requestId',\n              '_requestTime',\n              '_resourceType',\n              'cache',\n              'connection',\n              'pageref',\n              'request',\n              'response',\n              'serverIPAddress',\n              'startedDateTime',\n              'time'\n            ]\n          }\n        },\n        pages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              pageTimings: {\n                type: 'object',\n                properties: {\n                  onContentLoad: {\n                    type: 'number'\n                  },\n                  onLoad: {\n                    type: 'number'\n                  }\n                },\n                required: [                  'onContentLoad',\n                  'onLoad'\n                ]\n              },\n              startedDateTime: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              }\n            },\n            required: [              'id',\n              'pageTimings',\n              'startedDateTime',\n              'title'\n            ]\n          }\n        },\n        version: {\n          type: 'string'\n        }\n      },\n      required: [        'creator',\n        'entries',\n        'pages',\n        'version'\n      ]\n    }\n  },\n  required: [    'log'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      scan_id: {
        type: 'string',
        description: 'Scan UUID.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'scan_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { scan_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.urlScanner.scans.har(scan_id, body)));
};

export default { metadata, tool, handler };
