// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FiltersAPI from 'cloudflare/resources/workers/filters';

export class Filters extends APIResource {
  /**
   * Update Filter
   */
  update(
    zoneId: string,
    filterId: string,
    body: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/workers/filters/${filterId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FilterUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete Filter
   */
  delete(
    zoneId: string,
    filterId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneId}/workers/filters/${filterId}`, options) as Core.APIPromise<{
        result: FilterDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create Filter
   */
  workerFiltersDeprecatedCreateFilter(
    zoneId: string,
    body: FilterWorkerFiltersDeprecatedCreateFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterWorkerFiltersDeprecatedCreateFilterResponse | null> {
    return (
      this._client.post(`/zones/${zoneId}/workers/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterWorkerFiltersDeprecatedCreateFilterResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Filters
   */
  workerFiltersDeprecatedListFilters(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterWorkerFiltersDeprecatedListFiltersResponse> {
    return (
      this._client.get(`/zones/${zoneId}/workers/filters`, options) as Core.APIPromise<{
        result: FilterWorkerFiltersDeprecatedListFiltersResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FilterUpdateResponse {
  /**
   * Identifier
   */
  id: string;

  enabled: boolean;

  pattern: string;
}

export interface FilterDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface FilterWorkerFiltersDeprecatedCreateFilterResponse {
  /**
   * Identifier
   */
  id: string;
}

export type FilterWorkerFiltersDeprecatedListFiltersResponse =
  Array<FilterWorkerFiltersDeprecatedListFiltersResponse.FilterWorkerFiltersDeprecatedListFiltersResponseItem>;

export namespace FilterWorkerFiltersDeprecatedListFiltersResponse {
  export interface FilterWorkerFiltersDeprecatedListFiltersResponseItem {
    /**
     * Identifier
     */
    id: string;

    enabled: boolean;

    pattern: string;
  }
}

export interface FilterUpdateParams {
  enabled: boolean;

  pattern: string;
}

export interface FilterWorkerFiltersDeprecatedCreateFilterParams {
  enabled: boolean;

  pattern: string;
}

export namespace Filters {
  export import FilterUpdateResponse = FiltersAPI.FilterUpdateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterWorkerFiltersDeprecatedCreateFilterResponse = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterResponse;
  export import FilterWorkerFiltersDeprecatedListFiltersResponse = FiltersAPI.FilterWorkerFiltersDeprecatedListFiltersResponse;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterWorkerFiltersDeprecatedCreateFilterParams = FiltersAPI.FilterWorkerFiltersDeprecatedCreateFilterParams;
}
