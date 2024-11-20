// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DOMAPI from './dom';
import { DOM, DOMGetResponse } from './dom';
import * as HARAPI from './har';
import { HAR, HARGetResponse } from './har';
import * as ResponsesAPI from './responses';
import { ResponseGetResponse, Responses } from './responses';
import * as ResultAPI from './result';
import { Result, ResultGetResponse } from './result';
import * as ScansAPI from './scans';
import {
  ScanCreateParams,
  ScanCreateResponse,
  ScanGetParams,
  ScanGetResponse,
  ScanHARResponse,
  ScanListParams,
  ScanListResponse,
  ScanScreenshotParams,
  Scans,
} from './scans';
import * as ScreenshotAPI from './screenshot';
import { Screenshot, ScreenshotGetParams } from './screenshot';

export class URLScanner extends APIResource {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
  scans: ScansAPI.Scans = new ScansAPI.Scans(this._client);
  dom: DOMAPI.DOM = new DOMAPI.DOM(this._client);
  har: HARAPI.HAR = new HARAPI.HAR(this._client);
  result: ResultAPI.Result = new ResultAPI.Result(this._client);
  screenshot: ScreenshotAPI.Screenshot = new ScreenshotAPI.Screenshot(this._client);

  /**
   * Submit URLs to scan. Check limits at
   * https://developers.cloudflare.com/security-center/investigate/scan-limits/ and
   * take into account scans submitted in bulk have lower priority and may take
   * longer to finish.
   */
  bulk(
    accountId: string,
    body: URLScannerBulkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLScannerBulkResponse> {
    return this._client.post(`/accounts/${accountId}/urlscanner/v2/bulk`, { body, ...options });
  }
}

export interface URLScannerDomain {
  id: number;

  name: string;

  super_category_id?: number;
}

export interface URLScannerTask {
  effectiveUrl: string;

  errors: Array<URLScannerTask.Error>;

  location: string;

  region: string;

  status: string;

  success: boolean;

  time: string;

  url: string;

  uuid: string;

  visibility: string;
}

export namespace URLScannerTask {
  export interface Error {
    message: string;
  }
}

export type URLScannerBulkResponse = Array<URLScannerBulkResponse.URLScannerBulkResponseItem>;

export namespace URLScannerBulkResponse {
  export interface URLScannerBulkResponseItem {
    /**
     * URL to api report.
     */
    api: string;

    /**
     * URL to report.
     */
    result: string;

    /**
     * Submitted URL
     */
    url: string;

    /**
     * Scan ID.
     */
    uuid: string;

    /**
     * Submitted visibility status.
     */
    visibility: string;

    options?: URLScannerBulkResponseItem.Options;
  }

  export namespace URLScannerBulkResponseItem {
    export interface Options {
      useragent?: string;
    }
  }
}

export type URLScannerBulkParams = Array<URLScannerBulkParams.Body>;

export namespace URLScannerBulkParams {
  export interface Body {
    url: string;

    customagent?: string;

    /**
     * Set custom headers.
     */
    customHeaders?: Record<string, string>;

    referer?: string;

    /**
     * Take multiple screenshots targeting different device types.
     */
    screenshotsResolutions?: Array<'desktop' | 'mobile' | 'tablet'>;

    /**
     * The option `Public` means it will be included in listings like recent scans and
     * search results. `Unlisted` means it will not be included in the aforementioned
     * listings, users will need to have the scan's ID to access it. A a scan will be
     * automatically marked as unlisted if it fails, if it contains potential PII or
     * other sensitive material.
     */
    visibility?: 'Public' | 'Unlisted';
  }
}

URLScanner.Responses = Responses;
URLScanner.Scans = Scans;
URLScanner.DOM = DOM;
URLScanner.HAR = HAR;
URLScanner.Result = Result;
URLScanner.Screenshot = Screenshot;

export declare namespace URLScanner {
  export { Responses as Responses, type ResponseGetResponse as ResponseGetResponse };

  export {
    Scans as Scans,
    type ScanCreateResponse as ScanCreateResponse,
    type ScanListResponse as ScanListResponse,
    type ScanGetResponse as ScanGetResponse,
    type ScanHARResponse as ScanHARResponse,
    type ScanCreateParams as ScanCreateParams,
    type ScanListParams as ScanListParams,
    type ScanGetParams as ScanGetParams,
    type ScanScreenshotParams as ScanScreenshotParams,
  };

  export { DOM as DOM, type DOMGetResponse as DOMGetResponse };

  export { HAR as HAR, type HARGetResponse as HARGetResponse };

  export { Result as Result, type ResultGetResponse as ResultGetResponse };

  export { Screenshot as Screenshot, type ScreenshotGetParams as ScreenshotGetParams };
}
