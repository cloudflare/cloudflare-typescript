// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OverTimeAPI from 'cloudflare/resources/dex/fleet-status/over-time';

export class OverTime extends APIResource {
  /**
   * List details for devices using WARP, up to 7 days
   */
  list(accountId: string, query: OverTimeListParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/accounts/${accountId}/dex/fleet-status/over-time`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface OverTimeListParams {
  /**
   * Timestamp in ISO format
   */
  time_end: string;

  /**
   * Timestamp in ISO format
   */
  time_start: string;

  /**
   * Cloudflare colo
   */
  colo?: string;

  /**
   * Device-specific ID, given as UUID v4
   */
  device_id?: string;
}

export namespace OverTime {
  export import OverTimeListParams = OverTimeAPI.OverTimeListParams;
}
