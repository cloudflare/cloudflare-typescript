// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerdutyAPI from 'cloudflare/resources/alerting/v3/destinations/pagerduty';

export class Pagerduty extends APIResource {
  /**
   * Creates a new token for integrating with PagerDuty.
   */
  create(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PagerdutyCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   */
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PagerdutyDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a list of all configured PagerDuty services.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<PagerdutyGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Links PagerDuty with the account using the integration token.
   */
  link(
    accountId: string,
    tokenId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyLinkResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect/${tokenId}`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyLinkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PagerdutyCreateResponse {
  /**
   * UUID
   */
  id?: string;
}

export type PagerdutyDeleteResponse = unknown | Array<unknown> | string;

export type PagerdutyGetResponse = Array<PagerdutyGetResponse.PagerdutyGetResponseItem>;

export namespace PagerdutyGetResponse {
  export interface PagerdutyGetResponseItem {
    /**
     * UUID
     */
    id?: string;

    /**
     * The name of the pagerduty service.
     */
    name?: string;
  }
}

export interface PagerdutyLinkResponse {
  /**
   * UUID
   */
  id?: string;
}

export namespace Pagerduty {
  export import PagerdutyCreateResponse = PagerdutyAPI.PagerdutyCreateResponse;
  export import PagerdutyDeleteResponse = PagerdutyAPI.PagerdutyDeleteResponse;
  export import PagerdutyGetResponse = PagerdutyAPI.PagerdutyGetResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
}
