// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.custom',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/dlp/profiles/custom',
  operationId: 'dlp-profiles-create-custom-profiles',
};

export const tool: Tool = {
  name: 'create_profiles_dlp_zero_trust_custom',
  description: 'Creates a DLP custom profile.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
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
        description: 'Related DLP policies will trigger when the match count exceeds the number set.',
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
        items: {
          anyOf: [
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
            {
              type: 'object',
              properties: {
                enabled: {
                  type: 'boolean',
                },
                name: {
                  type: 'string',
                },
                words: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
              required: ['enabled', 'name', 'words'],
            },
          ],
        },
      },
      ocr_enabled: {
        type: 'boolean',
      },
      shared_entries: {
        type: 'array',
        description:
          'Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).',
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
                  enum: ['custom'],
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
    required: ['account_id', 'name'],
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.dlp.profiles.custom.create(body));
};

export default { metadata, tool, handler };
