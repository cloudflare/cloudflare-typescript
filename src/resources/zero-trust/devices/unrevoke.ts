// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UnrevokeAPI from 'cloudflare/resources/zero-trust/devices/unrevoke';

export class Unrevoke extends APIResource {
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
  account_id: string;

  /**
   * Body param: A list of device ids to unrevoke.
   */
  body: Array<string>;
}

export namespace Unrevoke {
  export import UnrevokeCreateResponse = UnrevokeAPI.UnrevokeCreateResponse;
  export import UnrevokeCreateParams = UnrevokeAPI.UnrevokeCreateParams;
}
