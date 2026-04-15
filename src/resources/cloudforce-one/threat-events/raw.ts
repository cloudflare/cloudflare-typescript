// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Raw extends APIResource {
  /**
   * Updates a raw event
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.raw.edit(
   *     'event_id',
   *     'raw_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(
    eventId: string,
    rawId: string,
    params?: RawEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawEditResponse>;
  edit(eventId: string, rawId: string, options?: Core.RequestOptions): Core.APIPromise<RawEditResponse>;
  edit(
    eventId: string,
    rawId: string,
    params: RawEditParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawEditResponse> {
    if (isRequestOptions(params)) {
      return this.edit(eventId, rawId, {}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/cloudforce-one/events/${eventId}/raw/${rawId}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads data for a raw event
   *
   * @example
   * ```ts
   * const raw = await client.cloudforceOne.threatEvents.raw.get(
   *   'event_id',
   *   'raw_id',
   *   { account_id: 'account_id' },
   * );
   * ```
   */
  get(
    eventId: string,
    rawId: string,
    params?: RawGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawGetResponse>;
  get(eventId: string, rawId: string, options?: Core.RequestOptions): Core.APIPromise<RawGetResponse>;
  get(
    eventId: string,
    rawId: string,
    params: RawGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(eventId, rawId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/${eventId}/raw/${rawId}`, options);
  }
}

export interface RawEditResponse {
  id: string;

  data: unknown;
}

export interface RawGetResponse {
  id: string;

  accountId: number;

  created: string;

  data: unknown;

  source: string;

  tlp: string;
}

export interface RawEditParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

  /**
   * Body param
   */
  data?: unknown;

  /**
   * Body param
   */
  source?: string;

  /**
   * Body param
   */
  tlp?: string;
}

export interface RawGetParams {
  /**
   * Account ID.
   */
  account_id?: string;
}

export declare namespace Raw {
  export {
    type RawEditResponse as RawEditResponse,
    type RawGetResponse as RawGetResponse,
    type RawEditParams as RawEditParams,
    type RawGetParams as RawGetParams,
  };
}
