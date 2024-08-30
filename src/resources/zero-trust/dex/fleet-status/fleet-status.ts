// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as FleetStatusAPI from './fleet-status';
import * as DevicesAPI from './devices';

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

export interface LiveStat {
  /**
   * Number of unique devices
   */
  uniqueDevicesTotal?: number;

  value?: string;
}

export interface FleetStatusLiveResponse {
  deviceStats?: FleetStatusLiveResponse.DeviceStats;
}

export namespace FleetStatusLiveResponse {
  export interface DeviceStats {
    byColo?: Array<FleetStatusAPI.LiveStat> | null;

    byMode?: Array<FleetStatusAPI.LiveStat> | null;

    byPlatform?: Array<FleetStatusAPI.LiveStat> | null;

    byStatus?: Array<FleetStatusAPI.LiveStat> | null;

    byVersion?: Array<FleetStatusAPI.LiveStat> | null;

    /**
     * Number of unique devices
     */
    uniqueDevicesTotal?: number;
  }
}

export interface FleetStatusLiveParams {
  /**
   * Path param: Unique identifier for account
   */
  account_id: string;

  /**
   * Query param: Number of minutes before current time
   */
  since_minutes: number;
}

export interface FleetStatusOverTimeParams {
  /**
   * Path param: Unique identifier for account
   */
  account_id: string;

  /**
   * Query param: Time range beginning in ISO format
   */
  from: string;

  /**
   * Query param: Time range end in ISO format
   */
  to: string;

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
  export import LiveStat = FleetStatusAPI.LiveStat;
  export import FleetStatusLiveResponse = FleetStatusAPI.FleetStatusLiveResponse;
  export import FleetStatusLiveParams = FleetStatusAPI.FleetStatusLiveParams;
  export import FleetStatusOverTimeParams = FleetStatusAPI.FleetStatusOverTimeParams;
  export import Devices = DevicesAPI.Devices;
  export import DeviceListResponse = DevicesAPI.DeviceListResponse;
  export import DeviceListResponsesV4PagePaginationArray = DevicesAPI.DeviceListResponsesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
}
