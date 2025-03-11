// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Raw extends APIResource {
  /**
   * Updates a raw event
   */
  update(rawID: string, params: RawUpdateParams, options?: RequestOptions): APIPromise<RawUpdateResponse> {
    const { accountId, eventId, ...body } = params;
    return this._client.post(path`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawID}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads data for a raw event
   */
  get(rawID: string, params: RawGetParams, options?: RequestOptions): APIPromise<RawGetResponse> {
    const { accountId, eventId } = params;
    return this._client.get(
      path`/accounts/${accountId}/cloudforce-one/events/${eventId}/raw/${rawID}`,
      options,
    );
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
  /**
   * Path param: Account ID
   */
  accountId: number;

  /**
   * Path param: Event UUID
   */
  eventId: string;

  /**
   * Body param:
   */
  data?: unknown;

  /**
   * Body param:
   */
  source?: string;

  /**
   * Body param:
   */
  tlp?: string;
}

export interface RawGetParams {
  /**
   * Account ID
   */
  accountId: number;

  /**
   * Event UUID
   */
  eventId: string;
}

export declare namespace Raw {
  export {
    type RawUpdateResponse as RawUpdateResponse,
    type RawGetResponse as RawGetResponse,
    type RawUpdateParams as RawUpdateParams,
    type RawGetParams as RawGetParams,
  };
}
