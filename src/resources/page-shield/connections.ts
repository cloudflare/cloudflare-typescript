// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectionsAPI from 'cloudflare/resources/page-shield/connections';

export class Connections extends APIResource {
  /**
   * Lists all connections detected by Page Shield.
   */
  list(
    params: ConnectionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionListResponse | null> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/page_shield/connections`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ConnectionListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a connection detected by Page Shield by connection ID.
   */
  get(
    connectionId: string,
    params: ConnectionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/page_shield/connections/${connectionId}`, options);
  }
}

export type ConnectionListResponse = Array<ConnectionListResponse.ConnectionListResponseItem>;

export namespace ConnectionListResponse {
  export interface ConnectionListResponseItem {
    id?: unknown;

    added_at?: unknown;

    domain_reported_malicious?: unknown;

    first_page_url?: unknown;

    first_seen_at?: unknown;

    host?: unknown;

    last_seen_at?: unknown;

    page_urls?: unknown;

    url?: unknown;

    url_contains_cdn_cgi_path?: unknown;
  }
}

export interface ConnectionGetResponse {
  id?: unknown;

  added_at?: unknown;

  domain_reported_malicious?: unknown;

  first_page_url?: unknown;

  first_seen_at?: unknown;

  host?: unknown;

  last_seen_at?: unknown;

  page_urls?: unknown;

  url?: unknown;

  url_contains_cdn_cgi_path?: unknown;
}

export interface ConnectionListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: The direction used to sort returned connections.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: When true, excludes connections seen in a `/cdn-cgi` path from the
   * returned connections. The default value is true.
   */
  exclude_cdn_cgi?: boolean;

  /**
   * Query param: Excludes connections whose URL contains one of the URL-encoded URLs
   * separated by commas.
   */
  exclude_urls?: string;

  /**
   * Query param: Export the list of connections as a file. Cannot be used with
   * per_page or page options.
   */
  export?: 'csv';

  /**
   * Query param: Includes connections that match one or more URL-encoded hostnames
   * separated by commas.
   *
   * Wildcards are supported at the start and end of each hostname to support starts
   * with, ends with and contains. If no wildcards are used, results will be filtered
   * by exact match
   */
  hosts?: string;

  /**
   * Query param: The field used to sort returned connections.
   */
  order_by?: 'first_seen_at' | 'last_seen_at';

  /**
   * Query param: The current page number of the paginated results.
   *
   * We additionally support a special value "all". When "all" is used, the API will
   * return all the connections with the applied filters in a single page.
   * Additionally, when using this value, the API will not return the categorisation
   * data for the URL and domain of the connections. This feature is best-effort and
   * it may only work for zones with a low number of connections
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
   * Query param: The number of results per page.
   */
  per_page?: number;

  /**
   * Query param: When true, malicious connections appear first in the returned
   * connections.
   */
  prioritize_malicious?: boolean;

  /**
   * Query param: Filters the returned connections using a comma-separated list of
   * connection statuses. Accepted values: `active`, `infrequent`, and `inactive`.
   * The default value is `active`.
   */
  status?: string;

  /**
   * Query param: Includes connections whose URL contain one or more URL-encoded URLs
   * separated by commas.
   */
  urls?: string;
}

export interface ConnectionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Connections {
  export import ConnectionListResponse = ConnectionsAPI.ConnectionListResponse;
  export import ConnectionGetResponse = ConnectionsAPI.ConnectionGetResponse;
  export import ConnectionListParams = ConnectionsAPI.ConnectionListParams;
  export import ConnectionGetParams = ConnectionsAPI.ConnectionGetParams;
}
