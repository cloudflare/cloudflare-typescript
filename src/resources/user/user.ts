// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UserAPI from 'cloudflare/resources/user/user';
import * as AuditLogsAPI from 'cloudflare/resources/user/audit-logs';
import * as InvitesAPI from 'cloudflare/resources/user/invites';
import * as OrganizationsAPI from 'cloudflare/resources/user/organizations';
import * as SubscriptionsAPI from 'cloudflare/resources/user/subscriptions';
import * as BillingAPI from 'cloudflare/resources/user/billing/billing';
import * as FirewallAPI from 'cloudflare/resources/user/firewall/firewall';
import * as LoadBalancersAPI from 'cloudflare/resources/user/load-balancers/load-balancers';
import * as LoadBalancingAnalyticsAPI from 'cloudflare/resources/user/load-balancing-analytics/load-balancing-analytics';
import * as TokensAPI from 'cloudflare/resources/user/tokens/tokens';

export class User extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  firewall: FirewallAPI.Firewall = new FirewallAPI.Firewall(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  loadBalancers: LoadBalancersAPI.LoadBalancers = new LoadBalancersAPI.LoadBalancers(this._client);
  loadBalancingAnalytics: LoadBalancingAnalyticsAPI.LoadBalancingAnalytics =
    new LoadBalancingAnalyticsAPI.LoadBalancingAnalytics(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * User Details
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return (this._client.get('/user', options) as Core.APIPromise<{ result: UserListResponse }>)._thenUnwrap(
      (obj) => obj.result,
    );
  }

  /**
   * Edit part of your user details.
   */
  edit(body: UserEditParams, options?: Core.RequestOptions): Core.APIPromise<UserEditResponse> {
    return (
      this._client.patch('/user', { body, ...options }) as Core.APIPromise<{ result: UserEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UserListResponse = unknown | string | null;

export type UserEditResponse = unknown | string | null;

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

export namespace User {
  export import UserListResponse = UserAPI.UserListResponse;
  export import UserEditResponse = UserAPI.UserEditResponse;
  export import UserEditParams = UserAPI.UserEditParams;
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListResponsesV4PagePaginationArray = AuditLogsAPI.AuditLogListResponsesV4PagePaginationArray;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
  export import Billing = BillingAPI.Billing;
  export import Firewall = FirewallAPI.Firewall;
  export import Invites = InvitesAPI.Invites;
  export import InviteListResponse = InvitesAPI.InviteListResponse;
  export import InviteEditResponse = InvitesAPI.InviteEditResponse;
  export import InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InviteEditParams = InvitesAPI.InviteEditParams;
  export import LoadBalancers = LoadBalancersAPI.LoadBalancers;
  export import LoadBalancingAnalytics = LoadBalancingAnalyticsAPI.LoadBalancingAnalytics;
  export import Organizations = OrganizationsAPI.Organizations;
  export import OrganizationListResponse = OrganizationsAPI.OrganizationListResponse;
  export import OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export import OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationListResponsesV4PagePaginationArray = OrganizationsAPI.OrganizationListResponsesV4PagePaginationArray;
  export import OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionListResponse = SubscriptionsAPI.SubscriptionListResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionEditResponse = SubscriptionsAPI.SubscriptionEditResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import SubscriptionEditParams = SubscriptionsAPI.SubscriptionEditParams;
  export import Tokens = TokensAPI.Tokens;
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
}
