// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RegionsAPI from 'cloudflare/resources/load-balancers/regions';

export class Regions extends APIResource {
  /**
   * List all region mappings.
   */
  list(
    accountId: string,
    query?: RegionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<RegionListResponse>;
  list(
    accountId: string,
    query: RegionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/load_balancers/regions`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RegionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single region mapping.
   */
  get(
    accountId: string,
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
  ): Core.APIPromise<RegionGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/load_balancers/regions/${regionId}`,
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
   * Two-letter alpha-2 country code followed in ISO 3166-1.
   */
  country_code_a2?: string;

  /**
   * Two-letter subdivision code followed in ISO 3166-2.
   */
  subdivision_code?: string;

  /**
   * Two-letter subdivision code followed in ISO 3166-2.
   */
  subdivision_code_a2?: string;
}

export namespace Regions {
  export import RegionListResponse = RegionsAPI.RegionListResponse;
  export import RegionGetResponse = RegionsAPI.RegionGetResponse;
  export import RegionListParams = RegionsAPI.RegionListParams;
}
