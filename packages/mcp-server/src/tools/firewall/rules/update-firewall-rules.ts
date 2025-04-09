// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_firewall_rules',
  description: 'Updates an existing firewall rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      rule_id: {
        type: 'string',
        description: 'The unique identifier of the firewall rule.',
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
      filter: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'The unique identifier of the filter.',
          },
          description: {
            type: 'string',
            description: 'An informative summary of the filter.',
          },
          expression: {
            type: 'string',
            description:
              'The filter expression. For more information, refer to [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).',
          },
          paused: {
            type: 'boolean',
            description: 'When true, indicates that the filter is currently paused.',
          },
          ref: {
            type: 'string',
            description: 'A short reference tag. Allows you to select related filters.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.firewall.rules.update(rule_id, body);
};

export default { metadata, tool, handler };
