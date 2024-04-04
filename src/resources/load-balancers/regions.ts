// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RegionsAPI from 'cloudflare/resources/load-balancers/regions';
import * as Shared from 'cloudflare/resources/shared';

export class Regions extends APIResource {
  /**
   * List all region mappings.
   */
  list(
    params: RegionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/regions`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single region mapping.
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
    params: RegionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/load_balancers/regions/${regionId}`,
        options,
      ) as Core.APIPromise<{ result: RegionGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export namespace Regions {
  export import RegionGetResponse = RegionsAPI.RegionGetResponse;
  export import RegionListParams = RegionsAPI.RegionListParams;
  export import RegionGetParams = RegionsAPI.RegionGetParams;
}
