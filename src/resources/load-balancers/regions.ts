// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Regions extends APIResource {
  /**
   * List all region mappings.
   *
   * @example
   * ```ts
   * const regions = await client.loadBalancers.regions.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  list(params?: RegionListParams, options?: Core.RequestOptions): Core.APIPromise<RegionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RegionListResponse>;
  list(
    params: RegionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/regions`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RegionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single region mapping.
   *
   * @example
   * ```ts
   * const region = await client.loadBalancers.regions.get(
   *   'WNAM',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    regionId:
      | 'WNAM'
      | 'ENAM'
      | 'WEU'
      | 'EEU'
      | 'NSAM'
      | 'SSAM'
      | 'OC'
      | 'ME'
      | 'NAF'
      | 'SAF'
      | 'SAS'
      | 'SEAS'
      | 'NEAS',
    params?: RegionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionGetResponse>;
  get(
    regionId:
      | 'WNAM'
      | 'ENAM'
      | 'WEU'
      | 'EEU'
      | 'NSAM'
      | 'SSAM'
      | 'OC'
      | 'ME'
      | 'NAF'
      | 'SAF'
      | 'SAS'
      | 'SEAS'
      | 'NEAS',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionGetResponse>;
  get(
    regionId:
      | 'WNAM'
      | 'ENAM'
      | 'WEU'
      | 'EEU'
      | 'NSAM'
      | 'SSAM'
      | 'OC'
      | 'ME'
      | 'NAF'
      | 'SAF'
      | 'SAS'
      | 'SEAS'
      | 'NEAS',
    params: RegionGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(regionId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/regions/${regionId}`,
        options,
      ) as Core.APIPromise<{ result: RegionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RegionListResponse = unknown | string | null;

/**
 * A list of countries and subdivisions mapped to a region.
 */
export type RegionGetResponse = unknown | string | null;

export interface RegionListParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Query param: Two-letter alpha-2 country code followed in ISO 3166-1.
   */
  country_code_a2?: string;

  /**
   * Query param: Two-letter subdivision code followed in ISO 3166-2.
   */
  subdivision_code?: string;

  /**
   * Query param: Two-letter subdivision code followed in ISO 3166-2.
   */
  subdivision_code_a2?: string;
}

export interface RegionGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export declare namespace Regions {
  export {
    type RegionListResponse as RegionListResponse,
    type RegionGetResponse as RegionGetResponse,
    type RegionListParams as RegionListParams,
    type RegionGetParams as RegionGetParams,
  };
}
