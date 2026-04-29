// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembersAPI from './members';
import { BaseMembers, Members } from './members';
import * as RolesAPI from './roles';
import { BaseRoles, Roles } from './roles';
import * as SubscriptionsAPI from './subscriptions';
import { BaseSubscriptions, Subscriptions } from './subscriptions';
import * as LogsAPI from './logs/logs';
import { BaseLogs, Logs } from './logs/logs';
import * as TokensAPI from './tokens/tokens';
import { BaseTokens, Tokens } from './tokens/tokens';

export class BaseAccounts extends APIResource {
  static override readonly _key: readonly ['accounts'] = Object.freeze(['accounts'] as const);
}
export class Accounts extends BaseAccounts {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Accounts.Members = Members;
Accounts.BaseMembers = BaseMembers;
Accounts.Roles = Roles;
Accounts.BaseRoles = BaseRoles;
Accounts.Subscriptions = Subscriptions;
Accounts.BaseSubscriptions = BaseSubscriptions;
Accounts.Tokens = Tokens;
Accounts.BaseTokens = BaseTokens;
Accounts.Logs = Logs;
Accounts.BaseLogs = BaseLogs;

export declare namespace Accounts {
  export { Members as Members, BaseMembers as BaseMembers };

  export { Roles as Roles, BaseRoles as BaseRoles };

  export { Subscriptions as Subscriptions, BaseSubscriptions as BaseSubscriptions };

  export { Tokens as Tokens, BaseTokens as BaseTokens };

  export { Logs as Logs, BaseLogs as BaseLogs };
}
