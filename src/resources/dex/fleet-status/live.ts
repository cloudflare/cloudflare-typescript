// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LiveAPI from 'cloudflare/resources/dex/fleet-status/live';

export class Live extends APIResource {
  /**
   * List details for live (up to 60 minutes) devices using WARP
   */
  list(
    accountId: string,
    query: LiveListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LiveListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dex/fleet-status/live`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LiveListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LiveListResponse {
  deviceStats?: LiveListResponse.DeviceStats;
}

export namespace LiveListResponse {
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

export interface LiveListParams {
  /**
   * Number of minutes before current time
   */
  since_minutes: number;
}

export namespace Live {
  export import LiveListResponse = LiveAPI.LiveListResponse;
  export import LiveListParams = LiveAPI.LiveListParams;
}
