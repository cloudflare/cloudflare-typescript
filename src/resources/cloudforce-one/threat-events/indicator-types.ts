// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class IndicatorTypes extends APIResource {
  /**
   * This Method is deprecated. Please use /events/dataset/:dataset_id/indicatorTypes
   * instead.
   *
   * @deprecated
   */
  list(
    params: IndicatorTypeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndicatorTypeListResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/indicatorTypes`, options);
  }
}

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
  account_id: string;
}

export declare namespace IndicatorTypes {
  export {
    type IndicatorTypeListResponse as IndicatorTypeListResponse,
    type IndicatorTypeListParams as IndicatorTypeListParams,
  };
}
