// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.monitors',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_load_balancers_monitors',
  description: 'Apply changes to an existing monitor, overwriting the supplied properties.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { monitor_id, ...body } = args;
  return client.loadBalancers.monitors.edit(monitor_id, body);
};

export default { metadata, tool, handler };
