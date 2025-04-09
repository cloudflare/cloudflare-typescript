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
  name: 'create_profiles_dlp_zero_trust_custom',
  description: 'Creates a DLP custom profile.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
          },
          profiles: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
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
                name: {
                  type: 'string',
                },
                ai_context_enabled: {
                  type: 'boolean',
                },
                allowed_match_count: {
                  type: 'integer',
                  description:
                    'Related DLP policies will trigger when the match count exceeds the number set.',
                },
                confidence_threshold: {
                  type: 'string',
                },
                context_awareness: {
                  type: 'object',
                  description:
                    'Scan the context of predefined entries to only return matches surrounded by keywords.',
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
                          description:
                            'If the content type is a file, skip context analysis and return all matches.',
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
                    ],
                  },
                },
              },
              required: ['entries', 'name'],
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          account_id: {
            type: 'string',
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
                      $ref: '#/anyOf/0/properties/profiles/items/entries/items/anyOf/0/pattern',
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
            $ref: '#/anyOf/0/properties/profiles/items/context_awareness',
          },
          description: {
            type: 'string',
            description: 'The description of the profile',
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
              ],
            },
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.profiles.custom.create(body);
};

export default { metadata, tool, handler };
