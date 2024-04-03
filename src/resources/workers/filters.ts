// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FiltersAPI from 'cloudflare/resources/workers/filters';
import { SinglePage } from 'cloudflare/pagination';

export class Filters extends APIResource {
  /**
   * Create Filter
   */
  create(
    params: FilterCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterCreateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/workers/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update Filter
   */
  update(
    filterId: string,
    params: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WorkersFilter> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/workers/filters/${filterId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WorkersFilter }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Filters
   */
  list(
    params: FilterListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkersFiltersSinglePage, WorkersFilter> {
    const { zone_id } = params;
    return this._client.getAPIList(`/zones/${zone_id}/workers/filters`, WorkersFiltersSinglePage, options);
  }

  /**
   * Delete Filter
   */
  delete(
    filterId: string,
    params: FilterDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterDeleteResponse | null> {
    const { zone_id, body } = params;
    return (
      this._client.delete(`/zones/${zone_id}/workers/filters/${filterId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: FilterDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WorkersFiltersSinglePage extends SinglePage<WorkersFilter> {}

export interface WorkersFilter {
  /**
   * Identifier
   */
  id: string;

  enabled: boolean;

  pattern: string;
}

export interface FilterCreateResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface FilterDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface FilterCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  enabled: boolean;

  /**
   * Body param:
   */
  pattern: string;
}

export interface FilterUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  enabled: boolean;

  /**
   * Body param:
   */
  pattern: string;
}

export interface FilterListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface FilterDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Filters {
  export import WorkersFilter = FiltersAPI.WorkersFilter;
  export import FilterCreateResponse = FiltersAPI.FilterCreateResponse;
  export import FilterDeleteResponse = FiltersAPI.FilterDeleteResponse;
  export import WorkersFiltersSinglePage = FiltersAPI.WorkersFiltersSinglePage;
  export import FilterCreateParams = FiltersAPI.FilterCreateParams;
  export import FilterUpdateParams = FiltersAPI.FilterUpdateParams;
  export import FilterListParams = FiltersAPI.FilterListParams;
  export import FilterDeleteParams = FiltersAPI.FilterDeleteParams;
}
