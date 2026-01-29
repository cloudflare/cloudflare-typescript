// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OverrideCodes extends APIResource {
  /**
   * Fetches a one-time use admin override code for a device. This relies on the
   * **Admin Override** setting being enabled in your device configuration. Not
   * supported when
   * [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/)
   * is enabled for the account. **Deprecated:** please use GET
   * /accounts/{account_id}/devices/registrations/{registration_id}/override_codes
   * instead.
   *
   * @deprecated
   */
  list(
    deviceID: string,
    params: OverrideCodeListParams,
    options?: RequestOptions,
  ): PagePromise<OverrideCodeListResponsesSinglePage, OverrideCodeListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/${deviceID}/override_codes`,
      SinglePage<OverrideCodeListResponse>,
      options,
    );
  }

  /**
   * Fetches one-time use admin override codes for a registration. This relies on the
   * **Admin Override** setting being enabled in your device configuration.
   *
   * @example
   * ```ts
   * const overrideCode =
   *   await client.zeroTrust.devices.overrideCodes.get(
   *     'registration_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    registrationID: string,
    params: OverrideCodeGetParams,
    options?: RequestOptions,
  ): APIPromise<OverrideCodeGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/devices/registrations/${registrationID}/override_codes`,
        options,
      ) as APIPromise<{ result: OverrideCodeGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type OverrideCodeListResponsesSinglePage = SinglePage<OverrideCodeListResponse>;

export type OverrideCodeListResponse = unknown;

export interface OverrideCodeGetResponse {
  disable_for_time?: { [key: string]: string };
}

export interface OverrideCodeListParams {
  account_id: string;
}

export interface OverrideCodeGetParams {
  account_id: string;
}

export declare namespace OverrideCodes {
  export {
    type OverrideCodeListResponse as OverrideCodeListResponse,
    type OverrideCodeGetResponse as OverrideCodeGetResponse,
    type OverrideCodeListResponsesSinglePage as OverrideCodeListResponsesSinglePage,
    type OverrideCodeListParams as OverrideCodeListParams,
    type OverrideCodeGetParams as OverrideCodeGetParams,
  };
}
