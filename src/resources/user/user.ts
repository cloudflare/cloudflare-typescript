// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuditLogsAPI from './audit-logs';
import { AuditLogs, BaseAuditLogs } from './audit-logs';
import * as InvitesAPI from './invites';
import { BaseInvites, Invites } from './invites';
import * as OrganizationsAPI from './organizations';
import { BaseOrganizations, Organizations } from './organizations';
import * as SubscriptionsAPI from './subscriptions';
import { BaseSubscriptions, Subscriptions } from './subscriptions';
import * as BillingAPI from './billing/billing';
import { BaseBilling, Billing } from './billing/billing';
import * as TokensAPI from './tokens/tokens';
import { BaseTokens, Tokens } from './tokens/tokens';

export class BaseUser extends APIResource {
  static override readonly _key: readonly ['user'] = Object.freeze(['user'] as const);
}
export class User extends BaseUser {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

User.AuditLogs = AuditLogs;
User.BaseAuditLogs = BaseAuditLogs;
User.Billing = Billing;
User.BaseBilling = BaseBilling;
User.Invites = Invites;
User.BaseInvites = BaseInvites;
User.Organizations = Organizations;
User.BaseOrganizations = BaseOrganizations;
User.Subscriptions = Subscriptions;
User.BaseSubscriptions = BaseSubscriptions;
User.Tokens = Tokens;
User.BaseTokens = BaseTokens;

export declare namespace User {
  export { AuditLogs as AuditLogs, BaseAuditLogs as BaseAuditLogs };

  export { Billing as Billing, BaseBilling as BaseBilling };

  export { Invites as Invites, BaseInvites as BaseInvites };

  export { Organizations as Organizations, BaseOrganizations as BaseOrganizations };

  export { Subscriptions as Subscriptions, BaseSubscriptions as BaseSubscriptions };

  export { Tokens as Tokens, BaseTokens as BaseTokens };
}
