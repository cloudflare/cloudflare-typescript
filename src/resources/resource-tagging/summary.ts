// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSummary extends APIResource {
  static override readonly _key: readonly ['resourceTagging', 'summary'] = Object.freeze([
    'resourceTagging',
    'summary',
  ] as const);

  /**
   * Lists all distinct tag keys and their distinct values across resources in an
   * account.
   */
  get(params: SummaryGetParams, options?: RequestOptions): APIPromise<SummaryGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/tags/summary`, { query, ...options }) as APIPromise<{
        result: SummaryGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Summary extends BaseSummary {}

/**
 * Contains an array of tag keys with their distinct values.
 */
export type SummaryGetResponse = Array<SummaryGetResponse.SummaryGetResponseItem>;

export namespace SummaryGetResponse {
  export interface SummaryGetResponseItem {
    /**
     * A tag key.
     */
    key: string;

    /**
     * All distinct values for this tag key.
     */
    values: Array<string>;
  }
}

export interface SummaryGetParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Cursor for pagination.
   */
  cursor?: string;
}

export declare namespace Summary {
  export { type SummaryGetResponse as SummaryGetResponse, type SummaryGetParams as SummaryGetParams };
}
