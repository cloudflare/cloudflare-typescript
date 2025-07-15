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
  httpPath: '/accounts/{account_id}/urlscanner/v2/search',
  operationId: 'urlscanner-search-scans-v2',
};

export const tool: Tool = {
  name: 'list_url_scanner_scans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUse a subset of ElasticSearch Query syntax to filter scans. Some example queries:<br/> <br/>- 'path:\"/bundles/jquery.js\"': Searches for scans who requested resources with the given path.<br/>- 'page.asn:AS24940 AND hash:xxx': Websites hosted in AS24940 where a resource with the given hash was downloaded.<br/>- 'page.domain:microsoft* AND verdicts.malicious:true AND NOT page.domain:microsoft.com': malicious scans whose hostname starts with \"microsoft\".<br/>- 'apikey:me AND date:[2025-01 TO 2025-02]': my scans from 2025 January to 2025 February.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    results: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          _id: {\n            type: 'string'\n          },\n          page: {\n            type: 'object',\n            properties: {\n              asn: {\n                type: 'string'\n              },\n              country: {\n                type: 'string'\n              },\n              ip: {\n                type: 'string'\n              },\n              url: {\n                type: 'string'\n              }\n            },\n            required: [              'asn',\n              'country',\n              'ip',\n              'url'\n            ]\n          },\n          result: {\n            type: 'string'\n          },\n          stats: {\n            type: 'object',\n            properties: {\n              dataLength: {\n                type: 'number'\n              },\n              requests: {\n                type: 'number'\n              },\n              uniqCountries: {\n                type: 'number'\n              },\n              uniqIPs: {\n                type: 'number'\n              }\n            },\n            required: [              'dataLength',\n              'requests',\n              'uniqCountries',\n              'uniqIPs'\n            ]\n          },\n          task: {\n            type: 'object',\n            properties: {\n              time: {\n                type: 'string'\n              },\n              url: {\n                type: 'string'\n              },\n              uuid: {\n                type: 'string'\n              },\n              visibility: {\n                type: 'string'\n              }\n            },\n            required: [              'time',\n              'url',\n              'uuid',\n              'visibility'\n            ]\n          },\n          verdicts: {\n            type: 'object',\n            properties: {\n              malicious: {\n                type: 'boolean'\n              }\n            },\n            required: [              'malicious'\n            ]\n          }\n        },\n        required: [          '_id',\n          'page',\n          'result',\n          'stats',\n          'task',\n          'verdicts'\n        ]\n      }\n    }\n  },\n  required: [    'results'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      q: {
        type: 'string',
        description: 'Filter scans',
      },
      size: {
        type: 'integer',
        description: 'Limit the number of objects in the response.',
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
  return asTextContentResult(await maybeFilter(args, await client.urlScanner.scans.list(body)));
};

export default { metadata, tool, handler };
