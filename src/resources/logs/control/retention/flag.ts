// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../../core';
import { APIResource } from '../../../../resource';
import * as FlagAPI from './flag';

export class Flag extends APIResource {
  /**
   * Updates log retention flag for Logpull API.
   */
  create(
    zoneIdentifier: string,
    body: FlagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FlagCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/logs/control/retention/flag`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FlagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets log retention flag for Logpull API.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<FlagGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/logs/control/retention/flag`, options) as Core.APIPromise<{
        result: FlagGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FlagCreateResponse {
  flag?: boolean;
}

export interface FlagGetResponse {
  flag?: boolean;
}

export interface FlagCreateParams {
  /**
   * The log retention flag for Logpull API.
   */
  flag: boolean;
}

export namespace Flag {
  export import FlagCreateResponse = FlagAPI.FlagCreateResponse;
  export import FlagGetResponse = FlagAPI.FlagGetResponse;
  export import FlagCreateParams = FlagAPI.FlagCreateParams;
}
