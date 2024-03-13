// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerdutyAPI from 'cloudflare/resources/alerting/v3/destinations/pagerduty';

export class Pagerduty extends APIResource {
  /**
   * Creates a new token for integrating with PagerDuty.
   */
  create(
    params: PagerdutyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   */
  delete(
    params: PagerdutyDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/alerting/v3/destinations/pagerduty`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a list of all configured PagerDuty services.
   */
  get(
    params: PagerdutyGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/destinations/pagerduty`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Links PagerDuty with the account using the integration token.
   */
  link(
    tokenId: string,
    params: PagerdutyLinkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyLinkResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/destinations/pagerduty/connect/${tokenId}`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyLinkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AaaPagerduty {
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

export type PagerdutyDeleteResponse = unknown | Array<unknown> | string;

export type PagerdutyGetResponse = Array<AaaPagerduty>;

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

export namespace Pagerduty {
  export import AaaPagerduty = PagerdutyAPI.AaaPagerduty;
  export import PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
  export import PagerdutyCreateParams = PagerdutyAPI.PagerdutyCreateParams;
  export import PagerdutyDeleteParams = PagerdutyAPI.PagerdutyDeleteParams;
  export import PagerdutyGetParams = PagerdutyAPI.PagerdutyGetParams;
  export import PagerdutyLinkParams = PagerdutyAPI.PagerdutyLinkParams;
}
