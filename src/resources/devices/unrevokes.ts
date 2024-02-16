// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UnrevokesAPI from 'cloudflare/resources/devices/unrevokes';

export class Unrevokes extends APIResource {
  /**
   * Unrevokes a list of devices.
   */
  devicesUnrevokeDevices(
    identifier: unknown,
    body: UnrevokeDevicesUnrevokeDevicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnrevokeDevicesUnrevokeDevicesResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/unrevoke`, { body, ...options }) as Core.APIPromise<{
        result: UnrevokeDevicesUnrevokeDevicesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UnrevokeDevicesUnrevokeDevicesResponse = unknown | string;

export type UnrevokeDevicesUnrevokeDevicesParams = Array<string>;

export namespace Unrevokes {
  export import UnrevokeDevicesUnrevokeDevicesResponse = UnrevokesAPI.UnrevokeDevicesUnrevokeDevicesResponse;
  export import UnrevokeDevicesUnrevokeDevicesParams = UnrevokesAPI.UnrevokeDevicesUnrevokeDevicesParams;
}
