// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as FiltersAPI from 'cloudflare/resources/filters';
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
  ): Core.APIPromise<LegacyJhsFilter | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options }) as Core.APIPromise<{
        result: LegacyJhsFilter | null;
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
  ): Core.PagePromise<LegacyJhsFiltersV4PagePaginationArray, LegacyJhsFilter>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegacyJhsFiltersV4PagePaginationArray, LegacyJhsFilter>;
  list(
    zoneIdentifier: string,
    query: FilterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegacyJhsFiltersV4PagePaginationArray, LegacyJhsFilter> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/filters`,
      LegacyJhsFiltersV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing filter.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegacyJhsFilter | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/filters/${id}`, options) as Core.APIPromise<{
        result: LegacyJhsFilter | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a filter.
   */
  get(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegacyJhsFilter | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/filters/${id}`, options) as Core.APIPromise<{
        result: LegacyJhsFilter | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LegacyJhsFiltersV4PagePaginationArray extends V4PagePaginationArray<LegacyJhsFilter> {}

export interface LegacyJhsFilter {
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

export type FilterCreateResponse = Array<LegacyJhsFilter>;

export type FilterCreateParams = unknown;

export type FilterUpdateParams = unknown;

export interface FilterListParams extends V4PagePaginationArrayParams {
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

export namespace Filters {
  export import LegacyJhsFilter = FiltersAPI.LegacyJhsFilter;
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import LegacyJhsFiltersV4PagePaginationArray = FiltersAPI.LegacyJhsFiltersV4PagePaginationArray;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterListParams = FiltersAPI.FilterListParams;
}
