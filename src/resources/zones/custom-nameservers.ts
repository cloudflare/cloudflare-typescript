// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as CustomNameserversAPI from './custom-nameservers';

export class CustomNameservers extends APIResource {
  /**
   * Set metadata for account-level custom nameservers on a zone.
   *
   * If you would like new zones in the account to use account custom nameservers by
   * default, use PUT /accounts/:identifier to set the account setting
   * use_account_custom_ns_by_default to true.
   */
  update(params: CustomNameserverUpdateParams, options?: Core.RequestOptions): Core.APIPromise<CustomNameserverUpdateResponse | null> {
    const { zone_id, ...body } = params;
    return (this._client.put(`/zones/${zone_id}/custom_ns`, { body, ...options }) as Core.APIPromise<{ result: CustomNameserverUpdateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata for account-level custom nameservers on a zone.
   */
  get(params: CustomNameserverGetParams, options?: Core.RequestOptions): Core.APIPromise<CustomNameserverGetResponse | null> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/custom_ns`, options) as Core.APIPromise<{ result: CustomNameserverGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export type CustomNameserverUpdateResponse = Array<string>

export type CustomNameserverGetResponse = Array<unknown>

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
