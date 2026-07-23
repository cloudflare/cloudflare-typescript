// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseExtensions extends APIResource {
  static override readonly _key: readonly ['registrar', 'extensions'] = Object.freeze([
    'registrar',
    'extensions',
  ] as const);

  /**
   * Returns metadata and JSON Schema documents describing the expected input
   * structure for registration operations on each supported extension (TLD).
   *
   * This endpoint uses cursor-based pagination. Results are ordered by extension
   * name by default. To fetch the next page, pass the `cursor` value from the
   * `result_info` object in the response as the `cursor` query parameter in your
   * next request. An empty `cursor` string indicates there are no more pages.
   *
   * Supports HTTP conditional GET via `ETag`. Include the `ETag` value from a
   * previous response in an `If-None-Match` header to receive a `304 Not Modified`
   * when the data has not changed.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const extensionListResponse of client.registrar.extensions.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ExtensionListParams,
    options?: RequestOptions,
  ): PagePromise<ExtensionListResponsesCursorPagination, ExtensionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/registrar/extensions`,
      CursorPagination<ExtensionListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns metadata and JSON Schema documents describing the expected input
   * structure for registration operations on a specific extension (TLD).
   *
   * Supports HTTP conditional GET via `ETag`. Include the `ETag` value from a
   * previous response in an `If-None-Match` header to receive a `304 Not Modified`
   * when the data has not changed.
   *
   * @example
   * ```ts
   * const extension = await client.registrar.extensions.get(
   *   'com',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    extension: string,
    params: ExtensionGetParams,
    options?: RequestOptions,
  ): APIPromise<ExtensionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/registrar/extensions/${extension}`,
        options,
      ) as APIPromise<{ result: ExtensionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Extensions extends BaseExtensions {}

export type ExtensionListResponsesCursorPagination = CursorPagination<ExtensionListResponse>;

/**
 * Extension entry with metadata and JSON Schema documents for the registration
 * operation.
 */
export interface ExtensionListResponse {
  /**
   * Extension metadata
   */
  metadata: ExtensionListResponse.Metadata;

  /**
   * JSON Schema describing the expected input structure for registration operations
   * on this extension.
   */
  registration_schema: unknown;
}

export namespace ExtensionListResponse {
  /**
   * Extension metadata
   */
  export interface Metadata {
    /**
     * The full name of the extension. For example, "co.uk", or "uk"
     */
    name: string;

    /**
     * The tld of the extension. For example, for "co.uk", it's "uk". For "uk", it's
     * "uk"
     */
    tld: string;
  }
}

/**
 * Extension entry with metadata and JSON Schema documents for the registration
 * operation.
 */
export interface ExtensionGetResponse {
  /**
   * Extension metadata
   */
  metadata: ExtensionGetResponse.Metadata;

  /**
   * JSON Schema describing the expected input structure for registration operations
   * on this extension.
   */
  registration_schema: unknown;
}

export namespace ExtensionGetResponse {
  /**
   * Extension metadata
   */
  export interface Metadata {
    /**
     * The full name of the extension. For example, "co.uk", or "uk"
     */
    name: string;

    /**
     * The tld of the extension. For example, for "co.uk", it's "uk". For "uk", it's
     * "uk"
     */
    tld: string;
  }
}

export interface ExtensionListParams extends CursorPaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Sort direction for results. Defaults to ascending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter extensions by exact name match. For example, `name=com`
   * returns only the `com` extension.
   */
  name?: string;

  /**
   * Query param: Column to sort results by. Defaults to `name` when omitted.
   */
  sort_by?: 'name' | 'created_at' | 'updated_at';
}

export interface ExtensionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Extensions {
  export {
    type ExtensionListResponse as ExtensionListResponse,
    type ExtensionGetResponse as ExtensionGetResponse,
    type ExtensionListResponsesCursorPagination as ExtensionListResponsesCursorPagination,
    type ExtensionListParams as ExtensionListParams,
    type ExtensionGetParams as ExtensionGetParams,
  };
}
