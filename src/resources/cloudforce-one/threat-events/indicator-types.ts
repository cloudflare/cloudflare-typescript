// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class IndicatorTypes extends APIResource {
  /**
   * Lists all indicator types
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<IndicatorTypeListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/indicatorTypes`, options);
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

export declare namespace IndicatorTypes {
  export { type IndicatorTypeListResponse as IndicatorTypeListResponse };
}
