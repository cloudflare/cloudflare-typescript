// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RegionsAPI from './regions';
import { SinglePage } from '../../../pagination';

export class Regions extends APIResource {
  /**
   * List all Regional Services regions available for use by this account.
   */
  list(
    params: RegionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RegionListResponsesSinglePage, RegionListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/regional_hostnames/regions`,
      RegionListResponsesSinglePage,
      options,
    );
  }
}

export class RegionListResponsesSinglePage extends SinglePage<RegionListResponse> {}

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

export namespace Regions {
  export import RegionListResponse = RegionsAPI.RegionListResponse;
  export import RegionListResponsesSinglePage = RegionsAPI.RegionListResponsesSinglePage;
  export import RegionListParams = RegionsAPI.RegionListParams;
}
