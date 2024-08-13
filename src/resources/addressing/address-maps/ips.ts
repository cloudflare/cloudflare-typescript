// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as IPsAPI from './ips';
import * as Shared from '../../shared';

export class IPs extends APIResource {
  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   */
  update(
    addressMapId: string,
    ipAddress: string,
    params: IPUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPUpdateResponse> {
    const { account_id, body } = params;
    return this._client.put(
      `/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
      { body: body, ...options },
    );
  }

  /**
   * Remove an IP from a particular address map.
   */
  delete(
    addressMapId: string,
    ipAddress: string,
    params: IPDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
      options,
    );
  }
}

export interface IPUpdateResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: IPUpdateResponse.ResultInfo;
}

export namespace IPUpdateResponse {
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

export interface IPDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: IPDeleteResponse.ResultInfo;
}

export namespace IPDeleteResponse {
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

export interface IPUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface IPDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IPs {
  export import IPUpdateResponse = IPsAPI.IPUpdateResponse;
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
  export import IPUpdateParams = IPsAPI.IPUpdateParams;
  export import IPDeleteParams = IPsAPI.IPDeleteParams;
}
