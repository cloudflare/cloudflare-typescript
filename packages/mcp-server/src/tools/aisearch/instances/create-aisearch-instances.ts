// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_search.instances',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/ai-search/instances',
  operationId: 'ai-search-create-instances',
};

export const tool: Tool = {
  name: 'create_aisearch_instances',
  description: 'Create new instances.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'Use your AI Search ID.',
      },
      source: {
        type: 'string',
      },
      token_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['r2', 'web-crawler'],
      },
      ai_gateway_id: {
        type: 'string',
      },
      ai_search_model: {
        type: 'string',
        enum: [
          '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          '@cf/meta/llama-3.1-8b-instruct-fast',
          '@cf/meta/llama-3.1-8b-instruct-fp8',
          '@cf/meta/llama-4-scout-17b-16e-instruct',
          '@cf/qwen/qwen3-30b-a3b-fp8',
          '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
          '@cf/moonshotai/kimi-k2-instruct',
          'anthropic/claude-3-7-sonnet',
          'anthropic/claude-sonnet-4',
          'anthropic/claude-opus-4',
          'anthropic/claude-3-5-haiku',
          'cerebras/qwen-3-235b-a22b-instruct',
          'cerebras/qwen-3-235b-a22b-thinking',
          'cerebras/llama-3.3-70b',
          'cerebras/llama-4-maverick-17b-128e-instruct',
          'cerebras/llama-4-scout-17b-16e-instruct',
          'cerebras/gpt-oss-120b',
          'google-ai-studio/gemini-2.5-flash',
          'google-ai-studio/gemini-2.5-pro',
          'grok/grok-4',
          'groq/llama-3.3-70b-versatile',
          'groq/llama-3.1-8b-instant',
          'openai/gpt-5',
          'openai/gpt-5-mini',
          'openai/gpt-5-nano',
          '',
        ],
      },
      chunk: {
        type: 'boolean',
      },
      chunk_overlap: {
        type: 'integer',
      },
      chunk_size: {
        type: 'integer',
      },
      embedding_model: {
        type: 'string',
        enum: [
          '@cf/baai/bge-m3',
          '@cf/baai/bge-large-en-v1.5',
          '@cf/google/embeddinggemma-300m',
          '@cf/qwen/qwen3-embedding-0.6b',
          'google-ai-studio/gemini-embedding-001',
          'openai/text-embedding-3-small',
          'openai/text-embedding-3-large',
          '',
        ],
      },
      max_num_results: {
        type: 'integer',
      },
      metadata: {
        type: 'object',
        properties: {
          created_from_aisearch_wizard: {
            type: 'boolean',
          },
          worker_domain: {
            type: 'string',
          },
        },
      },
      public_endpoint_params: {
        type: 'object',
        properties: {
          authorized_hosts: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          enabled: {
            type: 'boolean',
          },
          rate_limit: {
            type: 'object',
            properties: {
              period_ms: {
                type: 'integer',
              },
              requests: {
                type: 'integer',
              },
              technique: {
                type: 'string',
                enum: ['fixed', 'sliding'],
              },
            },
          },
        },
      },
      reranking: {
        type: 'boolean',
      },
      reranking_model: {
        type: 'string',
        enum: ['@cf/baai/bge-reranker-base', ''],
      },
      rewrite_model: {
        type: 'string',
        enum: [
          '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
          '@cf/meta/llama-3.1-8b-instruct-fast',
          '@cf/meta/llama-3.1-8b-instruct-fp8',
          '@cf/meta/llama-4-scout-17b-16e-instruct',
          '@cf/qwen/qwen3-30b-a3b-fp8',
          '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
          '@cf/moonshotai/kimi-k2-instruct',
          'anthropic/claude-3-7-sonnet',
          'anthropic/claude-sonnet-4',
          'anthropic/claude-opus-4',
          'anthropic/claude-3-5-haiku',
          'cerebras/qwen-3-235b-a22b-instruct',
          'cerebras/qwen-3-235b-a22b-thinking',
          'cerebras/llama-3.3-70b',
          'cerebras/llama-4-maverick-17b-128e-instruct',
          'cerebras/llama-4-scout-17b-16e-instruct',
          'cerebras/gpt-oss-120b',
          'google-ai-studio/gemini-2.5-flash',
          'google-ai-studio/gemini-2.5-pro',
          'grok/grok-4',
          'groq/llama-3.3-70b-versatile',
          'groq/llama-3.1-8b-instant',
          'openai/gpt-5',
          'openai/gpt-5-mini',
          'openai/gpt-5-nano',
          '',
        ],
      },
      rewrite_query: {
        type: 'boolean',
      },
      score_threshold: {
        type: 'number',
      },
      source_params: {
        type: 'object',
        properties: {
          exclude_items: {
            type: 'array',
            description:
              'List of path patterns to exclude. Supports wildcards (e.g., */admin/*, /private/**, *\\private\\*)',
            items: {
              type: 'string',
            },
          },
          include_items: {
            type: 'array',
            description:
              'List of path patterns to include. Supports wildcards (e.g., */blog/*.html, /docs/**, *\\blog\\*.html)',
            items: {
              type: 'string',
            },
          },
          prefix: {
            type: 'string',
          },
          r2_jurisdiction: {
            type: 'string',
          },
          web_crawler: {
            type: 'object',
            properties: {
              parse_options: {
                type: 'object',
                properties: {
                  include_headers: {
                    type: 'object',
                    additionalProperties: true,
                  },
                  include_images: {
                    type: 'boolean',
                  },
                  use_browser_rendering: {
                    type: 'boolean',
                  },
                },
              },
              parse_type: {
                type: 'string',
                enum: ['sitemap', 'feed-rss'],
              },
              store_options: {
                type: 'object',
                properties: {
                  storage_id: {
                    type: 'string',
                  },
                  r2_jurisdiction: {
                    type: 'string',
                  },
                  storage_type: {
                    $ref: '#/$defs/provider',
                  },
                },
                required: ['storage_id'],
              },
            },
          },
        },
      },
    },
    required: ['account_id', 'id', 'source', 'token_id', 'type'],
    $defs: {
      provider: {
        type: 'string',
        enum: ['r2'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.aiSearch.instances.create(body));
  } catch (error) {
    if (error instanceof Cloudflare.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
