// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseMfaAuthenticators extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'users', 'mfaAuthenticators'] =
    Object.freeze(['zeroTrust', 'access', 'users', 'mfaAuthenticators'] as const);

  /**
   * Deletes a specific MFA device or passkey, including a PIV key or FIDO2 key
   * enrollment, for a user. Admin deletion remains available when MFA is disabled.
   * Successful deletion revokes the enrollment and returns a null result.
   *
   * @example
   * ```ts
   * const mfaAuthenticator =
   *   await client.zeroTrust.access.users.mfaAuthenticators.delete(
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
    params: MfaAuthenticatorDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MfaAuthenticatorDeleteResponse | null> {
    const { account_id, user_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/users/${user_id}/mfa_authenticators/${authenticatorID}`,
        options,
      ) as APIPromise<{ result: MfaAuthenticatorDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class MfaAuthenticators extends BaseMfaAuthenticators {}

export type MfaAuthenticatorDeleteResponse = unknown;

export interface MfaAuthenticatorDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * UUID.
   */
  user_id: string;
}

export declare namespace MfaAuthenticators {
  export {
    type MfaAuthenticatorDeleteResponse as MfaAuthenticatorDeleteResponse,
    type MfaAuthenticatorDeleteParams as MfaAuthenticatorDeleteParams,
  };
}
