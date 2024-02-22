// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OverrideCodesAPI from 'cloudflare/resources/devices/override-codes';

export class OverrideCodes extends APIResource {
  /**
   * Fetches a one-time use admin override code for a device. This relies on the
   * **Admin Override** setting being enabled in your device configuration.
   */
  list(
    accountId: unknown,
    deviceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideCodeListResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/devices/${deviceId}/override_codes`,
        options,
      ) as Core.APIPromise<{ result: OverrideCodeListResponse | null }>
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
    '1'?: unknown;

    /**
     * Override code that is valid for 12 hour2.
     */
    '12'?: unknown;

    /**
     * Override code that is valid for 24 hour.2.
     */
    '24'?: unknown;

    /**
     * Override code that is valid for 3 hours.
     */
    '3'?: unknown;

    /**
     * Override code that is valid for 6 hours.
     */
    '6'?: unknown;
  }
}

export namespace OverrideCodes {
  export import OverrideCodeListResponse = OverrideCodesAPI.OverrideCodeListResponse;
}
