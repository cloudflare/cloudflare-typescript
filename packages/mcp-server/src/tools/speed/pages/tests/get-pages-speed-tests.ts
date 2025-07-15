// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'speed.pages.tests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}',
  operationId: 'speed-get-test',
};

export const tool: Tool = {
  name: 'get_pages_speed_tests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the result of a specific test.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'boolean',\n      description: 'Whether the API call was successful.'\n    },\n    result: {\n      $ref: '#/$defs/test'\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    test: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'UUID.'\n        },\n        date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        desktopReport: {\n          $ref: '#/$defs/lighthouse_report'\n        },\n        mobileReport: {\n          $ref: '#/$defs/lighthouse_report'\n        },\n        region: {\n          $ref: '#/$defs/labeled_region'\n        },\n        scheduleFrequency: {\n          type: 'string',\n          description: 'The frequency of the test.',\n          enum: [            'DAILY',\n            'WEEKLY'\n          ]\n        },\n        url: {\n          type: 'string',\n          description: 'A URL.'\n        }\n      },\n      required: []\n    },\n    lighthouse_report: {\n      type: 'object',\n      description: 'The Lighthouse report.',\n      properties: {\n        cls: {\n          type: 'number',\n          description: 'Cumulative Layout Shift.'\n        },\n        deviceType: {\n          type: 'string',\n          description: 'The type of device.',\n          enum: [            'DESKTOP',\n            'MOBILE'\n          ]\n        },\n        error: {\n          type: 'object',\n          properties: {\n            code: {\n              type: 'string',\n              description: 'The error code of the Lighthouse result.',\n              enum: [                'NOT_REACHABLE',\n                'DNS_FAILURE',\n                'NOT_HTML',\n                'LIGHTHOUSE_TIMEOUT',\n                'UNKNOWN'\n              ]\n            },\n            detail: {\n              type: 'string',\n              description: 'Detailed error message.'\n            },\n            finalDisplayedUrl: {\n              type: 'string',\n              description: 'The final URL displayed to the user.'\n            }\n          },\n          required: []\n        },\n        fcp: {\n          type: 'number',\n          description: 'First Contentful Paint.'\n        },\n        jsonReportUrl: {\n          type: 'string',\n          description: 'The URL to the full Lighthouse JSON report.'\n        },\n        lcp: {\n          type: 'number',\n          description: 'Largest Contentful Paint.'\n        },\n        performanceScore: {\n          type: 'number',\n          description: 'The Lighthouse performance score.'\n        },\n        si: {\n          type: 'number',\n          description: 'Speed Index.'\n        },\n        state: {\n          type: 'string',\n          description: 'The state of the Lighthouse report.',\n          enum: [            'RUNNING',\n            'COMPLETE',\n            'FAILED'\n          ]\n        },\n        tbt: {\n          type: 'number',\n          description: 'Total Blocking Time.'\n        },\n        ttfb: {\n          type: 'number',\n          description: 'Time To First Byte.'\n        },\n        tti: {\n          type: 'number',\n          description: 'Time To Interactive.'\n        }\n      },\n      required: []\n    },\n    labeled_region: {\n      type: 'object',\n      description: 'A test region with a label.',\n      properties: {\n        label: {\n          type: 'string'\n        },\n        value: {\n          type: 'string',\n          description: 'A test region.',\n          enum: [            'asia-east1',\n            'asia-northeast1',\n            'asia-northeast2',\n            'asia-south1',\n            'asia-southeast1',\n            'australia-southeast1',\n            'europe-north1',\n            'europe-southwest1',\n            'europe-west1',\n            'europe-west2',\n            'europe-west3',\n            'europe-west4',\n            'europe-west8',\n            'europe-west9',\n            'me-west1',\n            'southamerica-east1',\n            'us-central1',\n            'us-east1',\n            'us-east4',\n            'us-south1',\n            'us-west1'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      url: {
        type: 'string',
        description: 'A URL.',
      },
      test_id: {
        type: 'string',
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
  const { test_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.speed.pages.tests.get(test_id, body)));
};

export default { metadata, tool, handler };
