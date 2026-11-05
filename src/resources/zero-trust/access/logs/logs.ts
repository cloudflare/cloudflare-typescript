// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccessRequestsAPI from './access-requests';
import {
  AccessRequestListParams,
  AccessRequestListResponse,
  AccessRequests,
  BaseAccessRequests,
} from './access-requests';
import * as JitRequestsAPI from './jit-requests';
import {
  BaseJitRequests,
  JitRequestGetParams,
  JitRequestGetResponse,
  JitRequestListParams,
  JitRequestListResponse,
  JitRequestListResponsesV4PagePaginationArray,
  JitRequests,
} from './jit-requests';
import * as SCIMAPI from './scim/scim';
import { AccessRequest, BaseSCIM, SCIM } from './scim/scim';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'logs'] = Object.freeze([
    'zeroTrust',
    'access',
    'logs',
  ] as const);
}
export class Logs extends BaseLogs {
  accessRequests: AccessRequestsAPI.AccessRequests = new AccessRequestsAPI.AccessRequests(this._client);
  jitRequests: JitRequestsAPI.JitRequests = new JitRequestsAPI.JitRequests(this._client);
  scim: SCIMAPI.SCIM = new SCIMAPI.SCIM(this._client);
}

Logs.AccessRequests = AccessRequests;
Logs.BaseAccessRequests = BaseAccessRequests;
Logs.JitRequests = JitRequests;
Logs.BaseJitRequests = BaseJitRequests;
Logs.SCIM = SCIM;
Logs.BaseSCIM = BaseSCIM;

export declare namespace Logs {
  export {
    AccessRequests as AccessRequests,
    BaseAccessRequests as BaseAccessRequests,
    type AccessRequestListResponse as AccessRequestListResponse,
    type AccessRequestListParams as AccessRequestListParams,
  };

  export {
    JitRequests as JitRequests,
    BaseJitRequests as BaseJitRequests,
    type JitRequestListResponse as JitRequestListResponse,
    type JitRequestGetResponse as JitRequestGetResponse,
    type JitRequestListResponsesV4PagePaginationArray as JitRequestListResponsesV4PagePaginationArray,
    type JitRequestListParams as JitRequestListParams,
    type JitRequestGetParams as JitRequestGetParams,
  };

  export { SCIM as SCIM, BaseSCIM as BaseSCIM, type AccessRequest as AccessRequest };
}
