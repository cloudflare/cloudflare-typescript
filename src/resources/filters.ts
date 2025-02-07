// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Filters extends APIResource {
  /**
   * Creates one or more filters.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  create(
    params: FilterCreateParams,
    options?: RequestOptions,
  ): PagePromise<FirewallFiltersSinglePage, FirewallFilter> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/filters`, SinglePage<FirewallFilter>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Updates an existing filter.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  update(filterID: string, params: FilterUpdateParams, options?: RequestOptions): APIPromise<FirewallFilter> {
    const { zone_id, body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/filters/${filterID}`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: FirewallFilter }>
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
    options?: RequestOptions,
  ): PagePromise<FirewallFiltersV4PagePaginationArray, FirewallFilter> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/filters`, V4PagePaginationArray<FirewallFilter>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing filter.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  delete(filterID: string, params: FilterDeleteParams, options?: RequestOptions): APIPromise<FirewallFilter> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/filters/${filterID}`, options) as APIPromise<{
        result: FirewallFilter;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes one or more existing filters.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  bulkDelete(
    params: FilterBulkDeleteParams,
    options?: RequestOptions,
  ): PagePromise<FirewallFiltersSinglePage, FirewallFilter> {
    const { zone_id } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/filters`, SinglePage<FirewallFilter>, {
      method: 'delete',
      ...options,
    });
  }

  /**
   * Updates one or more existing filters.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  bulkUpdate(
    params: FilterBulkUpdateParams,
    options?: RequestOptions,
  ): PagePromise<FirewallFiltersSinglePage, FirewallFilter> {
    const { zone_id, ...body } = params;
    return this._client.getAPIList(path`/zones/${zone_id}/filters`, SinglePage<FirewallFilter>, {
      body,
      method: 'put',
      ...options,
    });
  }

  /**
   * Fetches the details of a filter.
   *
   * @deprecated The Filters API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#firewall-rules-api-and-filters-api for full details.
   */
  get(filterID: string, params: FilterGetParams, options?: RequestOptions): APIPromise<FirewallFilter> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/filters/${filterID}`, options) as APIPromise<{
        result: FirewallFilter;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FirewallFiltersSinglePage = SinglePage<FirewallFilter>;

export type FirewallFiltersV4PagePaginationArray = V4PagePaginationArray<FirewallFilter>;

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

export interface FilterBulkDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface FilterBulkUpdateParams {
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
