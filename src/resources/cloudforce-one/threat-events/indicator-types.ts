// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseIndicatorTypes extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'indicatorTypes'] = Object.freeze(
    ['cloudforceOne', 'threatEvents', 'indicatorTypes'] as const,
  );

  /**
   * This Method is deprecated. Please use /events/dataset/:dataset_id/indicatorTypes
   * instead.
   *
   * @deprecated
   */
  list(
    params: IndicatorTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IndicatorTypeListResponse> {
    const { account_id = this._client.accountID } = params ?? {};
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/indicatorTypes`, options);
  }
}
export class IndicatorTypes extends BaseIndicatorTypes {}

export interface IndicatorTypeListResponse {
  items: IndicatorTypeListResponse.Items;

  type: string;
}

export namespace IndicatorTypeListResponse {
  export interface Items {
    type: string;
  }
}

export interface IndicatorTypeListParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export declare namespace IndicatorTypes {
  export {
    type IndicatorTypeListResponse as IndicatorTypeListResponse,
    type IndicatorTypeListParams as IndicatorTypeListParams,
  };
}
