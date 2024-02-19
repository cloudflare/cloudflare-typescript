// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsersAPI from 'cloudflare/resources/users/users';
import * as AuditLogsAPI from 'cloudflare/resources/users/audit-logs';
import * as InvitesAPI from 'cloudflare/resources/users/invites';
import * as OrganizationsAPI from 'cloudflare/resources/users/organizations';
import * as SubscriptionsAPI from 'cloudflare/resources/users/subscriptions';
import * as BillingsAPI from 'cloudflare/resources/users/billings/billings';
import * as FirewallsAPI from 'cloudflare/resources/users/firewalls/firewalls';
import * as LoadBalancersAPI from 'cloudflare/resources/users/load-balancers/load-balancers';
import * as LoadBalancingAnalyticsAPI from 'cloudflare/resources/users/load-balancing-analytics/load-balancing-analytics';
import * as TokensAPI from 'cloudflare/resources/users/tokens/tokens';

export class Users extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  billings: BillingsAPI.Billings = new BillingsAPI.Billings(this._client);
  firewalls: FirewallsAPI.Firewalls = new FirewallsAPI.Firewalls(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  loadBalancingAnalytics: LoadBalancingAnalyticsAPI.LoadBalancingAnalytics =
    new LoadBalancingAnalyticsAPI.LoadBalancingAnalytics(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * Edit part of your user details.
   */
  userEditUser(
    body: UserUserEditUserParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUserEditUserResponse> {
    return (
      this._client.patch('/user', { body, ...options }) as Core.APIPromise<{
        result: UserUserEditUserResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * User Details
   */
  userUserDetails(options?: Core.RequestOptions): Core.APIPromise<UserUserUserDetailsResponse> {
    return (
      this._client.get('/user', options) as Core.APIPromise<{ result: UserUserUserDetailsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UserUserEditUserResponse = unknown | string | null;

export type UserUserUserDetailsResponse = unknown | string | null;

export interface UserUserEditUserParams {
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

export namespace Users {
  export import UserUserEditUserResponse = UsersAPI.UserUserEditUserResponse;
  export import UserUserUserDetailsResponse = UsersAPI.UserUserUserDetailsResponse;
  export import UserUserEditUserParams = UsersAPI.UserUserEditUserParams;
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListResponsesV4PagePaginationArray = AuditLogsAPI.AuditLogListResponsesV4PagePaginationArray;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
  export import Billings = BillingsAPI.Billings;
  export import Firewalls = FirewallsAPI.Firewalls;
  export import Invites = InvitesAPI.Invites;
  export import InviteUpdateResponse = InvitesAPI.InviteUpdateResponse;
  export import InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InviteUserSInvitesListInvitationsResponse = InvitesAPI.InviteUserSInvitesListInvitationsResponse;
  export import InviteUpdateParams = InvitesAPI.InviteUpdateParams;
  export import LoadBalancers = LoadBalancersAPI.LoadBalancers;
  export import LoadBalancingAnalytics = LoadBalancingAnalyticsAPI.LoadBalancingAnalytics;
  export import Organizations = OrganizationsAPI.Organizations;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationUserSOrganizationsListOrganizationsResponse = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsResponse;
  export import OrganizationUserSOrganizationsListOrganizationsParams = OrganizationsAPI.OrganizationUserSOrganizationsListOrganizationsParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionUserSubscriptionGetUserSubscriptionsResponse = SubscriptionsAPI.SubscriptionUserSubscriptionGetUserSubscriptionsResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import Tokens = TokensAPI.Tokens;
  export import TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export import TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export import TokenGetResponse = TokensAPI.TokenGetResponse;
  export import TokenUserAPITokensCreateTokenResponse = TokensAPI.TokenUserAPITokensCreateTokenResponse;
  export import TokenUserAPITokensListTokensResponse = TokensAPI.TokenUserAPITokensListTokensResponse;
  export import TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export import TokenUserAPITokensCreateTokenParams = TokensAPI.TokenUserAPITokensCreateTokenParams;
  export import TokenUserAPITokensListTokensParams = TokensAPI.TokenUserAPITokensListTokensParams;
}
