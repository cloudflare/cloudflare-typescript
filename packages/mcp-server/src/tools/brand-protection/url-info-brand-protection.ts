// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'brand_protection',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/brand-protection/url-info',
  operationId: 'phishing-url-information-get-results-for-a-url-scan',
};

export const tool: Tool = {
  name: 'url_info_brand_protection',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets phishing details about a URL.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      $ref: '#/$defs/info'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    info: {\n      type: 'object',\n      properties: {\n        categorizations: {\n          type: 'array',\n          description: 'List of categorizations applied to this submission.',\n          items: {\n            type: 'object',\n            properties: {\n              category: {\n                type: 'string',\n                description: 'Name of the category applied.'\n              },\n              verification_status: {\n                type: 'string',\n                description: 'Result of human review for this categorization.'\n              }\n            }\n          }\n        },\n        model_results: {\n          type: 'array',\n          description: 'List of model results for completed scans.',\n          items: {\n            $ref: '#/$defs/url_info_model_results'\n          }\n        },\n        rule_matches: {\n          type: 'array',\n          description: 'List of signatures that matched against site content found when crawling the URL.',\n          items: {\n            $ref: '#/$defs/rule_match'\n          }\n        },\n        scan_status: {\n          $ref: '#/$defs/scan_status'\n        },\n        screenshot_download_signature: {\n          type: 'string',\n          description: 'For internal use.'\n        },\n        screenshot_path: {\n          type: 'string',\n          description: 'For internal use.'\n        },\n        url: {\n          type: 'string',\n          description: 'URL that was submitted.'\n        }\n      }\n    },\n    url_info_model_results: {\n      type: 'object',\n      properties: {\n        model_name: {\n          type: 'string',\n          description: 'Name of the model.'\n        },\n        model_score: {\n          type: 'number',\n          description: 'This is the score that is outputted by the model for this submission.'\n        }\n      }\n    },\n    rule_match: {\n      type: 'object',\n      properties: {\n        banning: {\n          type: 'boolean',\n          description: 'For internal use.'\n        },\n        blocking: {\n          type: 'boolean',\n          description: 'For internal use.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the signature that matched.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the signature that matched.'\n        }\n      }\n    },\n    scan_status: {\n      type: 'object',\n      description: 'Status of the most recent scan found.',\n      properties: {\n        last_processed: {\n          type: 'string',\n          description: 'Timestamp of when the submission was processed.'\n        },\n        scan_complete: {\n          type: 'boolean',\n          description: 'For internal use.'\n        },\n        status_code: {\n          type: 'integer',\n          description: 'Status code that the crawler received when loading the submitted URL.'\n        },\n        submission_id: {\n          type: 'integer',\n          description: 'ID of the most recent submission.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'array',
        description: 'Submission URL(s) to filter submission results by.',
        items: {
          type: 'string',
        },
      },
      url_id: {
        type: 'array',
        description: 'Submission ID(s) to filter submission results by.',
        items: {
          type: 'integer',
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.brandProtection.urlInfo(body)));
};

export default { metadata, tool, handler };
