// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/load_balancers/monitors/{monitor_id}',
  operationId: 'account-load-balancer-monitors-update-monitor',
};

export const tool: Tool = {
  name: 'update_load_balancers_monitors',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nModify a configured monitor.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/monitor'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    monitor: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        allow_insecure: {\n          type: 'boolean',\n          description: 'Do not validate the certificate when monitor use HTTPS. This parameter is currently only valid for HTTP and HTTPS monitors.'\n        },\n        consecutive_down: {\n          type: 'integer',\n          description: 'To be marked unhealthy the monitored origin must fail this healthcheck N consecutive times.'\n        },\n        consecutive_up: {\n          type: 'integer',\n          description: 'To be marked healthy the monitored origin must pass this healthcheck N consecutive times.'\n        },\n        created_on: {\n          type: 'string'\n        },\n        description: {\n          type: 'string',\n          description: 'Object description.'\n        },\n        expected_body: {\n          type: 'string',\n          description: 'A case-insensitive sub-string to look for in the response body. If this string is not found, the origin will be marked as unhealthy. This parameter is only valid for HTTP and HTTPS monitors.'\n        },\n        expected_codes: {\n          type: 'string',\n          description: 'The expected HTTP response code or code range of the health check. This parameter is only valid for HTTP and HTTPS monitors.'\n        },\n        follow_redirects: {\n          type: 'boolean',\n          description: 'Follow redirects if returned by the origin. This parameter is only valid for HTTP and HTTPS monitors.'\n        },\n        header: {\n          type: 'object',\n          description: 'The HTTP request headers to send in the health check. It is recommended you set a Host header by default. The User-Agent header cannot be overridden. This parameter is only valid for HTTP and HTTPS monitors.'\n        },\n        interval: {\n          type: 'integer',\n          description: 'The interval between each health check. Shorter intervals may improve failover time, but will increase load on the origins as we check from multiple locations.'\n        },\n        method: {\n          type: 'string',\n          description: 'The method to use for the health check. This defaults to \\'GET\\' for HTTP/HTTPS based checks and \\'connection_established\\' for TCP based health checks.'\n        },\n        modified_on: {\n          type: 'string'\n        },\n        path: {\n          type: 'string',\n          description: 'The endpoint path you want to conduct a health check against. This parameter is only valid for HTTP and HTTPS monitors.'\n        },\n        port: {\n          type: 'integer',\n          description: 'The port number to connect to for the health check. Required for TCP, UDP, and SMTP checks. HTTP and HTTPS checks should only define the port when using a non-standard port (HTTP: default 80, HTTPS: default 443).'\n        },\n        probe_zone: {\n          type: 'string',\n          description: 'Assign this monitor to emulate the specified zone while probing. This parameter is only valid for HTTP and HTTPS monitors.'\n        },\n        retries: {\n          type: 'integer',\n          description: 'The number of retries to attempt in case of a timeout before marking the origin as unhealthy. Retries are attempted immediately.'\n        },\n        timeout: {\n          type: 'integer',\n          description: 'The timeout (in seconds) before marking the health check as failed.'\n        },\n        type: {\n          type: 'string',\n          description: 'The protocol to use for the health check. Currently supported protocols are \\'HTTP\\',\\'HTTPS\\', \\'TCP\\', \\'ICMP-PING\\', \\'UDP-ICMP\\', and \\'SMTP\\'.',\n          enum: [            'http',\n            'https',\n            'tcp',\n            'udp_icmp',\n            'icmp_ping',\n            'smtp'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      monitor_id: {
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
    required: ['account_id', 'monitor_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { monitor_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.loadBalancers.monitors.update(monitor_id, body)),
  );
};

export default { metadata, tool, handler };
