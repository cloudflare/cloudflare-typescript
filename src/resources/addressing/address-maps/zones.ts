// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as ZonesAPI from './zones';
import * as Shared from '../../shared';

export class Zones extends APIResource {
  /**
   * Add a zone as a member of a particular address map.
   */
  update(addressMapId: string, params: ZoneUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneUpdateResponse> {
    const { zone_id, account_id, body } = params;
    return this._client.put(`/accounts/${account_id}/addressing/address_maps/${addressMapId}/zones/${zone_id}`, { body: body, ...options });
  }

  /**
   * Remove a zone as a member of a particular address map.
   */
  delete(addressMapId: string, params: ZoneDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ZoneDeleteResponse> {
    const { zone_id, account_id } = params;
    return this._client.delete(`/accounts/${account_id}/addressing/address_maps/${addressMapId}/zones/${zone_id}`, options);
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ZoneDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;

  /**
   * Identifier
   */
  account_id: string;
}

export namespace Zones {
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
  export import ZoneUpdateParams = ZonesAPI.ZoneUpdateParams;
  export import ZoneDeleteParams = ZonesAPI.ZoneDeleteParams;
}
