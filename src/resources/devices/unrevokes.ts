// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UnrevokesAPI from 'cloudflare/resources/devices/unrevokes';

export class Unrevokes extends APIResource {
  /**
   * Unrevokes a list of devices.
   */
  create(
    identifier: unknown,
    body: UnrevokeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnrevokeCreateResponse | null> {
    return (
      this._client.post(`/accounts/${identifier}/devices/unrevoke`, { body, ...options }) as Core.APIPromise<{
        result: UnrevokeCreateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UnrevokeCreateResponse = unknown | string;

export type UnrevokeCreateParams = Array<string>;

export namespace Unrevokes {
  export import UnrevokeCreateResponse = UnrevokesAPI.UnrevokeCreateResponse;
  export import UnrevokeCreateParams = UnrevokesAPI.UnrevokeCreateParams;
}
