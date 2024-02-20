// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FiltersAPI from 'cloudflare/resources/workers/filters';

export class Filters extends APIResource {
  /**
   * Create Filter
   */
  create(
    zoneId: string,
    body: FilterCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterCreateResponse | null> {
    return (
      this._client.post(`/zones/${zoneId}/workers/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Filters
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<FilterListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/workers/filters`, options) as Core.APIPromise<{
        result: FilterListResponse;
      }>
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
   * Update Filter
   */
  replace(
    zoneId: string,
    filterId: string,
    body: FilterReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/workers/filters/${filterId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FilterReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FilterCreateResponse {
  /**
   * Identifier
   */
  id: string;
}

export type FilterListResponse = Array<FilterListResponse.FilterListResponseItem>;

export namespace FilterListResponse {
  export interface FilterListResponseItem {
    /**
     * Identifier
     */
    id: string;

    enabled: boolean;

    pattern: string;
  }
}

export interface FilterDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface FilterReplaceResponse {
  /**
   * Identifier
   */
  id: string;

  enabled: boolean;

  pattern: string;
}

export interface FilterCreateParams {
  enabled: boolean;

  pattern: string;
}

export interface FilterReplaceParams {
  enabled: boolean;

  pattern: string;
}

export namespace Filters {
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import FilterListResponse = FiltersAPI.FilterListResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import FilterReplaceResponse = FiltersAPI.FilterReplaceResponse;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterReplaceParams = FiltersAPI.FilterReplaceParams;
}
