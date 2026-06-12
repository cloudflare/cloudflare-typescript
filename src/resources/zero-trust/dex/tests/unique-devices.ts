// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUniqueDevices extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'tests', 'uniqueDevices'] = Object.freeze([
    'zeroTrust',
    'dex',
    'tests',
    'uniqueDevices',
  ] as const);

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
  list(params: UniqueDeviceListParams, options?: RequestOptions): APIPromise<UniqueDevices> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dex/tests/unique-devices`, {
        query,
        ...options,
      }) as APIPromise<{ result: UniqueDevices }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class UniqueDevices extends BaseUniqueDevices {}

export interface UniqueDevices {
  /**
   * total number of unique devices
   */
  uniqueDevicesTotal: number;
}

export interface UniqueDeviceListParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Optionally filter result stats to a specific device(s). Cannot be
   * used in combination with colo param.
   */
  deviceId?: Array<string>;

  /**
   * Query param: Optionally filter results by test name.
   */
  testName?: string;
}

export declare namespace UniqueDevices {
  export { type UniqueDevices as UniqueDevices, type UniqueDeviceListParams as UniqueDeviceListParams };
}
