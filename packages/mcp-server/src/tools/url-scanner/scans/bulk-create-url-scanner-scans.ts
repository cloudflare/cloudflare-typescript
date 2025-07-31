// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'url_scanner.scans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/urlscanner/v2/bulk',
  operationId: 'urlscanner-create-scan-bulk-v2',
};

export const tool: Tool = {
  name: 'bulk_create_url_scanner_scans',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSubmit URLs to scan. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/ and take into account scans submitted in bulk have lower priority and may take longer to finish.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      api: {\n        type: 'string',\n        description: 'URL to api report.'\n      },\n      result: {\n        type: 'string',\n        description: 'URL to report.'\n      },\n      url: {\n        type: 'string',\n        description: 'Submitted URL'\n      },\n      uuid: {\n        type: 'string',\n        description: 'Scan ID.'\n      },\n      visibility: {\n        type: 'string',\n        description: 'Submitted visibility status.',\n        enum: [          'public',\n          'unlisted'\n        ]\n      },\n      options: {\n        type: 'object',\n        properties: {\n          useragent: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    required: [      'api',\n      'result',\n      'url',\n      'uuid',\n      'visibility'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      body: {
        type: 'array',
        description: 'List of urls to scan (up to a 100).',
        items: {
          type: 'object',
          properties: {
            url: {
              type: 'string',
            },
            customagent: {
              type: 'string',
            },
            customHeaders: {
              type: 'object',
              description: 'Set custom headers.',
            },
            referer: {
              type: 'string',
            },
            screenshotsResolutions: {
              type: 'array',
              description: 'Take multiple screenshots targeting different device types.',
              items: {
                type: 'string',
                description: 'Device resolutions.',
                enum: ['desktop', 'mobile', 'tablet'],
              },
            },
            visibility: {
              type: 'string',
              description:
                "The option `Public` means it will be included in listings like recent scans and search results. `Unlisted` means it will not be included in the aforementioned listings, users will need to have the scan's ID to access it. A a scan will be automatically marked as unlisted if it fails, if it contains potential PII or other sensitive material.",
              enum: ['Public', 'Unlisted'],
            },
          },
          required: ['url'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.urlScanner.scans.bulkCreate(body)));
};

export default { metadata, tool, handler };
