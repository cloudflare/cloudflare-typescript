// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CustomNameserversAPI from 'cloudflare/resources/zones/custom-nameservers';

export class CustomNameservers extends APIResource {
  /**
   * Set metadata for account-level custom nameservers on a zone.
   *
   * If you would like new zones in the account to use account custom nameservers by
   * default, use PUT /accounts/:identifier to set the account setting
   * use_account_custom_ns_by_default to true.
   */
  update(
    zoneId: string,
    body: CustomNameserverUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomNameserverUpdateResponse | null> {
    return (
      this._client.put(`/zones/${zoneId}/custom_ns`, { body, ...options }) as Core.APIPromise<{
        result: CustomNameserverUpdateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata for account-level custom nameservers on a zone.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CustomNameserverGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneId}/custom_ns`, options) as Core.APIPromise<{
        result: CustomNameserverGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CustomNameserverUpdateResponse = unknown | Array<unknown> | string;

export type CustomNameserverGetResponse = unknown | Array<unknown> | string;

export interface CustomNameserverUpdateParams {
  /**
   * Whether zone uses account-level custom nameservers.
   */
  enabled?: boolean;

  /**
   * The number of the name server set to assign to the zone.
   */
  ns_set?: number;
}

export namespace CustomNameservers {
  export import CustomNameserverUpdateResponse = CustomNameserversAPI.CustomNameserverUpdateResponse;
  export import CustomNameserverGetResponse = CustomNameserversAPI.CustomNameserverGetResponse;
  export import CustomNameserverUpdateParams = CustomNameserversAPI.CustomNameserverUpdateParams;
}
