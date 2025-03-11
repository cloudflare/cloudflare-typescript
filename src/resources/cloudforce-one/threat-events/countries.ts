// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Countries extends APIResource {
  /**
   * Retrieves countries information for all countries
   */
  list(accountID: number, options?: RequestOptions): APIPromise<CountryListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/countries`, options);
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
