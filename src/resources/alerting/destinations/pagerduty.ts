// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PagerdutyResource extends APIResource {
  /**
   * Creates a new token for integrating with PagerDuty.
   */
  create(params: PagerdutyCreateParams, options?: RequestOptions): APIPromise<PagerdutyCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect`,
        options,
      ) as APIPromise<{ result: PagerdutyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   */
  delete(params: PagerdutyDeleteParams, options?: RequestOptions): APIPromise<PagerdutyDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/alerting/v3/destinations/pagerduty`, options);
  }

  /**
   * Get a list of all configured PagerDuty services.
   */
  get(params: PagerdutyGetParams, options?: RequestOptions): PagePromise<PagerdutiesSinglePage, Pagerduty> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/alerting/v3/destinations/pagerduty`,
      SinglePage<Pagerduty>,
      options,
    );
  }

  /**
   * Links PagerDuty with the account using the integration token.
   */
  link(
    tokenID: string,
    params: PagerdutyLinkParams,
    options?: RequestOptions,
  ): APIPromise<PagerdutyLinkResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect/${tokenID}`,
        options,
      ) as APIPromise<{ result: PagerdutyLinkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PagerdutiesSinglePage = SinglePage<Pagerduty>;

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
  errors: Array<PagerdutyDeleteResponse.Error>;

  messages: Array<PagerdutyDeleteResponse.Message>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: PagerdutyDeleteResponse.ResultInfo;
}

export namespace PagerdutyDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

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

export declare namespace PagerdutyResource {
  export {
    type Pagerduty as Pagerduty,
    type PagerdutyCreateResponse as PagerdutyCreateResponse,
    type PagerdutyDeleteResponse as PagerdutyDeleteResponse,
    type PagerdutyLinkResponse as PagerdutyLinkResponse,
    type PagerdutiesSinglePage as PagerdutiesSinglePage,
    type PagerdutyCreateParams as PagerdutyCreateParams,
    type PagerdutyDeleteParams as PagerdutyDeleteParams,
    type PagerdutyGetParams as PagerdutyGetParams,
    type PagerdutyLinkParams as PagerdutyLinkParams,
  };
}
