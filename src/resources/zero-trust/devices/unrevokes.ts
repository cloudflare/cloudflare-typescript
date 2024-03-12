// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UnrevokesAPI from 'cloudflare/resources/zero-trust/devices/unrevokes';

export class Unrevokes extends APIResource {
  /**
   * Unrevokes a list of devices.
   */
  create(
    params: UnrevokeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnrevokeCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/unrevoke`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: UnrevokeCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UnrevokeCreateResponse = unknown | string;

export interface UnrevokeCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: A list of device ids to unrevoke.
   */
  body: Array<string>;
}

export namespace Unrevokes {
  export import UnrevokeCreateResponse = UnrevokesAPI.UnrevokeCreateResponse;
  export import UnrevokeCreateParams = UnrevokesAPI.UnrevokeCreateParams;
}
