// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MembersAPI from './members';
import { Members } from './members';
import * as RolesAPI from './roles';
import { Roles } from './roles';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions } from './subscriptions';
import * as LogsAPI from './logs/logs';
import { Logs } from './logs/logs';
import * as TokensAPI from './tokens/tokens';
import { Tokens } from './tokens/tokens';

export class Accounts extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Accounts.Members = Members;
Accounts.Roles = Roles;
Accounts.Subscriptions = Subscriptions;
Accounts.Tokens = Tokens;
Accounts.Logs = Logs;

export declare namespace Accounts {
  export { Members as Members };

  export { Roles as Roles };

  export { Subscriptions as Subscriptions };

  export { Tokens as Tokens };

  export { Logs as Logs };
}
