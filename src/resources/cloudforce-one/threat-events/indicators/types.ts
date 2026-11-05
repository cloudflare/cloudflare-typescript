// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTypes extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'indicators', 'types'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'indicators', 'types'] as const);

  /**
   * Lists the indicator types used in the datasets given by `datasetIds`, which
   * accepts dataset UUIDs or one scope value used alone. Without `datasetIds`, every
   * dataset you can read is included, analytics datasets too.
   *
   * @example
   * ```ts
   * const types =
   *   await client.cloudforceOne.threatEvents.indicators.types.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(params: TypeListParams, options?: RequestOptions): APIPromise<TypeListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/indicator-types`, {
      query,
      ...options,
    });
  }
}
export class Types extends BaseTypes {}

export interface TypeListResponse {
  items: TypeListResponse.Items;

  type: string;
}

export namespace TypeListResponse {
  export interface Items {
    type: string;
  }
}

export interface TypeListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Dataset UUIDs to query, or one standalone scope value:
   * 'operational' for readable intelligence datasets (isAnalytics=false),
   * 'analytics' for readable analytics datasets (isAnalytics=true), or 'all'/'\*'
   * for every readable dataset including analytics datasets. If not provided,
   * queries all accessible datasets, including analytics datasets.
   */
  datasetIds?: Array<string>;
}

export declare namespace Types {
  export { type TypeListResponse as TypeListResponse, type TypeListParams as TypeListParams };
}
