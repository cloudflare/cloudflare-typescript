// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuditLogsAPI from './audit-logs';
import { AuditLogs } from './audit-logs';
import * as InvitesAPI from './invites';
import { Invites } from './invites';
import * as OrganizationsAPI from './organizations';
import { Organizations } from './organizations';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions } from './subscriptions';
import * as BillingAPI from './billing/billing';
import { Billing } from './billing/billing';
import * as TokensAPI from './tokens/tokens';
import { Tokens } from './tokens/tokens';

export class User extends APIResource {
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  billing: BillingAPI.Billing = new BillingAPI.Billing(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  organizations: OrganizationsAPI.Organizations = new OrganizationsAPI.Organizations(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

User.AuditLogs = AuditLogs;
User.Billing = Billing;
User.Invites = Invites;
User.Organizations = Organizations;
User.Subscriptions = Subscriptions;
User.Tokens = Tokens;

export declare namespace User {
  export { AuditLogs as AuditLogs };

  export { Billing as Billing };

  export { Invites as Invites };

  export { Organizations as Organizations };

  export { Subscriptions as Subscriptions };

  export { Tokens as Tokens };
}
