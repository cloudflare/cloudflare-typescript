// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Countries extends APIResource {
  /**
   * Retrieves countries information for all countries
   */
  list(params: CountryListParams, options?: RequestOptions): APIPromise<CountryListResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/countries`, options);
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

export interface CountryListParams {
  /**
   * Account ID
   */
  account_id: number;
}

export declare namespace Countries {
  export { type CountryListResponse as CountryListResponse, type CountryListParams as CountryListParams };
}
