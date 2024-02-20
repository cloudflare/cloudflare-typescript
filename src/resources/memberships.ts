// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MembershipsAPI from 'cloudflare/resources/memberships';
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
  ): Core.PagePromise<MembershipListResponsesV4PagePaginationArray, MembershipListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<MembershipListResponsesV4PagePaginationArray, MembershipListResponse>;
  list(
    query: MembershipListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<MembershipListResponsesV4PagePaginationArray, MembershipListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/memberships', MembershipListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
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

export class MembershipListResponsesV4PagePaginationArray extends V4PagePaginationArray<MembershipListResponse> {}

export type MembershipUpdateResponse = unknown | string | null;

export interface MembershipListResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  account?: MembershipListResponse.Account;

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
  permissions?: MembershipListResponse.Permissions;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipListResponse {
  export interface Account {
    /**
     * Identifier
     */
    id: string;

    /**
     * Account name
     */
    name: string;

    /**
     * Timestamp for the creation of the account
     */
    created_on?: string;

    /**
     * Account settings
     */
    settings?: Account.Settings;
  }

  export namespace Account {
    /**
     * Account settings
     */
    export interface Settings {
      /**
       * Specifies the default nameservers to be used for new zones added to this
       * account.
       *
       * - `cloudflare.standard` for Cloudflare-branded nameservers
       * - `custom.account` for account custom nameservers
       * - `custom.tenant` for tenant custom nameservers
       *
       * See
       * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
       * for more information.
       */
      default_nameservers?: 'cloudflare.standard' | 'custom.account' | 'custom.tenant';

      /**
       * Indicates whether membership in this account requires that Two-Factor
       * Authentication is enabled
       */
      enforce_twofactor?: boolean;

      /**
       * Indicates whether new zones should use the account-level custom nameservers by
       * default.
       *
       * Deprecated in favor of `default_nameservers`.
       */
      use_account_custom_ns_by_default?: boolean;
    }
  }

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
  export import MembershipUpdateResponse = MembershipsAPI.MembershipUpdateResponse;
  export import MembershipListResponse = MembershipsAPI.MembershipListResponse;
  export import MembershipDeleteResponse = MembershipsAPI.MembershipDeleteResponse;
  export import MembershipGetResponse = MembershipsAPI.MembershipGetResponse;
  export import MembershipListResponsesV4PagePaginationArray = MembershipsAPI.MembershipListResponsesV4PagePaginationArray;
  export import MembershipUpdateParams = MembershipsAPI.MembershipUpdateParams;
  export import MembershipListParams = MembershipsAPI.MembershipListParams;
}
