// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as ItemsAPI from './items';
import { Items } from './items';
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
   * Create a new instances.
   *
   * @example
   * ```ts
   * const instance = await client.aiSearch.instances.create({
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   id: 'my-ai-search',
   * });
   * ```
   */
  create(
    params: InstanceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceCreateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
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
    params?: InstanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceUpdateResponse>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<InstanceUpdateResponse>;
  update(
    id: string,
    params: InstanceUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceUpdateResponse> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
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
    params?: InstanceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse>;
  list(
    params: InstanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InstanceListResponsesV4PagePaginationArray, InstanceListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
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
    params?: InstanceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceDeleteResponse>;
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<InstanceDeleteResponse>;
  delete(
    id: string,
    params: InstanceDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(`/accounts/${account_id}/ai-search/instances/${id}`, options) as Core.APIPromise<{
        result: InstanceDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Performs a chat completion request against an AI Search instance, using indexed
   * content as context for generating responses.
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceChatCompletionsResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.post(`/accounts/${account_id}/ai-search/instances/${id}/chat/completions`, {
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
  read(
    id: string,
    params?: InstanceReadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceReadResponse>;
  read(id: string, options?: Core.RequestOptions): Core.APIPromise<InstanceReadResponse>;
  read(
    id: string,
    params: InstanceReadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceReadResponse> {
    if (isRequestOptions(params)) {
      return this.read(id, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-search/instances/${id}`, options) as Core.APIPromise<{
        result: InstanceReadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Executes a semantic search query against an AI Search instance to find relevant
   * indexed content.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.instances.search(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  search(
    id: string,
    params?: InstanceSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceSearchResponse>;
  search(id: string, options?: Core.RequestOptions): Core.APIPromise<InstanceSearchResponse>;
  search(
    id: string,
    params: InstanceSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceSearchResponse> {
    if (isRequestOptions(params)) {
      return this.search(id, {}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-search/instances/${id}/search`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: InstanceSearchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves usage statistics for AI Search instances.
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
    params?: InstanceStatsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceStatsResponse>;
  stats(id: string, options?: Core.RequestOptions): Core.APIPromise<InstanceStatsResponse>;
  stats(
    id: string,
    params: InstanceStatsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstanceStatsResponse> {
    if (isRequestOptions(params)) {
      return this.stats(id, {}, params);
    }
    const { account_id = this._client.accountId } = params;
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
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;

  created_at: string;

  modified_at: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  enable?: boolean;

  engine_version?: number;

  fusion_method?: 'max' | 'rrf';

  /**
   * @deprecated Deprecated — use index_method instead.
   */
  hybrid_search_enabled?: boolean;

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  index_method?: InstanceCreateResponse.IndexMethod;

  indexing_options?: InstanceCreateResponse.IndexingOptions | null;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceCreateResponse.Metadata;

  modified_by?: string | null;

  namespace?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceCreateResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  retrieval_options?: InstanceCreateResponse.RetrievalOptions | null;

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

  rewrite_query?: boolean;

  score_threshold?: number;

  source?: string | null;

  source_params?: InstanceCreateResponse.SourceParams | null;

  status?: string;

  /**
   * Interval between automatic syncs, in seconds. Allowed values: 3600 (1h), 7200
   * (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

  token_id?: string;

  type?: 'r2' | 'web-crawler' | null;
}

export namespace InstanceCreateResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;

  created_at: string;

  modified_at: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  enable?: boolean;

  engine_version?: number;

  fusion_method?: 'max' | 'rrf';

  /**
   * @deprecated Deprecated — use index_method instead.
   */
  hybrid_search_enabled?: boolean;

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  index_method?: InstanceUpdateResponse.IndexMethod;

  indexing_options?: InstanceUpdateResponse.IndexingOptions | null;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceUpdateResponse.Metadata;

  modified_by?: string | null;

  namespace?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceUpdateResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  retrieval_options?: InstanceUpdateResponse.RetrievalOptions | null;

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

  rewrite_query?: boolean;

  score_threshold?: number;

  source?: string | null;

  source_params?: InstanceUpdateResponse.SourceParams | null;

  status?: string;

  /**
   * Interval between automatic syncs, in seconds. Allowed values: 3600 (1h), 7200
   * (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

  token_id?: string;

  type?: 'r2' | 'web-crawler' | null;
}

export namespace InstanceUpdateResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;

  created_at: string;

  modified_at: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  enable?: boolean;

  engine_version?: number;

  fusion_method?: 'max' | 'rrf';

  /**
   * @deprecated Deprecated — use index_method instead.
   */
  hybrid_search_enabled?: boolean;

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  index_method?: InstanceListResponse.IndexMethod;

  indexing_options?: InstanceListResponse.IndexingOptions | null;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceListResponse.Metadata;

  modified_by?: string | null;

  namespace?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceListResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  retrieval_options?: InstanceListResponse.RetrievalOptions | null;

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

  rewrite_query?: boolean;

  score_threshold?: number;

  source?: string | null;

  source_params?: InstanceListResponse.SourceParams | null;

  status?: string;

  /**
   * Interval between automatic syncs, in seconds. Allowed values: 3600 (1h), 7200
   * (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

  token_id?: string;

  type?: 'r2' | 'web-crawler' | null;
}

export namespace InstanceListResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;

  created_at: string;

  modified_at: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  enable?: boolean;

  engine_version?: number;

  fusion_method?: 'max' | 'rrf';

  /**
   * @deprecated Deprecated — use index_method instead.
   */
  hybrid_search_enabled?: boolean;

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  index_method?: InstanceDeleteResponse.IndexMethod;

  indexing_options?: InstanceDeleteResponse.IndexingOptions | null;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceDeleteResponse.Metadata;

  modified_by?: string | null;

  namespace?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceDeleteResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  retrieval_options?: InstanceDeleteResponse.RetrievalOptions | null;

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

  rewrite_query?: boolean;

  score_threshold?: number;

  source?: string | null;

  source_params?: InstanceDeleteResponse.SourceParams | null;

  status?: string;

  /**
   * Interval between automatic syncs, in seconds. Allowed values: 3600 (1h), 7200
   * (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

  token_id?: string;

  type?: 'r2' | 'web-crawler' | null;
}

export namespace InstanceDeleteResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
      fusion_method?: 'rrf' | 'max';

      keyword_rank?: number;

      keyword_score?: number;

      reranking_score?: number;

      vector_rank?: number;

      vector_score?: number;
    }
  }
}

export interface InstanceReadResponse {
  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;

  created_at: string;

  modified_at: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  enable?: boolean;

  engine_version?: number;

  fusion_method?: 'max' | 'rrf';

  /**
   * @deprecated Deprecated — use index_method instead.
   */
  hybrid_search_enabled?: boolean;

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  index_method?: InstanceReadResponse.IndexMethod;

  indexing_options?: InstanceReadResponse.IndexingOptions | null;

  last_activity?: string | null;

  max_num_results?: number;

  metadata?: InstanceReadResponse.Metadata;

  modified_by?: string | null;

  namespace?: string | null;

  paused?: boolean;

  public_endpoint_id?: string | null;

  public_endpoint_params?: InstanceReadResponse.PublicEndpointParams;

  reranking?: boolean;

  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  retrieval_options?: InstanceReadResponse.RetrievalOptions | null;

  rewrite_model?:
    | '@cf/meta/llama-3.3-70b-instruct-fp8-fast'
    | '@cf/zai-org/glm-4.7-flash'
    | '@cf/meta/llama-3.1-8b-instruct-fast'
    | '@cf/meta/llama-3.1-8b-instruct-fp8'
    | '@cf/meta/llama-4-scout-17b-16e-instruct'
    | '@cf/qwen/qwen3-30b-a3b-fp8'
    | '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b'
    | '@cf/moonshotai/kimi-k2-instruct'
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

  rewrite_query?: boolean;

  score_threshold?: number;

  source?: string | null;

  source_params?: InstanceReadResponse.SourceParams | null;

  status?: string;

  /**
   * Interval between automatic syncs, in seconds. Allowed values: 3600 (1h), 7200
   * (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

  token_id?: string;

  type?: 'r2' | 'web-crawler' | null;
}

export namespace InstanceReadResponse {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
      fusion_method?: 'rrf' | 'max';

      keyword_rank?: number;

      keyword_score?: number;

      reranking_score?: number;

      vector_rank?: number;

      vector_score?: number;
    }
  }
}

export interface InstanceStatsResponse {
  completed?: number;

  /**
   * Engine-specific metadata. Present only for managed (v3) instances.
   */
  engine?: InstanceStatsResponse.Engine;

  error?: number;

  file_embed_errors?: { [key: string]: unknown };

  index_source_errors?: { [key: string]: unknown };

  last_activity?: string;

  outdated?: number;

  queued?: number;

  running?: number;

  skipped?: number;
}

export namespace InstanceStatsResponse {
  /**
   * Engine-specific metadata. Present only for managed (v3) instances.
   */
  export interface Engine {
    /**
     * R2 bucket storage usage in bytes.
     */
    r2?: Engine.R2;

    /**
     * Vectorize index metadata (dimensions, vector count).
     */
    vectorize?: Engine.Vectorize;
  }

  export namespace Engine {
    /**
     * R2 bucket storage usage in bytes.
     */
    export interface R2 {
      metadataSizeBytes: number;

      objectCount: number;

      payloadSizeBytes: number;
    }

    /**
     * Vectorize index metadata (dimensions, vector count).
     */
    export interface Vectorize {
      dimensions: number;

      vectorsCount: number;
    }
  }
}

export interface InstanceCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param: AI Search instance ID. Lowercase alphanumeric, hyphens, and
   * underscores.
   */
  id: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  /**
   * Body param
   */
  fusion_method?: 'max' | 'rrf';

  /**
   * @deprecated Body param: Deprecated — use index_method instead.
   */
  hybrid_search_enabled?: boolean;

  /**
   * Body param: Controls which storage backends are used during indexing. Defaults
   * to vector-only.
   */
  index_method?: InstanceCreateParams.IndexMethod;

  /**
   * Body param
   */
  indexing_options?: InstanceCreateParams.IndexingOptions | null;

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
  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  /**
   * Body param
   */
  retrieval_options?: InstanceCreateParams.RetrievalOptions | null;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
  source?: string | null;

  /**
   * Body param
   */
  source_params?: InstanceCreateParams.SourceParams | null;

  /**
   * Body param: Interval between automatic syncs, in seconds. Allowed values: 3600
   * (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

  /**
   * Body param
   */
  token_id?: string;

  /**
   * Body param
   */
  type?: 'r2' | 'web-crawler' | null;
}

export namespace InstanceCreateParams {
  export interface CustomMetadata {
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
  account_id?: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
    | 'google-ai-studio/gemini-embedding-2-preview'
    | 'openai/text-embedding-3-small'
    | 'openai/text-embedding-3-large'
    | ''
    | null;

  /**
   * Body param
   */
  fusion_method?: 'max' | 'rrf';

  /**
   * Body param: Controls which storage backends are used during indexing. Defaults
   * to vector-only.
   */
  index_method?: InstanceUpdateParams.IndexMethod;

  /**
   * Body param
   */
  indexing_options?: InstanceUpdateParams.IndexingOptions | null;

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
  reranking_model?: '@cf/baai/bge-reranker-base' | '' | null;

  /**
   * Body param
   */
  retrieval_options?: InstanceUpdateParams.RetrievalOptions | null;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

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
  source_params?: InstanceUpdateParams.SourceParams | null;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    | ''
    | null;

  /**
   * Body param: Interval between automatic syncs, in seconds. Allowed values: 3600
   * (1h), 7200 (2h), 14400 (4h), 21600 (6h), 43200 (12h), 86400 (24h).
   */
  sync_interval?: 3600 | 7200 | 14400 | 21600 | 43200 | 86400;

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
    data_type: 'text' | 'number' | 'boolean' | 'datetime';

    field_name: string;
  }

  /**
   * Controls which storage backends are used during indexing. Defaults to
   * vector-only.
   */
  export interface IndexMethod {
    /**
     * Enable keyword (BM25) storage backend.
     */
    keyword: boolean;

    /**
     * Enable vector (embedding) storage backend.
     */
    vector: boolean;
  }

  export interface IndexingOptions {
    /**
     * Tokenizer used for keyword search indexing. porter provides word-level
     * tokenization with Porter stemming (good for natural language queries). trigram
     * enables character-level substring matching (good for partial matches, code,
     * identifiers). Changing this triggers a full re-index. Defaults to porter.
     */
    keyword_tokenizer?: 'porter' | 'trigram';
  }

  export interface Metadata {
    created_from_aisearch_wizard?: boolean;

    search_for_agents?: Metadata.SearchForAgents;

    worker_domain?: string;
  }

  export namespace Metadata {
    export interface SearchForAgents {
      hostname: string;

      zone_id: string;

      zone_name: string;
    }
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

  export interface RetrievalOptions {
    /**
     * Metadata fields to boost search results by. Each entry specifies a metadata
     * field and an optional direction. Direction defaults to 'asc' for numeric fields
     * and 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
     * custom_metadata field.
     */
    boost_by?: Array<RetrievalOptions.BoostBy>;

    /**
     * Controls which documents are candidates for BM25 scoring. 'and' restricts
     * candidates to documents containing all query terms; 'or' includes any document
     * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
     */
    keyword_match_mode?: 'and' | 'or';
  }

  export namespace RetrievalOptions {
    export interface BoostBy {
      /**
       * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
       * custom_metadata field. Numeric and datetime fields support asc/desc directions;
       * text/boolean fields support exists/not_exists.
       */
      field: string;

      /**
       * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
       * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
       * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
       * for numeric/datetime fields, 'exists' for text/boolean fields.
       */
      direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
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
      crawl_options?: WebCrawler.CrawlOptions;

      parse_options?: WebCrawler.ParseOptions;

      parse_type?: 'sitemap' | 'feed-rss' | 'crawl';

      store_options?: WebCrawler.StoreOptions;
    }

    export namespace WebCrawler {
      export interface CrawlOptions {
        depth?: number;

        include_external_links?: boolean;

        include_subdomains?: boolean;

        max_age?: number;

        source?: 'all' | 'sitemaps' | 'links';
      }

      export interface ParseOptions {
        /**
         * List of path-to-selector mappings for extracting specific content from crawled
         * pages. Each entry pairs a URL glob pattern with a CSS selector. The first
         * matching path wins. Only the matched HTML fragment is stored and indexed.
         */
        content_selector?: Array<ParseOptions.ContentSelector>;

        include_headers?: { [key: string]: string };

        include_images?: boolean;

        /**
         * List of specific sitemap URLs to use for crawling. Only valid when parse_type is
         * 'sitemap'.
         */
        specific_sitemaps?: Array<string>;

        use_browser_rendering?: boolean;
      }

      export namespace ParseOptions {
        export interface ContentSelector {
          /**
           * Glob pattern to match against the page URL path. Uses standard glob syntax: \*
           * matches within a segment, \*\* crosses directories.
           */
          path: string;

          /**
           * CSS selector to extract content from pages matching the path pattern. Supports
           * standard CSS selectors including class, ID, element, and attribute selectors.
           */
          selector: string;
        }
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
  account_id?: string;

  /**
   * Query param
   */
  namespace?: string | null;

  /**
   * Query param: Order By Column Name
   */
  order_by?: 'created_at';

  /**
   * Query param: Order By Direction
   */
  order_by_direction?: 'asc' | 'desc';

  /**
   * Query param: Search by id
   */
  search?: string;
}

export interface InstanceDeleteParams {
  account_id?: string;
}

export interface InstanceChatCompletionsParams {
  /**
   * Path param
   */
  account_id?: string;

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
    | '@cf/google/gemma-3-12b-it'
    | '@cf/google/gemma-4-26b-a4b-it'
    | '@cf/moonshotai/kimi-k2.5'
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
    cache?: AISearchOptions.Cache;

    query_rewrite?: AISearchOptions.QueryRewrite;

    reranking?: AISearchOptions.Reranking;

    retrieval?: AISearchOptions.Retrieval;
  }

  export namespace AISearchOptions {
    export interface Cache {
      cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

      enabled?: boolean;
    }

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
        | '@cf/google/gemma-3-12b-it'
        | '@cf/google/gemma-4-26b-a4b-it'
        | '@cf/moonshotai/kimi-k2.5'
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
      /**
       * Metadata fields to boost search results by. Overrides the instance-level
       * boost_by config. Direction defaults to 'asc' for numeric/datetime fields,
       * 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
       * custom_metadata field.
       */
      boost_by?: Array<Retrieval.BoostBy>;

      context_expansion?: number;

      filters?: { [key: string]: unknown };

      fusion_method?: 'max' | 'rrf';

      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts
       * candidates to documents containing all query terms; 'or' includes any document
       * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';

      match_threshold?: number;

      max_num_results?: number;

      retrieval_type?: 'vector' | 'keyword' | 'hybrid';

      return_on_failure?: boolean;
    }

    export namespace Retrieval {
      export interface BoostBy {
        /**
         * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
         * custom_metadata field. Numeric and datetime fields support asc/desc directions;
         * text/boolean fields support exists/not_exists.
         */
        field: string;

        /**
         * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
         * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
         * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
         * for numeric/datetime fields, 'exists' for text/boolean fields.
         */
        direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
      }
    }
  }
}

export interface InstanceReadParams {
  account_id?: string;
}

export interface InstanceSearchParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  ai_search_options?: InstanceSearchParams.AISearchOptions;

  /**
   * Body param
   */
  messages?: Array<InstanceSearchParams.Message>;

  /**
   * Body param: A simple text query string. Alternative to 'messages' — provide
   * either this or 'messages', not both.
   */
  query?: string;
}

export namespace InstanceSearchParams {
  export interface AISearchOptions {
    cache?: AISearchOptions.Cache;

    query_rewrite?: AISearchOptions.QueryRewrite;

    reranking?: AISearchOptions.Reranking;

    retrieval?: AISearchOptions.Retrieval;
  }

  export namespace AISearchOptions {
    export interface Cache {
      cache_threshold?: 'super_strict_match' | 'close_enough' | 'flexible_friend' | 'anything_goes';

      enabled?: boolean;
    }

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
        | '@cf/google/gemma-3-12b-it'
        | '@cf/google/gemma-4-26b-a4b-it'
        | '@cf/moonshotai/kimi-k2.5'
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
      /**
       * Metadata fields to boost search results by. Overrides the instance-level
       * boost_by config. Direction defaults to 'asc' for numeric/datetime fields,
       * 'exists' for text/boolean fields. Fields must match 'timestamp' or a defined
       * custom_metadata field.
       */
      boost_by?: Array<Retrieval.BoostBy>;

      context_expansion?: number;

      filters?: { [key: string]: unknown };

      fusion_method?: 'max' | 'rrf';

      /**
       * Controls which documents are candidates for BM25 scoring. 'and' restricts
       * candidates to documents containing all query terms; 'or' includes any document
       * containing at least one term, ranked by BM25 relevance. Defaults to 'and'.
       */
      keyword_match_mode?: 'and' | 'or';

      match_threshold?: number;

      max_num_results?: number;

      retrieval_type?: 'vector' | 'keyword' | 'hybrid';

      return_on_failure?: boolean;
    }

    export namespace Retrieval {
      export interface BoostBy {
        /**
         * Metadata field name to boost by. Use 'timestamp' for document freshness, or any
         * custom_metadata field. Numeric and datetime fields support asc/desc directions;
         * text/boolean fields support exists/not_exists.
         */
        field: string;

        /**
         * Boost direction. 'desc' = higher values rank higher (e.g. newer timestamps).
         * 'asc' = lower values rank higher. 'exists' = boost chunks that have the field.
         * 'not_exists' = boost chunks that lack the field. Optional ��� defaults to 'asc'
         * for numeric/datetime fields, 'exists' for text/boolean fields.
         */
        direction?: 'asc' | 'desc' | 'exists' | 'not_exists';
      }
    }
  }

  export interface Message {
    content: string | null;

    role: 'system' | 'developer' | 'user' | 'assistant' | 'tool';

    [k: string]: unknown;
  }
}

export interface InstanceStatsParams {
  account_id?: string;
}

Instances.InstanceListResponsesV4PagePaginationArray = InstanceListResponsesV4PagePaginationArray;
Instances.Items = Items;
Instances.Jobs = Jobs;
Instances.JobListResponsesV4PagePaginationArray = JobListResponsesV4PagePaginationArray;

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
    InstanceListResponsesV4PagePaginationArray as InstanceListResponsesV4PagePaginationArray,
    type InstanceCreateParams as InstanceCreateParams,
    type InstanceUpdateParams as InstanceUpdateParams,
    type InstanceListParams as InstanceListParams,
    type InstanceDeleteParams as InstanceDeleteParams,
    type InstanceChatCompletionsParams as InstanceChatCompletionsParams,
    type InstanceReadParams as InstanceReadParams,
    type InstanceSearchParams as InstanceSearchParams,
    type InstanceStatsParams as InstanceStatsParams,
  };

  export { Items as Items };

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
