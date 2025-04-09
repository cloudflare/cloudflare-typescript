// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'request_tracers.traces',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_request_tracers_traces',
  description: 'Request Trace',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      method: {
        type: 'string',
        description: 'HTTP Method of tracing request',
      },
      url: {
        type: 'string',
        description: 'URL to which perform tracing request',
      },
      body: {
        type: 'object',
        properties: {
          base64: {
            type: 'string',
            description: 'Base64 encoded request body',
          },
          json: {
            type: 'object',
            description: 'Arbitrary json as request body',
          },
          plain_text: {
            type: 'string',
            description: 'Request body as plain text',
          },
        },
        required: [],
      },
      context: {
        type: 'object',
        description: 'Additional request parameters',
        properties: {
          bot_score: {
            type: 'integer',
            description: 'Bot score used for evaluating tracing request processing',
          },
          geoloc: {
            type: 'object',
            description: 'Geodata for tracing request',
            properties: {
              city: {
                type: 'string',
              },
              continent: {
                type: 'string',
              },
              is_eu_country: {
                type: 'boolean',
              },
              iso_code: {
                type: 'string',
              },
              latitude: {
                type: 'number',
              },
              longitude: {
                type: 'number',
              },
              postal_code: {
                type: 'string',
              },
              region_code: {
                type: 'string',
              },
              subdivision_2_iso_code: {
                type: 'string',
              },
              timezone: {
                type: 'string',
              },
            },
            required: [],
          },
          skip_challenge: {
            type: 'boolean',
            description: 'Whether to skip any challenges for tracing request (e.g.: captcha)',
          },
          threat_score: {
            type: 'integer',
            description: 'Threat score used for evaluating tracing request processing',
          },
        },
        required: [],
      },
      cookies: {
        type: 'object',
        description: 'Cookies added to tracing request',
      },
      headers: {
        type: 'object',
        description: 'Headers added to tracing request',
      },
      protocol: {
        type: 'string',
        description: 'HTTP Protocol of tracing request',
      },
      skip_response: {
        type: 'boolean',
        description: 'Skip sending the request to the Origin server after all rules evaluation',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.requestTracers.traces.create(body);
};

export default { metadata, tool, handler };
