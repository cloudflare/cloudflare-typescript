// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CustomNameserversAPI from './custom-nameservers';
import * as Shared from '../shared';

export class CustomNameservers extends APIResource {
  /**
   * Set metadata for account-level custom nameservers on a zone.
   *
   * If you would like new zones in the account to use account custom nameservers by
   * default, use PUT /accounts/:identifier to set the account setting
   * use_account_custom_ns_by_default to true.
   *
   * Deprecated in favor of
   * [Update DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-update-dns-settings).
   */
  update(
    params: CustomNameserverUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: CustomNameserverUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata for account-level custom nameservers on a zone.
   *
   * Deprecated in favor of
   * [Show DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-list-dns-settings).
   */
  get(
    params: CustomNameserverGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverGetResponse> {
    const { zone_id } = params;
    return this._client.get(`/zones/${zone_id}/custom_ns`, options);
  }
}

export type CustomNameserverUpdateResponse = Array<string>;

export interface CustomNameserverGetResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  /**
   * Whether zone uses account-level custom nameservers.
   */
  enabled?: boolean;

  /**
   * The number of the name server set to assign to the zone.
   */
  ns_set?: number;

  result_info?: CustomNameserverGetResponse.ResultInfo;
}

export namespace CustomNameserverGetResponse {
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

export interface CustomNameserverUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether zone uses account-level custom nameservers.
   */
  enabled?: boolean;

  /**
   * Body param: The number of the name server set to assign to the zone.
   */
  ns_set?: number;
}

export interface CustomNameserverGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CustomNameservers {
  export import CustomNameserverUpdateResponse = CustomNameserversAPI.CustomNameserverUpdateResponse;
  export import CustomNameserverGetResponse = CustomNameserversAPI.CustomNameserverGetResponse;
  export import CustomNameserverUpdateParams = CustomNameserversAPI.CustomNameserverUpdateParams;
  export import CustomNameserverGetParams = CustomNameserversAPI.CustomNameserverGetParams;
}
