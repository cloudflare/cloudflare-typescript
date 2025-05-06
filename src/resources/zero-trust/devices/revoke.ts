// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Revoke extends APIResource {
  /**
   * Revokes a list of registrations.
   *
   * **Deprecated**: please use POST
   * /accounts/{account_id}/devices/registrations/revoke instead.
   *
   * @example
   * ```ts
   * const revoke = await client.zeroTrust.devices.revoke.create(
   *   {
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     body: ['f174e90a-fafe-4643-bbbc-4a0ed4fc8415'],
   *   },
   * );
   * ```
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
  account_id: string;

  /**
   * Body param: A list of Registration IDs to revoke.
   */
  body: Array<string>;
}

export declare namespace Revoke {
  export { type RevokeCreateResponse as RevokeCreateResponse, type RevokeCreateParams as RevokeCreateParams };
}
