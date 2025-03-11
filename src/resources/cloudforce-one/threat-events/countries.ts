// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Countries extends APIResource {
  /**
   * Retrieves countries information for all countries
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<CountryListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/countries`, options);
  }
}

export type CountryListResponse = Array<CountryListResponse.CountryListResponseItem>;

export namespace CountryListResponse {
  export interface CountryListResponseItem {
    result: Array<CountryListResponseItem.Result>;

    success: string;
  }

  export namespace CountryListResponseItem {
    export interface Result {
      alpha3: string;

      name: string;
    }
  }
}

export declare namespace Countries {
  export { type CountryListResponse as CountryListResponse };
}
