// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccessRequestsAPI from './access-requests';
import { AccessRequests, BaseAccessRequests } from './access-requests';
import * as SCIMAPI from './scim/scim';
import { BaseSCIM, SCIM } from './scim/scim';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'logs'] = Object.freeze([
    'zeroTrust',
    'access',
    'logs',
  ] as const);
}
export class Logs extends BaseLogs {
  accessRequests: AccessRequestsAPI.AccessRequests = new AccessRequestsAPI.AccessRequests(this._client);
  scim: SCIMAPI.SCIM = new SCIMAPI.SCIM(this._client);
}

Logs.AccessRequests = AccessRequests;
Logs.BaseAccessRequests = BaseAccessRequests;
Logs.SCIM = SCIM;
Logs.BaseSCIM = BaseSCIM;

export declare namespace Logs {
  export { AccessRequests as AccessRequests, BaseAccessRequests as BaseAccessRequests };

  export { SCIM as SCIM, BaseSCIM as BaseSCIM };
}
