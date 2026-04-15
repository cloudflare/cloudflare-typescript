// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Limits extends APIResource {
  /**
   * Retrieves current DLP usage limits and quotas for the account, including maximum
   * allowed counts and current usage for custom entries, dataset cells, and document
   * fingerprints.
   *
   * @example
   * ```ts
   * const limits = await client.zeroTrust.dlp.limits.list({
   *   account_id: 'account_id',
   * });
   * ```
   */
  list(params?: LimitListParams, options?: Core.RequestOptions): Core.APIPromise<LimitListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LimitListResponse>;
  list(
    params: LimitListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LimitListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/limits`, options) as Core.APIPromise<{
        result: LimitListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LimitListResponse {
  /**
   * Maximum number of custom regex entries allowed for the account.
   */
  max_custom_regex_entries: number;

  /**
   * Maximum number of dataset cells allowed for the account, across all EDM and CWL
   * datasets.
   */
  max_dataset_cells: number;

  /**
   * Maximum number of document fingerprints allowed for the account.
   */
  max_document_fingerprints: number;

  /**
   * Number of custom regex entries currently configured for the account.
   */
  used_custom_regex_entries: number;

  /**
   * Number of dataset cells currently configured for the account, across all EDM and
   * CWL datasets. Document fingerprints do not count towards this limit.
   */
  used_dataset_cells: number;

  /**
   * Number of document fingerprints currently configured for the account.
   */
  used_document_fingerprints: number;
}

export interface LimitListParams {
  account_id?: string;
}

export declare namespace Limits {
  export { type LimitListResponse as LimitListResponse, type LimitListParams as LimitListParams };
}
