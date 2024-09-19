// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ScriptsAPI from './scripts';
import { SinglePage } from '../../pagination';

export class Scripts extends APIResource {
  /**
   * Lists all scripts detected by Page Shield.
   */
  list(params: ScriptListParams, options?: Core.RequestOptions): Core.PagePromise<ScriptsSinglePage, Script> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/page_shield/scripts`, ScriptsSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Fetches a script detected by Page Shield by script ID.
   */
  get(
    scriptId: string,
    params: ScriptGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield/scripts/${scriptId}`, options) as Core.APIPromise<{
        result: ScriptGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ScriptsSinglePage extends SinglePage<Script> {}

export interface Script {
  /**
   * Identifier
   */
  id: string;

  added_at: string;

  first_seen_at: string;

  host: string;

  last_seen_at: string;

  url: string;

  url_contains_cdn_cgi_path: boolean;

  /**
   * The dataflow score of the JavaScript content.
   */
  dataflow_score?: number | null;

  domain_reported_malicious?: boolean;

  /**
   * The timestamp of when the script was last fetched.
   */
  fetched_at?: string | null;

  first_page_url?: string;

  /**
   * The computed hash of the analyzed script.
   */
  hash?: string | null;

  /**
   * The integrity score of the JavaScript content.
   */
  js_integrity_score?: number | null;

  malicious_domain_categories?: Array<string>;

  malicious_url_categories?: Array<string>;

  /**
   * The obfuscation score of the JavaScript content.
   */
  obfuscation_score?: number | null;

  page_urls?: Array<string>;

  url_reported_malicious?: boolean;
}

export interface ScriptGetResponse {
  /**
   * Identifier
   */
  id: string;

  added_at: string;

  first_seen_at: string;

  host: string;

  last_seen_at: string;

  url: string;

  url_contains_cdn_cgi_path: boolean;

  /**
   * The dataflow score of the JavaScript content.
   */
  dataflow_score?: number | null;

  domain_reported_malicious?: boolean;

  /**
   * The timestamp of when the script was last fetched.
   */
  fetched_at?: string | null;

  first_page_url?: string;

  /**
   * The computed hash of the analyzed script.
   */
  hash?: string | null;

  /**
   * The integrity score of the JavaScript content.
   */
  js_integrity_score?: number | null;

  malicious_domain_categories?: Array<string>;

  malicious_url_categories?: Array<string>;

  /**
   * The obfuscation score of the JavaScript content.
   */
  obfuscation_score?: number | null;

  page_urls?: Array<string>;

  url_reported_malicious?: boolean;

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
   * Query param: Export the list of scripts as a file.
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
   * return all the scripts with the applied filters in a single page. This feature
   * is best-effort and it may only work for zones with a low number of scripts
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
  export import Script = ScriptsAPI.Script;
  export import ScriptGetResponse = ScriptsAPI.ScriptGetResponse;
  export import ScriptsSinglePage = ScriptsAPI.ScriptsSinglePage;
  export import ScriptListParams = ScriptsAPI.ScriptListParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
}
