// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as PagerdutyAPI from './pagerduty';
import * as Shared from '../../shared';

export class PagerdutyResource extends APIResource {
  /**
   * Creates a new token for integrating with PagerDuty.
   */
  create(params: PagerdutyCreateParams, options?: Core.RequestOptions): Core.APIPromise<PagerdutyCreateResponse> {
    const { account_id } = params;
    return (this._client.post(`/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect`, options) as Core.APIPromise<{ result: PagerdutyCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   */
  delete(params: PagerdutyDeleteParams, options?: Core.RequestOptions): Core.APIPromise<PagerdutyDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/alerting/v3/destinations/pagerduty`, options);
  }

  /**
   * Get a list of all configured PagerDuty services.
   */
  get(params: PagerdutyGetParams, options?: Core.RequestOptions): Core.APIPromise<PagerdutyGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/alerting/v3/destinations/pagerduty`, options) as Core.APIPromise<{ result: PagerdutyGetResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Links PagerDuty with the account using the integration token.
   */
  link(tokenId: string, params: PagerdutyLinkParams, options?: Core.RequestOptions): Core.APIPromise<PagerdutyLinkResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect/${tokenId}`, options) as Core.APIPromise<{ result: PagerdutyLinkResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface Pagerduty {
  /**
   * UUID
   */
  id?: string;

  /**
   * The name of the pagerduty service.
   */
  name?: string;
}

export interface PagerdutyCreateResponse {
  /**
   * token in form of UUID
   */
  id?: string;
}

export interface PagerdutyDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: PagerdutyDeleteResponse.ResultInfo;
}

export namespace PagerdutyDeleteResponse {
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

export type PagerdutyGetResponse = Array<Pagerduty>

export interface PagerdutyLinkResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface PagerdutyCreateParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface PagerdutyDeleteParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface PagerdutyGetParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface PagerdutyLinkParams {
  /**
   * The account id
   */
  account_id: string;
}

export namespace PagerdutyResource {
  export import Pagerduty = PagerdutyAPI.Pagerduty;
  export import PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export import PagerdutyCreateParams = PagerdutyAPI.PagerdutyCreateParams;
  export import PagerdutyDeleteParams = PagerdutyAPI.PagerdutyDeleteParams;
  export import PagerdutyGetParams = PagerdutyAPI.PagerdutyGetParams;
  export import PagerdutyLinkParams = PagerdutyAPI.PagerdutyLinkParams;
}
