// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as UnrevokeAPI from './unrevoke';

export class Unrevoke extends APIResource {
  /**
   * Unrevokes a list of devices.
   */
  create(
    params: UnrevokeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UnrevokeCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/unrevoke`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: UnrevokeCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UnrevokeCreateResponse = unknown | string | null;

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
