// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class BrandProtection extends APIResource {
  /**
   * Submit suspicious URL for scanning
   */
  submit(params: BrandProtectionSubmitParams, options?: Core.RequestOptions): Core.APIPromise<Submit> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/brand-protection/submit`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Submit }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets phishing details about a URL.
   */
  urlInfo(params: BrandProtectionURLInfoParams, options?: Core.RequestOptions): Core.APIPromise<Info> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/brand-protection/url-info`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Info }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Info {
  /**
   * List of categorizations applied to this submission.
   */
  categorizations?: Array<unknown>;

  /**
   * List of model results for completed scans.
   */
  model_results?: Array<unknown>;

  /**
   * List of signatures that matched against site content found when crawling the
   * URL.
   */
  rule_matches?: Array<unknown>;

  scan_status?: unknown;

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

export type RuleMatch = unknown;

export type ScanStatus = unknown;

export interface Submit {
  /**
   * URLs that were excluded from scanning because their domain is in our no-scan
   * list.
   */
  excluded_urls?: Array<unknown>;

  /**
   * URLs that were skipped because the same URL is currently being scanned
   */
  skipped_urls?: Array<unknown>;

  /**
   * URLs that were successfully submitted for scanning.
   */
  submitted_urls?: Array<unknown>;
}

export type URLInfoModelResults = unknown;

export interface BrandProtectionSubmitParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: URL(s) to filter submissions results by
   */
  url?: string;
}

export interface BrandProtectionURLInfoParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Submission URL(s) to filter submission results by.
   */
  url?: Array<string>;

  /**
   * Query param: Submission ID(s) to filter submission results by.
   */
  url_id?: Array<number>;
}

export declare namespace BrandProtection {
  export {
    type Info as Info,
    type RuleMatch as RuleMatch,
    type ScanStatus as ScanStatus,
    type Submit as Submit,
    type URLInfoModelResults as URLInfoModelResults,
    type BrandProtectionSubmitParams as BrandProtectionSubmitParams,
    type BrandProtectionURLInfoParams as BrandProtectionURLInfoParams,
  };
}
