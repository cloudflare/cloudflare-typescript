// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UniqueDevicesAPI from 'cloudflare/resources/zero-trust/dex/tests/unique-devices';

export class UniqueDevices extends APIResource {
  /**
   * Returns unique count of devices that have run synthetic application monitoring
   * tests in the past 7 days.
   */
  list(
    params: UniqueDeviceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalExperienceMonitoringUniqueDevices> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/tests/unique-devices`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DigitalExperienceMonitoringUniqueDevices }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DigitalExperienceMonitoringUniqueDevices {
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
  export import DigitalExperienceMonitoringUniqueDevices = UniqueDevicesAPI.DigitalExperienceMonitoringUniqueDevices;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
