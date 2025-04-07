// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OverrideCodes extends APIResource {
  /**
   * Fetches a one-time use admin override code for a registration. This relies on
   * the **Admin Override** setting being enabled in your device configuration.
   *
   * **Deprecated:** please use GET
   * /accounts/{account_id}/devices/registrations/{registration_id}/override_codes
   * instead.
   */
  list(
    deviceID: string,
    params: OverrideCodeListParams,
    options?: RequestOptions,
  ): APIPromise<OverrideCodeListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/devices/${deviceID}/override_codes`,
        options,
      ) as APIPromise<{ result: OverrideCodeListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OverrideCodeListResponse {
  disable_for_time?: OverrideCodeListResponse.DisableForTime;
}

export namespace OverrideCodeListResponse {
  export interface DisableForTime {
    /**
     * Override code that is valid for 1 hour.
     */
    '1'?: string;

    /**
     * Override code that is valid for 12 hour2.
     */
    '12'?: string;

    /**
     * Override code that is valid for 24 hour.2.
     */
    '24'?: string;

    /**
     * Override code that is valid for 3 hours.
     */
    '3'?: string;

    /**
     * Override code that is valid for 6 hours.
     */
    '6'?: string;
  }
}

export interface OverrideCodeListParams {
  account_id: string;
}

export declare namespace OverrideCodes {
  export {
    type OverrideCodeListResponse as OverrideCodeListResponse,
    type OverrideCodeListParams as OverrideCodeListParams,
  };
}
