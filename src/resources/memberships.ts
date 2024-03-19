// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MembershipsAPI from 'cloudflare/resources/memberships';
import * as AccountsAPI from 'cloudflare/resources/accounts/accounts';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Memberships extends APIResource {
  /**
   * Accept or reject this account invitation.
   */
  update(
    membershipId: string,
    body: MembershipUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MembershipUpdateResponse> {
    return (
      this._client.put(`/memberships/${membershipId}`, { body, ...options }) as Core.APIPromise<{
        result: MembershipUpdateResponse;
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
  delete(membershipId: string, options?: Core.RequestOptions): Core.APIPromise<MembershipDeleteResponse> {
    return (
      this._client.delete(`/memberships/${membershipId}`, options) as Core.APIPromise<{
        result: MembershipDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific membership.
   */
  get(membershipId: string, options?: Core.RequestOptions): Core.APIPromise<MembershipGetResponse> {
    return (
      this._client.get(`/memberships/${membershipId}`, options) as Core.APIPromise<{
        result: MembershipGetResponse;
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
  permissions?: Membership.Permissions;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace Membership {
  /**
   * All access permissions for the user at the account.
   */
  export interface Permissions {
    analytics?: Permissions.Analytics;

    billing?: Permissions.Billing;

    cache_purge?: Permissions.CachePurge;

    dns?: Permissions.DNS;

    dns_records?: Permissions.DNSRecords;

    lb?: Permissions.Lb;

    logs?: Permissions.Logs;

    organization?: Permissions.Organization;

    ssl?: Permissions.SSL;

    waf?: Permissions.WAF;

    zone_settings?: Permissions.ZoneSettings;

    zones?: Permissions.Zones;
  }

  export namespace Permissions {
    export interface Analytics {
      read?: boolean;

      write?: boolean;
    }

    export interface Billing {
      read?: boolean;

      write?: boolean;
    }

    export interface CachePurge {
      read?: boolean;

      write?: boolean;
    }

    export interface DNS {
      read?: boolean;

      write?: boolean;
    }

    export interface DNSRecords {
      read?: boolean;

      write?: boolean;
    }

    export interface Lb {
      read?: boolean;

      write?: boolean;
    }

    export interface Logs {
      read?: boolean;

      write?: boolean;
    }

    export interface Organization {
      read?: boolean;

      write?: boolean;
    }

    export interface SSL {
      read?: boolean;

      write?: boolean;
    }

    export interface WAF {
      read?: boolean;

      write?: boolean;
    }

    export interface ZoneSettings {
      read?: boolean;

      write?: boolean;
    }

    export interface Zones {
      read?: boolean;

      write?: boolean;
    }
  }
}

export type MembershipUpdateResponse = unknown | string | null;

export interface MembershipDeleteResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;
}

export type MembershipGetResponse = unknown | string | null;

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

export namespace Memberships {
  export import Membership = MembershipsAPI.Membership;
  export import MembershipUpdateResponse = MembershipsAPI.MembershipUpdateResponse;
  export import MembershipDeleteResponse = MembershipsAPI.MembershipDeleteResponse;
  export import MembershipGetResponse = MembershipsAPI.MembershipGetResponse;
  export import MembershipsV4PagePaginationArray = MembershipsAPI.MembershipsV4PagePaginationArray;
  export import MembershipUpdateParams = MembershipsAPI.MembershipUpdateParams;
  export import MembershipListParams = MembershipsAPI.MembershipListParams;
}
