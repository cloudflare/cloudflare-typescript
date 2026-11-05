// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AuthenticatorCatalogAPI from './authenticator-catalog';
import {
  AuthenticatorCatalog,
  AuthenticatorCatalogListParams,
  AuthenticatorCatalogListResponse,
  AuthenticatorCatalogListResponsesSinglePage,
  BaseAuthenticatorCatalog,
} from './authenticator-catalog';

export class BaseMfa extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'mfa'] = Object.freeze([
    'zeroTrust',
    'access',
    'mfa',
  ] as const);
}
export class Mfa extends BaseMfa {
  authenticatorCatalog: AuthenticatorCatalogAPI.AuthenticatorCatalog =
    new AuthenticatorCatalogAPI.AuthenticatorCatalog(this._client);
}

Mfa.AuthenticatorCatalog = AuthenticatorCatalog;
Mfa.BaseAuthenticatorCatalog = BaseAuthenticatorCatalog;

export declare namespace Mfa {
  export {
    AuthenticatorCatalog as AuthenticatorCatalog,
    BaseAuthenticatorCatalog as BaseAuthenticatorCatalog,
    type AuthenticatorCatalogListResponse as AuthenticatorCatalogListResponse,
    type AuthenticatorCatalogListResponsesSinglePage as AuthenticatorCatalogListResponsesSinglePage,
    type AuthenticatorCatalogListParams as AuthenticatorCatalogListParams,
  };
}
