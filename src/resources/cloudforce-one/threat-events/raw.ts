// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Raw extends APIResource {
  /**
   * Updates a raw event
   */
  edit(rawID: string, params: RawEditParams, options?: RequestOptions): APIPromise<RawEditResponse> {
    const { account_id, event_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/${event_id}/raw/${rawID}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads data for a raw event
   */
  get(rawID: string, params: RawGetParams, options?: RequestOptions): APIPromise<RawGetResponse> {
    const { account_id, event_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/${event_id}/raw/${rawID}`,
      options,
    );
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
   * Path param: Account ID
   */
  account_id: number;

  /**
   * Path param: Event UUID
   */
  event_id: string;

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
  account_id: number;

  /**
   * Event UUID
   */
  event_id: string;
}

export declare namespace Raw {
  export {
    type RawEditResponse as RawEditResponse,
    type RawGetResponse as RawGetResponse,
    type RawEditParams as RawEditParams,
    type RawGetParams as RawGetParams,
  };
}
