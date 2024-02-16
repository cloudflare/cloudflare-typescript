// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccountMembersAPI from 'cloudflare/resources/account-members';

export class AccountMembers extends APIResource {
  /**
   * Add a user to the list of members for this account.
   */
  create(
    accountId: unknown,
    body: AccountMemberCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountMemberCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/members`, { body, ...options }) as Core.APIPromise<{
        result: AccountMemberCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify an account member.
   */
  update(
    accountId: unknown,
    memberId: string,
    body: AccountMemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountMemberUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/members/${memberId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AccountMemberUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all members of an account.
   */
  list(
    accountId: unknown,
    query?: AccountMemberListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountMemberListResponse | null>;
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<AccountMemberListResponse | null>;
  list(
    accountId: unknown,
    query: AccountMemberListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountMemberListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/members`, { query, ...options }) as Core.APIPromise<{
        result: AccountMemberListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a member from an account.
   */
  delete(
    accountId: unknown,
    memberId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountMemberDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/members/${memberId}`, options) as Core.APIPromise<{
        result: AccountMemberDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific member of an account.
   */
  get(
    accountId: unknown,
    memberId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountMemberGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/members/${memberId}`, options) as Core.APIPromise<{
        result: AccountMemberGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AccountMemberCreateResponse {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<AccountMemberCreateResponse.Role>;

  status: unknown;

  user: AccountMemberCreateResponse.User;

  /**
   * The unique activation code for the account membership.
   */
  code?: string;
}

export namespace AccountMemberCreateResponse {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role name.
     */
    name: string;

    permissions: Role.Permissions;
  }

  export namespace Role {
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

  export interface User {
    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Identifier
     */
    id?: string;

    /**
     * User's first name
     */
    first_name?: string | null;

    /**
     * User's last name
     */
    last_name?: string | null;

    /**
     * Indicates whether two-factor authentication is enabled for the user account.
     * Does not apply to API authentication.
     */
    two_factor_authentication_enabled?: boolean;
  }
}

export interface AccountMemberUpdateResponse {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<AccountMemberUpdateResponse.Role>;

  status: unknown;

  user: AccountMemberUpdateResponse.User;
}

export namespace AccountMemberUpdateResponse {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role name.
     */
    name: string;

    permissions: Role.Permissions;
  }

  export namespace Role {
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

  export interface User {
    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Identifier
     */
    id?: string;

    /**
     * User's first name
     */
    first_name?: string | null;

    /**
     * User's last name
     */
    last_name?: string | null;

    /**
     * Indicates whether two-factor authentication is enabled for the user account.
     * Does not apply to API authentication.
     */
    two_factor_authentication_enabled?: boolean;
  }
}

export type AccountMemberListResponse = Array<AccountMemberListResponse.AccountMemberListResponseItem>;

export namespace AccountMemberListResponse {
  export interface AccountMemberListResponseItem {
    /**
     * Identifier
     */
    id: string;

    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Member Name.
     */
    name: string | null;

    /**
     * Roles assigned to this Member.
     */
    roles: Array<AccountMemberListResponseItem.Role>;

    /**
     * A member's status in the organization.
     */
    status: 'accepted' | 'invited';
  }

  export namespace AccountMemberListResponseItem {
    export interface Role {
      /**
       * Role identifier tag.
       */
      id: string;

      /**
       * Description of role's permissions.
       */
      description: string;

      /**
       * Role Name.
       */
      name: string;

      /**
       * Access permissions for this User.
       */
      permissions: Array<string>;
    }
  }
}

export interface AccountMemberDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface AccountMemberGetResponse {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<AccountMemberGetResponse.Role>;

  status: unknown;

  user: AccountMemberGetResponse.User;
}

export namespace AccountMemberGetResponse {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role name.
     */
    name: string;

    permissions: Role.Permissions;
  }

  export namespace Role {
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

  export interface User {
    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Identifier
     */
    id?: string;

    /**
     * User's first name
     */
    first_name?: string | null;

    /**
     * User's last name
     */
    last_name?: string | null;

    /**
     * Indicates whether two-factor authentication is enabled for the user account.
     * Does not apply to API authentication.
     */
    two_factor_authentication_enabled?: boolean;
  }
}

export interface AccountMemberCreateParams {
  /**
   * The contact email address of the user.
   */
  email: string;

  /**
   * Array of roles associated with this member.
   */
  roles: Array<string>;

  status?: 'accepted' | 'pending';
}

export interface AccountMemberUpdateParams {
  /**
   * Roles assigned to this member.
   */
  roles: Array<AccountMemberUpdateParams.Role>;
}

export namespace AccountMemberUpdateParams {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;
  }
}

export interface AccountMemberListParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Field to order results by.
   */
  order?: 'user.first_name' | 'user.last_name' | 'user.email' | 'status';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace AccountMembers {
  export import AccountMemberCreateResponse = AccountMembersAPI.AccountMemberCreateResponse;
  export import AccountMemberUpdateResponse = AccountMembersAPI.AccountMemberUpdateResponse;
  export import AccountMemberListResponse = AccountMembersAPI.AccountMemberListResponse;
  export import AccountMemberDeleteResponse = AccountMembersAPI.AccountMemberDeleteResponse;
  export import AccountMemberGetResponse = AccountMembersAPI.AccountMemberGetResponse;
  export import AccountMemberCreateParams = AccountMembersAPI.AccountMemberCreateParams;
  export import AccountMemberUpdateParams = AccountMembersAPI.AccountMemberUpdateParams;
  export import AccountMemberListParams = AccountMembersAPI.AccountMemberListParams;
}
