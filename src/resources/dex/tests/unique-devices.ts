// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UniqueDevicesAPI from 'cloudflare/resources/dex/tests/unique-devices';

export class UniqueDevices extends APIResource {
  /**
   * Returns unique count of devices that have run synthetic application monitoring
   * tests in the past 7 days.
   */
  list(
    params: UniqueDeviceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UniqueDeviceListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/tests/unique-devices`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: UniqueDeviceListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UniqueDeviceListResponse {
  /**
   * total number of unique devices
   */
  uniqueDevicesTotal: number;
}

export interface UniqueDeviceListParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

  /**
   * Query param: Optionally filter result stats to a specific device(s). Cannot be
   * used in combination with colo param.
   */
  deviceId?: Array<string>;

  /**
   * Query param: Optionally filter results by test name
   */
  testName?: string;
}

export namespace UniqueDevices {
  export import UniqueDeviceListResponse = UniqueDevicesAPI.UniqueDeviceListResponse;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
