// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MembershipsAPI from 'cloudflare/resources/memberships';
import * as Shared from 'cloudflare/resources/shared';
import * as AccountsAPI from 'cloudflare/resources/accounts/accounts';
import * as MembersAPI from 'cloudflare/resources/accounts/members';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Memberships extends APIResource {
  /**
   * Accept or reject this account invitation.
   */
  update(
    membershipId: string,
    body: MembershipUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.put(`/memberships/${membershipId}`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List memberships of accounts the user can access.
   */
  list(
    query?: MembershipListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MembershipsV4PagePaginationArray, Membership>;
  list(options?: Core.RequestOptions): Core.PagePromise<MembershipsV4PagePaginationArray, Membership>;
  list(
    query: MembershipListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MembershipsV4PagePaginationArray, Membership> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/memberships', MembershipsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Remove the associated member from an account.
   */
  delete(
    membershipId: string,
    body: MembershipDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MembershipDeleteResponse> {
    return (
      this._client.delete(`/memberships/${membershipId}`, { body, ...options }) as Core.APIPromise<{
        result: MembershipDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific membership.
   */
  get(
    membershipId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/memberships/${membershipId}`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class MembershipsV4PagePaginationArray extends V4PagePaginationArray<Membership> {}

export interface Membership {
  /**
   * Membership identifier tag.
   */
  id?: string;

  account?: AccountsAPI.Account;

  /**
   * Enterprise only. Indicates whether or not API access is enabled specifically for
   * this user on a given account.
   */
  api_access_enabled?: boolean | null;

  /**
   * The unique activation code for the account membership.
   */
  code?: string;

  /**
   * All access permissions for the user at the account.
   */
  permissions?: MembersAPI.MemberPermission;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export interface MembershipDeleteResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;
}

export interface MembershipUpdateParams {
  /**
   * Whether to accept or reject this account invitation.
   */
  status: 'accepted' | 'rejected';
}

export interface MembershipListParams extends V4PagePaginationArrayParams {
  account?: MembershipListParams.Account;

  /**
   * Direction to order memberships.
   */
  direction?: 'asc' | 'desc';

  /**
   * Account name
   */
  name?: string;

  /**
   * Field to order memberships by.
   */
  order?: 'id' | 'account.name' | 'status';

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipListParams {
  export interface Account {
    /**
     * Account name
     */
    name?: string;
  }
}

export type MembershipDeleteParams = unknown;

export namespace Memberships {
  export import Membership = MembershipsAPI.Membership;
  export import MembershipDeleteResponse = MembershipsAPI.MembershipDeleteResponse;
  export import MembershipsV4PagePaginationArray = MembershipsAPI.MembershipsV4PagePaginationArray;
  export import MembershipUpdateParams = MembershipsAPI.MembershipUpdateParams;
  export import MembershipListParams = MembershipsAPI.MembershipListParams;
  export import MembershipDeleteParams = MembershipsAPI.MembershipDeleteParams;
}
