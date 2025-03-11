// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Raw extends APIResource {
  /**
   * Updates a raw event
   */
  update(
    accountId: number,
    eventId: string,
    rawId: string,
    body?: RawUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawUpdateResponse>;
  update(
    accountId: number,
    eventId: string,
    rawId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawUpdateResponse>;
  update(
    accountId: number,
    eventId: string,
    rawId: string,
    body: RawUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(accountId, eventId, rawId, {}, body);
    }
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawId}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads data for a raw event
   */
  get(
    accountId: number,
    eventId: string,
    rawId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RawGetResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawId}`, options);
  }
}

export interface RawUpdateResponse {
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

export interface RawUpdateParams {
  data?: unknown;

  source?: string;

  tlp?: string;
}

export declare namespace Raw {
  export {
    type RawUpdateResponse as RawUpdateResponse,
    type RawGetResponse as RawGetResponse,
    type RawUpdateParams as RawUpdateParams,
  };
}
