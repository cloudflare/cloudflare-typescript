// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseByDataset extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'targetIndustries', 'byDataset'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'targetIndustries', 'byDataset'] as const);

  /**
   * List all target industries referenced in events for a specific dataset.
   *
   * @example
   * ```ts
   * const byDatasets =
   *   await client.cloudforceOne.threatEvents.targetIndustries.byDataset.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(
    datasetID: string,
    params: ByDatasetListParams,
    options?: RequestOptions,
  ): APIPromise<ByDatasetListResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/dataset/${datasetID}/targetIndustries`,
      options,
    );
  }
}
export class ByDataset extends BaseByDataset {}

export interface ByDatasetListResponse {
  items: ByDatasetListResponse.Items;

  type: string;
}

export namespace ByDatasetListResponse {
  export interface Items {
    type: string;
  }
}

export interface ByDatasetListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace ByDataset {
  export {
    type ByDatasetListResponse as ByDatasetListResponse,
    type ByDatasetListParams as ByDatasetListParams,
  };
}
