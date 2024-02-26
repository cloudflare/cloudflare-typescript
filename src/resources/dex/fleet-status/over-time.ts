// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OverTimeAPI from 'cloudflare/resources/dex/fleet-status/over-time';

export class OverTime extends APIResource {
  /**
   * List details for devices using WARP, up to 7 days
   */
  list(params: OverTimeListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/dex/fleet-status/over-time`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OverTimeListParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Timestamp in ISO format
   */
  time_end: string;

  /**
   * Query param: Timestamp in ISO format
   */
  time_start: string;

  /**
   * Query param: Cloudflare colo
   */
  colo?: string;

  /**
   * Query param: Device-specific ID, given as UUID v4
   */
  device_id?: string;
}

export namespace OverTime {
  export import OverTimeListParams = OverTimeAPI.OverTimeListParams;
}
