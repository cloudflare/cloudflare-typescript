// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class UniqueDevices extends APIResource {
  /**
   * Returns unique count of devices that have run synthetic application monitoring
   * tests in the past 7 days.
   *
   * @example
   * ```ts
   * const uniqueDevices =
   *   await client.zeroTrust.dex.tests.uniqueDevices.list({
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *   });
   * ```
   */
  list(params?: UniqueDeviceListParams, options?: Core.RequestOptions): Core.APIPromise<UniqueDevices>;
  list(options?: Core.RequestOptions): Core.APIPromise<UniqueDevices>;
  list(
    params: UniqueDeviceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UniqueDevices> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/tests/unique-devices`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: UniqueDevices }>
    )._thenUnwrap((obj) => obj.result);
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
  account_id?: string;

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

export declare namespace UniqueDevices {
  export { type UniqueDevices as UniqueDevices, type UniqueDeviceListParams as UniqueDeviceListParams };
}
