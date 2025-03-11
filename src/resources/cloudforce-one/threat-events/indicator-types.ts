// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IndicatorTypes extends APIResource {
  /**
   * Lists all indicator types
   */
  list(accountID: number, options?: RequestOptions): APIPromise<IndicatorTypeListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/indicatorTypes`, options);
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
