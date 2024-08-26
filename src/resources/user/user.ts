// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { AuditLogs } from './audit-logs';
import { Billing } from './billing/billing';
import { Invites } from './invites';
import { Organizations } from './organizations';
import { Subscriptions } from './subscriptions';
import { Tokens } from './tokens/tokens';
import * as UserAPI from './user';
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
    return (this._client.patch('/user', { body, ...options }) as Core.APIPromise<{ result: UserEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * User Details
   */
  get(options?: Core.RequestOptions): Core.APIPromise<UserGetResponse> {
    return (this._client.get('/user', options) as Core.APIPromise<{ result: UserGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type UserEditResponse = unknown

export type UserGetResponse = unknown

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
}
