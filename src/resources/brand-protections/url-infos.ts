// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as URLInfosAPI from 'cloudflare/resources/brand-protections/url-infos';

export class URLInfos extends APIResource {
  /**
   * Get results for a URL scan
   */
  phishingURLInformationGetResultsForAURLScan(
    accountId: string,
    query?: URLInfoPhishingURLInformationGetResultsForAURLScanParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLInfoPhishingURLInformationGetResultsForAURLScanResponse>;
  phishingURLInformationGetResultsForAURLScan(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLInfoPhishingURLInformationGetResultsForAURLScanResponse>;
  phishingURLInformationGetResultsForAURLScan(
    accountId: string,
    query: URLInfoPhishingURLInformationGetResultsForAURLScanParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<URLInfoPhishingURLInformationGetResultsForAURLScanResponse> {
    if (isRequestOptions(query)) {
      return this.phishingURLInformationGetResultsForAURLScan(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/brand-protection/url-info`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: URLInfoPhishingURLInformationGetResultsForAURLScanResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface URLInfoPhishingURLInformationGetResultsForAURLScanResponse {
  /**
   * List of categorizations applied to this submission.
   */
  categorizations?: Array<URLInfoPhishingURLInformationGetResultsForAURLScanResponse.Categorization>;

  /**
   * List of model results for completed scans.
   */
  model_results?: Array<URLInfoPhishingURLInformationGetResultsForAURLScanResponse.ModelResult>;

  /**
   * List of signatures that matched against site content found when crawling the
   * URL.
   */
  rule_matches?: Array<URLInfoPhishingURLInformationGetResultsForAURLScanResponse.RuleMatch>;

  /**
   * Status of the most recent scan found.
   */
  scan_status?: URLInfoPhishingURLInformationGetResultsForAURLScanResponse.ScanStatus;

  /**
   * For internal use.
   */
  screenshot_download_signature?: string;

  /**
   * For internal use.
   */
  screenshot_path?: string;

  /**
   * URL that was submitted.
   */
  url?: string;
}

export namespace URLInfoPhishingURLInformationGetResultsForAURLScanResponse {
  export interface Categorization {
    /**
     * Name of the category applied.
     */
    category?: string;

    /**
     * Result of human review for this categorization.
     */
    verification_status?: string;
  }

  export interface ModelResult {
    /**
     * Name of the model.
     */
    model_name?: string;

    /**
     * Score output by the model for this submission.
     */
    model_score?: number;
  }

  export interface RuleMatch {
    /**
     * For internal use.
     */
    banning?: boolean;

    /**
     * For internal use.
     */
    blocking?: boolean;

    /**
     * Description of the signature that matched.
     */
    description?: string;

    /**
     * Name of the signature that matched.
     */
    name?: string;
  }

  /**
   * Status of the most recent scan found.
   */
  export interface ScanStatus {
    /**
     * Timestamp of when the submission was processed.
     */
    last_processed?: string;

    /**
     * For internal use.
     */
    scan_complete?: boolean;

    /**
     * Status code that the crawler received when loading the submitted URL.
     */
    status_code?: number;

    /**
     * ID of the most recent submission.
     */
    submission_id?: number;
  }
}

export interface URLInfoPhishingURLInformationGetResultsForAURLScanParams {
  url?: string;

  url_id_param?: URLInfoPhishingURLInformationGetResultsForAURLScanParams.URLIDParam;
}

export namespace URLInfoPhishingURLInformationGetResultsForAURLScanParams {
  export interface URLIDParam {
    /**
     * Submission ID(s) to filter submission results by.
     */
    url_id?: number;
  }
}

export namespace URLInfos {
  export import URLInfoPhishingURLInformationGetResultsForAURLScanResponse = URLInfosAPI.URLInfoPhishingURLInformationGetResultsForAURLScanResponse;
  export import URLInfoPhishingURLInformationGetResultsForAURLScanParams = URLInfosAPI.URLInfoPhishingURLInformationGetResultsForAURLScanParams;
}
