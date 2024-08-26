// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as UniqueDevicesAPI from './unique-devices';

export class UniqueDevices extends APIResource {
  /**
   * Returns unique count of devices that have run synthetic application monitoring
   * tests in the past 7 days.
   */
  list(params: UniqueDeviceListParams, options?: Core.RequestOptions): Core.APIPromise<UniqueDevices> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/dex/tests/unique-devices`, { query, ...options }) as Core.APIPromise<{ result: UniqueDevices }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface UniqueDevices {
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
  export import UniqueDevices = UniqueDevicesAPI.UniqueDevices;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
