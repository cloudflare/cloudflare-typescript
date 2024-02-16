// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RevokeUsersAPI from 'cloudflare/resources/access/organizations/revoke-users';

export class RevokeUsers extends APIResource {
  /**
   * Revokes a user's access across all applications.
   */
  zeroTrustOrganizationRevokeAllAccessTokensForAUser(
    accountOrZone: string,
    accountOrZoneId: string,
    body: RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/organizations/revoke_user`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse = true | false;

export interface RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams {
  /**
   * The email of the user to revoke.
   */
  email: string;
}

export namespace RevokeUsers {
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse;
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams;
}
