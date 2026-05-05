// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogoMatchesAPI from './logo-matches';
import {
  BaseLogoMatches,
  LogoMatchDownloadParams,
  LogoMatchDownloadResponse,
  LogoMatchGetParams,
  LogoMatchGetResponse,
  LogoMatches,
} from './logo-matches';
import * as LogosAPI from './logos';
import { BaseLogos, LogoCreateParams, LogoCreateResponse, LogoDeleteParams, Logos } from './logos';
import * as MatchesAPI from './matches';
import {
  BaseMatches,
  MatchDownloadParams,
  MatchDownloadResponse,
  MatchGetParams,
  MatchGetResponse,
  Matches,
} from './matches';
import * as QueriesAPI from './queries';
import { BaseQueries, Queries, QueryBulkParams, QueryCreateParams, QueryDeleteParams } from './queries';
import * as V2API from './v2/v2';
import { BaseV2, V2 } from './v2/v2';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBrandProtection extends APIResource {
  static override readonly _key: readonly ['brandProtection'] = Object.freeze(['brandProtection'] as const);

  /**
   * Return new URL submissions
   */
  submit(
    params: BrandProtectionSubmitParams,
    options?: RequestOptions,
  ): APIPromise<BrandProtectionSubmitResponse> {
    const { account_id } = params;
    return this._client.post(path`/accounts/${account_id}/brand-protection/submit`, options);
  }

  /**
   * Return submitted URLs based on ID
   */
  urlInfo(
    params: BrandProtectionURLInfoParams,
    options?: RequestOptions,
  ): PagePromise<BrandProtectionURLInfoResponsesSinglePage, BrandProtectionURLInfoResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/brand-protection/url-info`,
      SinglePage<BrandProtectionURLInfoResponse>,
      options,
    );
  }
}
export class BrandProtection extends BaseBrandProtection {
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
  matches: MatchesAPI.Matches = new MatchesAPI.Matches(this._client);
  logos: LogosAPI.Logos = new LogosAPI.Logos(this._client);
  logoMatches: LogoMatchesAPI.LogoMatches = new LogoMatchesAPI.LogoMatches(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
}

export type BrandProtectionURLInfoResponsesSinglePage = SinglePage<BrandProtectionURLInfoResponse>;

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

BrandProtection.Queries = Queries;
BrandProtection.BaseQueries = BaseQueries;
BrandProtection.Matches = Matches;
BrandProtection.BaseMatches = BaseMatches;
BrandProtection.Logos = Logos;
BrandProtection.BaseLogos = BaseLogos;
BrandProtection.LogoMatches = LogoMatches;
BrandProtection.BaseLogoMatches = BaseLogoMatches;
BrandProtection.V2 = V2;
BrandProtection.BaseV2 = BaseV2;

export declare namespace BrandProtection {
  export {
    type Info as Info,
    type Submit as Submit,
    type BrandProtectionSubmitResponse as BrandProtectionSubmitResponse,
    type BrandProtectionURLInfoResponse as BrandProtectionURLInfoResponse,
    type BrandProtectionURLInfoResponsesSinglePage as BrandProtectionURLInfoResponsesSinglePage,
    type BrandProtectionSubmitParams as BrandProtectionSubmitParams,
    type BrandProtectionURLInfoParams as BrandProtectionURLInfoParams,
  };

  export {
    Queries as Queries,
    BaseQueries as BaseQueries,
    type QueryCreateParams as QueryCreateParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryBulkParams as QueryBulkParams,
  };

  export {
    Matches as Matches,
    BaseMatches as BaseMatches,
    type MatchDownloadResponse as MatchDownloadResponse,
    type MatchGetResponse as MatchGetResponse,
    type MatchDownloadParams as MatchDownloadParams,
    type MatchGetParams as MatchGetParams,
  };

  export {
    Logos as Logos,
    BaseLogos as BaseLogos,
    type LogoCreateResponse as LogoCreateResponse,
    type LogoCreateParams as LogoCreateParams,
    type LogoDeleteParams as LogoDeleteParams,
  };

  export {
    LogoMatches as LogoMatches,
    BaseLogoMatches as BaseLogoMatches,
    type LogoMatchDownloadResponse as LogoMatchDownloadResponse,
    type LogoMatchGetResponse as LogoMatchGetResponse,
    type LogoMatchDownloadParams as LogoMatchDownloadParams,
    type LogoMatchGetParams as LogoMatchGetParams,
  };

  export { V2 as V2, BaseV2 as BaseV2 };
}
