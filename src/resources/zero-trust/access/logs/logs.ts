// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { AccessRequests } from './access-requests';
import * as AccessRequestsAPI from './access-requests';

export class Logs extends APIResource {
  accessRequests: AccessRequestsAPI.AccessRequests = new AccessRequestsAPI.AccessRequests(this._client);
}

export namespace Logs {
  export import AccessRequests = AccessRequestsAPI.AccessRequests;
  export import AccessRequestListResponse = AccessRequestsAPI.AccessRequestListResponse;
  export import AccessRequestListParams = AccessRequestsAPI.AccessRequestListParams;
}
