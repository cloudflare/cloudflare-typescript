// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Zones extends APIResource {
  /**
   * Add a zone as a member of a particular address map.
   */
  update(
    addressMapID: string,
    params: ZoneUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ZoneUpdateResponse> {
    const { zone_id, account_id, body } = params;
    return this._client.put(
      path`/accounts/${account_id}/addressing/address_maps/${addressMapID}/zones/${zone_id}`,
      { body: body, ...options },
    );
  }

  /**
   * Remove a zone as a member of a particular address map.
   */
  delete(
    addressMapID: string,
    params: ZoneDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ZoneDeleteResponse> {
    const { zone_id, account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/addressing/address_maps/${addressMapID}/zones/${zone_id}`,
      options,
    );
  }
}

export interface ZoneUpdateResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: ZoneUpdateResponse.ResultInfo;
}

export namespace ZoneUpdateResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface ZoneDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: ZoneDeleteResponse.ResultInfo;
}

export namespace ZoneDeleteResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface ZoneUpdateParams {
  /**
   * Path param: Identifier of a zone.
   */
  zone_id: string;

  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ZoneDeleteParams {
  /**
   * Identifier of a zone.
   */
  zone_id: string;

  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export declare namespace Zones {
  export {
    type ZoneUpdateResponse as ZoneUpdateResponse,
    type ZoneDeleteResponse as ZoneDeleteResponse,
    type ZoneUpdateParams as ZoneUpdateParams,
    type ZoneDeleteParams as ZoneDeleteParams,
  };
}
