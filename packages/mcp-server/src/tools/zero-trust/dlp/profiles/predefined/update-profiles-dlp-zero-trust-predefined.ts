// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.predefined',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_profiles_dlp_zero_trust_predefined',
  description: 'Updates a DLP predefined profile. Only supports enabling/disabling entries.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
      entries: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            enabled: {
              type: 'boolean',
            },
          },
          required: ['id', 'enabled'],
        },
      },
      ai_context_enabled: {
        type: 'boolean',
      },
      allowed_match_count: {
        type: 'integer',
      },
      confidence_threshold: {
        type: 'string',
      },
      context_awareness: {
        type: 'object',
        description: 'Scan the context of predefined entries to only return matches surrounded by keywords.',
        properties: {
          enabled: {
            type: 'boolean',
            description:
              'If true, scan the context of predefined entries to only return matches surrounded by keywords.',
          },
          skip: {
            type: 'object',
            description: 'Content types to exclude from context analysis and return all matches.',
            properties: {
              files: {
                type: 'boolean',
                description: 'If the content type is a file, skip context analysis and return all matches.',
              },
            },
            required: ['files'],
          },
        },
        required: ['enabled', 'skip'],
      },
      ocr_enabled: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { profile_id, ...body } = args;
  return client.zeroTrust.dlp.profiles.predefined.update(profile_id, body);
};

export default { metadata, tool, handler };
