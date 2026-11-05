// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseAuthenticatorCatalog extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'mfa', 'authenticatorCatalog'] =
    Object.freeze(['zeroTrust', 'access', 'mfa', 'authenticatorCatalog'] as const);

  /**
   * Returns a list of Authenticator Device AAGUIDs for MFA configuration.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const authenticatorCatalogListResponse of client.zeroTrust.access.mfa.authenticatorCatalog.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AuthenticatorCatalogListParams,
    options?: RequestOptions,
  ): PagePromise<AuthenticatorCatalogListResponsesSinglePage, AuthenticatorCatalogListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/authenticator_device_aaguids`,
      SinglePage<AuthenticatorCatalogListResponse>,
      options,
    );
  }
}
export class AuthenticatorCatalog extends BaseAuthenticatorCatalog {}

export type AuthenticatorCatalogListResponsesSinglePage = SinglePage<AuthenticatorCatalogListResponse>;

/**
 * A FIDO2 authenticator device AAGUID entry
 */
export interface AuthenticatorCatalogListResponse {
  /**
   * The Authenticator Attestation GUID (AAGUID) uniquely identifying a FIDO2
   * authenticator model
   */
  aaguid: string;

  /**
   * The human-readable name of the FIDO2 authenticator
   */
  name: string;
}

export interface AuthenticatorCatalogListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace AuthenticatorCatalog {
  export {
    type AuthenticatorCatalogListResponse as AuthenticatorCatalogListResponse,
    type AuthenticatorCatalogListResponsesSinglePage as AuthenticatorCatalogListResponsesSinglePage,
    type AuthenticatorCatalogListParams as AuthenticatorCatalogListParams,
  };
}
