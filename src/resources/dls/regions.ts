// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPagination, type CursorPaginationParams } from '../../pagination';

export class Regions extends APIResource {
  /**
   * List DLS regions for an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const regionListResponse of client.dls.regions.list(
   *   { account_id: 0 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RegionListResponsesCursorPagination, RegionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dls/regions`,
      RegionListResponsesCursorPagination,
      { query, ...options },
    );
  }

  /**
   * Get a DLS region
   *
   * @example
   * ```ts
   * const region = await client.dls.regions.get(
   *   'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   { account_id: 0 },
   * );
   * ```
   */
  get(
    regionId: string,
    params: RegionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dls/regions/${regionId}`, options) as Core.APIPromise<{
        result: RegionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RegionListResponsesCursorPagination extends CursorPagination<RegionListResponse> {}

export interface RegionListResponse {
  id: string;

  created_on: string;

  modified_on: string;

  name: string;

  region_key: string;

  version: number;

  version_created_on: string;
}

export interface RegionGetResponse {
  id: string;

  created_on: string;

  modified_on: string;

  name: string;

  region_key: string;

  version: number;

  version_created_on: string;
}

export interface RegionListParams extends CursorPaginationParams {
  /**
   * Path param
   */
  account_id: number;

  /**
   * Query param: Filter regions by type. Omit to return all regions.
   */
  type?: 'managed' | 'custom';
}

export interface RegionGetParams {
  account_id: number;
}

Regions.RegionListResponsesCursorPagination = RegionListResponsesCursorPagination;

export declare namespace Regions {
  export {
    type RegionListResponse as RegionListResponse,
    type RegionGetResponse as RegionGetResponse,
    RegionListResponsesCursorPagination as RegionListResponsesCursorPagination,
    type RegionListParams as RegionListParams,
    type RegionGetParams as RegionGetParams,
  };
}
