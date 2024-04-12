// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
import * as AuditLogsAPI from 'cloudflare/resources/user/audit-logs';
import * as InvitesAPI from 'cloudflare/resources/user/invites';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import * as SubscriptionsAPI from 'cloudflare/resources/user/subscriptions';
import * as BillingAPI from 'cloudflare/resources/user/billing/billing';
import * as TokensAPI from 'cloudflare/resources/user/tokens/tokens';
import { SinglePage } from 'cloudflare/pagination';

export class UserResource extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Edit part of your user details.
   */
  edit(body: UserEditParams, options?: Core.RequestOptions): Core.APIPromise<UserEditResponse> {
    return (
      this._client.patch('/user', { body, ...options }) as Core.APIPromise<{ result: UserEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * User Details
   */
  get(options?: Core.RequestOptions): Core.APIPromise<UserGetResponse> {
    return (this._client.get('/user', options) as Core.APIPromise<{ result: UserGetResponse }>)._thenUnwrap(
      (obj) => obj.result,
    );
  }
}

export class RolesSinglePage extends SinglePage<Role> {}

export type Permission = string;

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
  permissions: Array<Permission>;
}

export interface User {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<User.Role>;

  status: unknown;

  user: User.User;
}

export namespace User {
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
      analytics?: RolesAPI.PermissionGrant;

      billing?: RolesAPI.PermissionGrant;

      cache_purge?: RolesAPI.PermissionGrant;

      dns?: RolesAPI.PermissionGrant;

      dns_records?: RolesAPI.PermissionGrant;

      lb?: RolesAPI.PermissionGrant;

      logs?: RolesAPI.PermissionGrant;

      organization?: RolesAPI.PermissionGrant;

      ssl?: RolesAPI.PermissionGrant;

      waf?: RolesAPI.PermissionGrant;

      zone_settings?: RolesAPI.PermissionGrant;

      zones?: RolesAPI.PermissionGrant;
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

export type UserEditResponse = unknown | string | null;

export type UserGetResponse = unknown | string | null;

export interface UserEditParams {
  /**
   * The country in which the user lives.
   */
  country?: string | null;

  /**
   * User's first name
   */
  first_name?: string | null;

  /**
   * User's last name
   */
  last_name?: string | null;

  /**
   * User's telephone number
   */
  telephone?: string | null;

  /**
   * The zipcode or postal code where the user lives.
   */
  zipcode?: string | null;
}

export namespace UserResource {
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
  export import Billing = BillingAPI.Billing;
  export import Invites = InvitesAPI.Invites;
  export import Invite = InvitesAPI.Invite;
  export import InviteEditResponse = InvitesAPI.InviteEditResponse;
  export import InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InvitesSinglePage = InvitesAPI.InvitesSinglePage;
  export import InviteEditParams = InvitesAPI.InviteEditParams;
  export import Organizations = OrganizationsAPI.Organizations;
  export import Organization = OrganizationsAPI.Organization;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationsV4PagePaginationArray = OrganizationsAPI.OrganizationsV4PagePaginationArray;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import OrganizationDeleteParams = OrganizationsAPI.OrganizationDeleteParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import RatePlan = SubscriptionsAPI.RatePlan;
  export import Subscription = SubscriptionsAPI.Subscription;
  export import SubscriptionComponent = SubscriptionsAPI.SubscriptionComponent;
  export import SubscriptionZone = SubscriptionsAPI.SubscriptionZone;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionEditResponse = SubscriptionsAPI.SubscriptionEditResponse;
  export import SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import SubscriptionDeleteParams = SubscriptionsAPI.SubscriptionDeleteParams;
  export import SubscriptionEditParams = SubscriptionsAPI.SubscriptionEditParams;
  export import Tokens = TokensAPI.Tokens;
  export import CIDRList = TokensAPI.CIDRList;
  export import Policy = TokensAPI.Policy;
  export import Token = TokensAPI.Token;
  export import TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export import TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export import TokenListResponse = TokensAPI.TokenListResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenGetResponse = TokensAPI.TokenGetResponse;
  export import TokenVerifyResponse = TokensAPI.TokenVerifyResponse;
  export import TokenListResponsesV4PagePaginationArray = TokensAPI.TokenListResponsesV4PagePaginationArray;
  export import TokenCreateParams = TokensAPI.TokenCreateParams;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenListParams = TokensAPI.TokenListParams;
  export import TokenDeleteParams = TokensAPI.TokenDeleteParams;
}
