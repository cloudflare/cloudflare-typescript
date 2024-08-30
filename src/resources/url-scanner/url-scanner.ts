// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ScansAPI from './scans';

export class URLScanner extends APIResource {
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);

  /**
   * Search scans by date and webpages' requests, including full URL (after
   * redirects), hostname, and path. <br/> A successful scan will appear in search
   * results a few minutes after finishing but may take much longer if the system in
   * under load. By default, only successfully completed scans will appear in search
   * results, unless searching by `scanId`. Please take into account that older scans
   * may be removed from the search index at an unspecified time.
   */
  scan(
    accountId: string,
    query?: URLScannerScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLScannerScanResponse>;
  scan(accountId: string, options?: Core.RequestOptions): Core.APIPromise<URLScannerScanResponse>;
  scan(
    accountId: string,
    query: URLScannerScanParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLScannerScanResponse> {
    if (isRequestOptions(query)) {
      return this.scan(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/urlscanner/scan`, { query, ...options }) as Core.APIPromise<{
        result: URLScannerScanResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface URLScannerScanResponse {
  tasks: Array<URLScannerScanResponse.Task>;
}

export namespace URLScannerScanResponse {
  export interface Task {
    /**
     * Alpha-2 country code
     */
    country: string;

    /**
     * Whether scan was successful or not
     */
    success: boolean;

    /**
     * When scan was submitted (UTC)
     */
    time: string;

    /**
     * Scan url (after redirects)
     */
    url: string;

    /**
     * Scan id
     */
    uuid: string;

    /**
     * Visibility status.
     */
    visibility: string;
  }
}

export interface URLScannerScanParams {
  /**
   * Return only scans created by account.
   */
  account_scans?: boolean;

  /**
   * Filter scans by Autonomous System Number (ASN) of _any_ request made by the
   * webpage.
   */
  asn?: string;

  /**
   * Filter scans requested before date (inclusive).
   */
  date_end?: string;

  /**
   * Filter scans requested after date (inclusive).
   */
  date_start?: string;

  /**
   * Filter scans by hash of any html/js/css request made by the webpage.
   */
  hash?: string;

  /**
   * Filter scans by hostname of _any_ request made by the webpage.
   */
  hostname?: string;

  /**
   * Filter scans by IP address (IPv4 or IPv6) of _any_ request made by the webpage.
   */
  ip?: string;

  /**
   * Filter scans by malicious verdict.
   */
  is_malicious?: boolean;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Pagination cursor to get the next set of results.
   */
  next_cursor?: string;

  /**
   * Filter scans by main page Autonomous System Number (ASN).
   */
  page_asn?: string;

  /**
   * Filter scans by main page hostname (domain of effective URL).
   */
  page_hostname?: string;

  /**
   * Filter scans by main page IP address (IPv4 or IPv6).
   */
  page_ip?: string;

  /**
   * Filter scans by exact match of effective URL path (also supports suffix search).
   */
  page_path?: string;

  /**
   * Filter scans by submitted or scanned URL
   */
  page_url?: string;

  /**
   * Filter scans by url path of _any_ request made by the webpage.
   */
  path?: string;

  /**
   * Scan uuid
   */
  scanId?: string;

  /**
   * Filter scans by URL of _any_ request made by the webpage
   */
  url?: string;
}

export namespace URLScanner {
  export import Scans = ScansAPI.Scans;
  export import URLScannerDomain = ScansAPI.URLScannerDomain;
  export import URLScannerTask = ScansAPI.URLScannerTask;
  export import ScanCreateResponse = ScansAPI.ScanCreateResponse;
  export import ScanGetResponse = ScansAPI.ScanGetResponse;
  export import ScanHarResponse = ScansAPI.ScanHarResponse;
  export import ScanCreateParams = ScansAPI.ScanCreateParams;
  export import ScanGetParams = ScansAPI.ScanGetParams;
  export import ScanScreenshotParams = ScansAPI.ScanScreenshotParams;
}
