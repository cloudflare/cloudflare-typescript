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
        $ref: '#/$defs/context_awareness',
      },
      ocr_enabled: {
        type: 'boolean',
      },
    },
    $defs: {
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
            $ref: '#/$defs/skip_configuration',
          },
        },
        required: ['enabled', 'skip'],
      },
      skip_configuration: {
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return client.zeroTrust.dlp.profiles.predefined.update(profile_id, body);
};

export default { metadata, tool, handler };
