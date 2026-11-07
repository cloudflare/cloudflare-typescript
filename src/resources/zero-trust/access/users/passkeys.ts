// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BasePasskeys extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'users', 'passkeys'] = Object.freeze([
    'zeroTrust',
    'access',
    'users',
    'passkeys',
  ] as const);

  /**
   * Alias of the authenticator deletion endpoint for passkey management. The
   * identifier is the passkey's authenticator ID from the last-seen identity
   * response. Successful deletion revokes the enrollment and returns a null result.
   *
   * @example
   * ```ts
   * const passkey =
   *   await client.zeroTrust.access.users.passkeys.delete(
   *     'test-authenticator-id-123',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       user_id: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     },
   *   );
   * ```
   */
  delete(
    authenticatorID: string,
    params: PasskeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PasskeyDeleteResponse | null> {
    const { account_id, user_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/users/${user_id}/passkeys/${authenticatorID}`,
        options,
      ) as APIPromise<{ result: PasskeyDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Passkeys extends BasePasskeys {}

export type PasskeyDeleteResponse = unknown;

export interface PasskeyDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  user_id: string;
}

export declare namespace Passkeys {
  export {
    type PasskeyDeleteResponse as PasskeyDeleteResponse,
    type PasskeyDeleteParams as PasskeyDeleteParams,
  };
}
