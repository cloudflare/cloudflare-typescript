// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/dlp/profiles/custom/{profile_id}',
  operationId: 'dlp-profiles-update-custom-profile',
};

export const tool: Tool = {
  name: 'update_profiles_dlp_zero_trust_custom',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a DLP custom profile.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      profile_id: {
        type: 'string',
      },
      name: {
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
      description: {
        type: 'string',
        description: 'The description of the profile.',
      },
      entries: {
        type: 'array',
        description:
          'Custom entries from this profile.\nIf this field is omitted, entries owned by this profile will not be changed.',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                entry_id: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                pattern: {
                  $ref: '#/$defs/pattern',
                },
              },
              required: ['enabled', 'entry_id', 'name', 'pattern'],
            },
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                name: {
                  type: 'string',
                },
                pattern: {
                  $ref: '#/$defs/pattern',
                },
              },
              required: ['enabled', 'name', 'pattern'],
            },
          ],
        },
      },
      ocr_enabled: {
        type: 'boolean',
      },
      shared_entries: {
        type: 'array',
        description: 'Other entries, e.g. predefined or integration.',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                entry_id: {
                  type: 'string',
                },
                entry_type: {
                  type: 'string',
                  enum: ['predefined'],
                },
              },
              required: ['enabled', 'entry_id', 'entry_type'],
            },
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                entry_id: {
                  type: 'string',
                },
                entry_type: {
                  type: 'string',
                  enum: ['integration'],
                },
              },
              required: ['enabled', 'entry_id', 'entry_type'],
            },
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                entry_id: {
                  type: 'string',
                },
                entry_type: {
                  type: 'string',
                  enum: ['exact_data'],
                },
              },
              required: ['enabled', 'entry_id', 'entry_type'],
            },
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                entry_id: {
                  type: 'string',
                },
                entry_type: {
                  type: 'string',
                  enum: ['document_fingerprint'],
                },
              },
              required: ['enabled', 'entry_id', 'entry_type'],
            },
          ],
        },
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
      pattern: {
        type: 'object',
        properties: {
          regex: {
            type: 'string',
          },
          validation: {
            type: 'string',
            enum: ['luhn'],
          },
        },
        required: ['regex'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { profile_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.profiles.custom.update(profile_id, body));
};

export default { metadata, tool, handler };
