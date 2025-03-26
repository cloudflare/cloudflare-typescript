// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, V4PagePagination, type V4PagePaginationParams } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Devices extends APIResource {
  /**
   * List devices with WARP client support for remote captures which have been
   * connected in the last 1 hour.
   */
  list(
    params: DeviceListParams,
    options?: RequestOptions,
  ): PagePromise<DeviceListResponsesV4PagePagination, DeviceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dex/commands/devices`,
      V4PagePagination<DeviceListResponse>,
      { query, ...options },
    );
  }
}

export type DeviceListResponsesV4PagePagination = V4PagePagination<DeviceListResponse>;

export interface DeviceListResponse {
  /**
   * List of eligible devices
   */
  devices?: Array<DeviceListResponse.Device>;
}

export namespace DeviceListResponse {
  export interface Device {
    /**
     * Device identifier (UUID v4)
     */
    deviceId?: string;

    /**
     * Device identifier (human readable)
     */
    deviceName?: string;

    /**
     * Whether the device is eligible for remote captures
     */
    eligible?: boolean;

    /**
     * If the device is not eligible, the reason why.
     */
    ineligibleReason?: string;

    /**
     * User contact email address
     */
    personEmail?: string;

    /**
     * Operating system
     */
    platform?: string;

    /**
     * Network status
     */
    status?: string;

    /**
     * Timestamp in ISO format
     */
    timestamp?: string;

    /**
     * WARP client version
     */
    version?: string;
  }
}

export interface DeviceListParams extends V4PagePaginationParams {
  /**
   * Path param: unique identifier linked to an account in the API request path
   */
  account_id: string;

  /**
   * Query param: Filter devices by name or email
   */
  search?: string;
}

export declare namespace Devices {
  export {
    type DeviceListResponse as DeviceListResponse,
    type DeviceListResponsesV4PagePagination as DeviceListResponsesV4PagePagination,
    type DeviceListParams as DeviceListParams,
  };
}
