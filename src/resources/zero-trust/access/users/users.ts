// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ActiveSessionsAPI from './active-sessions';
import { ActiveSessions } from './active-sessions';
import * as FailedLoginsAPI from './failed-logins';
import { FailedLogins } from './failed-logins';
import * as LastSeenIdentityAPI from './last-seen-identity';
import { LastSeenIdentity } from './last-seen-identity';

export class Users extends APIResource {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(
    this._client,
  );
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);
}

Users.ActiveSessions = ActiveSessions;
Users.LastSeenIdentity = LastSeenIdentity;
Users.FailedLogins = FailedLogins;

export declare namespace Users {
  export { ActiveSessions as ActiveSessions };

  export { LastSeenIdentity as LastSeenIdentity };

  export { FailedLogins as FailedLogins };
}
