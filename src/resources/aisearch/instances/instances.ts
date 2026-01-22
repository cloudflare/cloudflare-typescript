// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
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
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

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
   *   token_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   type: 'r2',
   * });
   * ```
   */
  create(
    params: InstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-search/instances`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InstanceCreateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-search/instances/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InstanceUpdateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-search/instances`,
      InstanceListResponsesV4PagePaginationArray,
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/ai-search/instances/${id}`, options) as Core.APIPromise<{
        result: InstanceDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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
  read(
    id: string,
    params: InstanceReadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-search/instances/${id}`, options) as Core.APIPromise<{
        result: InstanceReadResponse;
      }>
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceStatsResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-search/instances/${id}/stats`,
        options,
      ) as Core.APIPromise<{ result: InstanceStatsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class InstanceListResponsesV4PagePaginationArray extends V4PagePaginationArray<InstanceListResponse> {}

export interface InstanceCreateResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  internal_id: string;

  modified_at: string;

  source: string;

  token_id: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  chunk?: boolean;

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string;

  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  engine_version?: number;

  hybrid_search_enabled?: boolean;

  last_activity?: string;

  max_num_results?: number;

  metadata?: InstanceCreateResponse.Metadata;

  modified_by?: string;

  paused?: boolean;

  public_endpoint_id?: string;

  public_endpoint_params?: InstanceCreateResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  summarization?: boolean;

  summarization_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  system_prompt_ai_search?: string;

  system_prompt_index_summarization?: string;

  system_prompt_rewrite_query?: string;

  vectorize_active_namespace?: string;
}

export namespace InstanceCreateResponse {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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

  account_id: string;

  account_tag: string;

  created_at: string;

  internal_id: string;

  modified_at: string;

  source: string;

  token_id: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  chunk?: boolean;

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string;

  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  engine_version?: number;

  hybrid_search_enabled?: boolean;

  last_activity?: string;

  max_num_results?: number;

  metadata?: InstanceUpdateResponse.Metadata;

  modified_by?: string;

  paused?: boolean;

  public_endpoint_id?: string;

  public_endpoint_params?: InstanceUpdateResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  summarization?: boolean;

  summarization_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  system_prompt_ai_search?: string;

  system_prompt_index_summarization?: string;

  system_prompt_rewrite_query?: string;

  vectorize_active_namespace?: string;
}

export namespace InstanceUpdateResponse {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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

  account_id: string;

  account_tag: string;

  created_at: string;

  internal_id: string;

  modified_at: string;

  source: string;

  token_id: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  chunk?: boolean;

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string;

  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  engine_version?: number;

  hybrid_search_enabled?: boolean;

  last_activity?: string;

  max_num_results?: number;

  metadata?: InstanceListResponse.Metadata;

  modified_by?: string;

  paused?: boolean;

  public_endpoint_id?: string;

  public_endpoint_params?: InstanceListResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  summarization?: boolean;

  summarization_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  system_prompt_ai_search?: string;

  system_prompt_index_summarization?: string;

  system_prompt_rewrite_query?: string;

  vectorize_active_namespace?: string;
}

export namespace InstanceListResponse {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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

  account_id: string;

  account_tag: string;

  created_at: string;

  internal_id: string;

  modified_at: string;

  source: string;

  token_id: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  chunk?: boolean;

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string;

  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  engine_version?: number;

  hybrid_search_enabled?: boolean;

  last_activity?: string;

  max_num_results?: number;

  metadata?: InstanceDeleteResponse.Metadata;

  modified_by?: string;

  paused?: boolean;

  public_endpoint_id?: string;

  public_endpoint_params?: InstanceDeleteResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  summarization?: boolean;

  summarization_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  system_prompt_ai_search?: string;

  system_prompt_index_summarization?: string;

  system_prompt_rewrite_query?: string;

  vectorize_active_namespace?: string;
}

export namespace InstanceDeleteResponse {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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

export interface InstanceReadResponse {
  /**
   * Use your AI Search ID.
   */
  id: string;

  account_id: string;

  account_tag: string;

  created_at: string;

  internal_id: string;

  modified_at: string;

  source: string;

  token_id: string;

  type: 'r2' | 'web-crawler';

  vectorize_name: string;

  ai_gateway_id?: string;

  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  chunk?: boolean;

  chunk_overlap?: number;

  chunk_size?: number;

  created_by?: string;

  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
    | 'google-ai-studio/gemini-embedding-001'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | '';

  enable?: boolean;

  engine_version?: number;

  hybrid_search_enabled?: boolean;

  last_activity?: string;

  max_num_results?: number;

  metadata?: InstanceReadResponse.Metadata;

  modified_by?: string;

  paused?: boolean;

  public_endpoint_id?: string;

  public_endpoint_params?: InstanceReadResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '';

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  summarization?: boolean;

  summarization_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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

  system_prompt_ai_search?: string;

  system_prompt_index_summarization?: string;

  system_prompt_rewrite_query?: string;

  vectorize_active_namespace?: string;
}

export namespace InstanceReadResponse {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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
  token_id: string;

  /**
   * Body param
   */
  type: 'r2' | 'web-crawler';

  /**
   * Body param
   */
  ai_gateway_id?: string;

  /**
   * Body param
   */
  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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
  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
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
}

export namespace InstanceCreateParams {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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
  ai_gateway_id?: string;

  /**
   * Body param
   */
  ai_search_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
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
  embedding_model?:
    | '@cf/baai/bge-m3'
    | '@cf/baai/bge-large-en-v1.5'
    | '@cf/google/embeddinggemma-300m'
    | '@cf/qwen/qwen3-embedding-0.6b'
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
  system_prompt_ai_search?: string;

  /**
   * Body param
   */
  system_prompt_index_summarization?: string;

  /**
   * Body param
   */
  system_prompt_rewrite_query?: string;

  /**
   * Body param
   */
  token_id?: string;
}

export namespace InstanceUpdateParams {
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
     * List of path patterns to exclude. Supports wildcards (e.g., _/admin/_,
     * /private/\*_, _\private\*)
     */
    exclude_items?: Array<string>;

    /**
     * List of path patterns to include. Supports wildcards (e.g., _/blog/_.html,
     * /docs/\*_, _\blog\*.html)
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

export interface InstanceReadParams {
  account_id: string;
}

export interface InstanceStatsParams {
  account_id: string;
}

Instances.InstanceListResponsesV4PagePaginationArray = InstanceListResponsesV4PagePaginationArray;
Instances.Items = Items;
Instances.ItemListResponsesV4PagePaginationArray = ItemListResponsesV4PagePaginationArray;
Instances.Jobs = Jobs;
Instances.JobListResponsesV4PagePaginationArray = JobListResponsesV4PagePaginationArray;

export declare namespace Instances {
  export {
    type InstanceCreateResponse as InstanceCreateResponse,
    type InstanceUpdateResponse as InstanceUpdateResponse,
    type InstanceListResponse as InstanceListResponse,
    type InstanceDeleteResponse as InstanceDeleteResponse,
    type InstanceReadResponse as InstanceReadResponse,
    type InstanceStatsResponse as InstanceStatsResponse,
    InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceDeleteParams as InstanceDeleteParams,
    type InstanceReadParams as InstanceReadParams,
    type InstanceStatsParams as InstanceStatsParams,
  };

  export {
    Items as Items,
    type ItemListResponse as ItemListResponse,
    type ItemGetResponse as ItemGetResponse,
    ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
    type ItemListParams as ItemListParams,
    type ItemGetParams as ItemGetParams,
  };

  export {
    Jobs as Jobs,
    type JobCreateResponse as JobCreateResponse,
    type JobListResponse as JobListResponse,
    type JobGetResponse as JobGetResponse,
    type JobLogsResponse as JobLogsResponse,
    JobListResponsesV4PagePaginationArray as JobListResponsesV4PagePaginationArray,
    type JobCreateParams as JobCreateParams,
    type JobListParams as JobListParams,
    type JobGetParams as JobGetParams,
    type JobLogsParams as JobLogsParams,
  };
}
