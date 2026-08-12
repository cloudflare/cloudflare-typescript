// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseURLs extends APIResource {
  static override readonly _key: readonly ['intel', 'urls'] = Object.freeze(['intel', 'urls'] as const);

  /**
   * Gets security information about a URL, including content categories and risk
   * types. The URL must be provided as a query parameter.
   *
   * @example
   * ```ts
   * const url = await client.intel.urls.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   url: 'url',
   * });
   * ```
   */
  get(params: URLGetParams, options?: RequestOptions): APIPromise<URL> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/intel/url`, { query, ...options }) as APIPromise<{
        result: URL;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class URLs extends BaseURLs {}

export interface URL {
  /**
   * Content categories associated with this URL.
   */
  content_categories: Array<URL.ContentCategory>;

  /**
   * The full URL that was looked up.
   */
  full_url: string;

  /**
   * The hostname of the URL.
   */
  hostname: string;

  /**
   * Security risk types associated with this URL.
   */
  risk_type: Array<URL.RiskType>;

  /**
   * The path component of the URL.
   */
  url_path: string;
}

export namespace URL {
  export interface ContentCategory {
    id?: number;

    name?: string;

    source_id?: number;

    super_category_id?: number;
  }

  export interface RiskType {
    id?: number;

    name?: string;

    source_id?: number;

    super_category_id?: number;
  }
}

export interface URLGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The URL to look up.
   */
  url: string;
}

export declare namespace URLs {
  export { type URL as URL, type URLGetParams as URLGetParams };
}
