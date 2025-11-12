// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  list(params: TargetIndustryListParams, options?: RequestOptions): APIPromise<TargetIndustryListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/targetIndustries`, {
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
   * provided, uses the default dataset.
   */
  datasetIds?: Array<string>;
}

export declare namespace TargetIndustries {
  export {
    type TargetIndustryListResponse as TargetIndustryListResponse,
    type TargetIndustryListParams as TargetIndustryListParams,
  };
}
