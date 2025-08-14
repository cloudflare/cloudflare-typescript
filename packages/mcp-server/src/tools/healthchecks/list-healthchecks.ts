// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'healthchecks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/healthchecks',
  operationId: 'health-checks-list-health-checks',
};

export const tool: Tool = {
  name: 'list_healthchecks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList configured health checks.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/healthcheck'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    healthcheck: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier'\n        },\n        address: {\n          type: 'string',\n          description: 'The hostname or IP address of the origin server to run health checks on.'\n        },\n        check_regions: {\n          type: 'array',\n          description: 'A list of regions from which to run health checks. Null means Cloudflare will pick a default region.',\n          items: {\n            $ref: '#/$defs/check_region'\n          }\n        },\n        consecutive_fails: {\n          type: 'integer',\n          description: 'The number of consecutive fails required from a health check before changing the health to unhealthy.'\n        },\n        consecutive_successes: {\n          type: 'integer',\n          description: 'The number of consecutive successes required from a health check before changing the health to healthy.'\n        },\n        created_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'A human-readable description of the health check.'\n        },\n        failure_reason: {\n          type: 'string',\n          description: 'The current failure reason if status is unhealthy.'\n        },\n        http_config: {\n          $ref: '#/$defs/http_configuration'\n        },\n        interval: {\n          type: 'integer',\n          description: 'The interval between each health check. Shorter intervals may give quicker notifications if the origin status changes, but will increase load on the origin as we check from multiple locations.'\n        },\n        modified_on: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'A short name to identify the health check. Only alphanumeric characters, hyphens and underscores are allowed.'\n        },\n        retries: {\n          type: 'integer',\n          description: 'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the origin server according to the health check.',\n          enum: [            'unknown',\n            'healthy',\n            'unhealthy',\n            'suspended'\n          ]\n        },\n        suspended: {\n          type: 'boolean',\n          description: 'If suspended, no health checks are sent to the origin.'\n        },\n        tcp_config: {\n          $ref: '#/$defs/tcp_configuration'\n        },\n        timeout: {\n          type: 'integer',\n          description: 'The timeout (in seconds) before marking the health check as failed.'\n        },\n        type: {\n          type: 'string',\n          description: 'The protocol to use for the health check. Currently supported protocols are \\'HTTP\\', \\'HTTPS\\' and \\'TCP\\'.'\n        }\n      }\n    },\n    check_region: {\n      type: 'string',\n      description: 'WNAM: Western North America, ENAM: Eastern North America, WEU: Western Europe, EEU: Eastern Europe, NSAM: Northern South America, SSAM: Southern South America, OC: Oceania, ME: Middle East, NAF: North Africa, SAF: South Africa, IN: India, SEAS: South East Asia, NEAS: North East Asia, ALL_REGIONS: all regions (BUSINESS and ENTERPRISE customers only).',\n      enum: [        'WNAM',\n        'ENAM',\n        'WEU',\n        'EEU',\n        'NSAM',\n        'SSAM',\n        'OC',\n        'ME',\n        'NAF',\n        'SAF',\n        'IN',\n        'SEAS',\n        'NEAS',\n        'ALL_REGIONS'\n      ]\n    },\n    http_configuration: {\n      type: 'object',\n      description: 'Parameters specific to an HTTP or HTTPS health check.',\n      properties: {\n        allow_insecure: {\n          type: 'boolean',\n          description: 'Do not validate the certificate when the health check uses HTTPS.'\n        },\n        expected_body: {\n          type: 'string',\n          description: 'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy.'\n        },\n        expected_codes: {\n          type: 'array',\n          description: 'The expected HTTP response codes (e.g. \"200\") or code ranges (e.g. \"2xx\" for all codes starting with 2) of the health check.',\n          items: {\n            type: 'string'\n          }\n        },\n        follow_redirects: {\n          type: 'boolean',\n          description: 'Follow redirects if the origin returns a 3xx status code.'\n        },\n        header: {\n          type: 'object',\n          description: 'The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden.',\n          additionalProperties: true\n        },\n        method: {\n          type: 'string',\n          description: 'The HTTP method to use for the health check.',\n          enum: [            'GET',\n            'HEAD'\n          ]\n        },\n        path: {\n          type: 'string',\n          description: 'The endpoint path to health check against.'\n        },\n        port: {\n          type: 'integer',\n          description: 'Port number to connect to for the health check. Defaults to 80 if type is HTTP or 443 if type is HTTPS.'\n        }\n      }\n    },\n    tcp_configuration: {\n      type: 'object',\n      description: 'Parameters specific to TCP health check.',\n      properties: {\n        method: {\n          type: 'string',\n          description: 'The TCP connection method to use for the health check.',\n          enum: [            'connection_established'\n          ]\n        },\n        port: {\n          type: 'integer',\n          description: 'Port number to connect to for the health check. Defaults to 80.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page. Must be a multiple of 5.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['zone_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.healthchecks.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
