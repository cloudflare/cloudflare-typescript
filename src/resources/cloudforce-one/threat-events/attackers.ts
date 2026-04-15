// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Attackers extends APIResource {
  /**
   * Lists attackers across multiple datasets
   *
   * @example
   * ```ts
   * const attackers =
   *   await client.cloudforceOne.threatEvents.attackers.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params?: AttackerListParams, options?: Core.RequestOptions): Core.APIPromise<AttackerListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AttackerListResponse>;
  list(
    params: AttackerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AttackerListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/attackers`, { query, ...options });
  }
}

export interface AttackerListResponse {
  items: AttackerListResponse.Items;

  type: string;
}

export namespace AttackerListResponse {
  export interface Items {
    type: string;
  }
}

export interface AttackerListParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Query param: Array of dataset IDs to query attackers from. If not provided, uses
   * the default dataset.
   */
  datasetIds?: Array<string>;
}

export declare namespace Attackers {
  export { type AttackerListResponse as AttackerListResponse, type AttackerListParams as AttackerListParams };
}
