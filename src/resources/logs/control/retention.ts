// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RetentionAPI from './retention';

export class Retention extends APIResource {
  /**
   * Updates log retention flag for Logpull API.
   */
  create(
    zoneIdentifier: string,
    body: RetentionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RetentionCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/logs/control/retention/flag`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RetentionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets log retention flag for Logpull API.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RetentionGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/logs/control/retention/flag`, options) as Core.APIPromise<{
        result: RetentionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RetentionCreateResponse {
  flag?: boolean;
}

export interface RetentionGetResponse {
  flag?: boolean;
}

export interface RetentionCreateParams {
  /**
   * The log retention flag for Logpull API.
   */
  flag: boolean;
}

export namespace Retention {
  export import RetentionCreateResponse = RetentionAPI.RetentionCreateResponse;
  export import RetentionGetResponse = RetentionAPI.RetentionGetResponse;
  export import RetentionCreateParams = RetentionAPI.RetentionCreateParams;
}
