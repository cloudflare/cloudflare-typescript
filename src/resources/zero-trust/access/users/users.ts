// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActiveSessionsAPI from './active-sessions';
import { ActiveSessions, BaseActiveSessions } from './active-sessions';
import * as FailedLoginsAPI from './failed-logins';
import { BaseFailedLogins, FailedLogins } from './failed-logins';
import * as LastSeenIdentityAPI from './last-seen-identity';
import { BaseLastSeenIdentity, LastSeenIdentity } from './last-seen-identity';

export class BaseUsers extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'users'] = Object.freeze([
    'zeroTrust',
    'access',
    'users',
  ] as const);
}
export class Users extends BaseUsers {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(
    this._client,
  );
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);
}

Users.ActiveSessions = ActiveSessions;
Users.BaseActiveSessions = BaseActiveSessions;
Users.LastSeenIdentity = LastSeenIdentity;
Users.BaseLastSeenIdentity = BaseLastSeenIdentity;
Users.FailedLogins = FailedLogins;
Users.BaseFailedLogins = BaseFailedLogins;

export declare namespace Users {
  export { ActiveSessions as ActiveSessions, BaseActiveSessions as BaseActiveSessions };

  export { LastSeenIdentity as LastSeenIdentity, BaseLastSeenIdentity as BaseLastSeenIdentity };

  export { FailedLogins as FailedLogins, BaseFailedLogins as BaseFailedLogins };
}
