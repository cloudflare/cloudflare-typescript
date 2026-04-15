// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Countries extends APIResource {
  /**
   * Retrieves countries information for all countries
   *
   * @example
   * ```ts
   * const countries =
   *   await client.cloudforceOne.threatEvents.countries.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params?: CountryListParams, options?: Core.RequestOptions): Core.APIPromise<CountryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CountryListResponse>;
  list(
    params: CountryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CountryListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/countries`, options);
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
   * Account ID.
   */
  account_id?: string;
}

export declare namespace Countries {
  export { type CountryListResponse as CountryListResponse, type CountryListParams as CountryListParams };
}
