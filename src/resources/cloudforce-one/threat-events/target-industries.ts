// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class TargetIndustries extends APIResource {
  /**
   * Lists target industries across multiple datasets
   *
   * @example
   * ```ts
   * const targetIndustries =
   *   await client.cloudforceOne.threatEvents.targetIndustries.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(
    params: TargetIndustryListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetIndustryListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/targetIndustries`, {
      query,
      ...options,
    });
  }
}

export interface TargetIndustryListResponse {
  items: TargetIndustryListResponse.Items;

  type: string;
}

export namespace TargetIndustryListResponse {
  export interface Items {
    type: string;
  }
}

export interface TargetIndustryListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Array of dataset IDs to query target industries from. If not
   * provided, returns all target industries from Event tables across all datasets.
   */
  datasetIds?: Array<string>;
}

export declare namespace TargetIndustries {
  export {
    type TargetIndustryListResponse as TargetIndustryListResponse,
    type TargetIndustryListParams as TargetIndustryListParams,
  };
}
