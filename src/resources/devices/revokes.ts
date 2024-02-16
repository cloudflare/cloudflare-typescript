// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokesAPI from 'cloudflare/resources/devices/revokes';

export class Revokes extends APIResource {
  /**
   * Revokes a list of devices.
   */
  devicesRevokeDevices(
    identifier: unknown,
    body: RevokeDevicesRevokeDevicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeDevicesRevokeDevicesResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/revoke`, { body, ...options }) as Core.APIPromise<{
        result: RevokeDevicesRevokeDevicesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeDevicesRevokeDevicesResponse = unknown | string;

export type RevokeDevicesRevokeDevicesParams = Array<string>;

export namespace Revokes {
  export import RevokeDevicesRevokeDevicesResponse = RevokesAPI.RevokeDevicesRevokeDevicesResponse;
  export import RevokeDevicesRevokeDevicesParams = RevokesAPI.RevokeDevicesRevokeDevicesParams;
}
