// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CookiesAPI from './cookies';
import { SinglePage } from '../../pagination';

export class Cookies extends APIResource {
  /**
   * Lists all cookies collected by Page Shield.
   */
  list(
    params: CookieListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CookieListResponsesSinglePage, CookieListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/page_shield/cookies`, CookieListResponsesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Fetches a cookie collected by Page Shield by cookie ID.
   */
  get(
    cookieId: string,
    params: CookieGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CookieGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield/cookies/${cookieId}`, options) as Core.APIPromise<{
        result: CookieGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CookieListResponsesSinglePage extends SinglePage<CookieListResponse> {}

export interface CookieListResponse {
  /**
   * Identifier
   */
  id: string;

  first_seen_at: string;

  host: string;

  last_seen_at: string;

  name: string;

  type: 'first_party' | 'unknown';

  domain_attribute?: string;

  expires_attribute?: string;

  http_only_attribute?: boolean;

  max_age_attribute?: number;

  page_urls?: Array<string>;

  path_attribute?: string;

  same_site_attribute?: 'lax' | 'strict' | 'none';

  secure_attribute?: boolean;
}

export interface CookieGetResponse {
  /**
   * Identifier
   */
  id: string;

  first_seen_at: string;

  host: string;

  last_seen_at: string;

  name: string;

  type: 'first_party' | 'unknown';

  domain_attribute?: string;

  expires_attribute?: string;

  http_only_attribute?: boolean;

  max_age_attribute?: number;

  page_urls?: Array<string>;

  path_attribute?: string;

  same_site_attribute?: 'lax' | 'strict' | 'none';

  secure_attribute?: boolean;
}

export interface CookieListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned cookies.'
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filters the returned cookies that match the specified domain
   * attribute
   */
  domain?: string;

  /**
   * Query param: Export the list of cookies as a file. Cannot be used with per_page
   * or page options.
   */
  export?: 'csv';

  /**
   * Query param: Includes cookies that match one or more URL-encoded hostnames
   * separated by commas.
   *
   * Wildcards are supported at the start and end of each hostname to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  hosts?: string;

  /**
   * Query param: Filters the returned cookies that are set with HttpOnly
   */
  http_only?: boolean;

  /**
   * Query param: Filters the returned cookies that match the specified name.
   * Wildcards are supported at the start and end to support starts with, ends with
   * and contains. e.g. session\*
   */
  name?: string;

  /**
   * Query param: The field used to sort returned cookies.
   */
  order_by?: 'first_seen_at' | 'last_seen_at';

  /**
   * Query param: The current page number of the paginated results.
   */
  page?: string;

  /**
   * Query param: Includes connections that match one or more page URLs (separated by
   * commas) where they were last seen
   *
   * Wildcards are supported at the start and end of each page URL to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  page_url?: string;

  /**
   * Query param: Filters the returned cookies that match the specified path
   * attribute
   */
  path?: string;

  /**
   * Query param: The number of results per page.
   */
  per_page?: number;

  /**
   * Query param: Filters the returned cookies that match the specified same_site
   * attribute
   */
  same_site?: 'lax' | 'strict' | 'none';

  /**
   * Query param: Filters the returned cookies that are set with Secure
   */
  secure?: boolean;

  /**
   * Query param: Filters the returned cookies that match the specified type
   * attribute
   */
  type?: 'first_party' | 'unknown';
}

export interface CookieGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Cookies {
  export import CookieListResponse = CookiesAPI.CookieListResponse;
  export import CookieGetResponse = CookiesAPI.CookieGetResponse;
  export import CookieListResponsesSinglePage = CookiesAPI.CookieListResponsesSinglePage;
  export import CookieListParams = CookiesAPI.CookieListParams;
  export import CookieGetParams = CookiesAPI.CookieGetParams;
}
