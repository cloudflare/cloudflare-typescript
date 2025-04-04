// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Retention extends APIResource {
  /**
   * Updates log retention flag for Logpull API.
   */
  create(
    params: RetentionCreateParams,
    options?: RequestOptions,
  ): APIPromise<RetentionCreateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/logs/control/retention/flag`, {
        body,
        ...options,
      }) as APIPromise<{ result: RetentionCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets log retention flag for Logpull API.
   */
  get(params: RetentionGetParams, options?: RequestOptions): APIPromise<RetentionGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/logs/control/retention/flag`, options) as APIPromise<{
        result: RetentionGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
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
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The log retention flag for Logpull API.
   */
  flag?: boolean;
}

export interface RetentionGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Retention {
  export {
    type RetentionCreateResponse as RetentionCreateResponse,
    type RetentionGetResponse as RetentionGetResponse,
    type RetentionCreateParams as RetentionCreateParams,
    type RetentionGetParams as RetentionGetParams,
  };
}
