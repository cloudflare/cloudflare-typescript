// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/dex/fleet-status/devices';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Devices extends APIResource {
  /**
   * List details for devices using WARP
   */
  list(
    accountId: string,
    query: DeviceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeviceListResponsesV4PagePaginationArray, DeviceListResponse> {
    return this._client.getAPIList(
      `/accounts/${accountId}/dex/fleet-status/devices`,
      DeviceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class DeviceListResponsesV4PagePaginationArray extends V4PagePaginationArray<DeviceListResponse> {}

export interface DeviceListResponse {
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

export interface DeviceListParams extends V4PagePaginationArrayParams {
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
  export import DeviceListResponsesV4PagePaginationArray = DevicesAPI.DeviceListResponsesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
}
