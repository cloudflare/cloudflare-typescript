// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ScriptsAPI from 'cloudflare/resources/page-shield/scripts';

export class Scripts extends APIResource {
  /**
   * Lists all scripts detected by Page Shield.
   */
  list(params: ScriptListParams, options?: Core.RequestOptions): Core.APIPromise<ScriptListResponse | null> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield/scripts`, { query, ...options }) as Core.APIPromise<{
        result: ScriptListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a script detected by Page Shield by script ID.
   */
  get(
    scriptId: string,
    params: ScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/page_shield/scripts/${scriptId}`, options);
  }
}

export interface PageShieldScript {
  id?: unknown;

  added_at?: unknown;

  dataflow_score?: unknown;

  domain_reported_malicious?: unknown;

  fetched_at?: unknown;

  first_page_url?: unknown;

  first_seen_at?: unknown;

  hash?: unknown;

  host?: unknown;

  js_integrity_score?: unknown;

  last_seen_at?: unknown;

  obfuscation_score?: unknown;

  page_urls?: unknown;

  url?: unknown;

  url_contains_cdn_cgi_path?: unknown;
}

export type ScriptListResponse = Array<PageShieldScript>;

export interface ScriptGetResponse {
  id?: unknown;

  added_at?: unknown;

  dataflow_score?: unknown;

  domain_reported_malicious?: unknown;

  fetched_at?: unknown;

  first_page_url?: unknown;

  first_seen_at?: unknown;

  hash?: unknown;

  host?: unknown;

  js_integrity_score?: unknown;

  last_seen_at?: unknown;

  obfuscation_score?: unknown;

  page_urls?: unknown;

  url?: unknown;

  url_contains_cdn_cgi_path?: unknown;

  versions?: Array<ScriptGetResponse.Version> | null;
}

export namespace ScriptGetResponse {
  /**
   * The version of the analyzed script.
   */
  export interface Version {
    /**
     * The dataflow score of the JavaScript content.
     */
    dataflow_score?: number | null;

    /**
     * The timestamp of when the script was last fetched.
     */
    fetched_at?: string | null;

    /**
     * The computed hash of the analyzed script.
     */
    hash?: string | null;

    /**
     * The integrity score of the JavaScript content.
     */
    js_integrity_score?: number | null;

    /**
     * The obfuscation score of the JavaScript content.
     */
    obfuscation_score?: number | null;
  }
}

export interface ScriptListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned scripts.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When true, excludes scripts seen in a `/cdn-cgi` path from the
   * returned scripts. The default value is true.
   */
  exclude_cdn_cgi?: boolean;

  /**
   * Query param: When true, excludes duplicate scripts. We consider a script
   * duplicate of another if their javascript content matches and they share the same
   * url host and zone hostname. In such case, we return the most recent script for
   * the URL host and zone hostname combination.
   */
  exclude_duplicates?: boolean;

  /**
   * Query param: Excludes scripts whose URL contains one of the URL-encoded URLs
   * separated by commas.
   */
  exclude_urls?: string;

  /**
   * Query param: Export the list of scripts as a file. Cannot be used with per_page
   * or page options.
   */
  export?: 'csv';

  /**
   * Query param: Includes scripts that match one or more URL-encoded hostnames
   * separated by commas.
   *
   * Wildcards are supported at the start and end of each hostname to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  hosts?: string;

  /**
   * Query param: The field used to sort returned scripts.
   */
  order_by?: 'first_seen_at' | 'last_seen_at';

  /**
   * Query param: The current page number of the paginated results.
   *
   * We additionally support a special value "all". When "all" is used, the API will
   * return all the scripts with the applied filters in a single page. Additionally,
   * when using this value, the API will not return the script versions or
   * categorisation data for the URL and domain of the scripts. This feature is
   * best-effort and it may only work for zones with a low number of scripts
   */
  page?: string;

  /**
   * Query param: Includes scripts that match one or more page URLs (separated by
   * commas) where they were last seen
   *
   * Wildcards are supported at the start and end of each page URL to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  page_url?: string;

  /**
   * Query param: The number of results per page.
   */
  per_page?: number;

  /**
   * Query param: When true, malicious scripts appear first in the returned scripts.
   */
  prioritize_malicious?: boolean;

  /**
   * Query param: Filters the returned scripts using a comma-separated list of
   * scripts statuses. Accepted values: `active`, `infrequent`, and `inactive`. The
   * default value is `active`.
   */
  status?: string;

  /**
   * Query param: Includes scripts whose URL contain one or more URL-encoded URLs
   * separated by commas.
   */
  urls?: string;
}

export interface ScriptGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Scripts {
  export import PageShieldScript = ScriptsAPI.PageShieldScript;
  export import ScriptListResponse = ScriptsAPI.ScriptListResponse;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
}
