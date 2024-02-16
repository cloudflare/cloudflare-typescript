// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PagerdutyAPI from 'cloudflare/resources/alerting/v3/destinations/pagerduty';

export class Pagerduty extends APIResource {
  /**
   * Creates a new token for integrating with PagerDuty.
   */
  createToken(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyCreateTokenResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty/connect`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyCreateTokenResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all the PagerDuty Services connected to the account.
   */
  deleteAll(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PagerdutyDeleteAllResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/alerting/v3/destinations/pagerduty`,
        options,
      ) as Core.APIPromise<{ result: PagerdutyDeleteAllResponse | null }>
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

export interface PagerdutyCreateTokenResponse {
  /**
   * UUID
   */
  id?: string;
}

export type PagerdutyDeleteAllResponse = unknown | Array<unknown> | string;

export interface PagerdutyLinkResponse {
  /**
   * UUID
   */
  id?: string;
}

export namespace Pagerduty {
  export import PagerdutyCreateTokenResponse = PagerdutyAPI.PagerdutyCreateTokenResponse;
  export import PagerdutyDeleteAllResponse = PagerdutyAPI.PagerdutyDeleteAllResponse;
  export import PagerdutyLinkResponse = PagerdutyAPI.PagerdutyLinkResponse;
}
