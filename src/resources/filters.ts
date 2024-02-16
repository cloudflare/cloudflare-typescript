// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as FiltersAPI from 'cloudflare/resources/filters';

export class Filters extends APIResource {
  /**
   * Updates an existing filter.
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterUpdateResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/filters/${id}`, { body, ...options }) as Core.APIPromise<{
        result: FilterUpdateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing filter.
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneIdentifier}/filters/${id}`, options) as Core.APIPromise<{
        result: FilterDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates one or more filters.
   */
  filtersCreateFilters(
    zoneIdentifier: string,
    body: FilterFiltersCreateFiltersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersCreateFiltersResponse | null> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterFiltersCreateFiltersResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches filters in a zone. You can filter the results using several optional
   * parameters.
   */
  filtersListFilters(
    zoneIdentifier: string,
    query?: FilterFiltersListFiltersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersListFiltersResponse | null>;
  filtersListFilters(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersListFiltersResponse | null>;
  filtersListFilters(
    zoneIdentifier: string,
    query: FilterFiltersListFiltersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersListFiltersResponse | null> {
    if (isRequestOptions(query)) {
      return this.filtersListFilters(zoneIdentifier, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneIdentifier}/filters`, { query, ...options }) as Core.APIPromise<{
        result: FilterFiltersListFiltersResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates one or more existing filters.
   */
  filtersUpdateFilters(
    zoneIdentifier: string,
    body: FilterFiltersUpdateFiltersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterFiltersUpdateFiltersResponse | null> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterFiltersUpdateFiltersResponse | null;
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
  ): Core.APIPromise<FilterGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/filters/${id}`, options) as Core.APIPromise<{
        result: FilterGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FilterUpdateResponse {
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

export type FilterFiltersCreateFiltersResponse =
  Array<FilterFiltersCreateFiltersResponse.FilterFiltersCreateFiltersResponseItem>;

export namespace FilterFiltersCreateFiltersResponse {
  export interface FilterFiltersCreateFiltersResponseItem {
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

export type FilterFiltersListFiltersResponse =
  Array<FilterFiltersListFiltersResponse.FilterFiltersListFiltersResponseItem>;

export namespace FilterFiltersListFiltersResponse {
  export interface FilterFiltersListFiltersResponseItem {
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

export type FilterFiltersUpdateFiltersResponse =
  Array<FilterFiltersUpdateFiltersResponse.FilterFiltersUpdateFiltersResponseItem>;

export namespace FilterFiltersUpdateFiltersResponse {
  export interface FilterFiltersUpdateFiltersResponseItem {
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

export interface FilterGetResponse {
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

export type FilterUpdateParams = unknown;

export type FilterFiltersCreateFiltersParams = unknown;

export interface FilterFiltersListFiltersParams {
  /**
   * A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * A case-insensitive string to find in the expression.
   */
  expression?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * Number of filters per page.
   */
  per_page?: number;

  /**
   * The filter ref (a short reference tag) to search for. Must be an exact match.
   */
  ref?: string;
}

export type FilterFiltersUpdateFiltersParams = unknown;

export namespace Filters {
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterFiltersCreateFiltersResponse = FiltersAPI.FilterFiltersCreateFiltersResponse;
  export import FilterFiltersListFiltersResponse = FiltersAPI.FilterFiltersListFiltersResponse;
  export import FilterFiltersUpdateFiltersResponse = FiltersAPI.FilterFiltersUpdateFiltersResponse;
  export import FilterGetResponse = FiltersAPI.FilterGetResponse;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterFiltersCreateFiltersParams = FiltersAPI.FilterFiltersCreateFiltersParams;
  export import FilterFiltersListFiltersParams = FiltersAPI.FilterFiltersListFiltersParams;
  export import FilterFiltersUpdateFiltersParams = FiltersAPI.FilterFiltersUpdateFiltersParams;
}
