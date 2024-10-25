// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuditLogsAPI from './audit-logs';
import * as InvitesAPI from './invites';
import * as OrganizationsAPI from './organizations';
import * as SubscriptionsAPI from './subscriptions';
import * as BillingAPI from './billing/billing';
import * as TokensAPI from './tokens/tokens';

export class User extends APIResource {
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

export type UserEditResponse = unknown;

export type UserGetResponse = unknown;

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
  export import AuditLogs = AuditLogsAPI.AuditLogs;
  export type AuditLogListParams = AuditLogsAPI.AuditLogListParams;
  export import Billing = BillingAPI.Billing;
  export import Invites = InvitesAPI.Invites;
  export type Invite = InvitesAPI.Invite;
  export type InviteEditResponse = InvitesAPI.InviteEditResponse;
  export type InviteGetResponse = InvitesAPI.InviteGetResponse;
  export import InvitesSinglePage = InvitesAPI.InvitesSinglePage;
  export type InviteEditParams = InvitesAPI.InviteEditParams;
  export import Organizations = OrganizationsAPI.Organizations;
  export type Organization = OrganizationsAPI.Organization;
  export type OrganizationDeleteResponse = OrganizationsAPI.OrganizationDeleteResponse;
  export type OrganizationGetResponse = OrganizationsAPI.OrganizationGetResponse;
  export import OrganizationsV4PagePaginationArray = OrganizationsAPI.OrganizationsV4PagePaginationArray;
  export type OrganizationListParams = OrganizationsAPI.OrganizationListParams;
  export import Subscriptions = SubscriptionsAPI.Subscriptions;
  export type SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export type SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export type SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export type SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import Tokens = TokensAPI.Tokens;
  export type CIDRList = TokensAPI.CIDRList;
  export type Policy = TokensAPI.Policy;
  export type Token = TokensAPI.Token;
  export type TokenCreateResponse = TokensAPI.TokenCreateResponse;
  export type TokenUpdateResponse = TokensAPI.TokenUpdateResponse;
  export type TokenListResponse = TokensAPI.TokenListResponse;
  export type TokenDeleteResponse = TokensAPI.TokenDeleteResponse;
  export type TokenGetResponse = TokensAPI.TokenGetResponse;
  export type TokenVerifyResponse = TokensAPI.TokenVerifyResponse;
  export import TokenListResponsesV4PagePaginationArray = TokensAPI.TokenListResponsesV4PagePaginationArray;
  export type TokenCreateParams = TokensAPI.TokenCreateParams;
  export type TokenUpdateParams = TokensAPI.TokenUpdateParams;
  export type TokenListParams = TokensAPI.TokenListParams;
}
