// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../pagination';

export class Filters extends APIResource {
  /**
   * Creates one or more filters.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  create(
    params: FilterCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FilterCreateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/filters`, { body, ...options }) as Core.APIPromise<{
        result: FilterCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing filter.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  update(
    filterId: string,
    params: FilterUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallFilter> {
    const { zone_id, body } = params;
    return (
      this._client.put(`/zones/${zone_id}/filters/${filterId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: FirewallFilter }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches filters in a zone. You can filter the results using several optional
   * parameters.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  list(
    params: FilterListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<FirewallFiltersV4PagePaginationArray, FirewallFilter> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/filters`, FirewallFiltersV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing filter.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  delete(
    filterId: string,
    params: FilterDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallFilter> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/filters/${filterId}`, options) as Core.APIPromise<{
        result: FirewallFilter;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a filter.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  get(
    filterId: string,
    params: FilterGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirewallFilter> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/filters/${filterId}`, options) as Core.APIPromise<{
        result: FirewallFilter;
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

export interface FirewallFilterParam {
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

export interface FilterCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The filter expression. For more information, refer to
   * [Expressions](https://developers.cloudflare.com/ruleset-engine/rules-language/expressions/).
   */
  expression: string;
}

export interface FilterUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface FilterListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The unique identifier of the filter.
   */
  id?: string;

  /**
   * Query param: A case-insensitive string to find in the description.
   */
  description?: string;

  /**
   * Query param: A case-insensitive string to find in the expression.
   */
  expression?: string;

  /**
   * Query param: When true, indicates that the filter is currently paused.
   */
  paused?: boolean;

  /**
   * Query param: The filter ref (a short reference tag) to search for. Must be an
   * exact match.
   */
  ref?: string;
}

export interface FilterDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface FilterGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}
