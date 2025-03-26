// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Regions extends APIResource {
  /**
   * List all region mappings.
   */
  list(params: RegionListParams, options?: RequestOptions): APIPromise<RegionListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/load_balancers/regions`, {
        query,
        ...options,
      }) as APIPromise<{ result: RegionListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single region mapping.
   */
  get(
    regionID:
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
    params: RegionGetParams,
    options?: RequestOptions,
  ): APIPromise<RegionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/load_balancers/regions/${regionID}`,
        options,
      ) as APIPromise<{ result: RegionGetResponse }>
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
   * Path param: Identifier
   */
  account_id: string;

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
   * Identifier
   */
  account_id: string;
}

export declare namespace Regions {
  export {
    type RegionListResponse as RegionListResponse,
    type RegionGetResponse as RegionGetResponse,
    type RegionListParams as RegionListParams,
    type RegionGetParams as RegionGetParams,
  };
}
