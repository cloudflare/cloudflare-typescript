// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRegions extends APIResource {
  static override readonly _key: readonly ['dls', 'regions'] = Object.freeze(['dls', 'regions'] as const);

  /**
   * List DLS regions for an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const regionListResponse of client.dls.regions.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegionListParams,
    options?: RequestOptions,
  ): PagePromise<RegionListResponsesCursorPagination, RegionListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dls/regions`,
      CursorPagination<RegionListResponse>,
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
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(regionID: string, params: RegionGetParams, options?: RequestOptions): APIPromise<RegionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dls/regions/${regionID}`, options) as APIPromise<{
        result: RegionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Regions extends BaseRegions {}

export type RegionListResponsesCursorPagination = CursorPagination<RegionListResponse>;

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
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Query param: Filter regions by type. Omit to return all regions.
   */
  type?: 'managed' | 'custom';
}

export interface RegionGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export declare namespace Regions {
  export {
    type RegionListResponse as RegionListResponse,
    type RegionGetResponse as RegionGetResponse,
    type RegionListResponsesCursorPagination as RegionListResponsesCursorPagination,
    type RegionListParams as RegionListParams,
    type RegionGetParams as RegionGetParams,
  };
}
