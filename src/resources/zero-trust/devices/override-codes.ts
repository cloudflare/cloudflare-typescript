// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as OverrideCodesAPI from './override-codes';

export class OverrideCodes extends APIResource {
  /**
   * Fetches a one-time use admin override code for a device. This relies on the
   * **Admin Override** setting being enabled in your device configuration.
   */
  list(deviceId: string, params: OverrideCodeListParams, options?: Core.RequestOptions): Core.APIPromise<OverrideCodeListResponse | null> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/devices/${deviceId}/override_codes`, options) as Core.APIPromise<{ result: OverrideCodeListResponse | null }>)._thenUnwrap((obj) => obj.result);
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

export namespace OverrideCodes {
  export import OverrideCodeListResponse = OverrideCodesAPI.OverrideCodeListResponse;
  export import OverrideCodeListParams = OverrideCodesAPI.OverrideCodeListParams;
}
