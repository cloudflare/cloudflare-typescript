// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubmitsAPI from 'cloudflare/resources/brand-protections/submits';

export class Submits extends APIResource {
  /**
   * Submit suspicious URL for scanning
   */
  phishingURLScannerSubmitSuspiciousURLForScanning(
    accountId: string,
    body: SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse> {
    return (
      this._client.post(`/accounts/${accountId}/brand-protection/submit`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse {
  /**
   * URLs that were excluded from scanning because their domain is in our no-scan
   * list.
   */
  excluded_urls?: Array<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse.ExcludedURL>;

  /**
   * URLs that were skipped because the same URL is currently being scanned
   */
  skipped_urls?: Array<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse.SkippedURL>;

  /**
   * URLs that were successfully submitted for scanning.
   */
  submitted_urls?: Array<SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse.SubmittedURL>;
}

export namespace SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse {
  export interface ExcludedURL {
    /**
     * URL that was excluded.
     */
    url?: string;
  }

  export interface SkippedURL {
    /**
     * URL that was skipped.
     */
    url?: string;

    /**
     * ID of the submission of that URL that is currently scanning.
     */
    url_id?: number;
  }

  export interface SubmittedURL {
    /**
     * URL that was submitted.
     */
    url?: string;

    /**
     * ID assigned to this URL submission. Used to retrieve scanning results.
     */
    url_id?: number;
  }
}

export interface SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams {
  /**
   * URL(s) to filter submissions results by
   */
  url?: string;
}

export namespace Submits {
  export import SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse = SubmitsAPI.SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse;
  export import SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams = SubmitsAPI.SubmitPhishingURLScannerSubmitSuspiciousURLForScanningParams;
}
