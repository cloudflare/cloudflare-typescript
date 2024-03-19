// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokesAPI from 'cloudflare/resources/zero-trust/devices/revokes';

export class Revokes extends APIResource {
  /**
   * Revokes a list of devices.
   */
  create(
    params: RevokeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeCreateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/revoke`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: RevokeCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeCreateResponse = unknown | string;

export interface RevokeCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: A list of device ids to revoke.
   */
  body: Array<string>;
}

export namespace Revokes {
  export import RevokeCreateResponse = RevokesAPI.RevokeCreateResponse;
  export import RevokeCreateParams = RevokesAPI.RevokeCreateParams;
}
