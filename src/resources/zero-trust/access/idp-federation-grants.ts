// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class IdPFederationGrants extends APIResource {
  /**
   * Creates an IdP federation grant for the specified identity provider, making it
   * available for federation to other accounts in the same Cloudflare organization.
   *
   * The account must belong to a Cloudflare organization. One-time pin and
   * Cloudflare-managed identity providers cannot be federated. An account can
   * federate at most five identity providers at a time.
   *
   * @example
   * ```ts
   * const IdPFederationGrant =
   *   await client.zeroTrust.access.IdPFederationGrants.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     idp_id: 'a79de439-0e7f-4ebb-8a02-222222222222',
   *   });
   * ```
   */
  create(
    params: IdPFederationGrantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdPFederationGrant> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/idp_federation_grants`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IdPFederationGrant }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the IdP federation grants owned by the account.
   *
   * @example
   * ```ts
   * const IdPFederationGrants =
   *   await client.zeroTrust.access.IdPFederationGrants.list({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  list(
    params: IdPFederationGrantListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdPFederationGrantListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/access/idp_federation_grants`, options) as Core.APIPromise<{
        result: IdPFederationGrantListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an IdP federation grant. The identity provider remains in the account,
   * but it is no longer available for federation to other accounts.
   *
   * @example
   * ```ts
   * const IdPFederationGrant =
   *   await client.zeroTrust.access.IdPFederationGrants.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    grantId: string,
    params: IdPFederationGrantDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdPFederationGrantDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/access/idp_federation_grants/${grantId}`,
        options,
      ) as Core.APIPromise<{ result: IdPFederationGrantDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a single IdP federation grant by its UID.
   *
   * @example
   * ```ts
   * const IdPFederationGrant =
   *   await client.zeroTrust.access.IdPFederationGrants.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    grantId: string,
    params: IdPFederationGrantGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IdPFederationGrant> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/access/idp_federation_grants/${grantId}`,
        options,
      ) as Core.APIPromise<{ result: IdPFederationGrant }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IdPFederationGrant {
  /**
   * UID of the IdP federation grant.
   */
  id: string;

  /**
   * UID of the identity provider being federated.
   */
  idp_id: string;
}

export type IdPFederationGrantListResponse = Array<IdPFederationGrant>;

export interface IdPFederationGrantDeleteResponse {
  /**
   * UID of the deleted IdP federation grant.
   */
  id?: string;
}

export interface IdPFederationGrantCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: UID of the identity provider to federate. Must be an existing
   * identity provider in this account. One-time pin and Cloudflare-managed identity
   * providers cannot be federated.
   */
  idp_id: string;
}

export interface IdPFederationGrantListParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface IdPFederationGrantDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface IdPFederationGrantGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace IdPFederationGrants {
  export {
    type IdPFederationGrant as IdPFederationGrant,
    type IdPFederationGrantListResponse as IdPFederationGrantListResponse,
    type IdPFederationGrantDeleteResponse as IdPFederationGrantDeleteResponse,
    type IdPFederationGrantCreateParams as IdPFederationGrantCreateParams,
    type IdPFederationGrantListParams as IdPFederationGrantListParams,
    type IdPFederationGrantDeleteParams as IdPFederationGrantDeleteParams,
    type IdPFederationGrantGetParams as IdPFederationGrantGetParams,
  };
}
