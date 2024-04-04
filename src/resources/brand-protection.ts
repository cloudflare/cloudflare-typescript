// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrandProtectionAPI from 'cloudflare/resources/brand-protection';

export class BrandProtection extends APIResource {
  /**
   * Submit suspicious URL for scanning
   */
  submit(
    params: BrandProtectionSubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelPhishingURLSubmit> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/brand-protection/submit`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IntelPhishingURLSubmit }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get results for a URL scan
   */
  urlInfo(
    params: BrandProtectionURLInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntelPhishingURLInfo> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/brand-protection/url-info`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: IntelPhishingURLInfo }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntelPhishingURLInfo {
  /**
   * List of categorizations applied to this submission.
   */
  categorizations?: Array<UnnamedSchemaRef209db30ed499548152d6f3bccf720b54>;

  /**
   * List of model results for completed scans.
   */
  model_results?: Array<UnnamedSchemaRef9b4c9779a35b172cb69c71389ebc7014>;

  /**
   * List of signatures that matched against site content found when crawling the
   * URL.
   */
  rule_matches?: Array<UnnamedSchemaRef3e10ea08deb8102a27500f986488c1e8>;

  /**
   * Status of the most recent scan found.
   */
  scan_status?: UnnamedSchemaRefA64e2a18a86750b6bd72cdf37ecfd869;

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

export interface IntelPhishingURLSubmit {
  /**
   * URLs that were excluded from scanning because their domain is in our no-scan
   * list.
   */
  excluded_urls?: Array<UnnamedSchemaRef767c0981cf47f45f0c766253dbd18669>;

  /**
   * URLs that were skipped because the same URL is currently being scanned
   */
  skipped_urls?: Array<UnnamedSchemaRef44e66100b948bfe723054c56b6144766>;

  /**
   * URLs that were successfully submitted for scanning.
   */
  submitted_urls?: Array<UnnamedSchemaRef39419d70e2399b28b15cd660afd342fb>;
}

export interface UnnamedSchemaRef209db30ed499548152d6f3bccf720b54 {
  /**
   * Name of the category applied.
   */
  category?: string;

  /**
   * Result of human review for this categorization.
   */
  verification_status?: string;
}

export interface UnnamedSchemaRef39419d70e2399b28b15cd660afd342fb {
  /**
   * URL that was submitted.
   */
  url?: string;

  /**
   * ID assigned to this URL submission. Used to retrieve scanning results.
   */
  url_id?: number;
}

export interface UnnamedSchemaRef3e10ea08deb8102a27500f986488c1e8 {
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

export interface UnnamedSchemaRef44e66100b948bfe723054c56b6144766 {
  /**
   * URL that was skipped.
   */
  url?: string;

  /**
   * ID of the submission of that URL that is currently scanning.
   */
  url_id?: number;
}

export interface UnnamedSchemaRef767c0981cf47f45f0c766253dbd18669 {
  /**
   * URL that was excluded.
   */
  url?: string;
}

export interface UnnamedSchemaRef9b4c9779a35b172cb69c71389ebc7014 {
  /**
   * Name of the model.
   */
  model_name?: string;

  /**
   * Score output by the model for this submission.
   */
  model_score?: number;
}

/**
 * Status of the most recent scan found.
 */
export interface UnnamedSchemaRefA64e2a18a86750b6bd72cdf37ecfd869 {
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
   * Query param:
   */
  url?: string;

  /**
   * Query param:
   */
  url_id_param?: BrandProtectionURLInfoParams.URLIDParam;
}

export namespace BrandProtectionURLInfoParams {
  export interface URLIDParam {
    /**
     * Submission ID(s) to filter submission results by.
     */
    url_id?: number;
  }
}

export namespace BrandProtection {
  export import IntelPhishingURLInfo = BrandProtectionAPI.IntelPhishingURLInfo;
  export import IntelPhishingURLSubmit = BrandProtectionAPI.IntelPhishingURLSubmit;
  export import UnnamedSchemaRef209db30ed499548152d6f3bccf720b54 = BrandProtectionAPI.UnnamedSchemaRef209db30ed499548152d6f3bccf720b54;
  export import UnnamedSchemaRef39419d70e2399b28b15cd660afd342fb = BrandProtectionAPI.UnnamedSchemaRef39419d70e2399b28b15cd660afd342fb;
  export import UnnamedSchemaRef3e10ea08deb8102a27500f986488c1e8 = BrandProtectionAPI.UnnamedSchemaRef3e10ea08deb8102a27500f986488c1e8;
  export import UnnamedSchemaRef44e66100b948bfe723054c56b6144766 = BrandProtectionAPI.UnnamedSchemaRef44e66100b948bfe723054c56b6144766;
  export import UnnamedSchemaRef767c0981cf47f45f0c766253dbd18669 = BrandProtectionAPI.UnnamedSchemaRef767c0981cf47f45f0c766253dbd18669;
  export import UnnamedSchemaRef9b4c9779a35b172cb69c71389ebc7014 = BrandProtectionAPI.UnnamedSchemaRef9b4c9779a35b172cb69c71389ebc7014;
  export import UnnamedSchemaRefA64e2a18a86750b6bd72cdf37ecfd869 = BrandProtectionAPI.UnnamedSchemaRefA64e2a18a86750b6bd72cdf37ecfd869;
  export import BrandProtectionSubmitParams = BrandProtectionAPI.BrandProtectionSubmitParams;
  export import BrandProtectionURLInfoParams = BrandProtectionAPI.BrandProtectionURLInfoParams;
}
