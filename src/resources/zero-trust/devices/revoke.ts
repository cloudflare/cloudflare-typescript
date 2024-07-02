// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RevokeAPI from './revoke';

export class Revoke extends APIResource {
  /**
   * Revokes a list of devices.
   */
  create(params: RevokeCreateParams, options?: Core.RequestOptions): Core.APIPromise<RevokeCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/revoke`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: RevokeCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeCreateResponse = unknown | string | null;

export interface RevokeCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: A list of device ids to revoke.
   */
  body: Array<string>;
}

export namespace Revoke {
  export import RevokeCreateResponse = RevokeAPI.RevokeCreateResponse;
  export import RevokeCreateParams = RevokeAPI.RevokeCreateParams;
}
