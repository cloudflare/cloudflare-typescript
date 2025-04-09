// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.profiles.custom',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_profiles_dlp_zero_trust_custom',
  description: 'Updates a DLP custom profile.',
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
      description: {
        type: 'string',
        description: 'The description of the profile',
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
                  $ref: '#/properties/entries/items/anyOf/0/pattern',
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
          ],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { profile_id, ...body } = args;
  return client.zeroTrust.dlp.profiles.custom.update(profile_id, body);
};

export default { metadata, tool, handler };
