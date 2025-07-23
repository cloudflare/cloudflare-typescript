// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.predefined',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/profiles/predefined',
  operationId: 'dlp-profiles-create-predefined-profile',
};

export const tool: Tool = {
  name: 'create_profiles_dlp_zero_trust_predefined',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a DLP predefined profile. Only supports enabling/disabling entries.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
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
      ocr_enabled: {
        type: 'boolean',
      },
    },
    required: ['account_id', 'profile_id'],
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.profiles.predefined.create(body));
};

export default { metadata, tool, handler };
