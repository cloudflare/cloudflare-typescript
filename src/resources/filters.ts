// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Filters extends APIResource {
  /**
   * Creates one or more filters.
   */
  create(
    zoneIdentifier: string,
    body: FilterCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing filter.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options }) as Core.APIPromise<{
        result: FilterUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches filters in a zone. You can filter the results using several optional
   * parameters.
   */
  list(
    zoneIdentifier: string,
    query?: FilterListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterListResponsesV4PagePaginationArray, FilterListResponse>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterListResponsesV4PagePaginationArray, FilterListResponse>;
  list(
    zoneIdentifier: string,
    query: FilterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FilterListResponsesV4PagePaginationArray, FilterListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/filters`,
      FilterListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing filter.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    body: FilterDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options }) as Core.APIPromise<{
        result: FilterDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a filter.
   */
  get(zoneIdentifier: string, id: string, options?: Core.RequestOptions): Core.APIPromise<FilterGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/filters/${id}`, options) as Core.APIPromise<{
        result: FilterGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FilterListResponsesV4PagePaginationArray extends V4PagePaginationArray<FilterListResponse> {}

export type FilterCreateResponse = Array<FilterCreateResponse.FilterCreateResponseItem>;

export namespace FilterCreateResponse {
  export interface FilterCreateResponseItem {
    /**
     * The unique identifier of the filter.
     */
    id: string;

    /**
     * The filter expression. For more information, refer to
     * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
     */
    expression: string;

    /**
     * When true, indicates that the filter is currently paused.
     */
    paused: boolean;

    /**
     * An informative summary of the filter.
     */
    description?: string;

    /**
     * A short reference tag. Allows you to select related filters.
     */
    ref?: string;
  }
}

export interface FilterUpdateResponse {
  /**
   * The unique identifier of the filter.
   */
  id?: string;

  /**
   * An informative summary of the filter.
   */
  description?: string;

  /**
   * The filter expression. For more information, refer to
   * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
   */
  expression?: string;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * A short reference tag. Allows you to select related filters.
   */
  ref?: string;
}

export interface FilterListResponse {
  /**
   * The unique identifier of the filter.
   */
  id: string;

  /**
   * The filter expression. For more information, refer to
   * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
   */
  expression: string;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused: boolean;

  /**
   * An informative summary of the filter.
   */
  description?: string;

  /**
   * A short reference tag. Allows you to select related filters.
   */
  ref?: string;
}

export interface FilterDeleteResponse {
  /**
   * The unique identifier of the filter.
   */
  id: string;

  /**
   * An informative summary of the filter.
   */
  description?: string;

  /**
   * The filter expression. For more information, refer to
   * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
   */
  expression?: string;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * A short reference tag. Allows you to select related filters.
   */
  ref?: string;
}

export interface FilterGetResponse {
  /**
   * The unique identifier of the filter.
   */
  id?: string;

  /**
   * An informative summary of the filter.
   */
  description?: string;

  /**
   * The filter expression. For more information, refer to
   * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
   */
  expression?: string;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * A short reference tag. Allows you to select related filters.
   */
  ref?: string;
}

export type FilterCreateParams = unknown;

export type FilterUpdateParams = unknown;

export interface FilterListParams extends V4PagePaginationArrayParams {
  /**
   * The unique identifier of the filter.
   */
  id?: string;

  /**
   * A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * A case-insensitive string to find in the expression.
   */
  expression?: string;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * The filter ref (a short reference tag) to search for. Must be an exact match.
   */
  ref?: string;
}

export type FilterDeleteParams = unknown;
