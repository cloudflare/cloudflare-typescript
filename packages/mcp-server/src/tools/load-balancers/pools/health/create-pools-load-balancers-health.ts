// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools.health',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/load_balancers/pools/{pool_id}/preview',
  operationId: 'account-load-balancer-pools-preview-pool',
};

export const tool: Tool = {
  name: 'create_pools_load_balancers_health',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPreview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        pools: {\n          type: 'object',\n          description: 'Monitored pool IDs mapped to their respective names.'\n        },\n        preview_id: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      pool_id: {
        type: 'string',
      },
      allow_insecure: {
        type: 'boolean',
        description:
          'Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.',
      },
      consecutive_down: {
        type: 'integer',
        description:
          'To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.',
      },
      consecutive_up: {
        type: 'integer',
        description:
          'To be marked healthy the monitored origin must pass this healthcheck N consecutive times.',
      },
      description: {
        type: 'string',
        description: 'Object description.',
      },
      expected_body: {
        type: 'string',
        description:
          'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.',
      },
      expected_codes: {
        type: 'string',
        description:
          'The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.',
      },
      follow_redirects: {
        type: 'boolean',
        description:
          'Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.',
      },
      header: {
        type: 'object',
        description:
          'The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.',
      },
      interval: {
        type: 'integer',
        description:
          'The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.',
      },
      method: {
        type: 'string',
        description:
          "The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS based checks and 'connection_established' for TCP based health checks.",
      },
      path: {
        type: 'string',
        description:
          'The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.',
      },
      port: {
        type: 'integer',
        description:
          'The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).',
      },
      probe_zone: {
        type: 'string',
        description:
          'Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.',
      },
      retries: {
        type: 'integer',
        description:
          'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.',
      },
      timeout: {
        type: 'integer',
        description: 'The timeout (in seconds) before marking the health check as failed.',
      },
      type: {
        type: 'string',
        description:
          "The protocol to use for the health check. Currently supported protocols are 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.",
        enum: ['http', 'https', 'tcp', 'udp_icmp', 'icmp_ping', 'smtp'],
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
  const { pool_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.loadBalancers.pools.health.create(pool_id, body)),
  );
};

export default { metadata, tool, handler };
