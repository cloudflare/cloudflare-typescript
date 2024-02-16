// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as URLScannerAPI from 'cloudflare/resources/url-scanner/url-scanner';
import * as ScansAPI from 'cloudflare/resources/url-scanner/scans';

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
  }
}

export interface URLScannerScanParams {
  /**
   * Return only scans created by account.
   */
  account_scans?: boolean;

  /**
   * Filter scans requested before date (inclusive).
   */
  date_end?: string;

  /**
   * Filter scans requested after date (inclusive).
   */
  date_start?: string;

  /**
   * Filter scans by hostname of _any_ request made by the webpage.
   */
  hostname?: string;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Pagination cursor to get the next set of results.
   */
  next_cursor?: string;

  /**
   * Filter scans by main page hostname .
   */
  page_hostname?: string;

  /**
   * Filter scans by exact match URL path (also supports suffix search).
   */
  page_path?: string;

  /**
   * Filter scans by exact match to scanned URL (_after redirects_)
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
   * Filter scans by exact match URL of _any_ request made by the webpage
   */
  url?: string;
}

export namespace URLScanner {
  export import URLScannerScanResponse = URLScannerAPI.URLScannerScanResponse;
  export import URLScannerScanParams = URLScannerAPI.URLScannerScanParams;
  export import Scans = ScansAPI.Scans;
  export import ScanCreateResponse = ScansAPI.ScanCreateResponse;
  export import ScanGetResponse = ScansAPI.ScanGetResponse;
  export import ScanHarResponse = ScansAPI.ScanHarResponse;
  export import ScanCreateParams = ScansAPI.ScanCreateParams;
  export import ScanScreenshotParams = ScansAPI.ScanScreenshotParams;
}
