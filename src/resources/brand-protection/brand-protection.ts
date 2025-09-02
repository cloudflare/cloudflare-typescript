// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LogoMatchesAPI from './logo-matches';
import {
  LogoMatchDownloadParams,
  LogoMatchDownloadResponse,
  LogoMatchGetParams,
  LogoMatchGetResponse,
  LogoMatches,
} from './logo-matches';
import * as LogosAPI from './logos';
import { LogoCreateParams, LogoCreateResponse, LogoDeleteParams, Logos } from './logos';
import * as MatchesAPI from './matches';
import {
  MatchDownloadParams,
  MatchDownloadResponse,
  MatchGetParams,
  MatchGetResponse,
  Matches,
} from './matches';
import * as QueriesAPI from './queries';
import { Queries, QueryBulkParams, QueryCreateParams, QueryDeleteParams } from './queries';
import { SinglePage } from '../../pagination';

export class BrandProtection extends APIResource {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);

  /**
   * Return new URL submissions
   */
  submit(
    params: BrandProtectionSubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrandProtectionSubmitResponse> {
    const { account_id } = params;
    return this._client.post(`/accounts/${account_id}/brand-protection/submit`, options);
  }

  /**
   * Return submitted URLs based on ID
   */
  urlInfo(
    params: BrandProtectionURLInfoParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BrandProtectionURLInfoResponsesSinglePage, BrandProtectionURLInfoResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/brand-protection/url-info`,
      BrandProtectionURLInfoResponsesSinglePage,
      options,
    );
  }
}

export class BrandProtectionURLInfoResponsesSinglePage extends SinglePage<BrandProtectionURLInfoResponse> {}

export interface Info {
  /**
   * List of categorizations applied to this submission.
   */
  categorizations?: Array<Info.Categorization>;

  /**
   * List of model results for completed scans.
   */
  model_results?: Array<Info.ModelResult>;

  /**
   * List of signatures that matched against site content found when crawling the
   * URL.
   */
  rule_matches?: Array<Info.RuleMatch>;

  /**
   * Status of the most recent scan found.
   */
  scan_status?: Info.ScanStatus;

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

export namespace Info {
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
     * This is the score that is outputted by the model for this submission.
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

export interface Submit {
  /**
   * URLs that were excluded from scanning because their domain is in our no-scan
   * list.
   */
  excluded_urls?: Array<Submit.ExcludedURL>;

  /**
   * URLs that were skipped because the same URL is currently being scanned.
   */
  skipped_urls?: Array<Submit.SkippedURL>;

  /**
   * URLs that were successfully submitted for scanning.
   */
  submitted_urls?: Array<Submit.SubmittedURL>;
}

export namespace Submit {
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

export interface BrandProtectionSubmitResponse {
  skipped_urls?: Array<{ [key: string]: unknown }>;

  submitted_urls?: Array<{ [key: string]: unknown }>;
}

export type BrandProtectionURLInfoResponse = { [key: string]: unknown };

export interface BrandProtectionSubmitParams {
  account_id: string;
}

export interface BrandProtectionURLInfoParams {
  account_id: string;
}

BrandProtection.BrandProtectionURLInfoResponsesSinglePage = BrandProtectionURLInfoResponsesSinglePage;
BrandProtection.Queries = Queries;
BrandProtection.Matches = Matches;
BrandProtection.Logos = Logos;
BrandProtection.LogoMatches = LogoMatches;

export declare namespace BrandProtection {
  export {
    type Info as Info,
    type Submit as Submit,
    type BrandProtectionSubmitResponse as BrandProtectionSubmitResponse,
    type BrandProtectionURLInfoResponse as BrandProtectionURLInfoResponse,
    BrandProtectionURLInfoResponsesSinglePage as BrandProtectionURLInfoResponsesSinglePage,
    type BrandProtectionSubmitParams as BrandProtectionSubmitParams,
    type BrandProtectionURLInfoParams as BrandProtectionURLInfoParams,
  };

  export {
    Queries as Queries,
    type QueryCreateParams as QueryCreateParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryBulkParams as QueryBulkParams,
  };

  export {
    Matches as Matches,
    type MatchDownloadResponse as MatchDownloadResponse,
    type MatchGetResponse as MatchGetResponse,
    type MatchDownloadParams as MatchDownloadParams,
    type MatchGetParams as MatchGetParams,
  };

  export {
    Logos as Logos,
    type LogoCreateResponse as LogoCreateResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
  };

  export {
    LogoMatches as LogoMatches,
    type LogoMatchDownloadResponse as LogoMatchDownloadResponse,
    type LogoMatchGetResponse as LogoMatchGetResponse,
    type LogoMatchDownloadParams as LogoMatchDownloadParams,
    type LogoMatchGetParams as LogoMatchGetParams,
  };
}
