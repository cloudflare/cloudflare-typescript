// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as RetentionAPI from './retention';

export class Retention extends APIResource {
  /**
   * Updates log retention flag for Logpull API.
   */
  create(params: RetentionCreateParams, options?: Core.RequestOptions): Core.APIPromise<RetentionCreateResponse | null> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/logs/control/retention/flag`, { body, ...options }) as Core.APIPromise<{ result: RetentionCreateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets log retention flag for Logpull API.
   */
  get(params: RetentionGetParams, options?: Core.RequestOptions): Core.APIPromise<RetentionGetResponse | null> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/logs/control/retention/flag`, options) as Core.APIPromise<{ result: RetentionGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface RetentionCreateResponse {
  /**
   * The log retention flag for Logpull API.
   */
  flag?: boolean;
}

export interface RetentionGetResponse {
  /**
   * The log retention flag for Logpull API.
   */
  flag?: boolean;
}

export interface RetentionCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The log retention flag for Logpull API.
   */
  flag?: boolean;
}

export interface RetentionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Retention {
  export import RetentionCreateResponse = RetentionAPI.RetentionCreateResponse;
  export import RetentionGetResponse = RetentionAPI.RetentionGetResponse;
  export import RetentionCreateParams = RetentionAPI.RetentionCreateParams;
  export import RetentionGetParams = RetentionAPI.RetentionGetParams;
}
