// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ItemsAPI from './items';
import {
  ItemGetParams,
  ItemGetResponse,
  ItemListParams,
  ItemListResponse,
  ItemListResponsesV4PagePaginationArray,
  Items,
} from './items';
import * as JobsAPI from './jobs';
import {
  JobCreateParams,
  JobCreateResponse,
  JobGetParams,
  JobGetResponse,
  JobListParams,
  JobListResponse,
  JobListResponsesV4PagePaginationArray,
  JobLogsParams,
  JobLogsResponse,
  Jobs,
} from './jobs';
import * as SippyAPI from '../../r2/buckets/sippy';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Instances extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);

  /**
   * Create new instances.
   *
   * @example
   * ```ts
   * const instance = await client.aiSearch.instances.create({
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   id: 'my-ai-search',
   *   source: 'source',
   *   type: 'r2',
   * });
   * ```
   */
  create(params: InstanceCreateParams, options?: RequestOptions): APIPromise<InstanceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-search/instances`, {
        body,
        ...options,
      }) as APIPromise<{ result: InstanceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update instances.
   *
   * @example
   * ```ts
   * const instance = await client.aiSearch.instances.update(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  update(
    id: string,
    params: InstanceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InstanceUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/ai-search/instances/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: InstanceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List instances.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const instanceListResponse of client.aiSearch.instances.list(
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: InstanceListParams,
    options?: RequestOptions,
  ): PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-search/instances`,
      V4PagePaginationArray<InstanceListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete instances.
   *
   * @example
   * ```ts
   * const instance = await client.aiSearch.instances.delete(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  delete(
    id: string,
    params: InstanceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<InstanceDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/ai-search/instances/${id}`, options) as APIPromise<{
        result: InstanceDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Chat Completions
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.instances.chatCompletions(
   *     'my-ai-search',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       messages: [{ content: 'content', role: 'system' }],
   *     },
   *   );
   * ```
   */
  chatCompletions(
    id: string,
    params: InstanceChatCompletionsParams,
    options?: RequestOptions,
  ): APIPromise<InstanceChatCompletionsResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/ai-search/instances/${id}/chat/completions`, {
      body,
      ...options,
    });
  }

  /**
   * Read instances.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.instances.read(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  read(id: string, params: InstanceReadParams, options?: RequestOptions): APIPromise<InstanceReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai-search/instances/${id}`, options) as APIPromise<{
        result: InstanceReadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Search
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.instances.search(
   *   'my-ai-search',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     messages: [{ content: 'content', role: 'system' }],
   *   },
   * );
   * ```
   */
  search(
    id: string,
    params: InstanceSearchParams,
    options?: RequestOptions,
  ): APIPromise<InstanceSearchResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-search/instances/${id}/search`, {
        body,
        ...options,
      }) as APIPromise<{ result: InstanceSearchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Stats
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.instances.stats(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  stats(
    id: string,
    params: InstanceStatsParams,
    options?: RequestOptions,
  ): APIPromise<InstanceStatsResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai-search/instances/${id}/stats`, options) as APIPromise<{
        result: InstanceStatsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type InstanceListResponsesV4PagePaginationArray = V4PagePaginationArray<InstanceListResponse>;

export interface InstanceCreateResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  created_at: string;

  modified_at: string;

  source: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string | null;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  cache?: boolean;

  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string | null;

  custom_metadata?: Array<InstanceCreateResponse.CustomMetadata>;

  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  hybrid_search_enabled?: boolean;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceCreateResponse.Metadata;

  modified_by?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceCreateResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  rewrite_query?: boolean;

  score_threshold?: number;

  source_params?: InstanceCreateResponse.SourceParams;

  status?: string;

  token_id?: string;
}

export namespace InstanceCreateResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.Provider;
      }
    }
  }
}

export interface InstanceUpdateResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  created_at: string;

  modified_at: string;

  source: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string | null;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  cache?: boolean;

  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string | null;

  custom_metadata?: Array<InstanceUpdateResponse.CustomMetadata>;

  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  hybrid_search_enabled?: boolean;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceUpdateResponse.Metadata;

  modified_by?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceUpdateResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  rewrite_query?: boolean;

  score_threshold?: number;

  source_params?: InstanceUpdateResponse.SourceParams;

  status?: string;

  token_id?: string;
}

export namespace InstanceUpdateResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.Provider;
      }
    }
  }
}

export interface InstanceListResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  created_at: string;

  modified_at: string;

  source: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string | null;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  cache?: boolean;

  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string | null;

  custom_metadata?: Array<InstanceListResponse.CustomMetadata>;

  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  hybrid_search_enabled?: boolean;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceListResponse.Metadata;

  modified_by?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceListResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  rewrite_query?: boolean;

  score_threshold?: number;

  source_params?: InstanceListResponse.SourceParams;

  status?: string;

  token_id?: string;
}

export namespace InstanceListResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.Provider;
      }
    }
  }
}

export interface InstanceDeleteResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  created_at: string;

  modified_at: string;

  source: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string | null;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  cache?: boolean;

  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string | null;

  custom_metadata?: Array<InstanceDeleteResponse.CustomMetadata>;

  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  hybrid_search_enabled?: boolean;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceDeleteResponse.Metadata;

  modified_by?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceDeleteResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  rewrite_query?: boolean;

  score_threshold?: number;

  source_params?: InstanceDeleteResponse.SourceParams;

  status?: string;

  token_id?: string;
}

export namespace InstanceDeleteResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.Provider;
      }
    }
  }
}

export interface InstanceChatCompletionsResponse {
  choices: Array<InstanceChatCompletionsResponse.Choice>;

  chunks: Array<InstanceChatCompletionsResponse.Chunk>;

  id?: string;

  model?: string;

  object?: string;

  [k: string]: unknown;
}

export namespace InstanceChatCompletionsResponse {
  export interface Choice {
    message: Choice.Message;

    index?: number;
  }

  export namespace Choice {
    export interface Message {
      content: string | null;

      role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';

      [k: string]: unknown;
    }
  }

  export interface Chunk {
    id: string;

    score: number;

    text: string;

    type: string;

    item?: Chunk.Item;

    scoring_details?: Chunk.ScoringDetails;
  }

  export namespace Chunk {
    export interface Item {
      key: string;

      metadata?: { [key: string]: unknown };

      timestamp?: number;
    }

    export interface ScoringDetails {
      keyword_rank?: number;

      keyword_score?: number;

      vector_rank?: number;

      vector_score?: number;
    }
  }
}

export interface InstanceReadResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  created_at: string;

  modified_at: string;

  source: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string | null;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  cache?: boolean;

  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string | null;

  custom_metadata?: Array<InstanceReadResponse.CustomMetadata>;

  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  hybrid_search_enabled?: boolean;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceReadResponse.Metadata;

  modified_by?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceReadResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  rewrite_query?: boolean;

  score_threshold?: number;

  source_params?: InstanceReadResponse.SourceParams;

  status?: string;

  token_id?: string;
}

export namespace InstanceReadResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.Provider;
      }
    }
  }
}

export interface InstanceSearchResponse {
  chunks: Array<InstanceSearchResponse.Chunk>;

  search_query: string;
}

export namespace InstanceSearchResponse {
  export interface Chunk {
    id: string;

    score: number;

    text: string;

    type: string;

    item?: Chunk.Item;

    scoring_details?: Chunk.ScoringDetails;
  }

  export namespace Chunk {
    export interface Item {
      key: string;

      metadata?: { [key: string]: unknown };

      timestamp?: number;
    }

    export interface ScoringDetails {
      keyword_rank?: number;

      keyword_score?: number;

      vector_rank?: number;

      vector_score?: number;
    }
  }
}

export interface InstanceStatsResponse {
  completed?: number;

  error?: number;

  file_embed_errors?: { [key: string]: unknown };

  index_source_errors?: { [key: string]: unknown };

  last_activity?: string;

  queued?: number;

  running?: number;

  skipped?: number;
}

export interface InstanceCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Use your AI Search ID.
   */
  id: string;

  /**
   * Body param
   */
  source: string;

  /**
   * Body param
   */
  type: 'r2' | 'web-crawler';

  /**
   * Body param
   */
  ai_gateway_id?: string | null;

  /**
   * Body param
   */
  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  /**
   * Body param
   */
  chunk?: boolean;

  /**
   * Body param
   */
  chunk_overlap?: number;

  /**
   * Body param
   */
  chunk_size?: number;

  /**
   * Body param
   */
  custom_metadata?: Array<InstanceCreateParams.CustomMetadata>;

  /**
   * Body param
   */
  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  /**
   * Body param
   */
  hybrid_search_enabled?: boolean;

  /**
   * Body param
   */
  max_num_results?: number;

  /**
   * Body param
   */
  metadata?: InstanceCreateParams.Metadata;

  /**
   * Body param
   */
  public_endpoint_params?: InstanceCreateParams.PublicEndpointParams;

  /**
   * Body param
   */
  reranking?: boolean;

  /**
   * Body param
   */
  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  /**
   * Body param
   */
  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  /**
   * Body param
   */
  rewrite_query?: boolean;

  /**
   * Body param
   */
  score_threshold?: number;

  /**
   * Body param
   */
  source_params?: InstanceCreateParams.SourceParams;

  /**
   * Body param
   */
  token_id?: string;
}

export namespace InstanceCreateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.ProviderParam;
      }
    }
  }
}

export interface InstanceUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  ai_gateway_id?: string | null;

  /**
   * Body param
   */
  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  /**
   * Body param
   */
  cache?: boolean;

  /**
   * Body param
   */
  cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

  /**
   * Body param
   */
  chunk?: boolean;

  /**
   * Body param
   */
  chunk_overlap?: number;

  /**
   * Body param
   */
  chunk_size?: number;

  /**
   * Body param
   */
  custom_metadata?: Array<InstanceUpdateParams.CustomMetadata>;

  /**
   * Body param
   */
  embedding_model?:
    | '@cf/qwen/qwen3-embedding-0.6b'
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  /**
   * Body param
   */
  hybrid_search_enabled?: boolean;

  /**
   * Body param
   */
  max_num_results?: number;

  /**
   * Body param
   */
  metadata?: InstanceUpdateParams.Metadata;

  /**
   * Body param
   */
  paused?: boolean;

  /**
   * Body param
   */
  public_endpoint_params?: InstanceUpdateParams.PublicEndpointParams;

  /**
   * Body param
   */
  reranking?: boolean;

  /**
   * Body param
   */
  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  /**
   * Body param
   */
  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  /**
   * Body param
   */
  rewrite_query?: boolean;

  /**
   * Body param
   */
  score_threshold?: number;

  /**
   * Body param
   */
  source_params?: InstanceUpdateParams.SourceParams;

  /**
   * Body param
   */
  summarization?: boolean;

  /**
   * Body param
   */
  summarization_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  /**
   * Body param
   */
  system_prompt_ai_search?: string | null;

  /**
   * Body param
   */
  system_prompt_index_summarization?: string | null;

  /**
   * Body param
   */
  system_prompt_rewrite_query?: string | null;

  /**
   * Body param
   */
  token_id?: string;
}

export namespace InstanceUpdateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean';

    field_name: string;
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    worker_domain?: string;
  }

  export interface PublicEndpointParams {
    authorized_hosts?: Array<string>;

    chat_completions_endpoint?: PublicEndpointParams.ChatCompletionsEndpoint;

    enabled?: boolean;

    mcp?: PublicEndpointParams.Mcp;

    rate_limit?: PublicEndpointParams.RateLimit;

    search_endpoint?: PublicEndpointParams.SearchEndpoint;
  }

  export namespace PublicEndpointParams {
    export interface ChatCompletionsEndpoint {
      /**
       * Disable chat completions endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface Mcp {
      description?: string;

      /**
       * Disable MCP endpoint for this public endpoint
       */
      disabled?: boolean;
    }

    export interface RateLimit {
      period_ms?: number;

      requests?: number;

      technique?: 'fixed' | 'sliding';
    }

    export interface SearchEndpoint {
      /**
       * Disable search endpoint for this public endpoint
       */
      disabled?: boolean;
    }
  }

  export interface SourceParams {
    /**
     * List of path patterns to exclude. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /admin/** matches
     * /admin/users and /admin/settings/advanced)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Uses micromatch glob syntax: \* matches within
     * a path segment, ** matches across path segments (e.g., /blog/** matches
     * /blog/post and /blog/2024/post)
     */
    include_items?: Array<string>;

    prefix?: string;

    r2_jurisdiction?: string;

    web_crawler?: SourceParams.WebCrawler;
  }

  export namespace SourceParams {
    export interface WebCrawler {
      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface ParseOptions {
        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export interface StoreOptions {
        storage_id: string;

        r2_jurisdiction?: string;

        storage_type?: SippyAPI.ProviderParam;
      }
    }
  }
}

export interface InstanceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Search by id
   */
  search?: string;
}

export interface InstanceDeleteParams {
  account_id: string;
}

export interface InstanceChatCompletionsParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  messages: Array<InstanceChatCompletionsParams.Message>;

  /**
   * Body param
   */
  ai_search_options?: InstanceChatCompletionsParams.AISearchOptions;

  /**
   * Body param
   */
  model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | 'anthropic/claude-3-7-sonnet'
    | 'anthropic/claude-sonnet-4'
    | 'anthropic/claude-opus-4'
    | 'anthropic/claude-3-5-haiku'
    | 'cerebras/qwen-3-235b-a22b-instruct'
    | 'cerebras/qwen-3-235b-a22b-thinking'
    | 'cerebras/llama-3.3-70b'
    | 'cerebras/llama-4-maverick-17b-128e-instruct'
    | 'cerebras/llama-4-scout-17b-16e-instruct'
    | 'cerebras/gpt-oss-120b'
    | 'google-ai-studio/gemini-2.5-flash'
    | 'google-ai-studio/gemini-2.5-pro'
    | 'grok/grok-4'
    | 'groq/llama-3.3-70b-versatile'
    | 'groq/llama-3.1-8b-instant'
    | 'openai/gpt-5'
    | 'openai/gpt-5-mini'
    | 'openai/gpt-5-nano'
    | '';

  /**
   * Body param
   */
  stream?: boolean;

  [k: string]: unknown;
}

export namespace InstanceChatCompletionsParams {
  export interface Message {
    content: string | null;

    role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';

    [k: string]: unknown;
  }

  export interface AISearchOptions {
    query_rewrite?: AISearchOptions.QueryRewrite;

    reranking?: AISearchOptions.Reranking;

    retrieval?: AISearchOptions.Retrieval;
  }

  export namespace AISearchOptions {
    export interface QueryRewrite {
      enabled?: boolean;

      model?:
        | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
        | '@cf/zai-org/glm-4.7-flash'
        | '@cf/meta/llama-3.1-8b-instruct-fast'
        | '@cf/meta/llama-3.1-8b-instruct-fp8'
        | '@cf/meta/llama-4-scout-17b-16e-instruct'
        | '@cf/qwen/qwen3-30b-a3b-fp8'
        | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
        | '@cf/moonshotai/kimi-k2-instruct'
        | 'anthropic/claude-3-7-sonnet'
        | 'anthropic/claude-sonnet-4'
        | 'anthropic/claude-opus-4'
        | 'anthropic/claude-3-5-haiku'
        | 'cerebras/qwen-3-235b-a22b-instruct'
        | 'cerebras/qwen-3-235b-a22b-thinking'
        | 'cerebras/llama-3.3-70b'
        | 'cerebras/llama-4-maverick-17b-128e-instruct'
        | 'cerebras/llama-4-scout-17b-16e-instruct'
        | 'cerebras/gpt-oss-120b'
        | 'google-ai-studio/gemini-2.5-flash'
        | 'google-ai-studio/gemini-2.5-pro'
        | 'grok/grok-4'
        | 'groq/llama-3.3-70b-versatile'
        | 'groq/llama-3.1-8b-instant'
        | 'openai/gpt-5'
        | 'openai/gpt-5-mini'
        | 'openai/gpt-5-nano'
        | '';

      rewrite_prompt?: string;
    }

    export interface Reranking {
      enabled?: boolean;

      match_threshold?: number;

      model?: '@cf/baai/bge-reranker-base' | '';
    }

    export interface Retrieval {
      context_expansion?: number;

      filters?: { [key: string]: unknown };

      match_threshold?: number;

      max_num_results?: number;

      retrieval_type?: 'vector' | 'keyword' | 'hybrid';

      return_on_failure?: boolean;
    }
  }
}

export interface InstanceReadParams {
  account_id: string;
}

export interface InstanceSearchParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  messages: Array<InstanceSearchParams.Message>;

  /**
   * Body param
   */
  ai_search_options?: InstanceSearchParams.AISearchOptions;
}

export namespace InstanceSearchParams {
  export interface Message {
    content: string | null;

    role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';

    [k: string]: unknown;
  }

  export interface AISearchOptions {
    query_rewrite?: AISearchOptions.QueryRewrite;

    reranking?: AISearchOptions.Reranking;

    retrieval?: AISearchOptions.Retrieval;
  }

  export namespace AISearchOptions {
    export interface QueryRewrite {
      enabled?: boolean;

      model?:
        | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
        | '@cf/zai-org/glm-4.7-flash'
        | '@cf/meta/llama-3.1-8b-instruct-fast'
        | '@cf/meta/llama-3.1-8b-instruct-fp8'
        | '@cf/meta/llama-4-scout-17b-16e-instruct'
        | '@cf/qwen/qwen3-30b-a3b-fp8'
        | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
        | '@cf/moonshotai/kimi-k2-instruct'
        | 'anthropic/claude-3-7-sonnet'
        | 'anthropic/claude-sonnet-4'
        | 'anthropic/claude-opus-4'
        | 'anthropic/claude-3-5-haiku'
        | 'cerebras/qwen-3-235b-a22b-instruct'
        | 'cerebras/qwen-3-235b-a22b-thinking'
        | 'cerebras/llama-3.3-70b'
        | 'cerebras/llama-4-maverick-17b-128e-instruct'
        | 'cerebras/llama-4-scout-17b-16e-instruct'
        | 'cerebras/gpt-oss-120b'
        | 'google-ai-studio/gemini-2.5-flash'
        | 'google-ai-studio/gemini-2.5-pro'
        | 'grok/grok-4'
        | 'groq/llama-3.3-70b-versatile'
        | 'groq/llama-3.1-8b-instant'
        | 'openai/gpt-5'
        | 'openai/gpt-5-mini'
        | 'openai/gpt-5-nano'
        | '';

      rewrite_prompt?: string;
    }

    export interface Reranking {
      enabled?: boolean;

      match_threshold?: number;

      model?: '@cf/baai/bge-reranker-base' | '';
    }

    export interface Retrieval {
      context_expansion?: number;

      filters?: { [key: string]: unknown };

      match_threshold?: number;

      max_num_results?: number;

      retrieval_type?: 'vector' | 'keyword' | 'hybrid';

      return_on_failure?: boolean;
    }
  }
}

export interface InstanceStatsParams {
  account_id: string;
}

Instances.Items = Items;
Instances.Jobs = Jobs;

export declare namespace Instances {
  export {
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceUpdateResponse as InstanceUpdateResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceDeleteResponse as InstanceDeleteResponse,
    type InstanceChatCompletionsResponse as InstanceChatCompletionsResponse,
    type InstanceReadResponse as InstanceReadResponse,
    type InstanceSearchResponse as InstanceSearchResponse,
    type InstanceStatsResponse as InstanceStatsResponse,
    type InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceDeleteParams as InstanceDeleteParams,
    type InstanceChatCompletionsParams as InstanceChatCompletionsParams,
    type InstanceReadParams as InstanceReadParams,
    type InstanceSearchParams as InstanceSearchParams,
    type InstanceStatsParams as InstanceStatsParams,
  };

  export {
    Items as Items,
    type ItemListResponse as ItemListResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
    type ItemListParams as ItemListParams,
    type ItemGetParams as ItemGetParams,
  };

  export {
    Jobs as Jobs,
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobLogsResponse as JobLogsResponse,
    type JobListResponsesV4PagePaginationArray as JobListResponsesV4PagePaginationArray,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobGetParams as JobGetParams,
    type JobLogsParams as JobLogsParams,
  };
}
