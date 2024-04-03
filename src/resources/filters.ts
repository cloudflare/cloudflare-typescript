// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  ): Core.APIPromise<FirewallFilter | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options }) as Core.APIPromise<{
        result: FirewallFilter | null;
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
  ): Core.PagePromise<FirewallFiltersV4PagePaginationArray, FirewallFilter>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallFiltersV4PagePaginationArray, FirewallFilter>;
  list(
    zoneIdentifier: string,
    query: FilterListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallFiltersV4PagePaginationArray, FirewallFilter> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(`/zones/${zoneIdentifier}/filters`, FirewallFiltersV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing filter.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    body: FilterDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallFilter | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options }) as Core.APIPromise<{
        result: FirewallFilter | null;
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
  ): Core.APIPromise<FirewallFilter | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/filters/${id}`, options) as Core.APIPromise<{
        result: FirewallFilter | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class FirewallFiltersV4PagePaginationArray extends V4PagePaginationArray<FirewallFilter> {}

export interface FirewallFilter {
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

export type FilterCreateResponse = Array<FirewallFilter>;

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

export namespace Filters {
  export import FirewallFilter = FiltersAPI.FirewallFilter;
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import FirewallFiltersV4PagePaginationArray = FiltersAPI.FirewallFiltersV4PagePaginationArray;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterListParams = FiltersAPI.FilterListParams;
  export import FilterDeleteParams = FiltersAPI.FilterDeleteParams;
}
