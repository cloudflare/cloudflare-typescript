// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as InstancesAPI from './instances/instances';
import {
  InstanceChatCompletionsParams,
  InstanceChatCompletionsResponse,
  InstanceCreateParams,
  InstanceCreateResponse,
  InstanceDeleteParams,
  InstanceDeleteResponse,
  InstanceListParams,
  InstanceListResponse,
  InstanceListResponsesV4PagePaginationArray,
  InstanceReadParams,
  InstanceReadResponse,
  InstanceSearchParams,
  InstanceSearchResponse,
  InstanceStatsParams,
  InstanceStatsResponse,
  InstanceUpdateParams,
  InstanceUpdateResponse,
  Instances,
} from './instances/instances';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Namespaces extends APIResource {
  instances: InstancesAPI.Instances = new InstancesAPI.Instances(this._client);

  /**
   * Create a new namespace.
   *
   * @example
   * ```ts
   * const namespace = await client.aiSearch.namespaces.create({
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   name: 'name',
   * });
   * ```
   */
  create(
    params: NamespaceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-search/namespaces`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update namespace.
   *
   * @example
   * ```ts
   * const namespace = await client.aiSearch.namespaces.update(
   *   'production',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  update(
    name: string,
    params: NamespaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-search/namespaces/${name}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List namespaces.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const namespaceListResponse of client.aiSearch.namespaces.list(
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesV4PagePaginationArray, NamespaceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-search/namespaces`,
      NamespaceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete namespace.
   *
   * @example
   * ```ts
   * const namespace = await client.aiSearch.namespaces.delete(
   *   'production',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  delete(
    name: string,
    params: NamespaceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-search/namespaces/${name}`,
        options,
      ) as Core.APIPromise<{ result: NamespaceDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Performs a chat completion request against multiple AI Search instances in
   * parallel, merging retrieved content as context for generating a response.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.chatCompletions(
   *     'my-namespace',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       ai_search_options: { instance_ids: ['my-ai-search'] },
   *       messages: [{ content: 'content', role: 'system' }],
   *     },
   *   );
   * ```
   */
  chatCompletions(
    name: string,
    params: NamespaceChatCompletionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceChatCompletionsResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/ai-search/namespaces/${name}/chat/completions`, {
      body,
      ...options,
    });
  }

  /**
   * Read namespace.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.namespaces.read(
   *   'production',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  read(
    name: string,
    params: NamespaceReadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-search/namespaces/${name}`, options) as Core.APIPromise<{
        result: NamespaceReadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Multi-Instance Search
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.namespaces.search(
   *   'my-namespace',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     ai_search_options: { instance_ids: ['my-ai-search'] },
   *   },
   * );
   * ```
   */
  search(
    name: string,
    params: NamespaceSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceSearchResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-search/namespaces/${name}/search`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceSearchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class NamespaceListResponsesV4PagePaginationArray extends V4PagePaginationArray<NamespaceListResponse> {}

export interface NamespaceCreateResponse {
  created_at: string;

  name: string;

  /**
   * Optional description for the namespace. Max 256 characters.
   */
  description?: string | null;
}

export interface NamespaceUpdateResponse {
  created_at: string;

  name: string;

  /**
   * Optional description for the namespace. Max 256 characters.
   */
  description?: string | null;
}

export interface NamespaceListResponse {
  created_at: string;

  name: string;

  /**
   * Optional description for the namespace. Max 256 characters.
   */
  description?: string | null;
}

export type NamespaceDeleteResponse = unknown;

export interface NamespaceChatCompletionsResponse {
  choices: Array<NamespaceChatCompletionsResponse.Choice>;

  chunks: Array<NamespaceChatCompletionsResponse.Chunk>;

  id?: string;

  errors?: Array<NamespaceChatCompletionsResponse.Error>;

  model?: string;

  object?: string;

  [k: string]: unknown;
}

export namespace NamespaceChatCompletionsResponse {
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

    instance_id: string;

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

  export interface Error {
    instance_id: string;

    message: string;
  }
}

export interface NamespaceReadResponse {
  created_at: string;

  name: string;

  /**
   * Optional description for the namespace. Max 256 characters.
   */
  description?: string | null;
}

export interface NamespaceSearchResponse {
  chunks: Array<NamespaceSearchResponse.Chunk>;

  search_query: string;

  errors?: Array<NamespaceSearchResponse.Error>;
}

export namespace NamespaceSearchResponse {
  export interface Chunk {
    id: string;

    instance_id: string;

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

  export interface Error {
    instance_id: string;

    message: string;
  }
}

export interface NamespaceCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param: Optional description for the namespace. Max 256 characters.
   */
  description?: string | null;
}

export interface NamespaceUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Optional description for the namespace. Max 256 characters.
   */
  description?: string | null;
}

export interface NamespaceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Filter namespaces whose name or description contains this string
   * (case-insensitive).
   */
  search?: string;
}

export interface NamespaceDeleteParams {
  account_id: string;
}

export interface NamespaceChatCompletionsParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  ai_search_options: NamespaceChatCompletionsParams.AISearchOptions;

  /**
   * Body param
   */
  messages: Array<NamespaceChatCompletionsParams.Message>;

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

export namespace NamespaceChatCompletionsParams {
  export interface AISearchOptions {
    instance_ids: Array<string>;

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

export interface NamespaceReadParams {
  account_id: string;
}

export interface NamespaceSearchParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  ai_search_options: NamespaceSearchParams.AISearchOptions;

  /**
   * Body param
   */
  messages?: Array<NamespaceSearchParams.Message>;

  /**
   * Body param: A simple text query string. Alternative to 'messages' — provide
   * either this or 'messages', not both.
   */
  query?: string;
}

export namespace NamespaceSearchParams {
  export interface AISearchOptions {
    instance_ids: Array<string>;

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

Namespaces.NamespaceListResponsesV4PagePaginationArray = NamespaceListResponsesV4PagePaginationArray;
Namespaces.Instances = Instances;
Namespaces.InstanceListResponsesV4PagePaginationArray = InstanceListResponsesV4PagePaginationArray;

export declare namespace Namespaces {
  export {
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceUpdateResponse as NamespaceUpdateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceChatCompletionsResponse as NamespaceChatCompletionsResponse,
    type NamespaceReadResponse as NamespaceReadResponse,
    type NamespaceSearchResponse as NamespaceSearchResponse,
    NamespaceListResponsesV4PagePaginationArray as NamespaceListResponsesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceChatCompletionsParams as NamespaceChatCompletionsParams,
    type NamespaceReadParams as NamespaceReadParams,
    type NamespaceSearchParams as NamespaceSearchParams,
  };

  export {
    Instances as Instances,
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
}
