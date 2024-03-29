// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FleetStatusAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/fleet-status';
import * as DevicesAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/devices';

export class FleetStatus extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);

  /**
   * List details for live (up to 60 minutes) devices using WARP
   */
  live(
    params: FleetStatusLiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FleetStatusLiveResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/fleet-status/live`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: FleetStatusLiveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List details for devices using WARP, up to 7 days
   */
  overTime(params: FleetStatusOverTimeParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/dex/fleet-status/over-time`, {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface FleetStatusLiveResponse {
  deviceStats?: FleetStatusLiveResponse.DeviceStats;
}

export namespace FleetStatusLiveResponse {
  export interface DeviceStats {
    byColo?: Array<DeviceStats.ByColo> | null;

    byMode?: Array<DeviceStats.ByMode> | null;

    byPlatform?: Array<DeviceStats.ByPlatform> | null;

    byStatus?: Array<DeviceStats.ByStatus> | null;

    byVersion?: Array<DeviceStats.ByVersion> | null;

    /**
     * Number of unique devices
     */
    uniqueDevicesTotal?: number;
  }

  export namespace DeviceStats {
    export interface ByColo {
      /**
       * Number of unique devices
       */
      uniqueDevicesTotal?: number;

      value?: string;
    }

    export interface ByMode {
      /**
       * Number of unique devices
       */
      uniqueDevicesTotal?: number;

      value?: string;
    }

    export interface ByPlatform {
      /**
       * Number of unique devices
       */
      uniqueDevicesTotal?: number;

      value?: string;
    }

    export interface ByStatus {
      /**
       * Number of unique devices
       */
      uniqueDevicesTotal?: number;

      value?: string;
    }

    export interface ByVersion {
      /**
       * Number of unique devices
       */
      uniqueDevicesTotal?: number;

      value?: string;
    }
  }
}

export interface FleetStatusLiveParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Number of minutes before current time
   */
  since_minutes: number;
}

export interface FleetStatusOverTimeParams {
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

export namespace FleetStatus {
  export import FleetStatusLiveResponse = FleetStatusAPI.FleetStatusLiveResponse;
  export import FleetStatusLiveParams = FleetStatusAPI.FleetStatusLiveParams;
  export import FleetStatusOverTimeParams = FleetStatusAPI.FleetStatusOverTimeParams;
  export import Devices = DevicesAPI.Devices;
  export import DigitalExperienceMonitoringDevice = DevicesAPI.DigitalExperienceMonitoringDevice;
  export import DigitalExperienceMonitoringDevicesV4PagePaginationArray = DevicesAPI.DigitalExperienceMonitoringDevicesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
}
