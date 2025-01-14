// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as AccessRequestsAPI from './access-requests';
import { AccessRequestListParams, AccessRequestListResponse, AccessRequests } from './access-requests';

export class Logs extends APIResource {
  accessRequests: AccessRequestsAPI.AccessRequests = new AccessRequestsAPI.AccessRequests(this._client);
}

export declare namespace Logs {
  export {
    type AccessRequests as AccessRequests,
    type AccessRequestListResponse as AccessRequestListResponse,
    type AccessRequestListParams as AccessRequestListParams,
  };
}
