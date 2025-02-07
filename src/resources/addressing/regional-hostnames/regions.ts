// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Regions extends APIResource {
  /**
   * List all Regional Services regions available for use by this account.
   */
  list(
    params: RegionListParams,
    options?: RequestOptions,
  ): PagePromise<RegionListResponsesSinglePage, RegionListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/addressing/regional_hostnames/regions`,
      SinglePage<RegionListResponse>,
      options,
    );
  }
}

export type RegionListResponsesSinglePage = SinglePage<RegionListResponse>;

export interface RegionListResponse {
  /**
   * Identifying key for the region
   */
  key?: string;

  /**
   * Human-readable text label for the region
   */
  label?: string;
}

export interface RegionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Regions {
  export {
    type RegionListResponse as RegionListResponse,
    type RegionListResponsesSinglePage as RegionListResponsesSinglePage,
    type RegionListParams as RegionListParams,
  };
}
