// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DevicesAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/devices';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Devices extends APIResource {
  /**
   * List details for devices using WARP
   */
  list(
    params: DeviceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<
    DigitalExperienceMonitoringDevicesV4PagePaginationArray,
    DigitalExperienceMonitoringDevice
  > {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dex/fleet-status/devices`,
      DigitalExperienceMonitoringDevicesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class DigitalExperienceMonitoringDevicesV4PagePaginationArray extends V4PagePaginationArray<DigitalExperienceMonitoringDevice> {}

export interface DigitalExperienceMonitoringDevice {
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

  /**
   * Query param: The mode under which the WARP client is run
   */
  mode?: string;

  /**
   * Query param: Operating system
   */
  platform?: string;

  /**
   * Query param: Dimension to sort results by
   */
  sort_by?: 'colo' | 'device_id' | 'mode' | 'platform' | 'status' | 'timestamp' | 'version';

  /**
   * Query param: Network status
   */
  status?: string;

  /**
   * Query param: WARP client version
   */
  version?: string;
}

export namespace Devices {
  export import DigitalExperienceMonitoringDevice = DevicesAPI.DigitalExperienceMonitoringDevice;
  export import DigitalExperienceMonitoringDevicesV4PagePaginationArray = DevicesAPI.DigitalExperienceMonitoringDevicesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
}
