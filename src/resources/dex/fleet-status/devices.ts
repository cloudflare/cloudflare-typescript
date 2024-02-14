// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/dex/fleet-status/devices';

export class Devices extends APIResource {
  /**
   * List details for devices using WARP
   */
  list(
    accountId: string,
    query: DeviceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DeviceListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/dex/fleet-status/devices`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DeviceListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DeviceListResponse = Array<DeviceListResponse.DeviceListResponseItem>;

export namespace DeviceListResponse {
  export interface DeviceListResponseItem {
    /**
     * Cloudflare colo
     */
    colo: string;

    /**
     * Device identifier (UUID v4)
     */
    deviceId: string;

    /**
     * Operating system
     */
    platform: string;

    /**
     * Network status
     */
    status: string;

    /**
     * WARP client version
     */
    version: string;

    /**
     * Device identifier (human readable)
     */
    deviceName?: string;

    /**
     * User contact email address
     */
    personEmail?: string;
  }
}

export interface DeviceListParams {
  /**
   * Page number of paginated results
   */
  page: number;

  /**
   * Number of items per page
   */
  per_page: number;

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

  /**
   * The mode under which the WARP client is run
   */
  mode?: string;

  /**
   * Operating system
   */
  platform?: string;

  /**
   * Dimension to sort results by
   */
  sort_by?: 'colo' | 'device_id' | 'mode' | 'platform' | 'status' | 'timestamp' | 'version';

  /**
   * Network status
   */
  status?: string;

  /**
   * WARP client version
   */
  version?: string;
}

export namespace Devices {
  export import DeviceListResponse = DevicesAPI.DeviceListResponse;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
}
