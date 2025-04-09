// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rate_limits',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_rate_limits',
  description:
    'Creates a new rate limit for a zone. Refer to the object definition for a list of required attributes.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      action: {
        type: 'object',
        description:
          'The action to perform when the threshold of matched traffic within the configured period is exceeded.',
        properties: {
          mode: {
            type: 'string',
            description: 'The action to perform.',
            enum: ['simulate', 'ban', 'challenge', 'js_challenge', 'managed_challenge'],
          },
          response: {
            type: 'object',
            description:
              'A custom content type and reponse to return when the threshold is exceeded. The custom response configured in this object will override the custom error for the zone. This object is optional.\nNotes: If you omit this object, Cloudflare will use the default HTML error page. If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone challenge pages and you should not provide the "response" object.',
            properties: {
              body: {
                type: 'string',
                description:
                  'The response body to return. The value must conform to the configured content type.',
              },
              content_type: {
                type: 'string',
                description:
                  'The content type of the body. Must be one of the following: `text/plain`, `text/xml`, or `application/json`.',
              },
            },
            required: [],
          },
          timeout: {
            type: 'number',
            description:
              'The time in seconds during which Cloudflare will perform the mitigation action. Must be an integer value greater than or equal to the period.\nNotes: If "mode" is "challenge", "managed_challenge", or "js_challenge", Cloudflare will use the zone\'s Challenge Passage time and you should not provide this value.',
          },
        },
        required: [],
      },
      match: {
        type: 'object',
        description: 'Determines which traffic the rate limit counts towards the threshold.',
        properties: {
          headers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'The name of the response header to match.',
                },
                op: {
                  type: 'string',
                  description:
                    'The operator used when matching: `eq` means "equal" and `ne` means "not equal".',
                  enum: ['eq', 'ne'],
                },
                value: {
                  type: 'string',
                  description: 'The value of the response header, which must match exactly.',
                },
              },
              required: [],
            },
          },
          request: {
            type: 'object',
            properties: {
              methods: {
                type: 'array',
                description:
                  "The HTTP methods to match. You can specify a subset (for example, `['POST','PUT']`) or all methods (`['_ALL_']`). This field is optional when creating a rate limit.",
                items: {
                  type: 'string',
                  description: 'An HTTP method or `_ALL_` to indicate all methods.',
                  enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', '_ALL_'],
                },
              },
              schemes: {
                type: 'array',
                description:
                  "The HTTP schemes to match. You can specify one scheme (`['HTTPS']`), both schemes (`['HTTP','HTTPS']`), or all schemes (`['_ALL_']`). This field is optional.",
                items: {
                  type: 'string',
                  description: 'An HTTP scheme or `_ALL_` to indicate all schemes.',
                },
              },
              url: {
                type: 'string',
                description:
                  'The URL pattern to match, composed of a host and a path such as `example.org/path*`. Normalization is applied before the pattern is matched. `*` wildcards are expanded to match applicable traffic. Query strings are not matched. Set the value to `*` to match all traffic to your zone.',
              },
            },
            required: [],
          },
          response: {
            type: 'object',
            properties: {
              origin_traffic: {
                type: 'boolean',
                description:
                  'When true, only the uncached traffic served from your origin servers will count towards rate limiting. In this case, any cached traffic served by Cloudflare will not count towards rate limiting. This field is optional.\nNotes: This field is deprecated. Instead, use response headers and set "origin_traffic" to "false" to avoid legacy behaviour interacting with the "response_headers" property.',
              },
            },
            required: [],
          },
        },
        required: [],
      },
      period: {
        type: 'number',
        description:
          'The time in seconds (an integer value) to count matching traffic. If the count exceeds the configured threshold within this period, Cloudflare will perform the configured action.',
      },
      threshold: {
        type: 'number',
        description:
          'The threshold that will trigger the configured mitigation action. Configure this value along with the `period` property to establish a threshold per period.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.rateLimits.create(body);
};

export default { metadata, tool, handler };
