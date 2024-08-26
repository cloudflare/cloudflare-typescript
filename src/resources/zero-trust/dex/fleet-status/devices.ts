// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as DevicesAPI from './devices';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Devices extends APIResource {
  /**
   * List details for devices using WARP
   */
  list(params: DeviceListParams, options?: Core.RequestOptions): Core.PagePromise<DeviceListResponsesV4PagePaginationArray, DeviceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dex/fleet-status/devices`, DeviceListResponsesV4PagePaginationArray, { query, ...options });
  }
}

export class DeviceListResponsesV4PagePaginationArray extends V4PagePaginationArray<DeviceListResponse> {
}

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
   * Query param: Source:
   *
   * - `hourly` - device details aggregated hourly, up to 7 days prior
   * - `last_seen` - device details, up to 24 hours prior
   * - `raw` - device details, up to 7 days prior
   */
  source?: 'last_seen' | 'hourly' | 'raw';

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
  export import DeviceListResponse = DevicesAPI.DeviceListResponse;
  export import DeviceListResponsesV4PagePaginationArray = DevicesAPI.DeviceListResponsesV4PagePaginationArray;
  export import DeviceListParams = DevicesAPI.DeviceListParams;
}
