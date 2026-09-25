// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContentAPI from './content';
import { BaseContent, Content, ContentGetParams, ContentGetResponse } from './content';
import * as VersionsAPI from './versions';
import {
  BaseVersions,
  VersionListParams,
  VersionListResponse,
  VersionListResponsesSinglePage,
  Versions,
} from './versions';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTransformers extends APIResource {
  static override readonly _key: readonly ['logpush', 'transformers'] = Object.freeze([
    'logpush',
    'transformers',
  ] as const);

  /**
   * Creates a new custom log transformer for an account.
   *
   * @example
   * ```ts
   * const transformer =
   *   await client.logpush.transformers.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     code: 'SELECT ClientIP, RayID FROM http_requests',
   *     name: 'redact-pii',
   *   });
   * ```
   */
  create(params: TransformerCreateParams, options?: RequestOptions): APIPromise<TransformerCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/logpush/transformers`, {
        body,
        ...options,
      }) as APIPromise<{ result: TransformerCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing custom log transformer. When `code` is provided, the SQL
   * query is validated and a new version is created. When `code` is omitted, only
   * the name and description are updated. Omitting `description` clears the existing
   * description.
   *
   * @example
   * ```ts
   * const transformer =
   *   await client.logpush.transformers.update(42, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'redact-pii',
   *   });
   * ```
   */
  update(
    transformerID: number,
    params: TransformerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransformerUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/logpush/transformers/${transformerID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TransformerUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all custom log transformers for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transformerListResponse of client.logpush.transformers.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: TransformerListParams,
    options?: RequestOptions,
  ): PagePromise<TransformerListResponsesSinglePage, TransformerListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/logpush/transformers`,
      SinglePage<TransformerListResponse>,
      options,
    );
  }

  /**
   * Deletes a custom log transformer. Returns 409 Conflict if any active logpush
   * jobs reference the transformer.
   *
   * @example
   * ```ts
   * const transformer =
   *   await client.logpush.transformers.delete(42, {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  delete(
    transformerID: number,
    params: TransformerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TransformerDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/logpush/transformers/${transformerID}`,
        options,
      ) as APIPromise<{ result: TransformerDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a single custom log transformer by ID.
   *
   * @example
   * ```ts
   * const transformer = await client.logpush.transformers.get(
   *   42,
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    transformerID: number,
    params: TransformerGetParams,
    options?: RequestOptions,
  ): APIPromise<TransformerGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/logpush/transformers/${transformerID}`,
        options,
      ) as APIPromise<{ result: TransformerGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Executes a SQL transformer against a single input record and returns the
   * transformed output. This is a stateless endpoint — nothing is persisted.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transformerPreviewResponse of client.logpush.transformers.preview(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     input: {
   *       ClientIP: 'bar',
   *       ClientRequestHost: 'bar',
   *       EdgeStartTimestamp: 'bar',
   *       RayID: 'bar',
   *     },
   *     sql: 'SELECT ClientIP, RayID FROM http_requests',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  preview(
    params: TransformerPreviewParams,
    options?: RequestOptions,
  ): PagePromise<TransformerPreviewResponsesSinglePage, TransformerPreviewResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/logpush/transformers/preview`,
      SinglePage<TransformerPreviewResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class Transformers extends BaseTransformers {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
}

export type TransformerListResponsesSinglePage = SinglePage<TransformerListResponse>;

export type TransformerPreviewResponsesSinglePage = SinglePage<TransformerPreviewResponse>;

export interface TransformerCreateResponse {
  /**
   * The transformer ID.
   */
  id?: number;

  /**
   * Logpush jobs that reference this transformer.
   */
  associated_jobs?: Array<TransformerCreateResponse.AssociatedJob>;

  /**
   * When the transformer was created (RFC 3339).
   */
  created_at?: string;

  /**
   * The dataset this transformer operates on, derived from the SQL query's FROM
   * clause. Informational only. May be absent if the dataset cannot be determined
   * from the query.
   */
  dataset?: string | null;

  /**
   * Optional customer-provided description.
   */
  description?: string;

  /**
   * Customer-provided name for identification.
   */
  name?: string;

  /**
   * When the transformer was last modified (RFC 3339).
   */
  updated_at?: string;
}

export namespace TransformerCreateResponse {
  export interface AssociatedJob {
    /**
     * The logpush job ID.
     */
    id?: number;

    /**
     * The logpush job destination name.
     */
    name?: string;

    /**
     * The zone or account tag.
     */
    object_tag?: string;

    /**
     * Whether the job is zone-scoped or account-scoped.
     */
    object_type?: 'zone' | 'account';
  }
}

export interface TransformerUpdateResponse {
  /**
   * The transformer ID.
   */
  id?: number;

  /**
   * Logpush jobs that reference this transformer.
   */
  associated_jobs?: Array<TransformerUpdateResponse.AssociatedJob>;

  /**
   * When the transformer was created (RFC 3339).
   */
  created_at?: string;

  /**
   * The dataset this transformer operates on, derived from the SQL query's FROM
   * clause. Informational only. May be absent if the dataset cannot be determined
   * from the query.
   */
  dataset?: string | null;

  /**
   * Optional customer-provided description.
   */
  description?: string;

  /**
   * Customer-provided name for identification.
   */
  name?: string;

  /**
   * When the transformer was last modified (RFC 3339).
   */
  updated_at?: string;
}

export namespace TransformerUpdateResponse {
  export interface AssociatedJob {
    /**
     * The logpush job ID.
     */
    id?: number;

    /**
     * The logpush job destination name.
     */
    name?: string;

    /**
     * The zone or account tag.
     */
    object_tag?: string;

    /**
     * Whether the job is zone-scoped or account-scoped.
     */
    object_type?: 'zone' | 'account';
  }
}

export interface TransformerListResponse {
  /**
   * The transformer ID.
   */
  id?: number;

  /**
   * Logpush jobs that reference this transformer.
   */
  associated_jobs?: Array<TransformerListResponse.AssociatedJob>;

  /**
   * When the transformer was created (RFC 3339).
   */
  created_at?: string;

  /**
   * The dataset this transformer operates on, derived from the SQL query's FROM
   * clause. Informational only. May be absent if the dataset cannot be determined
   * from the query.
   */
  dataset?: string | null;

  /**
   * Optional customer-provided description.
   */
  description?: string;

  /**
   * Customer-provided name for identification.
   */
  name?: string;

  /**
   * When the transformer was last modified (RFC 3339).
   */
  updated_at?: string;
}

export namespace TransformerListResponse {
  export interface AssociatedJob {
    /**
     * The logpush job ID.
     */
    id?: number;

    /**
     * The logpush job destination name.
     */
    name?: string;

    /**
     * The zone or account tag.
     */
    object_tag?: string;

    /**
     * Whether the job is zone-scoped or account-scoped.
     */
    object_type?: 'zone' | 'account';
  }
}

export interface TransformerDeleteResponse {
  /**
   * The deleted transformer's ID.
   */
  id?: number;
}

export interface TransformerGetResponse {
  /**
   * The transformer ID.
   */
  id?: number;

  /**
   * Logpush jobs that reference this transformer.
   */
  associated_jobs?: Array<TransformerGetResponse.AssociatedJob>;

  /**
   * When the transformer was created (RFC 3339).
   */
  created_at?: string;

  /**
   * The dataset this transformer operates on, derived from the SQL query's FROM
   * clause. Informational only. May be absent if the dataset cannot be determined
   * from the query.
   */
  dataset?: string | null;

  /**
   * Optional customer-provided description.
   */
  description?: string;

  /**
   * Customer-provided name for identification.
   */
  name?: string;

  /**
   * When the transformer was last modified (RFC 3339).
   */
  updated_at?: string;
}

export namespace TransformerGetResponse {
  export interface AssociatedJob {
    /**
     * The logpush job ID.
     */
    id?: number;

    /**
     * The logpush job destination name.
     */
    name?: string;

    /**
     * The zone or account tag.
     */
    object_tag?: string;

    /**
     * Whether the job is zone-scoped or account-scoped.
     */
    object_type?: 'zone' | 'account';
  }
}

export type TransformerPreviewResponse = { [key: string]: unknown };

export interface TransformerCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The SQL transformer query. Maximum 32 KB. The query must contain a
   * FROM clause referencing a valid logpush dataset.
   */
  code: string;

  /**
   * Body param: Customer-provided name for identification.
   */
  name: string;

  /**
   * Body param: Optional customer-provided description.
   */
  description?: string;
}

export interface TransformerUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Customer-provided name for identification.
   */
  name: string;

  /**
   * Body param: The SQL transformer query. Maximum 32 KB. The query must contain a
   * FROM clause referencing a valid logpush dataset.
   */
  code?: string;

  /**
   * Body param: Optional customer-provided description.
   */
  description?: string;
}

export interface TransformerListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface TransformerDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface TransformerGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface TransformerPreviewParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: A single log record to transform (JSON object).
   */
  input: { [key: string]: unknown };

  /**
   * Body param: The SQL transformer query. Maximum 32 KB. The query must contain a
   * FROM clause referencing a valid logpush dataset.
   */
  sql: string;
}

Transformers.Content = Content;
Transformers.BaseContent = BaseContent;
Transformers.Versions = Versions;
Transformers.BaseVersions = BaseVersions;

export declare namespace Transformers {
  export {
    type TransformerCreateResponse as TransformerCreateResponse,
    type TransformerUpdateResponse as TransformerUpdateResponse,
    type TransformerListResponse as TransformerListResponse,
    type TransformerDeleteResponse as TransformerDeleteResponse,
    type TransformerGetResponse as TransformerGetResponse,
    type TransformerPreviewResponse as TransformerPreviewResponse,
    type TransformerListResponsesSinglePage as TransformerListResponsesSinglePage,
    type TransformerPreviewResponsesSinglePage as TransformerPreviewResponsesSinglePage,
    type TransformerCreateParams as TransformerCreateParams,
    type TransformerUpdateParams as TransformerUpdateParams,
    type TransformerListParams as TransformerListParams,
    type TransformerDeleteParams as TransformerDeleteParams,
    type TransformerGetParams as TransformerGetParams,
    type TransformerPreviewParams as TransformerPreviewParams,
  };

  export {
    Content as Content,
    BaseContent as BaseContent,
    type ContentGetResponse as ContentGetResponse,
    type ContentGetParams as ContentGetParams,
  };

  export {
    Versions as Versions,
    BaseVersions as BaseVersions,
    type VersionListResponse as VersionListResponse,
    type VersionListResponsesSinglePage as VersionListResponsesSinglePage,
    type VersionListParams as VersionListParams,
  };
}
